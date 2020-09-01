MAX_STORY_PARAGRAPH = 3
LINE_SKIP_TIMEOUT = false;
var bgm_timeout;

window.addEventListener("click", function() {
    $(".loading").html("開始遊戲");
    $(".loading").addClass("start-game");
    game.btn_handler("#btn-2", {scene: 1001}, game);
    game.start_game_handler();
}, false); 

class StoryGame {
	constructor(game, scene){
		this.screen = $("#game");
		this.s = scene;
		this.self = this;
		this.curr_scene;
		this.story_section = 0;
		this.prev_bg;
		this.width;
		this.height;
		this.bgm;
	}

	start(){
		if (this.s == null){
			console.log("[error] Scene is not set.");
			return;
		}
		// this.preload_all_img();
		this.prepare_screen();

		// GET params
		var url = new URL(window.location.href);
		var scene = url.searchParams.get("scene");
		this.render((scene == undefined) ? (window.location.hash.length == 0) ? 1000 : window.location.hash.substring(1, window.location.hash.length) : scene);
		this.start_game_handler();
		var audio_bg = $("<audio>", {src: bg_audio, id: "bg", volume: 0.2, loop: "loop"});
		var audio_line_read = $("<audio>", {src: line_read, id: "line-read", volume: 1,});
		var audio_line_call = $("<audio>", {src: line_call, id: "line-call", volume: 0.8,});
		var audio_line_call_end = $("<audio>", {src: line_call_end, id: "line-call-end", volume: 0.8,});
		$("body").prepend(audio_bg);
		$("body").prepend(audio_line_read);
		$("body").prepend(audio_line_call);
		$("body").prepend(audio_line_call_end);
		this.bgm = audio_bg;
	}

	preload_all_img(){
	}

	loading(flag) {
		if (flag){
			$("#game").addClass("hidden");
			$("#loading").html("Loading");
		}
		else {
			$("#game").removeClass("hidden");
			$("#loading").html("");
		}
	}

	render(n_s) {
		$(document).click();  // for audio to start.
		console.log("[current scene:", n_s, "]")
		clearTimeout(bgm_timeout);
		var s = this.s[n_s];
		this.curr_scene = n_s;
		if (s == undefined) {
			console.log("[error] Scene is undefined.")
			return;
		}
		/* clear up */
		$(this.screen).html("");

		/* prepare background */
		if (s.page_turn && this.story_section == 0) {
			this.screen.append($("<div>", {id: "page-turner"}));
			page_turn(this.prev_bg, this.width, this.height);
		}
		if (s.background_sequenced_random){
			var tmp_bg = [];
			// var new_bg = [];
			for (let index = 0; index < s.background_sequenced_random; index ++){
				var section = [];
				for (let each = index; each < s.background.length; each+=s.background_sequenced_random){
					section.push(s.background[each]);
				}
				tmp_bg.push(shuffle(section));
			}
			for (let each in tmp_bg) {
				for (let j in tmp_bg[each]){
					// new_bg[parseInt(each)+parseInt(s.background_sequenced_random) * j] = tmp_bg[each][j];
					s.background[parseInt(each)+parseInt(s.background_sequenced_random) * j] = tmp_bg[each][j];
				}
			}
		}
		if (s.background != undefined){
			let background = s.background
			this.render_background(background);
		}
		else{
			this.screen.css("background", "");
		}

		/* story */
		if (s.story != undefined && s.story.length > 0){
			if (s.auto_render != undefined){

			}
			else if (s.story_delay != undefined) {
				self = this
				setTimeout(function(){
					self.render_story(s);
				}, s.story_delay * 1000)
			}
			else {
				this.render_story(s);
			}
		}
		else if (s.line != undefined && s.line.length > 0) {
			if (s.auto_render != undefined){
				this.render_line(s, {
					timeout: s.auto_render.timeout,
					args: s.auto_render.scene,
					});
			}
			else {
				this.render_line(s);
			}
		}
		if (s.image_story != undefined && s.image_story.length > 0){
			if (s.auto_render != undefined){
				this.render_image_story(s, {
					timeout: s.auto_render.timeout,
					args: s.auto_render.scene,
					});
			}
			else {
				this.render_image_story(s);
			}
		}
		if (s.static_image != undefined) {
			this.render_static_image(s);
		}
		if(s.img_btn != undefined){
			this.render_image_btn(s);
		}
		if (s.audio != undefined) {
			this.render_audio(s);
		}
		if (s.bgm != undefined) {
			self = this;
			setTimeout(function(){
				self.render_bgm(s);
			}, 500);
		}
		this.start_game_handler();
	}

	start_game_handler() {
		$(".start-game").on("click", function(){
			$("audio#bg")[0].play();
		});
	}

	prepare_screen() {
		$(this.screen).css("position", "relative");
		$(this.screen).css("top", "50%");
		$(this.screen).css("-webkit-transform", "translateY(-50%)");
		$(this.screen).css("-ms-transform", "translateY(-50%);");
		$(this.screen).css("transform", "translateY(-50%);");
		$(this.screen).css("width", this.width+"px");
		$(this.screen).css("height", this.height+"px");
		$(this.screen).css("margin-left", "calc((100% - "+this.width+"px )/2)");
		$(this.screen).css("padding-left", "38px");
		$(this.screen).css("padding-right", "38px");
	}

	btn_handler(btn, actions, self, noclick=false) {
		var scene = this.s;
		$(btn).on("click", function(){
			if (window.location !== window.parent.location){
				$(btn).unbind("click");
				if ($(btn).attr("href") != "#"){
					window.top.location = $(btn).attr("href");
				}
			}
			var bgm = $("audio#bg")[0];
			if (bgm.paused && !$(this).hasClass("loading")){
				bgm.play();
			}
			if (actions.scene != undefined) {
				self.render(actions.scene);
			}
		});
	}

	render_background(bg) {
                if (typeof bg == "string"){
                    $(this.screen).css("background", bg);
		    return;
                }
		if (bg.length == undefined || bg.length == 1) {
			if (bg.length == 1){
				bg = bg[0];
			}
			if (bg.transition != undefined){
				this.screen.css({"transition": "background "+bg.transition+"s linear"});
			}
			else {
				this.screen.css({"transition": ""});
			}
			if (bg.url == undefined){
				$(this.screen).css("background", "url("+bg+")");
			}
			else{
				$(this.screen).css("background", "url("+bg.url+")");
			}
			$(this.screen).css("background-size", (this.width+2)+"px "+(this.height + 2)+"px");
			if (bg.left != undefined) {
				$(this.screen).css("background-position-x", bg.left+"px");
			}
			if (bg.right != undefined) {
				$(this.screen).css("background-position-x", "-"+bg.right+"px");
			}
			if (bg.up != undefined) {
				$(this.screen).css("background-position-y", bg.up+"px");
			}
			if (bg.down != undefined) {
				$(this.screen).css("background-position-y", "-"+bg.down+"px");
			}
			this.prev_bg = bg;
		}
		else if (bg.length > 1) {
			this.background_shuffle(bg, 0, this.curr_scene);
		}
	}

	background_shuffle(bg, index, curr_s, end) {
		var background_shuffle = this.background_shuffle;
		var self = this;
		this.render_background(bg[index])
		let timeout = (bg[index].timeout != undefined) ? bg[index].timeout * 1000 : Math.random()*10000%3000;
		if (end != true){
			setTimeout(function(){
				index = (index + 1) % bg.length;
				if (curr_s == self.curr_scene){
						self.background_shuffle(bg, index, self.curr_scene, bg[index].end);
				}
			}, timeout)
		}
	}

	render_story(s) {
		var story = $("<div>", {class: "story-wrapper"});
		if (s.story_color != undefined){
			story.css({"color": s.story_color});
		}
		else if (s.text_color != undefined) {
			story.css({"color": s.text_color});
		}
		if (s.story_date != undefined){
			story.append($("<p>", {class: "story story-date", text: s.story_date}));
		}
		let start = this.story_section * MAX_STORY_PARAGRAPH;
		let end = this.story_section * MAX_STORY_PARAGRAPH + (MAX_STORY_PARAGRAPH);
		let story_section;
		if (end >= s.story.length){
			story_section = s.story.slice(start);
		}
		else {
			story_section = s.story.slice(start, end);
		}
		$.each(story_section, function(i, j){
			story.append($("<p>", {class: "story story-content", text: j}));
		})
		$(this.screen).append(story);
		/* buttons */
		if (end >= s.story.length){
			this.story_section = 0;
			if (s.image_story == undefined){
				this.render_buttons(s);
			}
		}
		else {
			this.story_section += 1;
			if (s.image_story == undefined){
				this.render_buttons({
					text_color: s.text_color,
					btn_left:{text: "繼續", scene: this.curr_scene}
				})
			}
		}

	}

	render_line(s, callback) {
		var line = $("<div>", {class: "line-wrapper"});
		var timeout_count = 0;
		var row;
		var self = this;
		if (s.line_header != undefined){
			var line_header = $("<div>", {text: s.line_header, class: "line-header"})
			line.css("max-height", "200px");
		}
		$(this.screen).append(line_header);
		$(this.screen).append(line);
		$.each(s.line, function(i, j){
			if (j.timeout == undefined) {
				j.timeout = 0;
			}
			timeout_count += j.timeout;
			setTimeout(function(){
				if (j.type == "read") {
					/* play audio */
					$("audio#line-read")[0].currentTime = 0;
					$("audio#line-read")[0].play();
					row = $("<p>", {class: "line line-right text-right"});
					row.append($("<span>", {class: "line-read", text: "已讀"}));
					if (j.message != undefined){
						row.append($("<span>", {class: "line-msg", text: j.message}));
					}
					else if (j.img != undefined) {
						if (j.img.length == 1){
							j.img = [j.img];
						}
						if (Array.isArray(j.img)){
							for (let k of j.img){
								row.append($("<img>", {class: "line-msg", src: k}));
							}
						}
						else {
							row.append($("<img>", {class: "line-msg", src: j.img}));
						}
					}
					line.append(row);
				}
				else if (j.type == "read-above") {
					/* play audio */
					$("audio#line-read")[0].currentTime = 0;
					$("audio#line-read")[0].play();
					$.each(line.find("p.line-right"), function(k, v){
						if ($(v).find("span.line-read").length == 0){
							$(v).prepend($("<span>", {class: "line-read", text: "已讀"}));
						}
					});
				}
				else if (j.type == "sent") {
					row = $("<p>", {class: "line line-right text-right"});
					if (j.message != undefined){
						row.append($("<span>", {class: "line-msg", text: j.message}));
					}
					else if (j.img != undefined) {
						if (j.img.length == 1){
							j.img = [j.img];
						}
						if (Array.isArray(j.img)){
							for (let k of j.img){
								row.append($("<img>", {class: "line-msg", src: k}));
							}
						}
						else {
							row.append($("<img>", {class: "line-msg", src: j.img}));
						}
					}
					line.append(row);
				}
				else if (j.type == "received") {
					row = $("<p>", {class: "line line-left text-left"});
					if (j.message != undefined){
						row.append($("<span>", {class: "line-msg", text: j.message}));
					}
					else if (j.img != undefined) {
						if (j.img.length == 1){
							j.img = [j.img];
						}
						if (Array.isArray(j.img)){
							for (let k of j.img){
								row.append($("<img>", {class: "line-msg", src: k}));
							}
						}
						else {
							row.append($("<img>", {class: "line-msg", src: j.img}));
						}
					}
					line.append(row);
				}
				else if (j.type == "outgoing dialing") {
					$("audio#line-call")[0].currentTime = 0;
					$("audio#line-call")[0].play();
					setTimeout(function(){
						$("audio#line-call")[0].currentTime = 0;
						$("audio#line-call")[0].play();
					}, 3000)
					row = $("<p>", {class: "line line-right text-right"});
					row.append($("<span>", {class: "line-msg line-call", text: "撥打中..."}));
					line.append(row);
				}
				else if (j.type == "outgoing cancelled") {
					row = $("<p>", {class: "line line-right text-right"});
					row.append($("<span>", {class: "line-msg line-call", text: "取消通話"}));
					line.append(row);
					$("audio#line-call-end")[0].currentTime = 0;
					$("audio#line-call-end")[0].play();
				}
				else if (j.type == "incoming dialing") {
					row = $("<p>", {class: "line line-left text-left"});
					row.append($("<span>", {class: "line-msg line-call", text: "撥打中..."}));
					line.append(row);
				}
				else if (j.type == "incoming cancelled") {
					row = $("<p>", {class: "line line-left text-left"});
					row.append($("<span>", {class: "line-msg line-call", text: "取消通話"}));
					line.append(row);
					$("audio#line-call-end")[0].currentTime = 0;
					$("audio#line-call-end")[0].play();
				}
				if (line[0].scrollHeight < 240 && line.height() > 170) {
					line.css("top", parseFloat(line.css("top"))-row.height()+"px");
				}
				if (line[0].scrollHeight > 240){
					line.css("top", "10px");
					line.animate({scrollTop: line[0].scrollHeight}, 0); ////
					// line.css({scrollTop: line[0].scrollHeight}, 500);
				}
				if (i == s.line.length - 1) {
					if (callback != undefined) {
						if (callback.timeout != undefined) {
							setTimeout(self.render(callback.args), callback.timeout*1000);
						}
						else if (callback.args != undefined) {
							self.render(callback.args);
						}
						else {
							callback();
						}
					}
					else {
						/* buttons */
						if (s.image_story == undefined){
							self.render_buttons(s);
						}
					}
				}
			}, (LINE_SKIP_TIMEOUT) ? 0 : timeout_count*1000);
		});
	}

	render_image_story(s, callback) {
		var image_story = $("<div>", {class: "image-story-wrapper"});
		var timeout_count = 0;
		var row;
		var self = this;
		$(this.screen).append(image_story);
		if (s.image_story.length > 0){
			let i = 0;
			while (i < s.image_story.length) {
				let j = s.image_story[i];
				let curr_i = i;
				if (j.timeout == undefined) {
					j.timeout = 0;
				}
				timeout_count += j.timeout;
				setTimeout(function(){
					self.render_background(j);

					if (curr_i == s.image_story.length - 1) {
						if (callback != undefined) {
							if (callback.timeout != undefined) {
								setTimeout(self.render(callback.args), callback.timeout);
							}
							else if (callback.args != undefined) {
								self.render(callback.args);
							}
							else {
								callback();
							}
						}
						else {
							/* buttons */
							if (j.timeout != undefined) {
								setTimeout(function(){
									self.render_buttons(s)
								}, (j.timeout + 1) * 1000);
							}
							else {
								self.render_buttons(s);
							}
						}
					}
				}, timeout_count*1000);
				i += 1;
			}
		}
		$.each(s.image_story, function(i, j){
		});
	}

	render_buttons(s) {
		if (s.btn_left != undefined || s.btn_middle != undefined || s.btn_right != undefined) {
			var btns = $("<div>", {class: "btn-wrapper"});
			var href = "#";
			if (s.btn_left != undefined){
				if(s.btn_left.href != undefined){
					href = s.btn_left.href;
				}
				else{
					href = "#";
				}
				$("<a>", {
					id: "btn-1", 
					href: href,
					class: "btn btn-default",
					text: s.btn_left.text,
				}).appendTo(btns);
			}
			if (s.btn_middle != undefined){
				if(s.btn_middle.href!= undefined){
					href = s.btn_middle.href;
				}
				else{
					href = "#";
				}
				$("<a>", {
					id: "btn-2", 
					href: href,
					class: "btn btn-default",
					text: s.btn_middle.text,
				}).appendTo(btns);
			}
			if (s.btn_right != undefined){
				if(s.btn_right.href != undefined){
					href = s.btn_right.href;
				}
				else{
					href = "#";
				}
				$("<a>", {
					id: "btn-3", 
					href: href,
					class: "btn btn-default",
					text: s.btn_right.text,
				}).appendTo(btns);
			}
			if (s.btn_delay != undefined){
				self = this;
				setTimeout(function(){
					$(self.screen).append(btns);
					self.btn_handler("#btn-1", s.btn_left, self.self);
					self.btn_handler("#btn-2", s.btn_middle, self.self);
					self.btn_handler("#btn-3", s.btn_right, self.self);
				}, s.btn_delay * 1000);
			}
			else{
				$(this.screen).append(btns);
				this.btn_handler("#btn-1", s.btn_left, this.self);
				this.btn_handler("#btn-2", s.btn_middle, this.self);
				this.btn_handler("#btn-3", s.btn_right, this.self);
			}

			if (s.btn_left != undefined && s.btn_left.class != undefined){
				$("#btn-1").addClass(s.btn_left.class);
			}
			if (s.btn_middle != undefined && s.btn_middle.class != undefined){
				$("#btn-2").addClass(s.btn_middle.class);
			}
			if (s.btn_right != undefined && s.btn_right.class != undefined){
				$("#btn-3").addClass(s.btn_right.class);
			}
			if (s.btns_color != undefined) {
				btns.css({
					"color": s.btns_color,
					"border-color": s.text_color,
				});
			}
			else if (s.text_color != undefined) {
				btns.find(".btn").css({
					"color": s.text_color,
					"border-color": s.text_color,
				});
			}
		}
		else if (s.btn_upper != undefined || s.btn_center != undefined || s.btns_lower != undefined) {
			var btns = $("<div>", {class: "btn-wrapper"});
			if (s.btn_upper != undefined){
				$("<a>", {
					id: "btn-4", 
					href: "#",
					class: "btn btn-default",
					text: s.btn_upper.text,
				}).appendTo(btns);
			}
			if (s.btn_center != undefined){
				$("<a>", {
					id: "btn-5", 
					href: "#",
					class: "btn btn-default",
					text: s.btn_center.text,
				}).appendTo(btns);
			}
			if (s.btn_lower != undefined){
				$("<a>", {
					id: "btn-6", 
					href: "#",
					class: "btn btn-default",
					text: s.btn_lower.text,
				}).appendTo(btns);
			}
			$(this.screen).append(btns);
			this.btn_handler("#btn-4", s.btn_upper, this.self);
			this.btn_handler("#btn-5", s.btn_center, this.self);
			this.btn_handler("#btn-6", s.btn_lower, this.self);
			if (s.btn_upper != undefined && s.btn_upper.class != undefined){
				$("#btn-4").addClass(s.btn_upper.class);
			}
			if (s.btn_center != undefined && s.btn_center.class != undefined){
				$("#btn-5").addClass(s.btn_center.class);
			}
			if (s.btn_lower != undefined && s.btn_lower.class != undefined){
				$("#btn-6").addClass(s.btn_lower.class);
			}

			if (s.btns_color != undefined) {
				btns.css({
					"color": s.btns_color,
					"border-color": s.text_color,
				});
			}
			else if (s.text_color != undefined) {
				btns.find(".btn").css({
					"color": s.text_color,
					"border-color": s.text_color,
				});
			}
		}
	}

	render_image_btn(s) {
		var btns = $("<div>", {class: "btn-wrapper"});
		var self = this;
		$.each(s.img_btn, function(i, j){
			let k = $("<img>", {
				src: j[0], 
				class: "img-btn"
			});
			k.on("click", function(){
				self.render(j[1])
			})
			btns.append(k);
		})
		self.screen.append(btns);

	}
	
	render_audio(s){
	}
	
	render_static_image(s){
		self = this;
		$.each(s.static_image, function(){
			if (this.url != undefined){
				var img = $("<img>", {src: this.url});
				self.screen.append($("<div>", {class: "static-image"}).append(img));
				if (this.left != undefined) {
					img.css("left", this.left + "px");
				}
				if (this.up != undefined) {
					img.css("top", this.up + "px");
				}
			}
			else{
				self.screen.append($("<div>", {class: "static-image"}).append("<img>", {src: this}));
			}
		});
	}

	render_bgm(s) {
		console.log("[bgm playing]")
		self = this;
		$.each(s.bgm, function(){
			var audio = $("audio[src='"+this.url+"']");
			console.log(audio)
 			if (audio.length == 0){
 				var audio = $("<audio>", {src: this.url, class: "audio", volume: 0.8});
 			}
			if (s.loop != undefined && s.loop == true){
				audio.attr("loop", "loop");
			}
			$("body").prepend(audio);

			if (this.timeout != undefined) {
				self.bgm_recursive(audio, this.timeout);
			}
			else{
				audio[0].currentTime = 0;
				audio[0].play();
			}
		});
	}

	bgm_recursive(audio, timeout) {
		self = this;
		audio[0].play();
		bgm_timeout = setTimeout(function(){
			self.bgm_recursive(audio, timeout);
		}, timeout * 1000);
	}
}

function page_turn(prev_bg, width, height) {
	var turner = $("#page-turner");
	// $(".story-wrapper").css("position", "absolute");
	turner.append($("<div>", {id: "page-1", style: "background: white;"}));
	turner.append($("<div>", {id: "page-2 even", style: "background: white; display: none;"}));
	turner.css({
	    height: "100%",
	    width: "calc(100% + 76px)",
	    "margin-left": "-38px",
	    "z-index": 1,
	    position: "absolute",
	});
	turner.turn({
		acceleration: true,
		display: 'single',
		pages: 6,
		elevation: 50,
		gradients: !$.isTouch,
		duration: 3000,
	});
	turner.bind("turned", function(){
		turner.remove();
		// $(".story-wrapper").css("position", "relative");
	});
	setTimeout(function(){
		turner.turn("next");
	}, 50);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

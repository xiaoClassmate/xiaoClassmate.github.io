var bg_audio = "./bgm/ok/bg.mp3"
var line_read = "./bgm/ok/line_read.mp3"
var line_call = "./bgm/ok/line_call.mp3"
var line_call_end = "./bgm/ok/line_call_end.mp3"
var dong = "./bgm/ok/dongdong.mp3"
var amb_siren = "./bgm/ok/ambulance.mp3"
var write = "./bgm/ok/write.mp3"
var slap_table = "./bgm/ok/slaptable.mp3"
var slap = "./bgm/ok/slap.mp3"

var cover = [{url: "imgs/index.jpg"}];
var cover1 = [{url: "imgs/A1.jpg"}];
var bg_bathroom = [{url: "./img/2/01.png"}, {url: "./img/2/02.png", left: -1}];
var bg_hospital_outside = [{url: "./img/3/01.png", timeout: 2}, {url: "./img/3/02.png", timeout: 2}, {url: "./img/3/03.png", timeout: 2}, {url: "./img/3/04.png", timeout: 4}];
var bg_hospital_in_on_lower = [{url: "./img/4/put_on/lower-01.png", timeout: 2}, {url: "./img/4/put_on/lower-02.png", timeout: 2}];
var bg_hospital_in_on_raise = [{url: "./img/4/put_on/raise-01.png", timeout: 2}, {url: "./img/4/put_on/raise-02.png", left: 1, timeout: 2}];
var bg_hospital_in_on_called = [{url: "./img/4/put_on/called-01.png", timeout: 2}, {url: "./img/4/put_on/called-02.png", timeout: 2}];
var bg_hospital_in_off_lower = [{url: "./img/4/put_off/lower-01.png", timeout: 2}, {url: "./img/4/put_off/lower-02.png", timeout: 2}];
var bg_hospital_in_off_raise = [{url: "./img/4/put_off/raise-01.png", timeout: 2}, {url: "./img/4/put_off/raise-02.png", left: 1, timeout: 2}];
var bg_hospital_in_off_called = [{url: "./img/4/put_off/called-01.png", timeout: 2}, {url: "./img/4/put_off/called-02.png", timeout: 2}];
var bg_hospital_in_doctor = [{url: "./img/5/01.png"}, {url: "./img/5/02.png"}];
var bg_hospital_out_discuss = [{url: "./img/6/01.png"}];
var bg_home_dinner = [{url: "./img/7/dinner/1-1.png"}, {url: "./img/7/dinner/2-1.png", left: 0.65, up: 0.6}, {url: "./img/7/dinner/3-1.png", left: 1, up: 0.2}];
var bg_home_dinner_stopped = [{url: "./img/7/dinner_stopped/01.png"}];
var bg_dad_hit_table = [{url: "./img/7/dad_hit_table/03.png"}];
var bg_dad_hit = [{url: "./img/7/dad_hit/06.png", timeout: 2}, {url: "./img/7/dad_hit/07.png", up: -0.5, timeout: 3}, {url: "./img/7/dad_hit/08.png", left: 0, timeout: 3, end: true}];
var bg_dinner_texting = [{url: "./img/8/01.png"}, {url: "./img/8/02.png"}];
var bg_school_teacher2 = [{url: "./img/9/teacher-2.png"}];
var bg_school_teacher = [{url: "./img/9/teacher.png"}];
var bg_go_to_school = [{url: "./img/9/gs1.png", timeout: 1}, {url: "./img/9/gs2.png", timeout: 1}, {url: "./img/9/gs3.png", timeout: 1}];
var bg_school_boy_side = [{url: "./img/9/boy-side.png", timeoiut: 2}, {url: "./img/9/boy-side.png", end: true}];
var bg_school_boy_mom = [{url: "./img/9/boy-mom.png"}];
var bg_school_girl = [{url: "./img/9/girl.png"}];
var bg_school_girl_side = [{url: "./img/9/girl-side.png", timeoute: 2}, {url: "./img/9/girl-side.png", end: true}];
var bg_school_girl_dad = [{url: "./img/9/girl-dad.png"}];
var bg_school_girl_angry = [{url: "./img/9/girl-angry.png"}];
var bg_clinic_raise = [{url: "./img/10/12.png", timeout: 2.5}, {url: "./img/10/13.png", up: -1, left: 0.5, timeout: 2.5}, {url: "./img/10/14.png", left: 1.5, up: 0.5, timeout: 2.5}, {url: "./img/10/15.png", left: 1.5, end: true}];
var bg_clinic = [{url: "./img/10/14.png", up: -1, timeout: 2.5}, {url: "./img/10/15.png", up: -1.5}];
var bg_get_med = [{url: "./img/12/get-med.png"}];
var bg_os = [{url: "./img/12/os.png"}]
var bg_get_med_dispose = [{url: "./img/12/get-med.png", timeout: 2}, {url: "./img/16/dispose.png", end: true}];
var bg_preg_walk_on_street = [{url: "./img/16/1.png", timeout: 2}, {url: "./img/16/2.png", timeout: 2}, {url: "./img/16/3.png", timeout: 2}, {url: "./img/16/4.png", timeout: 2}, {url: "./img/16/5.png", timeout: 2}, {url: "./img/16/6.png", timeout: 2}, {url: "./img/16/7.png", end: true}];
var bg_before_ask = [{url: "./img/16/7.png"}]
var bg_ask = [{url: "./img/17/ask.png"}]
var bg_angry = [{url: "./img/17/angry.png"}]
var bg_search = [{url: "./img/12/search-0.png", timeout: 1}, {url: "./img/12/search-1.png", timeout: 1}, {url: "./img/12/search-2.png", timeout: 0.3}, {url: "./img/12/search-3.png", timeout: 0.3}, {url: "./img/12/search-4.png", timeout: 0.3, end:true}, ];
var bg_search2 = [{url: "./img/12/search-4.png"}, ];
var bg_take_med = [{url: "./img/13/take-med1.png", timeout: 5}, {url: "./img/13/take-med2.png", timeout: 5, dissolve: 2}, {url: "./img/13/take-med3.png", dissolve: 2, end: true}];
var bg_take_med_1 = [{url: "./img/13/take-med1.png"}];
var bg_take_med_2 = [{url: "./img/13/take-med2.png"}];
var bg_home_chicken_soup = [{url: "./img/15/1.png", timeout: 2}, {url: "./img/15/2.png", timeout: 2}, {url: "./img/15/3.png", end: true}];
var bg_home_chicken_soup_2 = [{url: "./img/15/4.png", timeout: 2}, {url: "./img/15/5.png", timeout: 2}, {url: "./img/15/6.png", end: true}];
var bg_home_chicken_soup_end = [{url: "./img/15/6.png"}];
var bg_bleeding = [{url: "./img/14/1.png"}, {url: "./img/14/2.png"}];
var bg_ambulance_0 = [{url: "./img/18/gohome1.png", timeout: 2}, {url: "./img/18/gohome2.png", timeout: 2}, {url: "./img/18/ach1.png", timeout: 2}, {url: "./img/18/ach2.png", end: true}]
var bg_ambulance = [{url: "./img/18/amb1.png", timeout: 1}, {url: "./img/18/amb2.png", timeout: 1}]
var bg_ending_11 = [{url: "./img/99/1/1-1-bg.png"}];
var bg_ending_12 = [{url: "./img/99/1/1-2-bg.png"}];
var bg_ending_21 = [{url: "./img/99/2/2-1-bg.png"}];
var bg_ending_22 = [{url: "./img/99/2/2-2-bg.png"}];
var bg_ending_31 = [{url: "./img/99/3/3-1-bg.png"}];
var bg_ending_32 = [{url: "./img/99/3/3-2-bg.png"}];
var bg_ending_41 = [{url: "./img/99/4/4-1-bg.png"}];
var bg_ending_42 = [{url: "./img/99/4/4-2-bg.png"}];
var scene = {
	1000:{
		description: "封面",
		background: cover,
		story: [""],
		btn_middle: {
			text: "開始遊戲",
			class: "start-game",
			scene: 1001,
			// text: "loading",
			// class: "loading",
		},

	},
	1001:{
		description: "封面",
		background: cover1,
		story: [
			"這是一個故事情境體驗遊戲，是蕭同學複製的",
			"這雖然只是別人的故事，在遊戲中做的選擇並不影響你真實的人生，但我們希望透過這遊戲讓大家進行思考，如果是我我該怎麼辦？",
			"",
			"並非每個人都能那麼幸孕，讓我們用同理心打造溫暖的社會。故事內容都由真實故事改編，遊戲時間大約15分鐘！",
		],
		btn_left: {
			text: "繼續",
			scene: 1002,
		},
	},
	1002:{
		description: "封面",
		background: cover1,
		story: [
			"這，是一本日記本。",
			"日記本的主人--方芷潔，今年17歲，每天都在努力地讀書，為了考上理想的大學。",
			"然而卻發生......讓生活徹底變了樣，翻開下一頁吧！看看芷潔究竟發生什麼事？",
			"要記得你在日記本中的每個選擇，都會影響到芷潔的人生...",
		],
		btn_left: {
			text: "繼續",
			scene: 2001,
		},
	},
	2001:{
		description: "在廁所",
		background: bg_bathroom,
		story_date: "2018/09/30",
		story: ["我懷孕了？！",
		"這不可能...明明做好保護措施了",
		"我怎麼可能懷孕？",
		"我怎麼可以懷孕？",
		"但是驗孕棒上面的確是兩條線，我該怎麼辦？",
		"要不要先跟卓子曜說啊...他如果知道這件事會有什麼反應？",
		"啊也有可能是驗孕棒不準，還是要再驗一次看看？",],
		btn_left: {
			text: "打電話給男友",
			scene: 2002,
		},
		btn_middle: {
			text: "傳 Line 給男友",
			scene: 2003,
		},
		btn_right: {
			text: "再驗一次",
			scene: 2007,
		},
	},
	2002: {
		description: "在廁所-直接打電話給男友",
		background: bg_bathroom, 
		line: [
		{type: "outgoing dialing", timeout: 1},
		{type: "incoming cancelled", timeout: 5},
		{type: "received", message: "怎麼了？我在補習", timeout: 2},
		{type: "read", message: "我發生一件嚴重的事", timeout: 2},
		{type: "received", message: "怎", timeout: 3},
		{type: "read", message: "我...我好像懷孕了", timeout: 2},
		{type: "received", message: "...", timeout: 3},
		{type: "received", message: "真的假的", timeout: 1},
		{type: "read", message: "我會拿這種事開玩笑嗎", timeout: 3},
		{type: "read", img: "./img/2/05.png", timeout: 3},
		{type: "received", message: "不是拉 我是嚇到了", timeout: 3},
		{type: "received", message: "妳只驗了一次嗎", timeout: 1},
		{type: "read", message: "嗯", timeout: 3},
		{type: "received", message: "妳要不要再驗一次啊", timeout: 4},
		{type: "received", message: "不是說有些不太準嗎", timeout: 2},
		{type: "received", message: "如果再驗一次還是一樣", timeout: 3},
		{type: "received", message: "我明天帶妳去看醫生", timeout: 3},
		{type: "received", message: "不管結果怎樣妳不要想太多", timeout: 2},
		{type: "received", message: "有我在", timeout: 4},
		{type: "read", message: "好😭我再驗一次好了", timeout: 5},
		{type: "received", message: "嗯嗯我先上課", timeout: 4},
		{type: "received", message: "看怎樣再跟我說", timeout: 2},
		],
		btn_left: {
			text: "繼續",
			scene: 2006,
		},
	},
	2003: {
		description: "在廁所-line",
		background: bg_bathroom, 
		line: [
		{type: "sent", message: "欸欸 在嗎?", timeout: 0},
		{type: "sent", message: "發生一件嚴重的事", timeout: 3},
		{type: "sent", message: "我....我好像懷孕了", timeout: 5},
		{type: "sent", message: "我原本月經都很準的", timeout: 8},
		{type: "sent", message: "但這次一直沒有來", timeout: 3},
		{type: "sent", message: "所以買了驗孕棒試試看", timeout: 4},
		{type: "sent", message: "沒想到真的中了", timeout: 3},
		{type: "sent", message: "是兩條線😭", timeout: 2},
		{type: "sent", message: "怎麼辦啦😭", timeout: 2},
		],
		btn_middle: {
			text: "傳送訊息",
			scene: 2004,
		},
		btn_right: {
			text: "撥打電話",
			scene: 2005,
		},
	},
	2004: {
		description: "在廁所-line",
		background: bg_bathroom, 
		line: [
		{type: "sent", message: "欸欸 在嗎?"},
		{type: "sent", message: "發生一件嚴重的事"},
		{type: "sent", message: "我....我好像懷孕了"},
		{type: "sent", message: "我原本月經都很準的"},
		{type: "sent", message: "但這次一直沒有來"},
		{type: "sent", message: "所以買了驗孕棒試試看"},
		{type: "sent", message: "沒想到真的中了"},
		{type: "sent", message: "是兩條線😭"},
		{type: "sent", message: "怎麼辦啦😭"},
		{type: "sent", img: "./img/2/05.png", timeout: 1},
		{type: "sent", message: "你在幹嘛啦 怎麼一直不已讀", timeout:3},
		{type: "read-above", timeout: 3},
		{type: "received", message: "抱歉 我在補習", timeout: 5},
		{type: "received", message: "真的假的", timeout: 5},
		{type: "read", message: "我會拿這種事開玩笑嗎？", timeout: 3},
		{type: "received", message: "不是啦 我是嚇到了", timeout: 4},
		{type: "received", message: "妳只驗了一次嗎", timeout: 4},
		{type: "read", message: "恩", timeout: 3},
		{type: "received", message: "妳要不要再驗一次啊", timeout: 5},
		{type: "received", message: "不是說有些不太準嗎", timeout: 4},
		{type: "received", message: "如果再驗一次還是一樣", timeout: 3},
		{type: "received", message: "我明天帶妳去看醫生", timeout: 3},
		{type: "received", message: "不管結果怎樣妳不要想太多", timeout: 5},
		{type: "received", message: "有我在", timeout: 2},
		{type: "read", message: "好😭我再驗一次好了", timeout: 3},
		{type: "received", message: "嗯嗯我先上課", timeout: 2},
		{type: "received", message: "看怎樣再跟我說", timeout: 3},
		],
		btn_left: {
			text: "繼續",
			scene: 2006,
		},
	},
	2005: {
		description: "在廁所-line",
		background: bg_bathroom, 
		line: [
		{type: "sent", message: "欸欸 在嗎?"},
		{type: "sent", message: "發生一件嚴重的事"},
		{type: "sent", message: "我....我好像懷孕了"},
		{type: "sent", message: "我原本月經都很準的"},
		{type: "sent", message: "但這次一直沒有來"},
		{type: "sent", message: "所以買了驗孕棒試試看"},
		{type: "sent", message: "沒想到真的中了"},
		{type: "sent", message: "是兩條線😭"},
		{type: "sent", message: "怎麼辦啦😭"},
		{type: "outgoing dialing", timeout: 1},
		{type: "incoming cancelled", timeout: 5},
		{type: "read-above", timeout: 3},
		{type: "received", message: "我在補習", timeout: 5},
		{type: "received", message: "真的假的", timeout: 5},
		{type: "read", message: "我會拿這種事開玩笑嗎？", timeout: 3},
		{type: "received", message: "不是啦 我是嚇到了", timeout: 4},
		{type: "received", message: "妳只驗了一次嗎", timeout: 4},
		{type: "received", message: "妳要不要再驗一次啊", timeout: 5},
		{type: "received", message: "不是說有些不太準嗎", timeout: 4},
		{type: "received", message: "如果再驗一次還是一樣", timeout: 3},
		{type: "received", message: "我明天帶妳去看醫生", timeout: 3},
		{type: "received", message: "不管結果怎樣妳不要想太多", timeout: 5},
		{type: "received", message: "有我在", timeout: 2},
		{type: "read", message: "好😭我再驗一次好了", timeout: 3},
		{type: "received", message: "嗯嗯我先上課", timeout: 2},
		{type: "received", message: "看怎樣再跟我說", timeout: 3},
		],
		btn_left: {
			text: "繼續",
			scene: 2006,
		},
	},
	2006 : {
		description: "再驗一次-訊息後",
		story_delay: 5,
		btn_delay: 1,
		story: [
		"我拿出另一支驗孕棒，再驗一次。",
		"沒有意外還是兩條線，我真的懷孕了。",
		],
		image_story: [
		{url: "./img/2/03.png"},
		{url: "./img/2/04.png", timeout: 2, transition: 3}
		],
		btn_left: {
			text: "繼續",
			scene: 3001,
		},
	},
	2007 : {
		description: "再驗一次-訊息前",
		story_delay: 4,
		story: [
		"沒有意外還是兩條線，我真的懷孕了。",
		],
		image_story: [
		{url: "./img/2/03.png"},
		{url: "./img/2/04.png", timeout: 2, transition: 2}
		],
		btn_left: {
			text: "打電話給男友",
			scene: 2008,
		},
		btn_middle: {
			text: "傳Line給男友",
			scene: 2009,
		},
	},
	2008: {
		description: "在廁所-再驗一次後-打電話",
		background: bg_bathroom, 
		line: [
		{type: "outgoing dialing", timeout: 1},
		{type: "incoming cancelled", timeout: 5},
		{type: "received", message: "怎麼了我在補習", timeout: 5},
		{type: "read", message: "我發生一件嚴重的事", timeout: 5},
		{type: "received", message: "怎", timeout: 5},
		{type: "read", message: "我....我好像懷孕了", timeout: 3},
		{type: "received", message: "...", timeout: 2},
		{type: "received", message: "真的假的", timeout: 5},
		{type: "read", message: "我會拿這種事開玩笑嗎？", timeout: 3},
		{type: "sent", img: "./img/2/06.png", timeout: 2},
		{type: "received", message: "不是啦 我是嚇到了", timeout: 4},
		{type: "received", message: "妳只驗了一次嗎", timeout: 4},
		{type: "read", message: "沒有我驗兩次了", timeout: 3},
		{type: "received", message: "...", timeout: 3},
		{type: "received", message: "本來想說會不會不太準", timeout: 4},
		{type: "received", message: "但既然妳已經驗兩次了", timeout: 3},
		{type: "received", message: "沒關係 我明天帶妳去看醫生", timeout: 3},
		{type: "received", message: "不管結果怎樣妳不要想太多", timeout: 5},
		{type: "received", message: "有我在", timeout: 2},
		{type: "read", message: "好😭", timeout: 3},
		{type: "received", message: "嗯嗯我先上課", timeout: 2},
		{type: "received", message: "看怎樣再跟我說", timeout: 3},
		],
		btn_left: {
			text: "繼續",
			scene: 3001,
		},
	},
	2009: {
		description: "在廁所-再驗一次後-line",
		background: bg_bathroom, 
		line: [
		{type: "sent", message: "欸欸 在嗎?", timeout: 3},
		{type: "sent", message: "發生一件嚴重的事", timeout: 4},
		{type: "sent", message: "我....我好像懷孕了", timeout: 4},
		{type: "sent", message: "我原本月經都很準的", timeout: 3},
		{type: "sent", message: "但這次一直沒有來", timeout: 3},
		{type: "sent", message: "所以買了驗孕棒試試看", timeout: 4},
		{type: "sent", message: "沒想到真的中了", timeout: 3},
		{type: "sent", message: "是兩條線😭", timeout: 3},
		{type: "sent", message: "怎麼辦啦😭", timeout: 3},
		],
		btn_middle: {
			text: "傳送訊息",
			scene: 2010,
		},
		btn_right: {
			text: "撥打電話",
			scene: 2011,
		},
	},
	2010: {
		description: "在廁所-再驗一次後-line",
		background: bg_bathroom, 
		line: [
		{type: "sent", message: "欸欸 在嗎?"},
		{type: "sent", message: "發生一件嚴重的事"},
		{type: "sent", message: "我....我好像懷孕了"},
		{type: "sent", message: "我原本月經都很準的"},
		{type: "sent", message: "但這次一直沒有來"},
		{type: "sent", message: "所以買了驗孕棒試試看"},
		{type: "sent", message: "沒想到真的中了"},
		{type: "sent", message: "是兩條線😭"},
		{type: "sent", message: "怎麼辦啦😭"},
		{type: "sent", img: "./img/2/05.png", timeout: 1},
		{type: "sent", img: "./img/2/06.png", timeout: 1},
		{type: "sent", message: "你在幹嘛啦 怎麼一直不已讀", timeout: 2},
		{type: "read-above", timeout: 3},
		{type: "received", message: "抱歉 我在補習", timeout: 5},
		{type: "received", message: "真的假的", timeout: 5},
		{type: "read", message: "我會拿這種事開玩笑嗎？", timeout: 3},
		{type: "received", message: "不是啦 我是嚇到了", timeout: 4},
		{type: "received", message: "妳只驗了一次嗎", timeout: 4},
		{type: "read", message: "你沒看到照片是兩隻驗孕棒嗎", timeout: 3},
		{type: "received", message: "喔喔我看到了", timeout: 2},
		{type: "received", message: "本來想說妳要不要再驗一次啊", timeout: 4},
		{type: "read", message: "怕不太準嗎", timeout: 3},
		{type: "received", message: "但既然妳驗兩次了....", timeout: 3},
		{type: "received", message: "沒關係 我明天帶妳去看醫生", timeout: 3},
		{type: "received", message: "不管結果怎樣妳不要想太多", timeout: 5},
		{type: "received", message: "有我在", timeout: 2},
		{type: "read", message: "好😭", timeout: 3},
		{type: "received", message: "嗯嗯我先上課", timeout: 2},
		{type: "received", message: "看怎樣再跟我說", timeout: 3},
		],
		btn_left: {
			text: "繼續",
			scene: 3001,
		},
	},
	2011: {
		description: "在廁所-再驗一次後-打電話",
		background: bg_bathroom, 
		line: [
		{type: "sent", message: "欸欸 在嗎?"},
		{type: "sent", message: "發生一件嚴重的事"},
		{type: "sent", message: "我....我好像懷孕了"},
		{type: "sent", message: "我原本月經都很準的"},
		{type: "sent", message: "但這次一直沒有來"},
		{type: "sent", message: "所以買了驗孕棒試試看"},
		{type: "sent", message: "沒想到真的中了"},
		{type: "sent", message: "是兩條線😭"},
		{type: "sent", message: "怎麼辦啦😭"},
		{type: "outgoing dialing", timeout: 1},
		{type: "incoming cancelled", timeout: 5},
		{type: "read-above", timeout: 3},
		{type: "received", message: "我在補習", timeout: 5},
		{type: "received", message: "真的假的", timeout: 5},
		{type: "read", message: "我會拿這種事開玩笑嗎？", timeout: 3},
		{type: "received", message: "不是啦 我是嚇到了", timeout: 4},
		{type: "received", message: "妳是用驗孕棒驗嗎", timeout: 4},
		{type: "received", message: "妳只驗了一次嗎", timeout: 2},
		{type: "received", message: "妳要不要再驗一次啊", timeout: 5},
		{type: "sent", img: "./img/2/05.png", timeout: 1},
		{type: "sent", img: "./img/2/06.png", timeout: 1},
		{type: "received", message: "不是說有些不太準嗎", timeout: 4},
		{type: "received", message: "喔...妳驗兩次了喔", timeout: 5},
		{type: "received", message: "那沒關係 我明天帶妳去看醫生", timeout: 3},
		{type: "received", message: "不管結果怎樣妳不要想太多", timeout: 5},
		{type: "received", message: "有我在", timeout: 2},
		{type: "read", message: "好😭", timeout: 3},
		{type: "received", message: "嗯嗯我先上課", timeout: 5},
		{type: "received", message: "看怎樣再跟我說", timeout: 3},
		],
		btn_left: {
			text: "繼續",
			scene: 3001,
		},
	},
	3001: {
		description: "在醫院外",
		background: bg_hospital_outside,
		text_color: "#4d4d4d",
		story_date: "2018/10/1",
		page_turn: true,
		story: [
		"今天子曜帶我去看婦產科。",
		"在進去診所之前，他給了我一包口罩，問我要不要戴？",
		"我當下愣住了，不知道他給我口罩的用意是什麼？",
		"「我想妳可能會怕遇到認識的人，所以想說妳要不要戴口罩。如果妳覺得有關係，那我也跟妳一起戴，如果妳覺得沒關係，我們就一起不戴。看妳啦！」我都不知道原來他有那麼貼心",
		"看著手裡的口罩，我決定",
		],
		btn_left: {
			text: "戴上口罩",
			scene: 4001,
		},
		btn_middle: {
			text: "放回包包",
			scene: 4101,
		},
	},
	4001: {
		description: "在醫院內低頭",
		background: bg_hospital_in_on_lower,
		text_color: "#4d4d4d",
		story: [
		"「噹噹～」掛在門把上的鈴鐺，讓所有等待看診的人，抬頭看了我一眼。",
		"那一刻，我很慶幸我戴上了口罩。我趕緊找個位置坐下。",
		"等待看診的期間，我默默觀察周圍的一切。",
		],
		static_image: [
			{url: "./img/4/put_on/mask.png", up: 1},
			{url: "./img/4/put_on/preg-1.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		bgm: [
			{url: dong},
		],
		btn_left: {
			text: "繼續",
 			scene: 4002,
		},
	},
	4002: {
		description: "在醫院內低頭",
		background: bg_hospital_in_on_lower,
		text_color: "#4d4d4d",
		story: [
		"電視正在報導印尼發生海嘯，死傷慘重。",
		"坐在我對面的女生腹部微微隆起，牽著那個男生的手，臉上滿是笑容。",
		"這時我和一個女生對到眼，隨即避開視線，她和我一樣帶著口罩，坐在另一個角落。",
		],
		static_image: [
			{url: "./img/4/put_on/mask.png", up: 1},
			{url: "./img/4/put_on/preg-1.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		btn_left: {
			text: "繼續",
 			scene: 4003,
		},
	},
	4003: {
		description: "在醫院內低頭",
		background: bg_hospital_in_on_lower,
		text_color: "#4d4d4d",
		story: [
		"「噹噹～」又有人走進診所，我連忙低下頭，深怕被認出來。",
		"啊對齁我有戴口罩，但我下意識地還是想躲起來。",
		"其實我也害怕，健保卡上會不會留紀錄，絕對不能被爸媽發現。",
		],
		static_image: [
			{url: "./img/4/put_on/mask.png", up: 1},
			{url: "./img/4/put_on/preg-1.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		bgm: [
			{url: dong},
		],
		btn_left: {
			text: "繼續",
 			scene: 4004,
		},
	},
	4004: {
		description: "在醫院內低頭",
		background: bg_hospital_in_on_lower,
		text_color: "#4d4d4d",
		story: [
		"昨天晚上我根本睡不著，我不斷在想我怎麼會懷孕？我該怎麼辦？",
		"我不知道這件事被爸媽或是老師同學知道後，他們會怎麼看我？",
		"一想到父母對我失望的表情，甚至同學們在背後指指點點，卻在我面前裝沒事，想到就很無力",
		],
		static_image: [
			{url: "./img/4/put_on/mask.png", up: 1},
			{url: "./img/4/put_on/preg-1.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		btn_left: {
			text: "繼續",
 			scene: 4006,
		},
	},
	4101: {
		description: "在醫院內低頭",
		background: bg_hospital_in_off_lower,
		text_color: "#4d4d4d",
		story: [
		"我選擇不戴口罩，來看婦產科又不一定代表我懷孕，而且我為什麼要這麼畏畏縮縮？",
		"我推開診所的門，走了進去。",
		"掛完號後，隨便找了一個位置坐下。",
		"等待看診的期間，我開始與自己對話。",
		"說不緊張是騙人的，因為這關係到我未來的人生。",
		"如果我檢查完真的懷孕了，我該怎麼辦？是不是要告訴爸媽？",
		"爸媽一定會很生氣，怎麼辦......",
		"如果檢查完只是虛驚一場，我一定要感謝老天爺再給我一個機會",
		"我一定會更加小心！",
		],
		static_image: [
			{url: "./img/4/put_on/preg-2.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		btn_left: {
			text: "繼續",
 			scene: 4104,
		},
	},
	4104: {
		description: "在醫院-叫號",
		background: bg_hospital_in_off_raise,
		text_color: "#4d4d4d",
		story: [
		"12號 方芷潔  進來看診囉！",
		"終於輪到我了。",
		],
		static_image: [
			{url: "./img/4/put_on/preg-1.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		bgm: [
			{url: dong},
		],
		btn_left: {
			text: "繼續",
 			scene: 5001,
		},
	},
	4006: {
		description: "在醫院-叫號",
		background: bg_hospital_in_on_raise,
		text_color: "#4d4d4d",
		story: [
		"12號 方芷潔  進來看診囉！",
		"護士竟然叫了我的全名，我趕緊看看周圍有沒有認識我的人?",
		"一般看醫生都會叫全名嗎？我今天才注意到這件事，感到很不舒服。",
		],
		static_image: [
			{url: "./img/4/put_on/mask.png", up: 1},
			{url: "./img/4/put_on/preg-1.png", left: 2, up: 0},
			{url: "./img/4/01.png", left: 0, up: 0},
		],
		bgm: [
			{url: dong},
		],
		btn_left: {
			text: "繼續",
 			scene: 5001,
		},
	},
	5001: {
		description: "在醫院-看醫生",
		background: bg_hospital_in_doctor,
		text_color: "#4d4d4d",
		story: [
		"做完了檢查，醫生用很肯定的語氣說：「已經懷孕五週了」",
		"就像被狠狠打了一巴掌，我和子曜傻住了。",
		"",
		"看到我們表情凝重，不用等我們開口，醫生就說：「看你們年紀還小，所以先跟你們說一聲。如果想要流掉的話，七週內比較簡單，用吃藥的就可以， 費用也比較低，之後還是要回診檢查。七週以後就要動手術了，費用也比較高。最重要的是，不管你們之後你們選擇哪一種方式，未滿20歲都是需要家長同意的！」",
		],
		bgm: [
			{url: write},
		],
		btn_left: {
			text: "繼續",
 			scene: 6001,
		},
	},
	6001: {
		description: "在醫院-討論",
		background: bg_hospital_out_discuss,
		text_color: "#4d4d4d",
		story: [
		"「需要家長同意」像是第二個巴掌，讓我和子曜久久無法言語。",
		"我不想動手術，手術聽起來就好可怕，這也代表我只剩下兩週的時間可以思考。",
		"事情已經超乎我的想像與控制了，我該怎麼辦？",
		],
		btn_left: {
			text: "繼續",
 			scene: 6002,
		},
	},
	6002: {
		description: "在醫院-討論",
		background: bg_hospital_out_discuss,
		text_color: "#4d4d4d",
		story: [
		"「子曜，我們該怎麼辦？」",
		"「對不起，是我沒有保護好妳」他的臉上滿是自責。",
		"我趕緊安慰他：「當初發生關係都是你情我願的，我們也做好保護措施了，事情發生也不能怪你。」",
		"「但是我們還是學生，根本沒有能力養這個小孩，我們家的經濟情況妳也是知道的」他低著頭說。",
		"「嗯，就算我爸媽養得起，他們也不見得會幫我養，可能先打斷我的腿吧？」想到我的父母就覺得可怕。",
		"",
		"子曜思考了一下：「但是不管怎麼樣，還是要先跟父母說吧！不管是要生還是不要生。」",
		"「你說的沒錯，不過我們家很保守，......」",
		],
		btn_left: {
			text: "我回家探個口風",
 			scene: 7001,
		},
		btn_middle: {
			text: "我不敢說",
 			scene: 7102,
		},
	},
	7001: {
		description: "在家-探個口風",
		background: bg_home_dinner,
		background_sequenced_random: 2,
		text_color: "#4d4d4d",
		page_turn: true,
		story: [
		"晚上我和爸媽一起吃飯，看他們心情還可以，我鼓起勇氣開啟了這個話題。",
		],
		btn_left: {
			text: "繼續",
 			scene: 7002,
		},
	},
	7002: {
		description: "在家-探個口風",
		background: bg_home_dinner_stopped,
		text_color: "#4d4d4d",
		story: [
		"「我今天在學校阿，聽說隔壁班的一個女生好像懷孕了欸」",
		"爸爸皺了下眉頭：「蛤他不是跟妳一樣才幾歲嗎？怎麼那麼年輕就懷孕了」",
		"媽媽跟著附和：「對啊，那她這樣讀書怎麼辦？高中都還沒畢業。」",
		"「ㄜ我不知道誒，就只是聽說。」我的手心不停冒汗。",
		"「妳現在要做的就是好好讀書，不要跟別人學壞了！」爸爸怎麼說都說一樣的。",
		"「對啊～好好讀書，考好大學！」媽媽也就附和爸爸說的。",
		],
		btn_upper: {
			text: "「有啦有啦，我有在讀，你們不要再唸了！」",
 			scene: 8101,
		},
		btn_center: {
			text: "「只是好奇如果那個人是我，你們會怎麼樣？」",
 			scene: 8001,
		},
	},
	7101: {
		description: "在家-我不敢說",
		background: bg_dinner_texting,
		line: [
			// {type: "read", message: "但是我們家很保守，我...我不敢說", timeout: 2},
			{type: "received", message: "那小孩怎麼辦？妳想要生下來還是？", timeout: 3},
			{type: "read", message: "我..我好混亂，不知道該怎麼辦。你呢？你覺得怎麼辦？", timeout: 3},
			{type: "received", message: "我覺得我們只是個高中生", timeout: 4},
			{type: "received", message: "沒有能力照顧自己，更何況去照顧小孩。", timeout: 4},
			{type: "received", message: "但是我覺得還是尊重妳的想法", timeout: 2},
			{type: "received", message: "畢竟辛苦的是妳。", timeout: 2},
			{type: "received", message: "如果妳想生，我會負起責任努力賺錢 ", timeout: 3},
			{type: "received", message: "如果妳不想生，我也會陪妳。", timeout: 3},
			{type: "read", message: "嗯，謝謝你。", timeout: 2},
		],
		btn_upper: {
			text: "再給我時間思考一下吧，我現在無法做決定。",
 			scene: 8702,
		},
		btn_center: {
			text: "我想趁爸媽發現之前，趕緊把小孩拿掉吧。",
 			scene: 8703,
		},
	},
	7102: {
		description: "醫院-我不敢說-from hospital",
		background: bg_hospital_outside,
		text_color: "#4d4d4d",
		story: [
			"「那小孩怎麼辦？妳想要生下來還是？」子曜擔心地問。",
			"「我..我好混亂，不知道該怎麼辦。你呢？你覺得怎麼辦？」",
			"",
			"「我覺得我們只是個高中生，沒有能力照顧自己，更何況去照顧小孩。但是我覺得還是尊重妳的想法，畢竟辛苦的是妳。如果妳想生，我會負起責任努力賺錢 ; 如果妳不想生，我也會陪妳。」看來他已經好好想過這個問題了。",
			"「嗯，謝謝你。」",
		],
		btn_upper: {
			text: "再給我時間思考一下吧，我現在無法做決定。",
 			scene: 7103,
		},
		btn_center: {
			text: "我想趁爸媽發現之前，趕緊把小孩拿掉吧。",
 			scene: 7104,
		},
	},
	7103: {
		description: "醫院-我不敢說-no decided",
		background: bg_hospital_outside,
		text_color: "#4d4d4d",
		story: [
			"「嗯，妳還記得我之前跟妳說過嗎？」",
			"「說過什麼？」",
			"「我朋友也是不小心懷孕，後來吃個藥就把小孩拿掉了。」",
			"「所以你希望我把小孩拿掉嗎？」",
			"「沒有，我想說先去問問看，妳不是也需要時間思考嗎？等妳決定好了，如果不想生我就去幫妳拿藥。如果想生，我再陪妳去跟爸媽說。」",
			"「好，還好有你在，我現在很亂，一時沒想到那麼多。」看來是我想多了。",
		],
		btn_left: {
			text: "繼續",
 			scene: 11001,
		},
	},
	7104: {
		description: "醫院-我不敢說-no decided",
		background: bg_hospital_outside,
		text_color: "#4d4d4d",
		story: [
			"子曜驚訝地問我：「妳確定嗎？」",
			"「嗯不然我們還有其他選擇嗎？可是要怎麼不讓爸媽知道？」",
			"子曜想了一下說：「妳還記得我之前跟妳說過，我朋友也是不小心懷孕，後來吃個藥就把小孩拿掉了嗎？」",
			"「他們藥是哪來的？安全嗎？」",
			"「我不知道欸，還是我先去問問看，再跟妳說？」",
			"「好！」還好有他在。",
		],
		btn_left: {
			text: "繼續",
 			scene: 11001,
		},
	},
	8001: {
		description: "在家-如果是我",
		background: bg_home_dinner_stopped,
		text_color: "#4d4d4d",
		story: [
			"「有啦有啦，只是好奇如果那個人是我，你們會怎麼樣？」",
			"爸爸臉色一變：「這有什麼好奇的，妳不可能會發生這種事。」",
			"媽媽起了疑心問：「妳怎麼會突然說這個？」",
			"「......」太可怕了，一時間不知道要說什麼。",
			"媽媽緊接著問：「妳是不是懷孕了？」",
		],
		btn_upper: {
			text: "「怎麼可能，就說我只是好奇問一下」",
 			scene: 8401,
		},
		btn_center: {
			text: "「嗯...我...我懷孕了」",
 			scene: 8103,
		},
	},
	8101: {
		description: "在家-我有在讀",
		background: bg_home_dinner_stopped,
		text_color: "#4d4d4d",
		story: [
		"「妳這什麼態度啊，爸媽多講幾句妳就煩了？」媽媽生氣地說。",
		"爸接著補一槍：「妳不好好讀書就會像妳隔壁班的同學一樣，把肚子搞大了」",
		],
		btn_upper: {
			text: "沈默不語",
 			scene: 8701,
		},
		btn_center: {
			text: "「不讀書不一定就是壞孩子。」",
 			scene: 8601,
		},
		btn_lower: {
			text: "「對，我就是把肚子搞大了！」",
 			scene: 8103,
		},
	},
	// 8102: {
	// 	description: "在家-我有在讀-我懷孕了",
	// 	background: bg_dad_hit_table,
	// 	text_color: "#4d4d4d",
	// 	story: [
	// 	"爸爸拍桌：「妳說什麼！」",
	// 	"媽媽開始質問我：「妳在跟我開玩笑嗎？妳不是都在讀書嗎？",
	// 	"妳怎麼有時間把自己的肚子搞大？",
	// 	"妳是不是騙我們要去圖書館，結果跑去亂搞？」",
	// 	"「我怎麼會有妳這種女兒，臉都被妳丟光了！」爸爸的臉上充滿失望。",
	// 	"我的眼淚滴答滴答滴在餐桌上。",
	// 	"「妳確定懷孕了嗎？」冷靜下來後媽媽問。",
	// 	"「嗯...」",
	// 	"「去看過醫生了嗎？」",
	// 	"「嗯...」",
	// 	"「醫生說什麼？小孩多大了」",
	// 	"「五週了...」",
	// 	"「那個男的是誰，叫他過來我打斷他的腿！」爸爸吼道。",
	// 	"「你在說什麼？！他是我男友欸，我也有責任你不要都怪他」",
	// 	"媽媽鄙視的眼神看著我：「哼才多大就交男朋友，妳們知道什麼叫愛嗎？現在都搞出人命了」",
	// 	],
	// 	btn_upper: {
	// 		text: "對不起，我不是故意的。",
 // 			scene: 8201,
	// 	},
	// 	btn_center: {
	// 		text: "難道就你們大人才懂愛嗎？",
 // 			scene: 8301,
	// 	},
	// },
	// 8105: {
	// 	description: "在家-我有在讀-我懷孕了",
	// 	background: bg_dad_hit_table,
	// 	text_color: "#4d4d4d",
	// 	story: [
	// 	"晚上我和爸媽一起吃飯，我直接和他們說我懷孕的事。",
	// 	"爸爸拍桌：「妳說什麼！」",
	// 	"媽媽開始質問我：「妳在跟我開玩笑嗎？妳不是都在讀書嗎？",
	// 	"妳怎麼有時間把自己的肚子搞大？",
	// 	"妳是不是騙我們要去圖書館，結果跑去亂搞？」",
	// 	"「我怎麼會有妳這種女兒，臉都被妳丟光了！」爸爸的臉上充滿失望。",
	// 	"我的眼淚滴答滴答滴在餐桌上。",
	// 	"「妳確定懷孕了嗎？」冷靜下來後媽媽問。",
	// 	"「嗯...」",
	// 	"「去看過醫生了嗎？」",
	// 	"「嗯...」",
	// 	"「醫生說什麼？小孩多大了」",
	// 	"「五週了...」",
	// 	"「那個男的是誰，叫他過來我打斷他的腿！」爸爸吼道。",
	// 	"「你在說什麼？！他是我男友欸，我也有責任你不要都怪他」",
	// 	"媽媽鄙視的眼神看著我：「哼才多大就交男朋友，妳們知道什麼叫愛嗎？現在都搞出人命了」",
	// 	],
	// 	btn_upper: {
	// 		text: "對不起，我不是故意的。",
 // 			scene: 8201,
	// 	},
	// 	btn_center: {
	// 		text: "難道就你們大人才懂愛嗎？",
 // 			scene: 8301,
	// 	},
	// },
	8105: {
		description: "在家-我有在讀-我懷孕了",
		background: bg_dad_hit_table,
		text_color: "#4d4d4d",
		story: [
		"晚上我和爸媽一起吃飯，我直接和他們說我懷孕的事。",
		"爸爸拍桌：「妳說什麼！」",
		"媽媽開始質問我：「妳在跟我開玩笑嗎？妳不是都在讀書嗎？",
		],
		bgm: [{url: slap_table}],
		btn_left: {
			text: "繼續",
 			scene: 81031,
		},
		btn_center: {
			text: "「難道就你們大人才懂愛嗎？」",
 			scene: 8301,
		},
	},
	8103: {
		description: "在家-我有在讀-我懷孕了",
		background: bg_dad_hit_table,
		text_color: "#4d4d4d",
		story: [
		"爸爸拍桌：「妳說什麼！」",
		"媽媽開始質問我：「妳在跟我開玩笑嗎？妳不是都在讀書嗎？妳怎麼有時間把自己的肚子搞大？妳是不是騙我們要去圖書館，結果跑去亂搞？」",
		],
		bgm: [{url: slap_table}],
		btn_left: {
			text: "繼續",
 			scene: 81031,
		},
	},
	81031: {
		description: "在家-我有在讀-我懷孕了",
		background: bg_dad_hit_table,
		text_color: "#4d4d4d",
		story: [
		"「我怎麼會有妳這種女兒，臉都被妳丟光了！」爸爸的臉上充滿失望。",
		"我的眼淚滴答滴答滴在餐桌上。",
		"",
		"「妳確定懷孕了嗎？」冷靜下來後媽媽問。",
		"「嗯...」",
		"「去看過醫生了嗎？」",
		"「嗯...」",
		"「醫生說什麼？小孩多大了」",
		"「五週了...」",
		"「那個男的是誰，叫他過來我打斷他的腿！」爸爸吼道。",
		"「你在說什麼？！他是我男友欸，我也有責任你不要都怪他」",
		"媽媽鄙視的眼神看著我：「哼才多大就交男朋友，妳們知道什麼叫愛嗎？現在都搞出人命了」",
		],
		btn_upper: {
			text: "「對不起，我不是故意的。」",
 			scene: 8201,
		},
		btn_center: {
			text: "「難道就你們大人才懂愛嗎？」",
 			scene: 8301,
		},
	},
	// 8104: {
	// 	description: "在家-我有在讀-我懷孕了",
	// 	background: bg_dad_hit_table,
	// 	text_color: "#4d4d4d",
	// 	story: [
	// 	"我：對不起辜負你們的期望，我懷孕了",
	// 	"爸：（拍桌）妳說什麼！",
	// 	"媽：妳在跟我開玩笑嗎？妳不是都在讀書嗎？",
	// 	"妳怎麼有時間把自己的肚子搞大？",
	// 	"妳是不是騙我們要去圖書館，結果跑去亂搞？",
	// 	"爸：我怎麼會有妳這種女兒，臉都被妳丟光了！",
	// 	"我：（眼淚滴答滴答滴在餐桌上）",
	// 	"媽：妳確定懷孕了嗎？",
	// 	"我：嗯",
	// 	"媽：去看過醫生了嗎？",
	// 	"我：嗯",
	// 	"媽：醫生說什麼？小孩多大了",
	// 	"我：五週了",
	// 	"爸：那個男的是誰，叫他過來我打斷他的腿",
	// 	"我：你在說什麼？！他是我男友欸，我也有責任你不要都怪他",
	// 	"媽：哼才多大就交男朋友，妳們知道什麼叫愛嗎？現在都搞出人命了",
	// 	],
	// 	bgm: [{url: slap_table}],
	// 	btn_upper: {
	// 		text: "對不起，我不是故意的。",
 // 			scene: 8201,
	// 	},
	// 	btn_center: {
	// 		text: "難道就你們大人才懂愛嗎？",
 // 			scene: 8301,
	// 	},
	// },
	8201: {
		description: "在家-對不起，我不是故意的",
		background: bg_dad_hit_table,
		text_color: "#4d4d4d",
		story: [
		"媽冷冷地說：「現在對不起還有什麼用，我去打電話給老師，請他幫忙處理」",
		],
		btn_left: {
			text: "繼續",
 			scene: 9001,
		},
	},
	8301: {
		description: "在家-對不起，我不是故意的",
		background: bg_dad_hit,
		text_color: "#4d4d4d",
		story_delay: 3,
		story: [
			"爸爸一巴掌過來：「妳還敢頂嘴？給我回去房間好好反省！」",
			"「說話就好好說話，怎麼還動手呢？」媽媽嚇了一跳。",
			"「是她太不受教了，妳去打電話給老師，問問看要怎麼處理這件事」",
		],
		bgm: [{url: slap}],
		btn_left: {
			text: "繼續",
 			scene: 9001,
		},
	},
	8401: {
		description: "在家-只是好奇",
		background: bg_home_dinner_stopped,
		text_color: "#4d4d4d",
		story: [
		"我：「齁怎麼可能啦，就說我只是好奇問一下」",
		],
		btn_left: {
			text: "繼續",
 			scene: 8501,
		},
	},
	8501: {
		description: "在家-傳訊息",
		background: bg_dinner_texting,
		line: [
			{type: "read", message: "我剛剛有努力試探一下了，我媽超可怕的，直接問我是不是懷孕了", timeout: 2},
			{type: "read", message: "我知道我只差一步就可以把它說出來，但是我害怕還是不敢說。", timeout: 3},
			{type: "received", message: "那小孩怎麼辦？妳想要生下來還是？", timeout: 3},
			{type: "read", message: "我..我好混亂，不知道該怎麼辦。你呢？你覺得怎麼辦？", timeout: 3},
			{type: "received", message: "我覺得我們只是個高中生，沒有能力照顧自己，更何況去照顧小孩。", timeout: 4},
			{type: "received", message: "但是我覺得還是尊重妳的想法，畢竟辛苦的是妳。", timeout: 2},
			{type: "received", message: "如果妳想生，我會負起責任努力賺錢 ; 如果妳不想生，我也會陪妳。", timeout: 3},
			{type: "read", message: "嗯，謝謝你。", timeout: 2},
		],
		btn_upper: {
			text: "再給我時間思考一下吧，我現在無法做決定",
 			scene: 8702,
		},
		btn_center: {
			text: "我想趁爸媽發現之前，趕緊把小孩拿掉吧",
 			scene: 8703,
		},
	},
	8601: {
		description: "在家-不讀書",
		background: bg_home_dinner_stopped,
		text_color: "#4d4d4d",
		story: [
			"「爸爸的意思是妳不讀書以後能幹嘛？考不上好大學怎麼找好工作？」",
			"還沒等媽媽說完，爸爸就接著說：「我們花錢栽培妳是要妳成才，不是去搞那些五四三！」",
		],
		btn_upper: {
			text: "沈默不語",
 			scene: 8701,
		},
		btn_center: {
			text: "「對不起辜負你們的期望，我懷孕了」",
 			scene: 8103,
		},
	},
	8701: {
		description: "在家-沈默不語",
		background: bg_dinner_texting,
		line: [
			{type: "read", message: "我剛剛有努力試探一下了，", timeout: 2},
			{type: "read", message: "我爸媽很在意我的功課。", timeout: 3},
			{type: "read", message: "如果我現在跟他們說我懷孕了，", timeout: 3},
			{type: "read", message: "他們應該會瘋掉。", timeout: 2},
			{type: "received", message: "所以妳沒說嗎？", timeout: 2},
			{type: "read", message: "嗯....我不敢說", timeout: 2},
			{type: "received", message: "那小孩怎麼辦？", timeout: 4},
			{type: "received", message: "妳想要生下來還是？", timeout: 5},
			{type: "read", message: "我..我好混亂", timeout: 3},
			{type: "read", message: "不知道該怎麼辦。", timeout: 4},
			{type: "read", message: "你呢？你覺得怎麼辦？", timeout: 4},
			{type: "received", message: "我覺得我們只是個高中生", timeout: 3},
			{type: "received", message: "沒有能力照顧自己，更何況去照顧小孩。", timeout: 3},
			{type: "received", message: "但是我覺得還是尊重妳的想法，畢竟辛苦的是妳。", timeout: 5},
			{type: "received", message: "如果妳想生，我會負起責任努力賺錢 ; 如果妳不想生，我也會陪妳。", timeout: 4},
			{type: "read", message: "嗯，謝謝你。", timeout: 2},
		],
		btn_upper: {
			text: "再給我時間思考一下吧，我現在無法做決定。",
 			scene: 8702,
		},
		btn_center: {
			text: "我想趁爸媽發現之前，趕緊把小孩拿掉吧。",
 			scene: 8703,
		},
	},
	8702: {
		description: "在家-無法決定",
		background: bg_dinner_texting,
		line: [
			{type: "received", message: "嗯，妳還記得我之前跟妳說過嗎？", timeout: 2},
			{type: "read", message: "說過什麼？", timeout: 2},
			{type: "received", message: "我朋友也是不小心懷孕，後來吃個藥就把小孩拿掉了。", timeout: 3},
			{type: "read", message: "所以你希望我把小孩拿掉嗎？", timeout: 3},
			{type: "received", message: "沒有，我想說先去問問看，妳不是也需要時間思考嗎？", timeout: 2},
			{type: "received", message: "等妳決定好了，如果不想生我就去幫妳拿藥。", timeout: 3},
			{type: "received", message: "如果想生，我再陪妳去跟爸媽說。", timeout: 2},
			{type: "read", message: "好，還好有你在，我現在很亂，一時沒想到那麼多。", timeout: 4},
		],
		btn_left: {
			text: "繼續",
 			scene: 11001,
		},
	},
	8703: {
		description: "在家-趕緊拿掉",
		background: bg_dinner_texting,
		line: [
			{type: "read", message: "我想還是趁爸媽發現之前，趕緊把小孩拿掉吧。", timeout: 2},
			{type: "received", message: "妳確定嗎？", timeout: 1},
			{type: "read", message: "嗯不然我們還有其他選擇嗎？可是要怎麼不讓爸媽知道？", timeout: 3},
			{type: "received", message: "妳還記得我之前跟妳說過，我朋友也是不小心懷孕，", timeout: 3},
			{type: "received", message: "後來吃個藥就把小孩拿掉了嗎？", timeout: 2},
			{type: "read", message: "他們藥是哪來的？安全嗎？", timeout: 4},
			{type: "received", message: "我不知道欸，還是我先去問問看，再跟妳說？", timeout: 3},
			{type: "read", message: "好", timeout: 1},
		],
		btn_left: {
			text: "繼續",
 			scene: 11001,
		},
	},
	9001: {
		description: "走去學校",
		background: bg_go_to_school,
		text_color: "#4d4d4d",
		story_date: "2018/10/2",
		page_turn: true,
		story: [
		"爸媽走得很快，好像還很生氣，我低著頭緊跟在他們後面。",
		"輔導室的小房間佈置得很溫馨，稍微舒緩一下我緊繃的神經。",
		"",
		"這時子曜來了，他和爸媽肩並著肩一起走進輔導室，正向著我家的暴風圈走來。",
		],
		btn_left: {
			text: "繼續",
			scene: 9100,
		},
	},
	9100: {
		description: "在學校-1",
		background: bg_school_teacher2,
		text_color: "#4d4d4d",
		story: [
		"我不知道他們會不會吵起來，還是和平解決這一切。",
		"這時，老師先開始說話，打破沈默。",
		],
		btn_left: {
			text: "繼續",
			scene: 9101,
		},
	},
	9101: {
		description: "在學校-1.1",
		background: bg_school_teacher,
		text_color: "#4d4d4d",
		story: [
		"老師：「好，那既然芷潔和子曜的爸爸媽媽都來了，我就可以開始討論了。希望今天的討論可以讓雙方家長瞭解現在的情況，也能和平地達成共識。我是學校的輔導主任，學校在接到來電後，隨即成立處理小組，我們已經將案子提交到性平會了，首先我們想知道這段關係是不是雙方合意的？」",
		],
		btn_left: {
			text: "繼續",
			scene: 9102,
		},
	},
	9102: {
		description: "在學校-2",
		background: bg_school_boy_mom,
		text_color: "#4d4d4d",
		story: [
		"「我家小孩絕對不會強暴別人。」子曜的媽媽說。",
		],
		btn_left: {
			text: "繼續",
			scene: 9103,
		},
	},
	9103: {
		description: "在學校-3",
		background: bg_school_girl_dad,
		text_color: "#4d4d4d",
		story: [
		"「現在不管是不是強暴，妳家兒子就是把我女兒肚子搞大了。」爸爸的手指向子曜。",
		],
		btn_left: {
			text: "繼續",
			scene: 9104,
		},
	},
	9104: {
		description: "在學校-4",
		background: bg_school_boy_mom,
		text_color: "#4d4d4d",
		story: [
		"子曜媽比起剛剛更激動了些：「是這樣沒錯，但你這樣的說法很不好聽。這件事你們女兒也有責任，不要都把錯怪在我兒子身上。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9105,
		},
	},
	9105: {
		description: "在學校-5",
		background: bg_school_girl_side,
		text_color: "#4d4d4d",
		story: [
		"媽媽接著說：「對，妳們做家長的也有錯，沒有好好教好自己的小孩。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9106,
		},
	},
	9106: {
		description: "在學校-6",
		background: bg_school_boy_mom,
		text_color: "#4d4d4d",
		story: [
		"「話不是這樣說的吧？他們兩個兩情相悅，你們怎麼一直把錯怪在我兒子身上。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9107,
		},
	},
	9107: {
		description: "在學校-7",
		background: bg_school_boy_side,
		text_color: "#4d4d4d",
		story: [
		"眼看就要吵起來，子曜爸爸接著說：「對啊，而且子曜昨天也跟我說了他願意負責任，這就是做錯事該有表現。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9110,
		},
	},
	9109: {
		description: "在學校-9",
		background: bg_school_girl_dad,
		text_color: "#4d4d4d",
		story: [
		"爸爸哼了一聲：「他們還那麼小，談什麼負責，根本不懂以後會多辛苦。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9110,
		},
	},
	9110: {
		description: "在學校-10",
		background: bg_school_girl_side,
		text_color: "#4d4d4d",
		story: [
		"媽媽看著子曜說：「辛苦也是我們芷潔在辛苦，你們只要動動嘴巴說負責就好。誰知道孩子生出來以後，你們跑去哪都不知道。」",	
		],
		btn_left: {
			text: "繼續",
			scene: 9111,
		},
	},
	9111: {
		description: "在學校-11",
		background: bg_school_boy_side,
		text_color: "#4d4d4d",
		story: [
		"子曜媽媽生氣地回：「今天坐在這不就是要好好談嗎？你們怎麼講話都這麼酸。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9112,
		},
	},
	9112: {
		description: "在學校-12",
		background: bg_school_girl_side,
		text_color: "#4d4d4d",
		story: [
		"「誰在酸啊....」媽媽激動地要站起來。",
		],
		btn_left: {
			text: "繼續",
			scene: 9113,
		},
	},
	9113: {
		description: "在學校-13",
		background: bg_school_teacher,
		text_color: "#4d4d4d",
		story: [
		"老師打斷：「爸爸媽媽不要激動，還是我們問問看芷潔和子曜的想法？芷潔妳有什麼看法呢？」",
		],
		btn_left: {
			text: "我....我不知道",
			scene: 9115
		},
		btn_middle: {
			text: "我想生下來",
			scene: 9115,
		},
		btn_right: {
			text: "我不想生",
			scene: 9115,
		},
	},
	9115: {
		description: "在學校-16",
		background: bg_school_girl_dad,
		text_color: "#4d4d4d",
		story: [
		"我：「我...」",
		"爸爸直接打斷我要說的話：「還能怎麼樣？她現在應該要做的就是好好讀書考好大學。懷孕的是她又不是你兒子，就直接拿掉吧。」",
		],
		btn_left: {
			text: "繼續",
			scene: 9117,
		},
	},
	// 9116: {
	// 	description: "在學校-14",
	// 	background: bg_school_girl,
	// 	text_color: "#4d4d4d",
	// 	story: [
	// 	"認了許久我說：「爸！你怎麼都不聽聽我的意見，就要擅自幫我做決定。你們都不要再吵了！我決定了」",
	// 	],
	// 	btn_left: {
	// 		text: "繼續",
	// 		scene: 9117,
	// 	},
	// },
	9117: {
		description: "在學校-17",
		background: bg_school_girl,
		text_color: "#4d4d4d",
		story: [
		"忍了許久我說：「爸！你怎麼都不聽聽我的意見，就要擅自幫我做決定。你們都不要再吵了！我決定了，」",
		],
		btn_upper: {
			text: "「我就是要把小孩生下來」",
			scene: 10001,
		},
		btn_center: {
			text: "「我明天就要把小孩拿掉」",
			scene: 10101,
		},
	},
	10001: {
		description: "醫院二檢-生",
		background: bg_clinic_raise,
		text_color: "#4d4d4d",
		story_date: "2018/10/3",
		page_turn: true,
		story: [
			"那時候看著雙方父母你一來我一句，讓我和子曜好尷尬好丟臉。",
			"當時一衝動就決定要把孩子生下來，",
			"我其實還沒想好，就脫口而出這個決定。唉我到底在想什麼啊.....",
		],
		btn_left: {
			text: "繼續",
			scene: 10000,
		},
	},
	10000: {
		description: "醫院二檢-生",
		background: bg_clinic,
		text_color: "#4d4d4d",
		story_date: "2018/10/3",
		story: [
"回到家後我一直哭，爸媽為了我懷孕這件事很苦惱，不過看我那麼難過也捨不得再罵我。",
"子曜也來到我們家，和爸媽保證不管結果怎麼樣他都會負責，爸媽冷靜下來和他聊了許久。",
"後來爸媽告訴我，不管我做什麼決定都會尊重我。",
"但是我要為我的決定負責，不要妄想把孩子生下來丟給爸媽照顧。",
			"為了我的身體健康，爸媽先帶我去看醫生好好做個檢查。",
			"我又做了一模一樣的檢查，後來醫生跟我說一些注意事項。",
			"「我有聽妳爸媽說妳的情況了，他們請我跟妳做清楚的解釋，最後再讓妳自己選擇要走哪條路。妳想先聽哪一個注意事項？」",
		],
		btn_upper: {
			text: "關於人工流產的注意事項",
			scene: 10102,
		},
		btn_center: {
			text: "生下小孩的注意事項",
			scene: 10103,
		},
	},
	10101: {
		description: "醫院二檢-不生",
		background: bg_clinic_raise,
		text_color: "#4d4d4d",
		story_date: "2018/10/3",
		page_turn: true,
		story: [
			"那時候看著雙方父母你一來我一句，讓我和子曜好尷尬好丟臉。",
			"當時一衝動就決定要把孩子拿掉，",
			"我其實還沒想好，就脫口而出這個決定。",
		],
		btn_left: {
			text: "繼續",
			scene: 10100,
		},
	},
	10100: {
		description: "醫院二檢-不生",
		background: bg_clinic,
		text_color: "#4d4d4d",
		story: [
			"回到家後我一直哭，爸媽為了我懷孕這件事很苦惱，不過看我那麼難過也捨不得再罵我。",
			"子曜也來到我們家，和爸媽保證不管結果怎麼樣他都會負責，爸媽冷靜下來和他聊了許久。",
			"後來爸媽告訴我，不管我做什麼決定都會尊重我。",
			"但是我要為我的決定負責，不要妄想把孩子生下來丟給爸媽照顧。",
			"為了我的身體健康，爸媽先帶我去看醫生好好做個檢查。",
			"我又做了一模一樣的檢查，後來醫生跟我說一些注意事項。",
			"「我有聽妳爸媽說妳的情況了，他們請我跟妳做清楚的解釋，最後再讓妳自己選擇要走哪條路。妳想先聽哪一個注意事項？」",
		],
		btn_upper: {
			text: "關於人工流產的注意事項",
			scene: 10102,
		},
		btn_center: {
			text: "生下小孩的注意事項",
			scene: 10103,
		},
	},
	10102: {
		description: "醫院二檢-關於人工流產的注意事項",
		background: bg_clinic,
		text_color: "#4d4d4d",
		story: [
			"「如果想要進行人工流產的話，是可以用吃藥的方式。",
			"雖然不用動手術，但是吃完藥後會持續出血大約7-10天。",
			"因為子宮會劇烈收縮，如果肚子很痛的話可以吃止痛藥緩解。",
			"在家要多休息，也要按時回診，要確認妊娠組織是否有排乾淨，以免長時間出血可能會引發細菌感染。",
			"若有回診即時處理，對身體並不會有太大的影響。」",
			"「好，那芷潔聽完之後，妳做好決定了嗎？」",
		],
		btn_upper: {
			text: "「嗯，我想生下來」",
			scene: 10104,
		},
		btn_center: {
			text: "「沒關係，就拿掉吧」",
			scene: 99992,
		},
		btn_lower: {
			text: "「我還想再聽一下生下小孩的注意事項」",
			scene: 10103,
		},
	},	
	10103: {
		description: "醫院二檢-生下小孩的注意事項",
		background: bg_clinic,
		text_color: "#4d4d4d",
		story: [
			"「如果妳想把小孩生下來，28週以內妳只需要每個月定期回來檢查一次。",
			"妳下一次產檢的時候，應該就可以聽到小孩心跳，我們也會給妳媽媽手冊。",
			"只要按照手冊上的指示回診，並記錄妳的健康狀況。",
			"如果妳還會回到學校上課，要記得不能做激烈運動，也不要熬夜太晚睡。",
			"小孩生下來後，妳就要負起當一個媽媽的責任了。",
			"好，那芷潔聽完之後，妳做好決定了嗎？」",
		],
		btn_upper: {
			text: "「嗯，我想生下來」",
			scene: 99991,
		},
		btn_center: {
			text: "「沒關係，就拿掉吧」",
			scene: 10105,
		},
		btn_lower: {
			text: "「我還想再聽一下人工流產的注意事項」",
			scene: 10102,
		},
	},	
	10104: {
		description: "醫院二檢-我想生下來",
		background: bg_clinic,
		text_color: "#4d4d4d",
		story: [
			"「如果妳想把小孩生下來，28週以內妳只需要每個月定期回來檢查一次。",
			"妳下一次產檢的時候，應該就可以聽到小孩心跳，我們也會給妳媽媽手冊。",
			"只要按照手冊上的指示回診，並記錄妳的健康狀況。",
			"如果妳還會回到學校上課，要記得不能做激烈運動，也不要熬夜太晚睡。",
			"小孩生下來後，妳就要負起當一個媽媽的責任了。",
			"好，那芷潔聽完之後，妳做好決定了嗎？」",
		],
		btn_upper: {
			text: "「嗯，我想生下來」",
			scene: 99991,
		},
		btn_center: {
			text: "「沒關係，就拿掉吧」",
			scene: 10105,
		},
	},
	10105: {
		description: "醫院二檢-沒關係，就拿掉吧",
		background: bg_clinic,
		text_color: "#4d4d4d",
		story: [
			"「如果想要進行人工流產的話，是可以用吃藥的方式。",
			"雖然不用動手術，但是吃完藥後會持續出血大約7-10天。",
			"因為子宮會劇烈收縮，如果肚子很痛的話可以吃止痛藥緩解。",
			"在家要多休息，也要按時回診，要確認妊娠組織是否有排乾淨，以免長時間出血甚至會引發細菌感染。",
			"若有回診即時處理，對身體並不會有太大的影響。",
			"好，那芷潔聽完之後，妳做好決定了嗎？」",
		],
		btn_upper: {
			text: "「嗯，我想生下來」",
			scene: 99991,
		},
		btn_center: {
			text: "「沒關係，就拿掉吧」",
			scene: 99992,
		},
	},
	11001: {
		description: "又過了一週",
		background: bg_os,
		story_date: "2018/10/5",
		page_turn: true,
		story: [
			"從確定懷孕到現在，又過了一週。",
			"我只剩下最後一週的時間，不然我就得動手術才能拿掉小孩。",
			"",
			"我常摸著我的肚子，還是覺得很不真實，常常問自己這裡面真的有東西嗎？",
			"肚子還看不出大小，但身體卻有明顯的變化，明明沒做什麼事，就好累好想睡覺。",
			"以前很愛吃的我，有時竟什麼也吃不下。",
		],
		btn_left: {
			text: "繼續",
			scene: 11002,
		},
	},
	11002: {
		description: "拿到藥",
		background: bg_get_med,
		story_date: "2018/10/8",
		page_turn: true,
		story: [
			"今天男友終於從朋友那拿了幾顆藥，他說這是RU486，說只要按照上面的步驟，小孩就會不見了。手裡拿著藥，我的內心好糾結，即便我知道吞了之後小孩就會不見，我還是很恐懼。",
			"",
			"",
			"我不知道吞了藥之後會發生什麼事？也不知道我是不是該跟他說再見？但如果要透過合法的管道拿掉小孩，就必須跟爸媽說，我該怎麼辦？",
		],
		btn_upper: {
			text: "查一下不明的藥物",
			scene: 11101,
		},
		btn_center: {
			text: "不吞",
			scene: 11105,
		},
		btn_lower: {
			text: "還是和爸媽說好了",
			scene: 8105,
		},
	},
	11101: {
		description: "查藥",
		background: bg_search,
		story: [
			"還是上網查一下這藥是什麼，免得自己怎麼死的都不知道。",
			"原來這藥就是RU486，吃了之後會導致子宮收縮，胚胎隨著子宮內膜自然崩落。",
			"但是這藥是管制藥品，要在醫生面前吃下去，不知道我自己吞了這藥會不會怎麼樣。",
		],
		btn_left: {
			text: "繼續",
			scene: 111011,
		},
	},
	111011: {
		description: "查藥",
		background: "#396a80",
		story: [
			"第二劑藥吃了之後，就會開始出血，有點像月經。",
			"網路上寫的好像很可怕，肚子會很痛。",
			"但，我再不吃藥就得動手術了，我不敢跟爸媽說，也沒有能力照顧孩子，",
			"我真的沒有選擇了...",
		],
		btn_upper: {
			text: "吞藥",
			scene: 11112,
		},
		btn_center: {
			text: "不吞",
			scene: 11105,
		},
		btn_lower: {
			text: "還是鼓起勇氣和爸媽說好了",
			scene: 8105,
		},
	},
	11112: {
		description: "吞藥-1",
		background: bg_take_med_1,
		story_date: "2018/10/7",
		page_turn: true,
		story: [
			"我決定吞藥，但我知道我不能在家裡吞。",
			"我以一起準備段考溫書為由，住在筱萱家。",
			"在筱萱家的廁所，我吞下了藥。",
		],
		btn_left: {
			text: "繼續",
			scene: 11102,
		},
	},
	11102: {
		description: "吞藥0",
		background: bg_take_med,
		story: [
			"吃完藥沒多久我開始流血，我感覺到肚子劇烈地收縮。",
			"我坐在馬桶上，因為肚子劇烈絞痛，全身不停地冒冷汗，我以為我要昏倒在廁所了。",
			"這時筱萱來敲門：「芷潔妳怎麼了，怎麼在廁所那麼久不出來？」",
		],
		btn_left: {
			text: "繼續",
			scene: 11111,
		},
	},
	11111: {
		description: "吞藥1",
		background: bg_take_med_2,
		story: [
			"強忍著痛苦：「沒事啦，這次月經量很多，肚子很痛。」",
			"眼淚無聲滑落，即便那是我最好的朋友，我還是什麼都不能說。",
			"我只能獨自面對這件事，但我真的好痛......好痛",
		],
		btn_left: {
			text: "繼續",
			scene: 11103,
		},
	},
	11103: {
		description: "吞藥2",
		background: bg_bleeding,
		story_date: "2018/10/13",
		page_turn: true,
		story: [
			"這一個禮拜我都持續地在流血，直到有一天早上起床...",
			"我發現衛生棉上有好大一塊東西，我不知道是什麼，也不太敢看。",
			"是血塊嗎？還是...？",
			"我趕緊用衛生棉把它包起來",
		],
		btn_left: {
			text: "繼續",
			scene: 11104,
		},
	},
	11104: {
		description: "吞藥3",
		background: bg_home_chicken_soup,
		story_date: "2018/10/25",
		page_turn: true,
		text_color: "#4d4d4d",
		story: [
			"終於段考結束了，一回到家就聞到香噴噴的飯菜香。",
			"媽媽從廚房探出頭來：「芷潔，洗個手準備吃飯囉！」",
			"我坐在餐桌，看著媽媽戴著手套，小心翼翼端著一大鍋湯朝我走來。",
		],
		btn_left: {
			text: "繼續",
			scene: 11113,
		},
	},
	11113: {
		description: "吞藥3",
		background: bg_home_chicken_soup_2,
		text_color: "#4d4d4d",
		story: [
			"「我看妳這次月經來氣色好差，又要忙段考，所以我燉雞湯幫妳補補身子。」",
			"看著媽媽舀湯，眼框的淚水在打轉，我好想告訴媽媽我發生什麼事。",
		],
		btn_left: {
			text: "繼續",
			scene: 11114,
		},
	},
	11114: {
		description: "吞藥3",
		background: bg_home_chicken_soup_end,
		text_color: "#4d4d4d",
		story: [
			"但此刻我只能安安靜靜地品嚐這份愛與幸福。",
		],
		btn_left: {
			text: "繼續",
			scene: 99993,
		},
	},
	11105: {
		description: "不吞",
		background: bg_get_med_dispose,
		story_date: "2018/10/7",
		page_turn: true,
		story: [
			"我選擇不吞藥，我也不知道為什麼。",
			"可能是我不敢隨便亂吞藥，也可能是我想把孩子留下來，即便我根本沒有能力。",
		],
		btn_left: {
			text: "繼續",
			scene: 11115,
		},
	},
	11115: {
		description: "不吞",
		background: bg_preg_walk_on_street,
		text_color: "#4d4d4d",
		story: [
			"為了不被發現，我刻意穿寬鬆的衣服，假借壓力大所以吃很多東西。",
			"爸媽以為我很認真的讀書，告訴我沒關係多吃一點，考上大學再來減肥。",
		],
		btn_left: {
			text: "繼續",
			scene: 11106,
		},
	},
	11106: {
		description: "不吞2",
		background: bg_ask,
		story_date: "2018/11/7",
		text_color: "#4d4d4d",
		page_turn: true,
		story: [
			"一個月的時間，我的體重增加了不少。",
			"子曜發現我的異狀，開始有所懷疑。",
			"「我上次給了妳藥，妳有吃吧？」",
		],
		btn_upper: {
			text: "有啊，我只是考試壓力大所以吃比較多",
			scene: 11108,
		},
		btn_center: {
			text: "其實我沒吃...",
			scene: 11107,
		},
	},
	11107: {
		description: "不吞3",
		background: bg_ask,
		text_color: "#4d4d4d",
		story: [
			"子曜激動地說：「妳怎麼沒吃？所以妳是想把小孩生下來嗎？那妳怎麼都不跟我說？妳打算隱瞞到什麼時候？」",
			"「我...對不起...我也不知道我在想什麼」",
			"看到我快哭他趕緊說：「對不起是我太兇了，我應該要想到妳一個人面對這件事有多不容易。不管怎麼樣，我都會陪妳走下去」",
		],
		btn_left: {
			text: "繼續",
			scene: 111091,
		},
	},
	11108: {
		description: "不吞3-1",
		background: bg_angry,
		text_color: "#4d4d4d",
		story: [
			"有啊我有吃，我只是考試壓力大所以吃比較多。",
			"男：「那就好」",
			"我到底在想什麼，為什麼不跟他說。",
			"肚子越來越大了，萬一有一天突然生了該怎麼辦？",
			"算了，船到橋頭自然直，以後的事以後再說。",
		],
		btn_left: {
			text: "繼續",
			scene: 11109,
		},
	},
	11109: {
		description: "不吞4",
		background: bg_os,
		story_date: "2019/1/12",
		page_turn: true,
		story: [
			"我的肚子隆起已非常明顯，還好現在寒流，穿很多別人也看不出來。",
			"算一算現在也有五個月了吧",
			"自從確認懷孕到現在，我再也沒回診。",
			"絕對不能讓父母、老師、同學知道，我一直隱藏的很好。",
		],
		btn_left: {
			text: "繼續",
			scene: 11110,
		},
	},
	11110: {
		description: "救護車",
		background: bg_ambulance_0,
		story_date: "2019/3/15",
		page_turn: true,
		text_color: "#4d4d4d",
		story: [
			"那天放學回家，走到一半我的肚子突然好痛。",
			"感覺到子宮不停地收縮，突然下面一陣濕，我趕緊打電話叫救護車。",
		],
		btn_left: {
			text: "繼續",
			scene: 11116,
		},
	},
	11116: {
		description: "救護車",
		background: bg_ambulance,
		story: [
			"護理人員確認我的羊水破了，必須趕緊引產，拿起我的電話通知我的父母。",
			"我聽不到媽媽講什麼，但從醫護人員的反應，",
			"媽媽應該是一而再再而三確認醫護人員有沒有打錯電話。",
		],
		bgm: [{url: amb_siren}],
		btn_left: {
			text: "繼續",
			scene: 11117,
		},
	},
	11117: {
		description: "救護車",
		background: bg_ambulance,
		story: [
			"「對，是妳女兒沒錯！」「對，她叫方芷潔」「是，她穿著高中制服.......」",
			"後來肚子又一陣劇痛，我眼前一黑，就沒聽到接下來的對話了。",
		],
		btn_left: {
			text: "繼續",
			scene: 99994,
		},
	},
	111091: {
		description: "不吞4-實話",
		background: bg_os,
		story_date: "2019/1/12",
		page_turn: true,
		story: [
			"我的肚子隆起已非常明顯，還好現在寒流，穿很多別人也看不出來。",
			"算一算現在也有五個月了吧，自從確認懷孕到現在，我再也沒回診。",
			"絕對不能讓父母、老師、同學知道，我一直隱藏的很好。",
		],
		btn_left: {
			text: "繼續",
			scene: 111101,
		},
	},
	111101: {
		description: "救護車-實話",
		background: bg_ambulance_0,
		story_date: "2019/3/15",
		page_turn: true,
		text_color: "#4d4d4d",
		story: [
			"那天放學回家，走到一半我的肚子突然好痛。",
			"感覺到子宮不停地收縮，突然下面一陣濕，我趕緊打電話叫救護車。",
		],
		btn_left: {
			text: "繼續",
			scene: 111161,
		},
	},
	111161: {
		description: "救護車-實話",
		background: bg_ambulance,
		story: [
			"護理人員確認我的羊水破了，必須趕緊引產，拿起我的電話通知我的父母。",
			"我聽不到媽媽講什麼，但從醫護人員的反應，",
			"媽媽應該是一而再再而三確認醫護人員有沒有打錯電話。",
		],
		bgm: [{url: amb_siren}],
		btn_left: {
			text: "繼續",
			scene: 111171,
		},
	},
	111171: {
		description: "救護車",
		background: bg_ambulance,
		story: [
			"「對，是妳女兒沒錯！」「對，她叫方芷潔」「是，她穿著高中制服.......」",
			"後來肚子又一陣劇痛，我眼前一黑，就沒聽到接下來的對話了。",
		],
		btn_left: {
			text: "繼續",
			scene: 99995,
		},
	},
	99991: {
		description: "生結局-1",
		background: bg_os,
		story: [
			"看到這裡你應該很想知道後來芷潔發生什麼事吧？",
			"但是芷潔從那天之後再也沒寫日記了。",
			"這裏有兩張照片，或許可以知道芷潔後來發生什麼事，你覺得是哪一個呢？",
		],
		img_btn: [["./img/99/1/1-1.png", 99911], ["./img/99/1/1-2.png", 99912]],
	},
	99992: {
		description: "生結局-2",
		background: bg_os,
		story: [
			"看到這裡你應該很想知道後來芷潔發生什麼事吧？",
			"但是芷潔從那天之後再也沒寫日記了。",
			"這裏有兩張照片，或許可以知道芷潔後來發生什麼事，你覺得是哪一個呢？",
		],
		img_btn: [["./img/99/2/2-1.png", 99921], ["./img/99/2/2-2.png", 99922]],
	},
	99993: {
		description: "生結局-3",
		background: bg_os,
		story: [
			"看到這裡你應該很想知道後來芷潔發生什麼事吧？",
			"但是芷潔從那天之後再也沒寫日記了。",
			"這裏有兩張照片，或許可以知道芷潔後來發生什麼事，你覺得是哪一個呢？",
		],
		img_btn: [["./img/99/3/3-1.png", 99931], ["./img/99/3/3-2.png", 99932]],
	},
	99994: {
		description: "生結局-4",
		background: bg_os,
		story: [
			"看到這裡你應該很想知道後來芷潔發生什麼事吧？",
			"但是芷潔從那天之後再也沒寫日記了。",
			"這裏有兩張照片，或許可以知道芷潔後來發生什麼事，你覺得是哪一個呢？",
		],
		img_btn: [["./img/99/4/4-1.png", 99941], ["./img/99/4/4-2.png", 99942]],
	},
	99995: {
		description: "生結局-4-實話",
		background: bg_os,
		story: [
			"看到這裡你應該很想知道後來芷潔發生什麼事吧？",
			"但是芷潔從那天之後再也沒寫日記了。",
			"這裏有兩張照片，或許可以知道芷潔後來發生什麼事，你覺得是哪一個呢？",
		],
		img_btn: [["./img/99/4/4-1.png", 99951], ["./img/99/4/4-2.png", 99942]],
	},
	99911: {
		description: "生結局-11",
		background: bg_ending_11,
		text_color: "#4d4d4d",
		story: [
			"還好芷潔後來順利生下了小孩，也和子曜結婚了。",
			"生完小孩後，芷潔再也沒有回去上學，更別說考大學了。",
			"對外她聲稱不想要錯過小孩的成長，其實他也害怕回到學校會遭受哪些異樣的眼光。",
			"半夜小孩常常哭鬧不停，哄了一個小時，小孩才睡著。",
			"雖然很疲憊，但看著小孩熟睡的樣子，芷潔還是覺得很幸福。",
			"子曜高中畢業後，就兼了好幾份工，為了撐起一家三口。",
			"每天回到家很晚了，他只想好好休息，洗個澡就睡了。",
			"但半夜總被小孩的哭聲吵醒，讓他身心俱疲，有一天忍不住對小孩吼了一聲。",
			"對此兩人大吵一架，芷潔抱怨他錯過寶寶的成長，子曜抱怨她不懂在外打拼的辛苦。",
			"因為小孩的事，夫妻之間時常有爭吵，鬧得不是很愉快。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99991,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99912: {
		description: "生結局-12",
		background: bg_ending_12,
		text_color: "#4d4d4d",
		story: [
			"決定要生下小孩後，芷潔與子曜也決定要結婚，為了給小孩一個完整的家。",
			"當這段關係不再只是單純的戀愛，多了責任與義務時，事情不再如想像中美好。",
			"芷潔常常一個人去產檢，因為總是聯絡不上子曜。",
			"談論婚禮的規劃子曜也總是漫不經心，像是變了個人似的。",
			"曾經的諾言無法兌現，芷潔常一個人哭泣，猶豫是否要和子曜走一輩子。",
			"在這過程中又發生了許多爭吵，小孩還沒生下來兩人就分手了。",
			"子曜如釋重負，丟下母子倆，消失的無影無蹤。",
			"芷潔還是決定生下小孩，她相信只要她努力，一定也可以給小孩一個幸福的家。",
			"每天從早到晚兼了好幾份工作，只為了賺更多錢給小孩更好的生活。",
			"有一天下午難得有空，芷潔來到保母家想看看小孩在做什麼？",
			"是開心地玩玩具？還是正睡得香甜？",
			"保母正在喂小孩吃副食品，小孩一邊叫著「媽媽」一邊開心地吃著。",
			"看著自己的小孩對著別人叫媽媽，芷潔明白自己早已錯過孩子的成長。",
			"心痛地留下眼淚，轉頭又回去工廠繼續工作",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99991,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99921: {
		description: "生結局-21",
		background: bg_ending_21,
		text_color: "#4d4d4d",
		story: [
			"那件事後芷潔和子曜靜下心來好好讀書，分別考上不同的大學。",
			"然而子曜一直覺得愧疚，是他沒有保護好芷潔，是他讓她受了那麼多苦。",
			"每次看到芷潔，他都會想起小孩，他倆之間已經回不到從前。",
			"分隔兩地的戀情，需要花時間經營，慢慢地兩人漸行漸遠，也就分手了。",
			"四年的時光，芷潔非常努力，除了認真讀書，也積極參與課外活動。",
			"大學還沒畢業，因為優秀的成績和豐富的經驗，芷潔就找到了工作。",
			"沒有人知道芷潔曾經發生過什麼，這四年她和子曜也沒再聯絡。",
			"帶著這份回憶，讓她更加努力生活，對任何事情也都比以往更加謹慎。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99992,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99922: {
		description: "生結局-22",
		background: bg_ending_22,
		text_color: "#4d4d4d",
		story: [
			"經過這件事後，芷潔和子曜的感情似乎變得更加穩固，",
			"除了更珍惜這段感情，也謹慎看待每一件事。",
			"他們一同考上同一所大學，在這期間他們更加了解什麼是愛、什麼是責任，",
			"從畢業到工作，他們總是攜手前行，愛情長跑十年後，終於結婚了。",
			"現在他們正打算要生一個小孩，相比高中時，他們成熟不少。",
			"如今他們一起承擔一起面對，一起開心地迎接新生命的到來。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99992,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99931: {
		description: "生結局-31",
		background: bg_ending_31,
		text_color: "#4d4d4d",
		story: [
			"那件事過後，芷潔以為小孩不見了，但其實沒有。",
			"直到發現不對勁時，小孩已經六個月了。",
			"逐漸變大的肚子，最終也瞞不住爸媽和老師。",
			"子曜瞬間成為眾矢之的，大家都覺得他是一個只會玩卻不負責任的人。",
			"委屈的子曜以為芷潔騙他吃了藥，兩人大吵一架後，子曜轉學也分手了。",
			"芷潔深深明白自己無法給小孩一個好的成長環境，在和父母商議後決定向機構申請出養。",
			"送走小孩的那一刻，芷潔淚流不止，即便小孩一開始的到來多麽措手不及。",
			"十個月的相處的時間，她早已喜歡上小孩，也了解母親的偉大。",
			"「但願妳能在另一個家幸福快樂地成長。」這是芷潔對小孩說的最後一句話。",
			"聽說小孩最後讓一對夫婦收養。",
			"他們多年求子一直無果，孩子照顧得特別好。",
			"這是他們寄給芷潔的照片，小孩才剛學會走路。",
			"儘管捨不得，芷潔還是得回到學校繼續考大學。",
			"或許在不久的將來芷潔會是一位新鮮的大學生，所有美好的事物都在等待著她。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99993,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99932: {
		description: "生結局-32",
		background: bg_ending_32,
		text_color: "#4d4d4d",
		story: [
			"那件事過後，芷潔的體重變突然暴增，月經來的時候也比以前痛好幾倍。",
			"醫生說芷潔是因為內分泌失調，必須好好調養一段時間。",
			"爸媽以為芷潔是考試壓力太大，但只有她自己清楚應該是私自亂吃藥的關係。",
			"因為身體的變化，芷潔和子曜發生許多爭執，",
			"她常常抱怨當初就是吞了子曜拿來的藥，身體才會變成這樣。",
			"子曜一開始很自責，後來受不了芷潔的總是把錯怪到子曜身上，",
			"兩人一直吵架沒多久後就分手了。",
			"慶幸的是，一年後芷潔的生活算是回到正軌，下個月就是大考了。",
			"或許在不久的將來芷潔會是一位新鮮的大學生，所有美好的事物都在等待著她。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99993,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99941: {
		description: "生結局-41",
		background: bg_ending_41,
		text_color: "#4d4d4d",
		story: [
			"芷潔在醫院生下小孩後，一夕間老師、同學、家長都知道了。",
			"子曜瞬間成為眾矢之的，大家都覺得他是一個只會玩卻不負責任的人。",
			"子曜因為芷潔的欺騙大吵了一架，從此人間蒸發了，有人說他轉學有人說他跑了。",
			"芷潔肯定被父母罵得很慘，政府也將這案子交給社福機構，協助芷潔未成年生下小孩後，所需要的協助與關懷。",
			"芷潔毅然決然休學，打了好幾份工，他相信孩子沒有爸爸也能幸福快樂地成長。",
			"還好芷潔後來遇到小翰，一個真心疼她愛她的男人，願意娶她並把小孩視為己出。",
			"兩人共組家庭後，沒多久芷潔也和小翰生了一個自己的小孩。",
			"然而婆家、鄰居都知道第一個小孩是和別的男人生的。",
			"小翰在外縣市賺錢養家，留下芷潔一個人面對來自四面八方的冷嘲熱諷，很是辛苦。",
			"然而對芷潔來說，不管遇到什麼問題，只要小孩能快樂幸福，再辛苦也是值得的。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99994,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99951: {
		description: "生結局-41",
		background: bg_ending_41,
		text_color: "#4d4d4d",
		story: [
			"芷潔在醫院生下小孩後，一夕間老師、同學、家長都知道了。",
			"子曜瞬間成為眾矢之的，大家都覺得他是一個只會玩卻不負責任的人。",
			"原本子曜說好會陪芷潔走下去，從此人間蒸發了，",
			"有人說他轉學有人說他跑了。",
			"芷潔肯定被父母罵得很慘，政府也將這案子交給社福機構，",
			"協助芷潔未成年生下小孩後，所需要的協助與關懷。",
			"芷潔毅然決然休學，打了好幾份工，他相信孩子沒有爸爸也能幸福快樂地成長。",
			"還好芷潔後來遇到小翰，一個真心疼她愛她的男人，願意娶她並把小孩視為己出。",
			"兩人共組家庭後，沒多久芷潔也和小翰生了一個自己的小孩。",
			"然而婆家、鄰居都知道第一個小孩是和別的男人生的。",
			"小翰在外縣市賺錢養家，留下芷潔一個人面對來自四面八方的冷嘲熱諷，很是辛苦。",
			"然而對芷潔來說，不管遇到什麼問題，只要小孩能快樂幸福，再辛苦也是值得的。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99995,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
	99942: {
		description: "生結局-42",
		background: bg_ending_42,
		text_color: "#4d4d4d",
		story: [
			"儘管緊急動了手術，小孩還是沒能活下來。",
			"芷潔一度很自責，都是自己沒有好好去醫院產檢，才沒能發現小孩不健康。",
			"「一名高中女學生  在醫院產下死胎」",
			"儘管在努力掩飾，芷潔後來還是上了新聞，全國人民震驚究竟社會是出了什麼問題？",
			"家長、老師甚至是身邊的朋友，都不知道芷潔已經懷孕七個月。",
			"儘管芷潔又回到學校上課，走在路上還是很多人都對她指指點點。",
			"她現在唯一想做的是好好努力考大學，到一個沒人認識她的地方開始新的生活。",
		],
		btn_left: {
			text: "觀看其他結局",
			scene: 99994,
		},
		btn_middle: {
			text: "再玩一次",
			scene: 1000,
		},
		btn_right: {
			text: "認識議題",
			href : "https://www.betweentwolines.org/issue.html",
		},
	},
}

$(document).ready(function() {
    turn_on_btn(true);
    close_btn(true);
    game_center();
});

function turn_on_btn(handler = false, data) {
    if (handler) {
        var btn = $("#open-popup").on("click", function() {
            $(".popup").removeClass("popup-hide");
        });
        var btns = $("#open-popups").on("click", function() {
            $(".popup").removeClass("popup-hide");
        });
    }
}

function close_btn(handler = false, data) {
    if (handler) {
        var game = $(".game");
        var btn = $("#close-popup").on("click", function() {
            $(".popup").addClass("popup-hide");
            $("audio#bg", game.contents())[0].pause();
            game[0].contentWindow.location.reload(true);
        });
    }
}

function game_center() {}
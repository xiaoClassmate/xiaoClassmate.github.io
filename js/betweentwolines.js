function lock() {
    var a = !1;
    $(".lock").on({ mouseenter: function() { $(this).html("<i class='fas fa-lock'></i> \u5373\u5c07\u4e0a\u7dda") }, mouseleave: function() { $(this).html("<i class='fas fa-lock'></i> \u60c5\u5883\u904a\u6232") }, click: function() { return 0 == a ? ($(this).html("<i class='fas fa-lock'></i> \u5373\u5c07\u4e0a\u7dda"), a = !0) : ($(this).html("<i class='fas fa-lock'></i> \u60c5\u5883\u904a\u6232"), a = !1) } })
}

function scrollFunction() { $(".formfeedback").css(document.body.scrollTop > 130 || document.documentElement.scrollTop > 130 ? { bottom: "72px" } : { bottom: "-100px" }) }

function nav_dropdown_handler() { $(".open-level2").on({ mouseenter: function() { jQuery(window).width() >= 768 && $(".level2").addClass("show-preg") }, mouseleave: function() { jQuery(window).width() >= 768 && $(".level2").removeClass("show-preg") }, click: function() { $(this).toggleClass("phonenav"), $(".level2").hasClass("show-preg") ? $(".level2").removeClass("show-preg") : $(".level2").addClass("show-preg") } }), $(".level2").on({ mouseenter: function() { jQuery(window).width() >= 768 && $(this).addClass("show-preg") }, mouseleave: function() { jQuery(window).width() >= 768 && $(this).removeClass("show-preg") } }), $(".open-level3").on({ mouseenter: function() { jQuery(window).width() >= 768 && $(".level3").addClass("show-preg-level3") }, mouseleave: function() { jQuery(window).width() >= 768 && $(".level3").removeClass("show-preg-level3") }, click: function() { $(".level3").hasClass("show-preg-level3") ? $(".level3").removeClass("show-preg-level3") : $(".level3").addClass("show-preg-level3") } }), $(".level3").on({ mouseenter: function() { $(this).addClass("show-preg-level3") }, mouseleave: function() { $(this).removeClass("show-preg-level3") } }) }
$(document).ready(function() {
    $("footer").load("footer.html"), $(".menu").click(function() { $("nav").slideToggle(), $("i", this).toggleClass("fa-bars fa-times") });
    var a = !1;
    $(".fixedform").click(function() { return 0 == a ? ($(this).html("<img src='images/formclose.png'>"), $(".feedback").css({ visibility: "visible" }), a = !0) : ($(this).html("<img src='images/formwhite.png'>"), $(".feedback").css({ visibility: "hidden" }), a = !1) }), nav_dropdown_handler(), lock(), window.onscroll = function() { scrollFunction() }
});
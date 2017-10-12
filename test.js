$(function() {
    function n() {
        $(".navbar-transition").offset().top > 20 ? $(".navbar-transition").addClass("navbar-collapse") : $(".navbar-transition").removeClass("navbar-collapse")
    }
    wow = new WOW({
        mobile: !1,
        live: !1
    }), wow.init(), $("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 80
    }), n(), $(window).scroll(n), $(".navbar-nav li a").click(function() {
        $(".navbar-toggle:visible").click()
    }), $("a.page-scroll").bind("click", function(n) {
        var a = $(this);
        $("html, body").stop().animate({
            scrollTop: $(a.attr("href")).offset().top - 70
        }, 1e3, "easeInOutExpo"), n.preventDefault()
    }), setInterval(function() {
        $(".cursor").toggleClass("invisible")
    }, 500), $(".company-logo").mouseenter(function(n) {
        $(n.target).addClass("animated pulse"), $(n.target).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(n) {
            $(n.target).removeClass("animated pulse")
        })
    })
});

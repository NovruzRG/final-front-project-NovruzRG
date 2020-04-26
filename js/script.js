$(document).ready(function () {
    // nav menu
    $(".toggler").on('click', function () {
        let tog_This = $(this)
        if (tog_This.hasClass("active")) {
            tog_This.removeClass("active_last");
            $("body").removeClass("opened_nav");
            setTimeout(function () {
                tog_This.removeClass("active_second");
            }, 300);
            setTimeout(function () {
                tog_This.removeClass("active");
            }, 600);
            $("div#aside_nav, header#header").removeClass("show_me");
        } else {
            tog_This.addClass("active");
            $("body").addClass("opened_nav");
            setTimeout(function () {
                tog_This.addClass("active_second");
            }, 300);
            setTimeout(function () {
                tog_This.addClass("active_last");
            }, 600);
            $("div#aside_nav, header#header").addClass("show_me");
        }
        return false;
    });
    // nav menu end
    // contacts
    $(document).mouseup(function (e) {
        let div = $(".smart_icons");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".smart_icons ul").removeClass("show_me");
        }
    });
    // contacts end
    // html load for main view animation
    $(".inner_bg, .index_bg, .index_inset").addClass("show_me");
    let index_count = 0;
    setTimeout(function () {
        setInterval(function () {
            $(".index_nav ul li").eq(index_count).addClass("show_me");
            index_count++;
        }, 300);
    }, 300);
    if ($(".index_bg").length) {
        $(".index_bg > div > div img").eq(0).addClass("scale_me");
    }

    $(".index_bullets a").click(function () {
        let main = $(this),
            src = $(this).attr("href"),
            name = $(this).data("name"),
            link = $(this).data("link"),
            target = $(this).data("target");
        index_go(main, src, name, link, target);
        return false;
    });

    function index_go(main, src, name, link, target) {
        $(".index_bullets a").removeClass("active");
        main.addClass("active");
        $(".index_bullets span").addClass("hide_me");
        $(".index_bg > div > div").prepend("<img src='" + src + "' alt='' />");
        $(".index_bg").imagesLoaded(function () {
            $(".index_bg > div > div img").eq(1).addClass("hide_me");
            setTimeout(function () {
                $(".index_bg > div > div img").eq(0).addClass("scale_me");
                if ($(".index_bullets a.active").index() == $(".index_bullets a").length - 1) {
                    $(".index_bullets span").html($(".index_bullets a:first-child").data("name").replace("<br>", " ").replace("<br/>", " "));
                } else {
                    $(".index_bullets span").html($(".index_bullets a.active + a").data("name").replace("<br>", " ").replace("<br/>", " "));
                }
                $(".index_bullets span").removeClass("hide_me");
                $(".index_bg > div > div img").eq(1).remove();
            }, 450);
            $(".index_inset h2").addClass("hide_me");
            setTimeout(function () {
                $(".index_inset h2").html(name);
                $(".index_inset h2").removeClass("hide_me");
            }, 480);
            setTimeout(function () {
                $(".index_inset .link").addClass("hide_me");
            }, 150);
            setTimeout(function () {
                $(".index_inset .link a").attr("href", link);
                $(".index_inset .link a").attr("target", target);
                $(".index_inset .link").removeClass("hide_me");
            }, 650);
        });
    }

    let count = 0,
        bullets_length = $(".index_bullets a").length;

    function main_carousel_interval() {
        main_intervalus = setInterval(function () {
            count++;
            if (count == bullets_length) {
                count = 0;
            }
            $(".index_bullets a").eq(count).click();
        }, 5000);
    }
    setTimeout(function () {
        if ($(window).width() > 768) {
            main_carousel_interval();
        }
    }, 300);
    $(document).on("click", ".index_nav > ul > li > a", function () {
        $(this).addClass("preloader");
    });
    // html load for main view animation end
    // side nav fix
    $(window).scroll(function () {
        var top_pos = document.documentElement.scrollTop || document.body.scrollTop;
        if ($(window).width() < 768) {
            if (top_pos > 120) {
                $(".inner_nav").addClass("fix");
            } else {
                $(".inner_nav").removeClass("fix");
            }
        } else {
            if (top_pos > 240) {
                $(".inner_nav").addClass("fix");
            } else {
                $(".inner_nav").removeClass("fix");
            }
        }
    });
    // side nav fix end
    // symptoms switcher
    $(document).on('click', '.switcher', function () {
        var t = $(this);
        if (t.hasClass('search')) {
            t.removeClass('search')
            $('.search_by_image_header .text').removeClass('show_me').addClass('hide_me');
            $('.search_by_image_header .symptom_form').removeClass('hide_me').addClass('show_me');
            $('.symptom_search').removeClass('hide_me').addClass('show_me');
            $('.symptom_map').removeClass('show_me').addClass('hide_me');
            $('.tags_list div[data-tags="1"]').addClass('show_me')
        } else {
            t.addClass('search')
            $('.search_by_image_header .text').removeClass('hide_me').addClass('show_me');
            $('.search_by_image_header .symptom_form').removeClass('show_me').addClass('hide_me');
            $('.symptom_search').removeClass('show_me').addClass('hide_me');
            $('.symptom_map').removeClass('hide_me').addClass('show_me');
            $('.tags_list div[data-tags="1"]').removeClass('show_me')
        }
        return false;
    })
    $(document).on("click", ".tags_list div[data-tags='1']  a", function () {
        $(this).toggleClass("active lookup");
        let count = $(".lookup").length;
        $(".last_articles article").hide();
        for (let a = 0; a < count; a++) {
            let index = $(".lookup").eq(a).data("value");
            $(`.${index}`).show();
        }
        if ($(".lookup").length == 0) {
            $(".last_articles article").show();
        }
    });
    // symptoms switcher end
    // doctors accordion
    $(document).on("click", ".doctors_grid section h3 a", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
            $(this).parent().next().animate({
                "height": 'hide'
            }, 350)
        } else {
            $(this).addClass("active")
            $(this).parent().next().animate({
                "height": 'show'
            }, 350)
        }
        return false;
    });
    // doctors accordion end
    // branch hiden modal nav 
    $(document).on("click", ".fillial_menu a.call_menu", function () {
        $(".fillial_menu  div").css("display", "block");
        return false;
    });
    $(document).mouseup(function (e) {
        var div = $(".fillial_menu");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".fillial_menu  div").css("display", "none");
        }
    });
    // branch hiden modal nav end
});
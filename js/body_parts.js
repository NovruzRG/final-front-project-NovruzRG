$(".symptom_map map area").mouseover(function () {
    $(this).parent().prev().find("img").attr("src", $(this).data("part"));
});
$(".symptom_map map area").mouseleave(function () {
    $(".symptom_map .mapped_image img").attr("src", $(".symptom_map").data("default"));
});

$(".symptom_map map area").click(function () {
    $(".switcher").removeClass('search');
    $('.search_by_image_header .text').removeClass('show_me').addClass('hide_me');
    $('.search_by_image_header .symptom_form').removeClass('hide_me').addClass('show_me');
    $('.symptom_search').removeClass('hide_me').addClass('show_me');
    $('.symptom_map').removeClass('show_me').addClass('hide_me');
    $('.tags_list div[data-tags="1"]').addClass('show_me')
    $(".last_articles article").hide();
    $(`.${$(this).data("tags")}`).show();
    $(`.tags_list>div>div a[data-value="${$(this).data("tags")}"]`).toggleClass("active lookup");
});
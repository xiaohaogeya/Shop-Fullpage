$(function () {
    let k = $(window).height
    $('#fullpage').fullpage({
        navigation: true,
        afterLoad: function (anchorLink, index) {
            if (index === 2) {
                $('.search').show().animate({"right": 370}, 1500, function () {
                    $('.search-words').animate({"opacity": 1}, 500, function () {
                        $('.search').hide();
                        $('.search-02-1').show().animate({"height": 30, "right": 250, "bottom": 452}, 1000);
                        $('.goods-02').show().animate({"height": 218}, 1000)
                        $('.words-02').animate({"opacity": 1}, 500)
                    })
                })
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index === 2 && nextIndex === 3) {
                $(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207 , "left": 260}, 2000, function() {
                    $(".img-01-a").animate({"opacity": 1}, 500, function() {
                        $(".btn-01-a").animate({"opacity": 1}, 500, function() {
                            $(".next").fadeIn();
                        });
                    })
                });
                $(".cover").show();
            }
        }
    });
});
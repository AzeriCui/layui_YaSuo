;
//(function () {
//    openFrameUrl = function () {
//        alert(0)
//    }
//}());

(function (window) {
    "use strict";

    if (layui instanceof Object) {
        window.jQuery = layui.jquery
        window.$ = layui.jquery;
        window.element = layui.element;
        window.form = layui.form;
        window.layer = layui.layer;
        window.table = layui.table;

        window.element.init();
        window.form.render();
    }

    var YaSuo = function () { };

    YaSuo.prototype.openFrame = function (title, url) {
        alert(15)
    };





    $(".yasuo-tab-nav").click(function () {
        if ($(this).hasClass("yasuo-icon-menu")) {
            var rotate180deg = "yasuo-rotate-180deg"
                , yasuoSide = ".layui-side"
                , yasuoTab = ".yasuo-tab-box"
                , yasuoContent = ".yasuo-nav-content";

            if ($(this).find("i").hasClass(rotate180deg)) {
                $(this).find("i").removeClass(rotate180deg)
                $(yasuoSide).animate({ left: "-200px" }, 200);
                $(yasuoTab).animate({ left: "0px" }, 200);
                $(yasuoContent).animate({ left: "0px" }, 200);

            } else {
                $(this).find("i").addClass(rotate180deg)
                $(yasuoContent).animate({ left: "200px" }, 200);
                $(yasuoTab).animate({ left: "200px" }, 200);
                $(yasuoSide).animate({ left: "0px" }, 200);
            }
        }
        else if ($(this).hasClass("yasuo-icon-right")) {
            var yasuoTitle = ".yasuo-nav-title";
            var lastLeft = ".yasuo-nav-title li:last";

            var tag = 100;
            var totalWidth = parseInt($(lastLeft).position().left) + parseInt($(lastLeft).width()) + tag;
            var titleWidth = parseInt($(yasuoTitle).width());
            var leftOffset = parseInt($(yasuoTitle).position().left);
            var offsetWidth = totalWidth + leftOffset - titleWidth;

            if (offsetWidth > titleWidth) {
                offsetWidth = leftOffset - titleWidth + tag;
                $(yasuoTitle).css({ left: offsetWidth + "px" });
            }
            else {
                offsetWidth = leftOffset - offsetWidth;
                $(yasuoTitle).css({ left: offsetWidth + "px" });
            }
        }
        else if ($(this).hasClass("yasuo-icon-left")) {
            var yasuoTitle = ".yasuo-nav-title";
            var lastLeft = ".yasuo-nav-title li:last";

            var titleWidth = parseInt($(yasuoTitle).width());
            var leftOffset = parseInt($(yasuoTitle).position().left);
            var offsetWidth = leftOffset + titleWidth - 100;

            if (offsetWidth < 0) {
                $(yasuoTitle).css({ left: offsetWidth + "px" });
            }
            else {
                $(yasuoTitle).css({ left: "0px" });
            }
        }

    })

    window.yasuo = new YaSuo();

}(this));
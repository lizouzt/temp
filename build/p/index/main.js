define("p/index/main", [ "require", "c/configure", "p/index/mod/topList.jst", "c/widget/loadWallPaper", "c/widget/header", "c/widget/footer" ], function(require, conf, tpl) {
    var EventCtl = function() {
        if (conf.device.isMobile) {
            document.body.addEventListener("touchmove", function(e) {
                e.preventDefault();
            });
        }
    }, init = function() {
        EventCtl();
    }();
});

define("c/configure", [], function(require) {
    var devicePixelRatio = window.devicePixelRatio || 1, DevScreen = {
        w: document.documentElement.clientWidth * devicePixelRatio,
        h: document.documentElement.clientHeight * devicePixelRatio
    };
    return {
        BingSourceUrl: "http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",
        localBingSourceUrl: "../static/HPImageArchive.json",
        device: {
            screen: DevScreen,
            isMobile: true
        }
    };
});

define("p/index/mod/topList.jst", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t, __p = "", __e = _.escape;
        with (obj) {
            __p += "<div>\n    " + ((__t = obj.name) == null ? "" : __t) + "\n</div>";
        }
        return __p;
    };
});

define("c/widget/loadWallPaper", [ "require", "c/configure" ], function(require, conf) {
    var load = function(cb) {
        $.ajax({
            url: conf.localBingSourceUrl,
            success: function(obj) {
                cb && cb(obj.images);
            }
        });
    };
    load(function(arr) {
        var _url = arr[0].url, _img = document.createElement("img"), _wall = document.getElementById("wall");
        _img.onload = function() {
            _wall.style.backgroundImage = "url(" + _url + ")";
            _wall.className += " active";
            document.body.className += "white";
            delete _img;
        };
        _wall && (_img.src = _url);
    });
});

define("c/widget/header", [], function(require) {
    var ShareList = {
        weibo: "http://service.weibo.com/share/share.php?content=utf-8&url=<%=url%>&title=<%=content%>",
        facebook: "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=<%=url%>",
        twitter: "https://twitter.com/intent/tweet?text=<%=content%><%=url%>&source=webclient",
        google: "https://plus.google.com/share?url=<%=url%>"
    };
    var EventCtl = function() {
        $("header").on("click", ".hst", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var type = this.getAttribute("data-sharing"), url = window.location.href, content = document.title;
            var shareTar = ShareList[type].replace("<%=url%>", url).replace("<%=content%>", content);
            window.open(shareTar, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=no, resizable=yes, copyhistory=yes, width=600, height=600");
        });
        $(".h-s").on("click", function() {
            $(this).toggleClass("active");
            $("#hsl").toggleClass("active");
        });
    }, init = function() {
        EventCtl();
    }();
});

define("c/widget/footer", [], function(require) {
    var hockBtn = document.getElementById("J-fh"), footer = document.getElementById("J-footer");
    var EventCtl = function() {
        "addEventListener" in window && hockBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            footer.classList.toggle("active");
            hockBtn.classList.toggle("active");
        });
    }, init = function() {
        EventCtl();
    }();
});

define("p/index/main", [ "require", "c/configure", "p/index/mod/topList.jst", "c/widget/loadWallPaper" ], function(require, conf, tpl) {
    console.log(tpl({
        name: "xxxxxx"
    }));
});

define("c/configure", [], function(require) {
    var devicePixelRatio = window.devicePixelRatio || 1, DevScreen = {
        w: document.documentElement.clientWidth * devicePixelRatio,
        h: document.documentElement.clientHeight * devicePixelRatio
    };
    return {
        BingSourceUrl: "http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",
        localBingSourceUrl: "../static/HPImageArchive.json",
        Device: {
            screen: DevScreen
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

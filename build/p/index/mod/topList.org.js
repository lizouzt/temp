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


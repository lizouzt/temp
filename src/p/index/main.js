define([
    'require',
    'c/configure',
    'p/index/mod/topList.jst',
    'c/widget/loadWallPaper',
    'c/widget/header',
    'c/widget/footer',
    ], function(require,conf,tpl){
    
    var EventCtl = function(){
        if(conf.device.isMobile){
            document.body.addEventListener('touchmove', function(e){e.preventDefault()})
        }
    },

    init = function(){
        EventCtl();
    }();
});
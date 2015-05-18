define(function(require){
    var devicePixelRatio = window.devicePixelRatio || 1,
    DevScreen = {
        w: document.documentElement.clientWidth * devicePixelRatio,
        h: document.documentElement.clientHeight * devicePixelRatio
    };

    return {
        BingSourceUrl: 'http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',
        localBingSourceUrl: '../static/HPImageArchive.json',
        Device: {
            screen: DevScreen
        }
    }
});
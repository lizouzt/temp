define(['c/configure'],function(conf){
    var load = function(cb){
        $.ajax({
            url: conf.localBingSourceUrl,
            success: function(obj){
                cb && cb(obj.images);
            }
        })
    };
    load(function(arr){
        var _url = arr[0].url,
            _img = document.createElement('img'),
            _wall = document.getElementById('wall');

        _img.onload = function(){
            _wall.style.backgroundImage = 'url('+_url+')';
            _wall.className += ' active';
            document.body.className += 'white'
            delete _img;
        };
        _wall && (_img.src = _url);
    })
});
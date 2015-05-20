define(function(require){
    var hockBtn = document.getElementById('J-fh'),
        footer = document.getElementById('J-footer');

    var EventCtl = function(){
        'addEventListener' in window && hockBtn.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            footer.classList.toggle('active');
            hockBtn.classList.toggle('active');
        });
    },

    init = (function(){
        EventCtl();
    })();
});
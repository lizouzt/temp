define(function(require){
    var ShareList = {
        weibo: 'http://service.weibo.com/share/share.php?content=utf-8&url=<%=url%>&title=<%=content%>',
        facebook: 'https://www.facebook.com/sharer/sharer.php?s=100&p[url]=<%=url%>',
        twitter: 'https://twitter.com/intent/tweet?text=<%=content%><%=url%>&source=webclient',
        google: 'https://plus.google.com/share?url=<%=url%>'
    };

    var EventCtl = function(){
        $('header').on('click','.hst',function(e){
            e.preventDefault();
            e.stopPropagation();
            var type = this.getAttribute('data-sharing'),
                url = window.location.href,
                content = document.title;

            var shareTar = ShareList[type].replace('<%=url%>',url).replace('<%=content%>', content);

            window.open(shareTar,'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=no, resizable=yes, copyhistory=yes, width=600, height=600');
        });

        $('.h-s').on('click', function(){
            $(this).toggleClass('active');
            $('#hsl').toggleClass('active');
        });
    },

    init = (function(){
        EventCtl();
    })();
});
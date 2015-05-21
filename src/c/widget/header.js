define(function(require){
    var ShareList = {
        weibo: 'http://service.weibo.com/share/share.php?content=utf-8&url=<%=url%>&title=<%=content%>',
        facebook: 'https://www.facebook.com/sharer/sharer.php?s=100&p[url]=<%=url%>',
        twitter: 'https://twitter.com/intent/tweet?text=Glossary | Elfer Push Online http://git.iioly.com/gitbook/GLOSSARY.html&source=webclient',
        google: 'https://plus.google.com/share?url=<%=url%>'
    };

    var EventCtl = function(){
        $('header').on('click','.hsbtn',function(e){
            var type = this.getAttribute('data-share'),
                url = window.location.href,
                content = document.title;

            var shareTar = ShareList[type].replace('<%=url%>',url).replace('<%=content%>', content);

            window.open();
        });

        $('.h-s').on('click', function(){
            $(this).toggleClass('active');
        },false);
    },

    init = (function(){
        EventCtl();
    })();
});
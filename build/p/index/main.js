/*! btengine 2015-06-30 */
 /**********************************************
 * Handcrafted by Wooha•Yeo, 
 **********************************************/
define("p/index/main",["c/configure","p/index/mod/topList.jst","c/widget/loadWallPaper","c/widget/header","c/widget/footer"],function(a,b){var c=function(){a.device.isMobile&&document.body.addEventListener("touchmove",function(a){a.preventDefault()})};(function(){c()})()}),define("c/configure",[],function(){var a=window.devicePixelRatio||1,b={w:document.documentElement.clientWidth*a,h:document.documentElement.clientHeight*a};return{BingSourceUrl:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",localBingSourceUrl:"../static/HPImageArchive.json",device:{screen:b,isMobile:!0}}}),define("p/index/mod/topList.jst",[],function(){return function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div>\n    "+(null==(__t=obj.name)?"":__t)+"\n</div>";return __p}}),define("c/widget/loadWallPaper",["c/configure"],function(a){var b=function(b){$.ajax({url:a.localBingSourceUrl,success:function(a){b&&b(a.images)}})};b(function(a){var b=a[0].url,c=document.createElement("img"),d=document.getElementById("wall");c.onload=function(){d.style.backgroundImage="url("+b+")",d.className+=" active",document.body.className+="white",delete c},d&&(c.src=b)})}),define("c/configure",[],function(){var a=window.devicePixelRatio||1,b={w:document.documentElement.clientWidth*a,h:document.documentElement.clientHeight*a};return{BingSourceUrl:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",localBingSourceUrl:"../static/HPImageArchive.json",device:{screen:b,isMobile:!0}}}),define("c/widget/header",[],function(){var a={weibo:"http://service.weibo.com/share/share.php?content=utf-8&url=<%=url%>&title=<%=content%>",facebook:"https://www.facebook.com/sharer/sharer.php?s=100&p[url]=<%=url%>",twitter:"https://twitter.com/intent/tweet?text=<%=content%><%=url%>&source=webclient",google:"https://plus.google.com/share?url=<%=url%>"},b=function(){$("header").on("click",".hst",function(b){b.preventDefault(),b.stopPropagation();var c=this.getAttribute("data-sharing"),d=window.location.href,e=document.title,f=a[c].replace("<%=url%>",d).replace("<%=content%>",e);window.open(f,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=no, resizable=yes, copyhistory=yes, width=600, height=600")}),$(".h-s").on("click",function(){$(this).toggleClass("active"),$("#hsl").toggleClass("active")})};(function(){b()})()}),define("c/widget/footer",[],function(){var a=document.getElementById("J-fh"),b=document.getElementById("J-footer"),c=function(){"addEventListener"in window&&a.addEventListener("click",function(c){c.preventDefault(),c.stopPropagation(),b.classList.toggle("active"),a.classList.toggle("active")})};(function(){c()})()});
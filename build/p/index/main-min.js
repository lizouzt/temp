/*! btengine 2015-06-26 */
 /**********************************************
 * Handcrafted by Wooha•Yeo, 
 * Work enjoy with scaffold! 
 * Version: v0.0.0 
 **********************************************/
define("p/index/main",["require","c/configure","p/index/mod/topList.jst","c/widget/loadWallPaper","c/widget/header","c/widget/footer"],function(a,b,c){var d=function(){b.device.isMobile&&document.body.addEventListener("touchmove",function(a){a.preventDefault()})};(function(){d()})()}),define("c/configure",[],function(a){var b=window.devicePixelRatio||1,c={w:document.documentElement.clientWidth*b,h:document.documentElement.clientHeight*b};return{BingSourceUrl:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",localBingSourceUrl:"../static/HPImageArchive.json",device:{screen:c,isMobile:!0}}}),define("p/index/mod/topList.jst",[],function(){return function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div>\n    "+(null==(__t=obj.name)?"":__t)+"\n</div>";return __p}}),define("c/widget/loadWallPaper",["require","c/configure"],function(a,b){var c=function(a){$.ajax({url:b.localBingSourceUrl,success:function(b){a&&a(b.images)}})};c(function(a){var b=a[0].url,c=document.createElement("img"),d=document.getElementById("wall");c.onload=function(){d.style.backgroundImage="url("+b+")",d.className+=" active",document.body.className+="white",delete c},d&&(c.src=b)})}),define("c/widget/header",[],function(a){var b={weibo:"http://service.weibo.com/share/share.php?content=utf-8&url=<%=url%>&title=<%=content%>",facebook:"https://www.facebook.com/sharer/sharer.php?s=100&p[url]=<%=url%>",twitter:"https://twitter.com/intent/tweet?text=<%=content%><%=url%>&source=webclient",google:"https://plus.google.com/share?url=<%=url%>"},c=function(){$("header").on("click",".hst",function(a){a.preventDefault(),a.stopPropagation();var c=this.getAttribute("data-sharing"),d=window.location.href,e=document.title,f=b[c].replace("<%=url%>",d).replace("<%=content%>",e);window.open(f,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=no, resizable=yes, copyhistory=yes, width=600, height=600")}),$(".h-s").on("click",function(){$(this).toggleClass("active"),$("#hsl").toggleClass("active")})};(function(){c()})()}),define("c/widget/footer",[],function(a){var b=document.getElementById("J-fh"),c=document.getElementById("J-footer"),d=function(){"addEventListener"in window&&b.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation(),c.classList.toggle("active"),b.classList.toggle("active")})};(function(){d()})()});
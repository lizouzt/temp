/*! btengine 2015-05-18 */
 /**********************************************
 * Handcrafted by Wooha•Yeo, 
 * Work enjoy with scaffold! 
 * Version: v0.0.0 
 **********************************************/
define("p/index/main",["require","c/configure","p/index/mod/topList.jst","c/widget/loadWallPaper","c/widget/header"],function(a,b,c){console.log(c({name:"xxxxxx"}))}),define("c/configure",[],function(a){var b=window.devicePixelRatio||1,c={w:document.documentElement.clientWidth*b,h:document.documentElement.clientHeight*b};return{BingSourceUrl:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",localBingSourceUrl:"../static/HPImageArchive.json",Device:{screen:c}}}),define("p/index/mod/topList.jst",[],function(){return function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div>\n    "+(null==(__t=obj.name)?"":__t)+"\n</div>";return __p}}),define("c/widget/loadWallPaper",["require","c/configure"],function(a,b){var c=function(a){$.ajax({url:b.localBingSourceUrl,success:function(b){a&&a(b.images)}})};c(function(a){var b=a[0].url,c=document.createElement("img"),d=document.getElementById("wall");c.onload=function(){d.style.backgroundImage="url("+b+")",d.className+=" active",document.body.className+="white",delete c},d&&(c.src=b)})}),define("c/widget/header",[],function(a){});
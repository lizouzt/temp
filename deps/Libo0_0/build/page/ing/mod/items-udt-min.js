/*! elfer_dev_lib 2014-11-17 */
define(function(){return function(obj){obj||(obj={});{var __t,__p="";_.escape,Array.prototype.join}with(obj)data&&(__p+="\n  ",_.each(data,function(a){__p+='\n  <div class="item">\n    <a class="seller">\n      <div class="seller-pic"><img class="J_lazyload" src="',__p+=a.userImageUrl?(null==(__t=a.userImageUrl)?"":__t)+"_"+(null==(__t=$.isRetina("80x80","40x40"))?"":__t)+"Q50.jpg":"http://demo.com/avatar-80.png",__p+='" alt="" width="40" height="40" /></div>\n      <div class="seller-info">\n        <p class="name">'+(null==(__t=a.sellerNick)?"":__t)+'</p>\n        <p class="sub"><span class="time">'+(null==(__t=a.showTimeStr)?"":__t)+'</span> 来自<span class="geo">'+(null==(__t=a.lbs)?"":__t)+'</span></p>\n      </div>\n    </a>\n    <a class="link">\n      <div class="product">\n        ',a.imgUrlsList&&(__p+='\n        <ul class="piclist clearfix style'+(null==(__t=a.imgUrlsList.length)?"":__t)+'">\n          ',_.each(a.imgUrlsList,function(b,c){__p+='\n          <li class="picitem" data-index="'+(null==(__t=c)?"":__t)+'">\n            <img src="'+(null==(__t=b)?"":__t),__p+=2==a.imgUrlsList.length||4==a.imgUrlsList.length?"_"+(null==(__t=$.isRetina("310x310","160x160"))?"":__t)+"xzQ50.jpg":"_"+(null==(__t=$.isRetina("200x200","100x100"))?"":__t)+"xzQ50.jpg",__p+='" alt="" width="',__p+=2==a.imgUrlsList.length||4==a.imgUrlsList.length?"146":"96",__p+='" height="',__p+=2==a.imgUrlsList.length||4==a.imgUrlsList.length?"146":"96",__p+='" data-origin="'+(null==(__t=b)?"":__t)+'" />\n          </li>\n          '}),__p+="\n        </ul>\n        "),__p+='\n      </div>\n    \n      <p class="title">'+(null==(__t=a.title)?"":__t)+'</p>\n      <p class="price"><span class="yen">&yen;</span>'+(null==(__t=+a.price/100)?"":__t)+'</p>\n    </a>\n    \n    <div class="itembar">\n      <ul class="clearfix">\n        <li class="sns-comment J_comment_'+(null==(__t=a.itemId)?"":__t)+'"><a ></a></li>\n        <li class="sns-like J_like_'+(null==(__t=a.itemId)?"":__t)+'" data-key="'+(null==(__t=a.itemId)?"":__t)+'"></li>\n      </ul>\n    </div>\n  </div>\n  '}),__p+="\n"),__p+="\n";return __p}});
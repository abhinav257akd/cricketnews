// Breaking News===============================
$(document).ready(function(){var e="",t=20;$.ajax({url:""+e+"/feeds/posts/default?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(e){function t(){$("#adbreakingnews li:first").slideUp(function(){$(this).appendTo($("#adbreakingnews ul")).slideDown()})}var n,r,s="",a=e.feed.entry;if(void 0!==a){s="<ul>";for(var l=0;l<a.length;l++){for(var o=0;o<a[l].link.length;o++)if("alternate"==a[l].link[o].rel){n=a[l].link[o].href;break}r=a[l].title.$t,s+='<li><a href="'+n+'" target="_blank">'+r+"</a></li>"}s+="</ul>",$("#adbreakingnews").html(s),setInterval(function(){t()},5e3)}else $("#adbreakingnews").html("<span>No result!</span>")},error:function(){$("#adbreakingnews").html("<strong>Error Loading Feed!</strong>")}})});

// jCarouselLite - http://gmarwaha.com/jquery/jcarousellite/
!function(e){function t(t,n){return parseInt(e.css(t[0],n))||0}function n(e){return e[0].offsetWidth+t(e,"marginLeft")+t(e,"marginRight")}function l(e){return e[0].offsetHeight+t(e,"marginTop")+t(e,"marginBottom")}e.fn.jCarouselLite=function(t){return t=e.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:4,start:0,scroll:1,beforeStart:null,afterEnd:null},t||{}),this.each(function(){function i(){return v.slice(p).slice(0,h)}function r(n){if(!s){if(t.beforeStart&&t.beforeStart.call(this,i()),t.circular)n<=t.start-h-1?(u.css(c,-((b-2*h)*g)+"px"),p=n==t.start-h-1?b-2*h-1:b-2*h-t.scroll):n>=b-h+1?(u.css(c,-(h*g)+"px"),p=n==b-h+1?h+1:h+t.scroll):p=n;else{if(0>n||n>b-h)return;p=n}s=!0,u.animate("left"==c?{left:-(p*g)}:{top:-(p*g)},t.speed,t.easing,function(){t.afterEnd&&t.afterEnd.call(this,i()),s=!1}),t.circular||(e(t.btnPrev+","+t.btnNext).removeClass("disabled"),e(p-t.scroll<0&&t.btnPrev||p+t.scroll>b-h&&t.btnNext||[]).addClass("disabled"))}return!1}var s=!1,c=t.vertical?"top":"left",o=t.vertical?"height":"width",a=e(this),u=e("ul",a),f=e("li",u),d=f.size(),h=t.visible;t.circular&&(u.prepend(f.slice(d-h-1+1).clone()).append(f.slice(0,h).clone()),t.start+=h);var v=e("li",u),b=v.size(),p=t.start;a.css("visibility","visible"),v.css({overflow:"hidden","float":t.vertical?"none":"left"}),u.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"}),a.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=t.vertical?l(v):n(v),x=g*b,m=g*h;v.css({width:v.width(),height:v.height()}),u.css(o,x+"px").css(c,-(p*g)),a.css(o,m+"px"),t.btnPrev&&e(t.btnPrev).click(function(){return r(p-t.scroll)}),t.btnNext&&e(t.btnNext).click(function(){return r(p+t.scroll)}),t.btnGo&&e.each(t.btnGo,function(n,l){e(l).click(function(){return r(t.circular?t.visible+n:n)})}),t.mouseWheel&&a.mousewheel&&a.mousewheel(function(e,n){return r(n>0?p-t.scroll:p+t.scroll)}),t.auto&&setInterval(function(){r(p+t.scroll)},t.auto+t.speed)})}}(jQuery);

function recentarticles1(t) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array;
    for (var e = 0; e < numposts5; e++) {
        var r, n, i = t.feed.entry[e],
            m = i.title.$t;
        if (e == t.feed.entry.length) break;
        for (var l = 0; l < i.link.length; l++)
            if ("alternate" == i.link[l].rel) {
                n = i.link[l].href;
                break
            }
        for (var l = 0; l < i.link.length; l++)
            if ("replies" == i.link[l].rel && "text/html" == i.link[l].type) {
                r = i.link[l].title.split(" ")[0];
                break
            }
        if ("content" in i) var o = i.content.$t;
        else if ("summary" in i) var o = i.summary.$t;
        else var o = "";
        postdate = i.published.$t, j > imgr.length - 1 && (j = 0), img[e] = imgr[j], s = o, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[e] = d);
        for (var u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], h = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], p = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), f = (postdate.split("-")[0], 0); f < u.length; f++)
            if (parseInt(p) == u[f]) {
                p = h[f];
                break
            }
        var w = '<li class="car"><div class="thumbE"><a href="' + n + '"><img width="236" min-height="190" class="Thumbnail thumbnail carousel " src="' + img[e] + '"/></a><span class="car-overlay"></span></div><a class="slider_title" href="' + n + '">' + m + "</a></li>";
        document.write(w), j++
    }
}

var reljudul=new Array();var relurls=new Array();var relcuplikan=new Array();var relgambar=new Array();function saringtags(g,h){var e=g.split("<");for(var f=0;f<e.length;f++){if(e[f].indexOf(">")!=-1){e[f]=e[f].substring(e[f].indexOf(">")+1,e[f].length)}}e=e.join("");e=e.substring(0,h-1);return e}function relpostimgcuplik(h){for(var e=0;e<h.feed.entry.length;e++){var g=h.feed.entry[e];reljudul[relnojudul]=g.title.$t;postcontent="";if("content" in g){postcontent=g.content.$t}else{if("summary" in g){postcontent=g.summary.$t}}relcuplikan[relnojudul]=saringtags(postcontent,numchars);if("media$thumbnail" in g){postimg=g.media$thumbnail.url}else{postimg="http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.GIF"}relgambar[relnojudul]=postimg;for(var f=0;f<g.link.length;f++){if(g.link[f].rel=="alternate"){relurls[relnojudul]=g.link[f].href;break}}relnojudul++}}function contains(a,e){for(var f=0;f<a.length;f++){if(a[f]==e){return true}}return false}function relatedposts(){var v=new Array(0);var w=new Array(0);var x=new Array(0);var A=new Array(0);for(var u=0;u<relurls.length;u++){if(!contains(v,relurls[u])){v.length+=1;v[v.length-1]=relurls[u];w.length+=1;w[w.length-1]=reljudul[u];x.length+=1;x[x.length-1]=relcuplikan[u];A.length+=1;A[A.length-1]=relgambar[u]}}reljudul=w;relurls=v;relcuplikan=x;relgambar=A;for(var u=0;u<reljudul.length;u++){var B=Math.floor((reljudul.length-1)*Math.random());var i=reljudul[u];var s=relurls[u];var y=relcuplikan[u];var C=relgambar[u];reljudul[u]=reljudul[B];relurls[u]=relurls[B];relcuplikan[u]=relcuplikan[B];relgambar[u]=relgambar[B];reljudul[B]=i;relurls[B]=s;relcuplikan[B]=y;relgambar[B]=C}var r=0;var D=Math.floor((reljudul.length-1)*Math.random());var z=D;var q;var t=document.URL;while(r<relmaxtampil){if(relurls[D]!=t){q="<li class='news-title clearfix'>";q+="<a href='"+relurls[D]+"' rel='nofollow' target='_top' title='"+reljudul[D]+"'><div class='overlayb'></div><img src='"+relgambar[D]+"' /></a>";q+="<a class='relink' href='"+relurls[D]+"' target='_top'>"+reljudul[D]+"</a>";q+="<span class='news-text'>"+relcuplikan[D]+"</span>";q+="</li>";document.write(q);r++;if(r==relmaxtampil){break}}if(D<reljudul.length-1){D++}else{D=0}if(D==z){break}}};

//Carousel Widget Settings
imgr = new Array, imgr[0] = "http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png", showRandomImg = !0, aBold = !0, summaryPost = 150, summaryPost1 = 0, summaryTitle = 15, numposts5 = 6;
var numpost = 3,
    displayseparator = !1,
    showpostdate = !0,
    showpostsummary = !0,
    numchars = 50;


// recent posts by label Script
function labelthumbs(e){document.write('<ul id="label_with_thumbs">');for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}var l;try{l=n.media$thumbnail.url}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png"}var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);var y=new Array;y[1]="Jan";y[2]="Feb";y[3]="Mar";y[4]="Apr";y[5]="May";y[6]="June";y[7]="July";y[8]="Aug";y[9]="Sept";y[10]="Oct";y[11]="Nov";y[12]="Dec";document.write('<li class="recent-box">');if(showpostthumbnails==true)document.write('<div class="imageContainer"><a href="'+i+'" target ="_top"><img class="label_thumb" src="'+l+'" title="'+r+'" alt="'+r+'"/></a></div>');document.write('<a class="label_title" href="'+i+'" target ="_top">'+r+"</a>");var w="";var E=0;document.write("");p=n.published.$t;var S=[1,2,3,4,5,6,7,8,9,10,11,12];var x=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];var T=p.split("-")[2].substring(0,2);var N=p.split("-")[1];var C=p.split("-")[0];for(var k=0;k<S.length;k++){if(parseInt(N)==S[k]){N=x[k];break}}var L=T+" "+N+" "+C;if(showpostdate==true){document.write('<div class="toe"><a href="'+i+'" class="post-date">'+L+"</a>")}if(showcommentnum==true){if(E==1){w=w+" | "}if(u=="1 Comments")u="1 Comment";if(u=="0 Comments")u="No Comments";w=w+u;E=1;document.write('<a class="recent-com" href="'+f+'" target ="_top">'+u+"</a></div>");}if("content"in n){var A=n.content.$t}else if("summary"in n){var A=n.summary.$t}else var A="";var O=/<\S[^>]*>/g;A=A.replace(O,"");if(showpostsummary==true){if(A.length<numchars){document.write("");document.write(A);document.write("")}else{document.write("");A=A.substring(0,numchars);var M=A.lastIndexOf(" ");A=A.substring(0,M);document.write('<p class="post-summary">'+A+"...</p>")}}document.write("</li>");if(t!=numposts-1)document.write("")}document.write("</ul>")};$(document).ready(function() {$('.label_thumb').attr('src', function(i, src) {return src.replace( 's72-c', 's1600' );});});$(document).ready(function() {$('.label_thumb').attr('src', function(i, src) {return src.replace( 'default.jpg', 'mqdefault.jpg' );});});


/**
 * Tabslet | tabs jQuery plugin
 *
 * @copyright Copyright 2015, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v1.4.9
 */


!function($,window,undefined){"use strict";$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:!1,autorotate:!1,pauseonhover:!0,delay:2e3,active:1,controls:{prev:".prev",next:".next"}},options=$.extend(defaults,options);return this.each(function(){var $this=$(this),_cache_li=[],_cache_div=[];$this.find("> div").each(function(){_cache_div.push($(this).css("display"))});var elements=$this.find("> ul li"),i=options.active-1;if(!$this.data("tabslet-init")){$this.data("tabslet-init",!0),options.mouseevent=$this.data("mouseevent")||options.mouseevent,options.attribute=$this.data("attribute")||options.attribute,options.animation=$this.data("animation")||options.animation,options.autorotate=$this.data("autorotate")||options.autorotate,options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover,options.delay=$this.data("delay")||options.delay,options.active=$this.data("active")||options.active,$this.find("> div").hide(),options.active&&($this.find("> div").eq(options.active-1).show(),$this.find("> ul li").eq(options.active-1).addClass("active"));var fn=eval(function(){$(this).trigger("_before"),$this.find("> ul li").removeClass("active"),$(this).addClass("active"),$this.find("> div").hide(),i=elements.index($(this));var t=$(this).find("a").attr(options.attribute);return options.animation?$this.find(t).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")}):($this.find(t).show(),$(this).trigger("_after")),!1}),init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)"),t,forward=function(){i=++i%elements.length,"hover"==options.mouseevent?elements.eq(i).trigger("mouseover"):elements.eq(i).click(),options.autorotate&&(clearTimeout(t),t=setTimeout(forward,options.delay),$this.mouseover(function(){options.pauseonhover&&clearTimeout(t)}))};options.autorotate&&(t=setTimeout(forward,options.delay),$this.hover(function(){options.pauseonhover&&clearTimeout(t)},function(){t=setTimeout(forward,options.delay)}),options.pauseonhover&&$this.on("mouseleave",function(){clearTimeout(t),t=setTimeout(forward,options.delay)}));var move=function(t){"forward"==t&&(i=++i%elements.length),"backward"==t&&(i=--i%elements.length),elements.eq(i).click()};$this.find(options.controls.next).click(function(){move("forward")}),$this.find(options.controls.prev).click(function(){move("backward")}),$this.on("destroy",function(){$(this).removeData().find("> ul li").each(function(){$(this).removeClass("active")}),$(this).find("> div").each(function(t){$(this).removeAttr("style").css("display",_cache_div[t])})})}})},$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})}(jQuery);


// unslider plugin===============================
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">Prev</span><span class="next">Next</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)

$('.slider').unslider({
	speed: 700,               //  The speed to animate each slide (in milliseconds)
	delay: 30000000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: false,               //  Enable keyboard (left, right) arrow shortcuts
	dots: false,               //  Display dot navigation
    fluid: false,            //  Support responsive design. May break non-responsive designs
});


$( "<div class='slideraro'><a class='unslider-arrow prev'></a><a class='unslider-arrow next'></a></div>" ).insertBefore( ".slider ul#label_with_thumbs" );

    var unslider = $('.slider').unslider();

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        unslider.data('unslider')[fn]();
    });


// sliders loader===============================
$(window).bind("load", function() { 

$('.slider').css("visibility", "visible");

});

(function(e){e.fn.resizeToParent=function(t){function r(e){e.css({width:"",height:"","margin-left":"","margin-top":""});var n=e.parents(t.parent).width();var r=e.parents(t.parent).height();var i=e.width();var s=e.height();var o=i/n;if(s/o<r){e.css({width:"auto",height:r});i=i/(s/r);s=r}else{e.css({height:"auto",width:n});i=n;s=s/o}var u=(i-n)/-2;var a=(s-r)/-2;e.css({"margin-left":u,"margin-top":a})}var n={parent:"div",delay:100};var t=e.extend(n,t);var i;var s=this;e(window).on("resize",function(){clearTimeout(i);i=setTimeout(function(){s.each(function(){r(e(this))})},t.delay)});return this.each(function(){var t=e(this);t.attr("src",t.attr("src"));t.load(function(){r(t)});if(this.complete){r(t)}})}})(jQuery);$(".imageContainer img").resizeToParent();

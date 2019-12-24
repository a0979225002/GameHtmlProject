//HOME動態
TweenMax.to(".news_Home",1.2,{
    opacity:1,
    y:400,
});

TweenMax.to(".logo_Home", 1.4,{
    opacity:1,
    delay:0.5,
    ease:Linear.easeInOut
});
TweenMax.to(".HOME_group01", 60,{
    delay:0.5,
    rotation:360,
    repeat:-1, 
    ease:Linear.easeInOut,
});
//Index按鈕
TweenMax.to(".myBtn", 2, {
    text: "EXPLORE",
    scaleX: "2",
    scaleY: "2",
    transformOrigin: "-50% 50%",
    ease: Power2.easeInOut
});
////Index按下案鈕後的動態
function fadeOut() {
    TweenMax.to(".title", 2, {
       y:200,
        opacity: 0,
        deley:1,
        ease: Power2.easeInOut
    });

    TweenMax.to(".myBtn", 0.5, {
        y: -200,
        opacity: 0,
        deley:2,
    });

    TweenMax.from(".overlay", 1, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 1.2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".news",2,{
        opacity:1,
        delay:4,
        y:400,
    });
    TweenMax.to(".music", 3, {
        delay: 3,
        opacity: 1,
    });
    TweenMax.to(".HOME_group", 60,{
        rotation:360,
        repeat:-1, 
        ease:Linear.easeInOut,
    });
    TweenMax.to(".logo",1,{
        opacity:1,
        delay:5,
        ease:Linear.easeInOut
    });
}
//標題列
var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.3, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.3, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.3
});

t1.to(".menu", 1, {
     top: "0%",
     ease: Expo.easeInOut,
});

t1.staggerFrom(".menu ul li", 1, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.2);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
     t1.reversed(!t1.reversed());
});

//CHARACTER(主頁)標題
TweenMax.staggerFrom(".bigTEXT",2,{
    y:-300,
    opacity:0,
});
TweenMax.to(".CHARACTER_logo",0.8,{
    opacity:1,
    delay:0.5,
    scale:3.5,
    ease:Linear.easeInOut
});
TweenMax.to(".CHARACTER_h1",1,{
    opacity:1,
    delay:1,
    ease:Linear.easeInOut
});
// CHARACTER_TEXT 
TweenMax.staggerFrom(".CHARACTER_body01",2,{
    opacity:0,
    ease: Expo.easeInOut,
});
TweenMax.staggerFrom(".character_01_10",2,{
    opacity:0,
    ease: Expo.easeInOut,
});
TweenMax.to(".character_01",3,{
    x:50,
    opacity:1,
    ease: Expo.easeInOut,
});
TweenMax.to(".character_01_11",3,{
    x:230,
    opacity:1,
    ease: Expo.easeInOut,
});
TweenMax.staggerFrom(".text01",3,{
    x:150,
    scale:0.1,
    opacity:0,
    ease: Expo.easeInOut,
});

//SYSTEM

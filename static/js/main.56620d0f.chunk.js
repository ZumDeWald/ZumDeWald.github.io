(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(46)},26:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=t(49),i=(t(26),t(3)),s=t(4),m=t(6),u=t(5),b=t(7),d=t(51),g=t(47),h=t(48);function p(e){var a=e.label,t=e.to,n=e.activeOnlyWhenExact;return l.a.createElement(g.a,{path:t,exact:n,children:function(e){var n=e.match;return l.a.createElement("h3",{className:"nav-item"},l.a.createElement(h.a,{to:t,className:n?"nav-item-selected":""},a))}})}var f=function(){return l.a.createElement("header",{id:"header-nav-container",className:"nav-bar-on-load"},l.a.createElement("nav",{id:"nav-bar"},l.a.createElement(p,{activeOnlyWhenExact:!0,to:"/",label:"Home"}),l.a.createElement(p,{to:"/gallery",label:"Galleries"}),l.a.createElement(p,{to:"/about",label:"About"}),l.a.createElement(p,{to:"/pricing",label:"Pricing"})))},E=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"hero-container"},l.a.createElement("section",{id:"hero"},l.a.createElement("img",{id:"logo",src:"../img/logo_white.png",alt:"logo"})))}}]),a}(n.Component),y=t(50),N=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(n.Component),x=Object(y.a)(N),v=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{id:"main-content-container"},l.a.createElement(x,null),l.a.createElement("article",{className:"info-article dark-bg"},l.a.createElement("div",{className:"info-article-heading"},l.a.createElement("img",{src:"./img/StacyPic.jpg",alt:"Stacy Thompson",className:"info-article-pic"}),l.a.createElement("h3",{className:"article-heading main-font-style"},"Hello ",l.a.createElement("br",null)," I'm Stacy!")),l.a.createElement("div",{className:"article-text-area"},l.a.createElement("p",{className:"article-text"},"I grew up in St. Louis, Missouri and now call Terre Haute, Indiana home. "),l.a.createElement("p",{className:"article-text"},"I love Jesus, adoption, oldies but goodies, porch swings, and candy! "),l.a.createElement("p",{className:"article-text"},"Newborn Photography is my escape from reality for a few hours. Spending my days around brand new life is a blessing to my soul. I honestly can't believe that I get to call it my job!"),l.a.createElement("p",{className:"article-text"},"Along with that comes maternity, babies, and family photography! There are so many different people I get to meet; the mama who is experiencing new life inside her belly, the newborn baby that is so squishy and perfect, the baby that I have gotten to watch grow right in front of my lens, and the family that just needs to capture this moment in time, because they have learned how fast time really goes.  I love and remember them all."))),l.a.createElement("article",{className:"display-article"},l.a.createElement("div",{className:"article-display-area"},l.a.createElement("span",{id:"gb"},l.a.createElement(h.a,{to:"/gallery"},l.a.createElement("button",{id:"gallery-button"},"- Gallery -"))),l.a.createElement(h.a,{to:"/gallery/maternity",id:"d1",className:"display-item"},l.a.createElement("p",{className:"display-item-text"},"Maternity ")),l.a.createElement(h.a,{to:"/gallery/newborn",id:"d2",className:"display-item"},l.a.createElement("p",{className:"display-item-text"},"Newborn ")),l.a.createElement(h.a,{to:"gallery/fam",id:"d3",className:"display-item"},l.a.createElement("p",{className:"display-item-text"},"Children/Family ")),l.a.createElement(h.a,{to:"gallery/babies",id:"d4",className:"display-item"},l.a.createElement("p",{className:"display-item-text"},"Babies ")))))}}]),a}(n.Component),w=t(15),k=function(e){var a=Object(n.useState)(!1),t=Object(w.a)(a,2),r=t[0],c=t[1],o=function(){i(r?"close":"open")},i=function(e){var a=document.getElementById("dropMenu"),t=document.getElementsByTagName("ul"),n=document.getElementsByClassName("menu-icon");"close"===e?(a.classList.add("closed"),a.classList.remove("open"),t[0].classList.add("hidden"),n[0].classList.remove("rotate-90"),c(!1)):(a.classList.remove("closed"),a.classList.add("open"),t[0].classList.remove("hidden"),n[0].classList.add("rotate-90"),c(!0))};return l.a.createElement("section",{id:"dropMenu",className:"flex-col-center closed"},l.a.createElement("i",{className:"fas fa-angle-down menu-icon hover-hand",onClick:function(){o()}}),l.a.createElement("ul",{className:"menu-list hidden"},l.a.createElement("li",{className:"menu-item",onClick:function(){o()}},l.a.createElement(h.a,{to:"/gallery/maternity"},"Maternity")),l.a.createElement("li",{className:"menu-item",onClick:function(){o()}},l.a.createElement(h.a,{to:"/gallery/newborn"},"Newborn")),l.a.createElement("li",{className:"menu-item",onClick:function(){o()}},l.a.createElement(h.a,{to:"/gallery/babies"},"Babies")),l.a.createElement("li",{className:"menu-item",onClick:function(){o()}},l.a.createElement(h.a,{to:"/gallery/fam"},"Family"))),l.a.createElement("span",{className:"menu-identifier"},"Choose \xa0 \xa0 \xa0 \xa0 Gallery"))};function j(e){var a=e.label,t=e.to;return l.a.createElement(g.a,{path:t,children:function(e){var n=e.match;return l.a.createElement(h.a,{to:t,id:n?"gallery-button-current":""},l.a.createElement("button",{tabIndex:"-1",className:"gallery-chooser-button"},a))}})}var P=function(){return l.a.createElement("div",{id:"gallery-chooser"},l.a.createElement(j,{to:"/gallery/maternity",label:"Maternity"}),l.a.createElement(j,{to:"/gallery/newborn",label:"Newborn"}),l.a.createElement(j,{to:"/gallery/babies",label:"Babies"}),l.a.createElement(j,{to:"/gallery/fam",label:"Family"}))},O=function(e){var a=e.currentPic,t=e.handlePrevPic,n=e.handleNextPic;return l.a.createElement("article",{className:"picture-viewer"},l.a.createElement("div",{className:"pic-and-icons"},l.a.createElement("i",{className:"fas fa-angle-left pic-change-icon hover-hand",onClick:function(){t(a)}}),l.a.createElement("i",{className:"fas fa-angle-right pic-change-icon hover-hand",onClick:function(){n(a)}}),l.a.createElement("picture",null,l.a.createElement("source",{srcSet:"".concat(a[0],"_lg.webp"),type:"image/webp"}),l.a.createElement("img",{className:"viewer-pic",src:"".concat(a[0],"_lg.jpg"),alt:a[0],type:"image/jpg"}))))},C=function(e){var a=e.pics,t=Object(n.useState)([a[0],0]),r=Object(w.a)(t,2),c=r[0],o=r[1];return l.a.createElement("section",null,l.a.createElement(O,{currentPic:c,handleNextPic:function(e){if(e[1]<a.length-1){var t=e[1]+1;o([a[t],t])}else o([a[0],0])},handlePrevPic:function(e){var t=a.length-1;if(e[1]>0){var n=e[1]-1;o([a[n],n])}else o([a[t],t])}}),l.a.createElement("article",{className:"gallery-viewer-area"},l.a.createElement("ul",{className:"tile-list"},a.map(function(e,t){return l.a.createElement("li",{className:"tile-item",key:t},l.a.createElement("picture",null,l.a.createElement("source",{srcSet:"".concat(e,"_sm.webp"),type:"image/webp"}),l.a.createElement("img",{className:"tile-pic hover-hand",src:"".concat(e,"_sm.jpg"),alt:e,type:"image/jpg",onClick:function(){!function(e){o([a[e],e])}(t)}})))}))))},I=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={maternityPics:["../img/maternity/mat1","../img/maternity/mat2","../img/maternity/mat3","../img/maternity/mat4"],newbornPics:["../img/nb/nb1","../img/nb/nb2","../img/nb/nb3","../img/nb/nb4","../img/nb/nb5","../img/nb/nb6","../img/nb/nb7","../img/nb/nb8","../img/nb/nb9","../img/nb/nb10","../img/nb/nb11","../img/nb/nb12","../img/nb/nb13"],babyPics:["../img/baby/baby1","../img/baby/baby2","../img/baby/baby3","../img/baby/baby4","../img/baby/baby5","../img/baby/baby6","../img/baby/baby7"],famPics:["../img/fam/fam1","../img/fam/fam2","../img/fam/fam3","../img/fam/fam4","../img/fam/fam5","../img/fam/fam6","../img/fam/fam7","../img/fam/fam8","../img/fam/fam9","../img/fam/fam10","../img/fam/fam11","../img/fam/fam12","../img/fam/fam13","../img/fam/fam14","../img/fam/fam15","../img/fam/fam16","../img/fam/fam18","../img/fam/fam19"]},t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{id:"gallery-container",className:"dark-bg"},l.a.createElement(x,null),l.a.createElement(k,null),l.a.createElement(P,null),l.a.createElement(d.a,null,l.a.createElement(g.a,{exact:!0,path:"/gallery",render:function(){return l.a.createElement(C,{pics:e.state.newbornPics})}}),l.a.createElement(g.a,{path:"/gallery/maternity",render:function(){return l.a.createElement(C,{pics:e.state.maternityPics})}}),l.a.createElement(g.a,{path:"/gallery/newborn",render:function(){return l.a.createElement(C,{pics:e.state.newbornPics})}}),l.a.createElement(g.a,{path:"/gallery/babies",render:function(){return l.a.createElement(C,{pics:e.state.babyPics})}}),l.a.createElement(g.a,{path:"/gallery/fam",render:function(){return l.a.createElement(C,{pics:e.state.famPics})}})))}}]),a}(n.Component),S=function(e){return l.a.createElement("section",{className:"flex-c-nw"},l.a.createElement("h1",{className:"about-header"},"Contact Me"),l.a.createElement("div",{className:"contact-area"},l.a.createElement("img",{src:"../img/StacyPic.jpg",alt:"Stacy Thompson",className:"contact-pic"}),l.a.createElement("article",{className:"about-article-area contact-box-size"},l.a.createElement("div",{className:"about-article-box"},l.a.createElement("h3",{className:"about-box-sub-header"},"Email: stacythompsonphotography@gmail.com"),l.a.createElement("h3",{className:"about-box-sub-header"},"Socials:",l.a.createElement("a",{href:"https://www.facebook.com/stacythompsonphotography",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{id:"fb-icon",className:"fab fa-facebook fa-lg social-icon"})," "),l.a.createElement("a",{href:"https://www.pinterest.com/stacythompsonph/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{id:"pin-icon",className:"fab fa-pinterest fa-lg social-icon"})," "))))))},T=function(e){return l.a.createElement("section",null,l.a.createElement("h1",{className:"about-header"},"FAQ"),l.a.createElement("article",{className:"about-article-area"},l.a.createElement("div",{className:"about-article-box box-closed"},l.a.createElement("div",{className:"about-box-title-box"},l.a.createElement("i",{className:"far fa-question-circle fa-3x about-box-icon"}),l.a.createElement("h2",{className:"about-box-heading main-font-style"},"What should I expect from my session?")),l.a.createElement("h3",{className:"about-box-sub-header"},"Each Session"),l.a.createElement("p",{className:"about-box-text"},"My goal on every shoot is to capture true expressions. The sweet little smiles, the tears, the quirky expressions and even the somber faces ",l.a.createElement("em",null,"which are my favorite!")," "),l.a.createElement("p",{className:"about-box-text"},"I will direct some posing, but my goal is to capture ",l.a.createElement("em",null,"personality")," and ",l.a.createElement("em",null,"natural")," body language."),l.a.createElement("p",{className:"about-box-text"},"I shoot both on location and have an in home studio. ",l.a.createElement("em",null,"(I ",l.a.createElement("strong",null,"do not do")," family sessions at my in home studio)")," "),l.a.createElement("p",{className:"about-box-text"},"An on-location shoot works best either 1-2 hours before sunset or early morning around 8am or 9am depending on the season."),l.a.createElement("p",{className:"about-box-text"},"Please come being prepared to RELAX!  I have Netflix and WiFi. You are welcome to watch the session, but it is not necessary. I actually encourage my parents to sit back and relax. Your baby is in good hands! And what a sweet surprise it will be when you receive your edited images! "),l.a.createElement("h3",{className:"about-box-sub-header"},"Newborn Specific"),l.a.createElement("p",{className:"about-box-text"},l.a.createElement("strong",null,"For my Newborn Session clients:")," you will receive step by step instructions along with a questionaire so your ",l.a.createElement("em",null,"unique, stylized")," session can be the best experience possible."),l.a.createElement("p",{className:"about-box-text"},"I have absolutely everything needed for a beautifully styled newborn session!  All you have to bring is your new, sweet baby, extra formula if you are bottle feeding, a pacifier, and snacks for yourselves! "),l.a.createElement("p",{className:"about-box-text"},l.a.createElement("i",{className:"fas fa-asterisk fa-sm"})," \xa0",l.a.createElement("em",null,"Plan on the session length being at least 2 hours.")),l.a.createElement("span",{onClick:e.handleToggleBox,className:"about-box-expand"},l.a.createElement("i",{className:"fas fa-angle-down fa-2x prevent-click about-box-icon"})))),l.a.createElement("article",{className:"about-article-area"},l.a.createElement("div",{className:"about-article-box box-closed"},l.a.createElement("div",{className:"about-box-title-box"},l.a.createElement("i",{className:"far fa-question-circle fa-3x about-box-icon"}),l.a.createElement("h2",{className:"about-box-heading main-font-style"},"How should I prepare for my session?")),l.a.createElement("p",{className:"about-box-text"},l.a.createElement("strong",null,"Clothing")," can really make or break a photo shoot, and that is why I can assist you in pulling your wardrobe together."),l.a.createElement("p",{className:"about-box-text"},"Please coordinate! I will absolutely stay true to ",l.a.createElement("em",null,"your style")," while keeping in mind what looks good on camera."),l.a.createElement("p",{className:"about-box-text"},"I am creating art, and ",l.a.createElement("em",null,"clothing")," is a tool to make that art come to life."),l.a.createElement("p",{className:"about-box-text"},"During the session, expect to ",l.a.createElement("strong",null,"have fun and be yourself"),". I might ask you to do silly or fun things to help break the ice or to create connections with you."),l.a.createElement("span",{onClick:e.handleToggleBox,className:"about-box-expand"},l.a.createElement("i",{className:"fas fa-angle-down fa-2x prevent-click about-box-icon"})))),l.a.createElement("article",{className:"about-article-area"},l.a.createElement("div",{className:"about-article-box box-closed"},l.a.createElement("div",{className:"about-box-title-box"},l.a.createElement("i",{className:"far fa-question-circle fa-3x about-box-icon"}),l.a.createElement("h2",{className:"about-box-heading main-font-style"},"What is included in a session?")),l.a.createElement("h3",{className:"about-box-sub-header"},"Included for each session:"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",{className:"about-list-item"},"Photographer\u2019s time and talent"),l.a.createElement("li",{className:"about-list-item"},"Professionally edited images [ ",l.a.createElement("em",null,"quantity specified per package on the ",l.a.createElement(h.a,{to:"/pricing",className:"link"},"Pricing page"))," ]"),l.a.createElement("li",{className:"about-list-item"},"Additional images can be purchased for $20 per image"),l.a.createElement("li",{className:"about-list-item"},"File preparation and an online gallery of images for you to easily share, download, and print. ",l.a.createElement("br",null),"\xa0 - You will have ",l.a.createElement("strong",null,"one month")," for viewing from the time the gallery is available."),l.a.createElement("li",{className:"about-list-item"},"All photos come with print release & lab recommendations.")),l.a.createElement("h3",{className:"about-box-sub-header"},"Additional considerations:"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",{className:"about-list-item"},l.a.createElement("em",null,"All prints are purchased separately.")," "),l.a.createElement("li",{className:"about-list-item"},"You can expect your images to be edited 1-2 weeks after session."),l.a.createElement("li",{className:"about-list-item"},"If you prefer a flash drive with your images one can be purchased for an extra fee."),l.a.createElement("li",{className:"about-list-item"},"I often share a sneak peak for the family on Facebook within 48 hours of the session. ",l.a.createElement("br",null)," \xa0 - ",l.a.createElement("strong",null,"When posting pictures online, I may share baby\u2019s first name and small details like weight and age.")," ",l.a.createElement("br",null),"\xa0 - You are welcome to tag and share these photos after 24 hours of me posting them if you would like to.  ")),l.a.createElement("span",{onClick:e.handleToggleBox,className:"about-box-expand"},l.a.createElement("i",{className:"fas fa-angle-down fa-2x prevent-click about-box-icon"})))),l.a.createElement("article",{className:"about-article-area"},l.a.createElement("div",{className:"about-article-box box-closed"},l.a.createElement("div",{className:"about-box-title-box"},l.a.createElement("i",{className:"far fa-question-circle fa-3x about-box-icon"}),l.a.createElement("h2",{className:"about-box-heading main-font-style"},"Payment / Fee information:")),l.a.createElement("p",{className:"about-box-text"},"I accept Cash or Pay-Pal "),l.a.createElement("p",{className:"about-box-text"},"A deposit [ ",l.a.createElement("em",null,"50% of the session cost")," ] is due at booking "),l.a.createElement("p",{className:"about-box-text"},"The remainder of the session fee [ ",l.a.createElement("em",null,"minus the deposit")," ] is due at the time of the session "),l.a.createElement("p",{className:"about-box-text"},"Session are ",l.a.createElement("em",null,"only")," booked for weekdays. Should you need a weekend session there is an additional $50 fee"),l.a.createElement("p",{className:"about-box-text"},"Travel fee applies on distances greater than 25 miles [ ",l.a.createElement("em",null,"travel fee depends on additional mileage, ",l.a.createElement(h.a,{to:"/about/contact",className:"link"},"contact me")," for a free estimate.")," ]"),l.a.createElement("p",{className:"about-box-text"},"All payments are non-refundable"),l.a.createElement("p",{className:"about-box-text"},"Pricing secured upon booking your session."),l.a.createElement("p",{className:"about-box-text"},"Pricing is non-negotiable"),l.a.createElement("span",{onClick:e.handleToggleBox,className:"about-box-expand"},l.a.createElement("i",{className:"fas fa-angle-down fa-2x prevent-click about-box-icon"})))))},A=function(e){return l.a.createElement("section",null,l.a.createElement("h1",{className:"about-header"},"What's in my bag?"))};function B(){return l.a.createElement("div",{id:"gallery-chooser"},l.a.createElement(L,{to:"/about/contact",label:"Contact"}),l.a.createElement(L,{to:"/about/FAQ",label:"FAQ"}),l.a.createElement(L,{to:"/about/equipment",label:"Equipment"}))}function L(e){var a=e.label,t=e.to;return l.a.createElement(g.a,{path:t,children:function(e){var n=e.match;return l.a.createElement(h.a,{to:t,id:n?"gallery-button-current":""},l.a.createElement("button",{tabIndex:"-1",className:"gallery-chooser-button"},a))}})}var F=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).toggleBox=function(e){e.target.parentNode.classList.toggle("box-closed"),e.target.parentNode.classList.toggle("box-open"),e.target.firstChild.classList.toggle("fa-angle-down"),e.target.firstChild.classList.toggle("fa-angle-up")},t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{id:"about-content-container",className:"dark-bg"},l.a.createElement(x,null),l.a.createElement(B,null),l.a.createElement(d.a,null,l.a.createElement(g.a,{exact:!0,path:"/about",render:function(a){return l.a.createElement(T,{handleToggleBox:e.toggleBox})}}),l.a.createElement(g.a,{path:"/about/contact",render:function(a){return l.a.createElement(S,{handleToggleBox:e.toggleBox})}}),l.a.createElement(g.a,{exact:!0,path:"/about/FAQ",render:function(a){return l.a.createElement(T,{handleToggleBox:e.toggleBox})}}),l.a.createElement(g.a,{path:"/about/equipment",render:function(a){return l.a.createElement(A,{handleToggleBox:e.toggleBox})}})))}}]),a}(n.Component),M=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).openReferralModal=function(){var e=document.getElementById("referral-popup-container");e.classList.remove("hide"),e.classList.add("flex-c-nw")},t.closeReferralModal=function(){var e=document.getElementById("referral-popup-container");e.classList.remove("flex-c-nw"),e.classList.add("hide")},t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{id:"pricing-content-container"},l.a.createElement(x,null),l.a.createElement("aside",{id:"pricing-referral-aside"},l.a.createElement("i",{className:"fas fa-hand-holding-heart"}),l.a.createElement("button",{id:"referral-button",onClick:function(){e.openReferralModal()}},"Checkout my Referral Program!")),l.a.createElement("div",{id:"referral-popup-container",className:"hide"},l.a.createElement("div",{id:"referral-popup-modal"},l.a.createElement("i",{className:"far fa-times-circle",id:"referral-close",onClick:function(){e.closeReferralModal()}}),l.a.createElement("i",{className:"far fa-handshake fa-4x"}),l.a.createElement("p",{className:"about-pricing-text blue-words"},"As a small business owner, word-of-mouth is one of my most beneficial forms of advertisement. Thank you for spreading the word about my business, it is because of ",l.a.createElement("em",null,"YOU")," that Stacy Thompson Photography is thriving! "),l.a.createElement("p",{className:"about-pricing-text blue-words"},"To show my appreciation, customers who have booked & completed a session with me will recieve the following credits when they refer a new customer: "),l.a.createElement("ul",null,l.a.createElement("li",null,"$10 (Referral Books Full Session)*"),l.a.createElement("li",null,"$20 (Referral Books Deluxe Newborn)*")),l.a.createElement("p",{className:"popup-modal-note blue-words"},l.a.createElement("em",null,"*Referred customer must ",l.a.createElement("strong",null,"book & complete")," session for credit to apply. Credit applied to future sessions.")," "))),l.a.createElement("p",{className:"pricing-note"},l.a.createElement("em",null,l.a.createElement("strong",null,"Prints larger than an 8x10 should be ordered through me"))),l.a.createElement("article",{className:"pricing-article top-spacer pricing-dark-bg"},l.a.createElement("img",{src:"./img/STP5.jpg",alt:"Maternity",className:"article-pic"}),l.a.createElement("div",{className:"pricing-text-area"},l.a.createElement("h3",{className:"article-heading"},"Maternity Session - $175"),l.a.createElement("div",{className:"pricing-text"},l.a.createElement("ul",null,l.a.createElement("li",null,"30 minute session"),l.a.createElement("li",null,"2 outfits"),l.a.createElement("li",null,"7 edited images available for download and order from your online gallery."))))),l.a.createElement("article",{className:"pricing-article"},l.a.createElement("img",{src:"./img/STP1.jpg",alt:"Newborn",className:"article-pic"}),l.a.createElement("div",{className:"pricing-text-area"},l.a.createElement("h3",{className:"article-heading dark-words"},"Simply Newborn - $250"),l.a.createElement("div",{className:"pricing-text"},l.a.createElement("ul",null,l.a.createElement("li",null,"baby only session"),l.a.createElement("li",null,"10 edited images available for download and order from your online gallery."))))),l.a.createElement("article",{className:"pricing-article pricing-dark-bg"},l.a.createElement("img",{src:"./img/STP7.jpg",alt:"Newborn",className:"article-pic"}),l.a.createElement("div",{className:"pricing-text-area"},l.a.createElement("h3",{className:"article-heading"},"Deluxe Newborn - $375"),l.a.createElement("div",{className:"pricing-text"},l.a.createElement("ul",null,l.a.createElement("li",null,"baby and family session"),l.a.createElement("li",null,"up to 20 edited images available for download and order from your online gallery."))))),l.a.createElement("article",{className:"pricing-article"},l.a.createElement("img",{src:"./img/STP2.jpg",alt:"Children/Family",className:"article-pic"}),l.a.createElement("div",{className:"pricing-text-area"},l.a.createElement("h3",{className:"article-heading dark-words"},"Milestone Session - $130"),l.a.createElement("div",{className:"pricing-text"},l.a.createElement("ul",null,l.a.createElement("li",null,"baby and family session"),l.a.createElement("li",null,"7 edited images available for download and order from your online gallery."))))),l.a.createElement("article",{className:"pricing-article pricing-dark-bg"},l.a.createElement("img",{src:"./img/STP8.jpg",alt:"Children/Family",className:"article-pic"}),l.a.createElement("div",{className:"pricing-text-area"},l.a.createElement("h3",{className:"article-heading"},"One Year Session - $200"),l.a.createElement("div",{className:"pricing-text"},l.a.createElement("ul",null,l.a.createElement("li",null,"baby only session"),l.a.createElement("li",null,"15 edited images available for download and order from your online gallery."))))),l.a.createElement("article",{className:"pricing-article"},l.a.createElement("img",{src:"./img/STP6.jpg",alt:"Lifestyle",className:"article-pic"}),l.a.createElement("div",{className:"pricing-text-area"},l.a.createElement("h3",{className:"article-heading dark-words"},"Disclaimers / Notes"),l.a.createElement("ul",{className:"pricing-text"},l.a.createElement("li",null,"Sessions are ",l.a.createElement("em",null,"only")," done on week days. If you need to schedule a weekend session there will be an additional $50 fee."),l.a.createElement("li",null,"Sessions ",l.a.createElement("strong",null,"Do Not")," include images on CD. Instead they are available for download from your online gallery."),l.a.createElement("li",null,"A custom USB Flashdrive with your session images can be purchased for $30."),l.a.createElement("li",null,"Additional images can be purchased for $20/per image.")))),l.a.createElement("article",{className:"pricing-article pricing-dark-bg"},l.a.createElement("img",{src:"./img/STP4.jpg",alt:"Children/Family",className:"article-pic nudge-pic"}),l.a.createElement("div",null,l.a.createElement("p",{className:"pricing-disclaimer-note"},"Stacy Thompson Photography is serving the Wabash Valley and surrounding counties. Book your session as early as possible.  To reserve your session, a 50% deposit of the session price is required (the deposit fee comes out of the session price). The remaining balance is due the day of the session using CASH or PAY-PAL. "),l.a.createElement("p",{className:"pricing-disclaimer-note"},l.a.createElement("em",null,"All payments are non-refundable.")," You secure pricing and services when you book your session. Pricing is non-negotiable.  All prices are subject to change at any time, without notice. If they change, I will honor the prices at the time of your booking. "),l.a.createElement("p",{className:"pricing-disclaimer-note"},"Stacy Thompson Photography is available to travel nationwide and worldwide. A travel fee applies on distances greater than 25 miles."))))}}]),a}(n.Component),q=(t(31),t(32),t(34),t(36),t(38),t(40),t(42),t(44),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).scrollChanges=function(){var e=document.body.scrollTop+document.documentElement.scrollTop,a=document.getElementById("header-nav-container");e>450?(a.classList.add("nav-bar-on-scroll"),a.classList.remove("nav-bar-on-load")):(a.classList.add("nav-bar-on-load"),a.classList.remove("nav-bar-on-scroll"))},t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollChanges)}},{key:"render",value:function(){return l.a.createElement("div",{id:"top-level-container"},l.a.createElement(f,null),l.a.createElement(E,null),l.a.createElement(d.a,null,l.a.createElement(g.a,{exact:!0,path:"/",component:v}),l.a.createElement(g.a,{path:"/gallery",component:I}),l.a.createElement(g.a,{path:"/about",component:F}),l.a.createElement(g.a,{path:"/pricing",component:M})),l.a.createElement("footer",{id:"footer-container"},l.a.createElement("section",{id:"footer"},l.a.createElement("p",{className:"footer-text"},"\xa9 2018 STPhotography |\xa0"),l.a.createElement("a",{href:"https://www.facebook.com/stacythompsonphotography",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{id:"fb-icon",className:"fab fa-facebook fa-lg social-icon"})," "),l.a.createElement("a",{href:"https://www.pinterest.com/stacythompsonph/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{id:"pin-icon",className:"fab fa-pinterest fa-lg social-icon"})," "))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.56620d0f.chunk.js.map
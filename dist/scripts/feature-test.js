!function(a){"use strict";var b=[],c={apng:".apng File Type",backgroundsize:"CSS Background-Size",battery:"Battery API",borderradius:"CSS Border-Radius",boxshadow:"CSS Box-Shadow",boxsizing:"CSS Box-Sizing",contextmenu:"HTML5 Context Menus",css2Dtransforms:"CSS 2D Transforms",css3Dtransforms:"CSS 3D Transforms",cssanimations:"CSS Animations",csspositionsticky:"CSS Position: Sticky;",csstransitions:"CSS Transitions",flexbox:"CSS Flex-Box",fontface:"CSS @font-face",hashchange:"JavaScript Hashchange Event",js:"JavaScript",lastchild:"CSS :last-child Selector",mediaqueries:"CSS @media Queries",opacity:"CSS Opacity",sessionstorage:"JavaScript Session Storage"},d=a("html").attr("class").split(/\s+/);if(a.each(d,function(a,d){"no-"===d.substring(0,3)&&b.push(c[d.substring(3)])}),b.length>0){var e="",f="";a.each(b,function(a,b){f+="-"+b+"-  ",e+="<li>"+b+"</li>"});var g='<div id="no-support"><div class="no-support-inner"><div class="no-support-text"><h2 class="no-support-header">You are using an outdated browser!</h2><p class="unsupported-features-lead-in">The following features are unsupported or turned off:</p><ul id="unsupported-features">'+e+'</ul><p>and they may have robbed you of what might have been arguably your most exciting experience on the Internet to date. <em>(It\'s also possible you\re using Safari (or Mobile Safari) and have private browsing enabled. Turning off private browsing and reloading should fix everything.)</em></i></p><p>A list of today\'s most fabulous and exciting browsers can be found below.</p></div><div class="no-support-downloads"><span class="download chrome"><a href="https://www.google.com/chrome/browser/" target="_blank"><img src="images/icons/chrome.png" /></a><em>Google Chrome</em></span><span class="download firefox"><a href="https://www.mozilla.org/en-US/firefox/new/?utm_source=firefox-com&utm_medium=referral" target="_blank"><img src="images/icons/firefox.png" /></a><em>Mozilla Firefox</em></span><span class="download safari"><a href="http://www.apple.com/safari/" target="_blank"><img src="images/icons/safari.png" /></a><em>Apple Safari</em></span><span class="download opera"><a href="http://www.opera.com/" target="_blank"><img src="images/icons/opera.png" /></a><em>Opera... Opera</em></span></div></div></div>';a("body").append(g),a("#no-support").show(),ga("send","event","Compatibility","Load","Unsupported Browser: "+f)}}(jQuery,window.FeatureTest=window.FeatureTest||{});
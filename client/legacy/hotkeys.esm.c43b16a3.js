var e="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function t(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function n(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function o(e){e||(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function r(e,t){for(var n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,r=!0,i=0;i<n.length;i++)-1===o.indexOf(n[i])&&(r=!1);return r}for(var i={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":e?173:189,"=":e?61:187,";":e?59:186,"'":222,"[":219,"]":221,"\\":220},a={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":e?224:91,cmd:e?224:91,command:e?224:91},c={16:"shiftKey",18:"altKey",17:"ctrlKey"},l={16:!1,18:!1,17:!1},f={},s=1;s<20;s++)i["f".concat(s)]=111+s;c[e?224:91]="metaKey",l[e?224:91]=!1;var p=[],d="all",u=[],h=function(e){return i[e.toLowerCase()]||a[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function y(e){d=e||"all"}function v(){return d||"all"}function g(e,t,n){var o;if(t.scope===n||"all"===t.scope){for(var r in o=t.mods.length>0,l)Object.prototype.hasOwnProperty.call(l,r)&&(!l[r]&&t.mods.indexOf(+r)>-1||l[r]&&-1===t.mods.indexOf(+r))&&(o=!1);(0!==t.mods.length||l[16]||l[18]||l[17]||l[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function w(e){var t=f["*"],n=e.keyCode||e.which||e.charCode;if(k.filter.call(this,e)){if(-1===p.indexOf(n)&&229!==n&&p.push(n),93!==n&&224!==n||(n=91),n in l){for(var o in l[n]=!0,a)a[o]===n&&(k[o]=!0);if(!t)return}for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(l[r]=e[c[r]]);var i=v();if(t)for(var s=0;s<t.length;s++)t[s].scope===i&&("keydown"===e.type&&t[s].keydown||"keyup"===e.type&&t[s].keyup)&&g(e,t[s],i);if(n in f)for(var d=0;d<f[n].length;d++)if(("keydown"===e.type&&f[n][d].keydown||"keyup"===e.type&&f[n][d].keyup)&&f[n][d].key){for(var u=f[n][d].key.split("+"),y=[],w=0;w<u.length;w++)y.push(h(u[w]));(y=y.sort()).join("")===p.sort().join("")&&g(e,f[n][d],i)}}}function k(e,r,i){var c=o(e),s=[],d="all",y=document,v=0,g=!1,O=!0;for(void 0===i&&"function"==typeof r&&(i=r),"[object Object]"===Object.prototype.toString.call(r)&&(r.scope&&(d=r.scope),r.element&&(y=r.element),r.keyup&&(g=r.keyup),r.keydown&&(O=r.keydown)),"string"==typeof r&&(d=r);v<c.length;v++)s=[],(e=c[v].split("+")).length>1&&(s=n(a,e)),(e="*"===(e=e[e.length-1])?"*":h(e))in f||(f[e]=[]),f[e].push({keyup:g,keydown:O,scope:d,mods:s,shortcut:c[v],method:i,key:c[v]});void 0!==y&&!function(e){return u.indexOf(e)>-1}(y)&&window&&(u.push(y),t(y,"keydown",function(e){w(e)}),t(window,"focus",function(){p=[]}),t(y,"keyup",function(e){w(e),function(e){var t=e.keyCode||e.which||e.charCode,n=p.indexOf(t);if(n>=0&&p.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&p.splice(0,p.length),93!==t&&224!==t||(t=91),t in l)for(var o in l[t]=!1,a)a[o]===t&&(k[o]=!1)}(e)}))}var O={setScope:y,getScope:v,deleteScope:function(e,t){var n,o;for(var r in e||(e=v()),f)if(Object.prototype.hasOwnProperty.call(f,r))for(n=f[r],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;v()===e&&y(t||"all")},getPressedKeyCodes:function(){return p.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=h(e)),-1!==p.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&"TEXTAREA"!==n&&("INPUT"!==n&&"TEXTAREA"!==n||t.readOnly)||(o=!1),o},unbind:function(e,t,i){var c,l,s=o(e),p=[];"function"==typeof t&&(i=t,t="all");for(var d=0;d<s.length;d++){if(p=(c=s[d].split("+")).length>1?n(a,c):[],e="*"===(e=c[c.length-1])?"*":h(e),t||(t=v()),!f[e])return;for(var u=0;u<f[e].length;u++)l=f[e][u],(!i||l.method===i)&&l.scope===t&&r(l.mods,p)&&(f[e][u]={})}}};for(var m in O)Object.prototype.hasOwnProperty.call(O,m)&&(k[m]=O[m]);if("undefined"!=typeof window){var b=window.hotkeys;k.noConflict=function(e){return e&&window.hotkeys===k&&(window.hotkeys=b),k},window.hotkeys=k}export default k;
//# sourceMappingURL=hotkeys.esm.c43b16a3.js.map
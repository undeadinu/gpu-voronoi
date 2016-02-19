(function(){var B;function l(b,a){var e=b.getElementsByClassName(a)[0];return e.width=e.height=256,e}function n(b,a){var e=null;try{e=new Z(b,a)}catch(c){document.getElementById('demo-page').style.display='none',document.getElementById('webgl-error').style.display=null;throw c}return e}function C(b){var a=l(b,'input-canvas'),e=l(b,'output-canvas'),c=n(e,256),d=new U(a);d.g=function(){r(c,a),s(c),q(c)}}function D(b){var a=l(b,'input-canvas'),e=l(b,'output-canvas'),c=n(e,256),d=new W(a);d.e=function(){r(c,a),s(c),q(c)}}function E(b){var a=l(b,'input-canvas'),e=l(b,'output-canvas'),c=n(e,256),d=new X(a);d.j=function(){r(c,d.e),s(c),q(c)}}function T(){window.onload=function(){C(document.getElementById('paint-demo-container')),D(document.getElementById('fish-demo-container')),E(document.getElementById('photo-demo-container'))}}function L(b,a){var e=b.getExtension(a);if(!e)throw new Error('Unsupported WebGL extension with name '+a);return e}function z(b,a){return b-a*Math.floor(b/a)}function o(a,b){a.a.beginPath(),a.a.rect(b.b-a.d|0,
b.a-a.d|0,a.d<<1,a.d<<1),a.a.fillStyle=x(F[a.c]),a.a.fill(),a.g&&a.g()}function G(a,b){b.style.backgroundColor='white',b.width=b.height=256}function w(a,b){b.beginPath(),b.rect(a.b.b-a.a/2|0,a.b.a-a.a/2|0,a.a|0,a.a|0),b.fillStyle=x(a.e),b.fill(),b.closePath()}function I(d){var b=null,a=function(){var e=new Date,c=b?+e-+b:1/30;J(d,c/1000),b=e,requestAnimationFrame(a)};requestAnimationFrame(a)}function J(d,b){d.a.clearRect(0,0,d.b.width,d.b.height);for(var a=1,g=d.d.length;a<g;a=a+1|0){var e=d.d[a];R(e.b,d.g[a]*b),Q(e.b,new $(d.b.width,d.b.height))}for(var h=0,i=d.d,j=i.length;h<j;h=h+1|0){var c=i[h];w(c,d.a)}w(d.h,d.a),d.e&&d.e()}function p(c,b){c.a.beginPath(),c.a.rect(b.b-c.i|0,b.a-c.i|0,c.i<<1,c.i<<1),c.a.fillStyle='#FFFFFF',c.a.fill(),c.c.beginPath(),c.c.rect(b.b-c.i|0,b.a-c.i|0,c.i<<1,c.i<<1);var a=document.getElementById('eye'),e=c.c.createPattern(a,'repeat');c.c.fillStyle=e,c.c.fill(),c.j&&c.j()}function x(b){return 'rgba('+(b.b*255|0)+', '+(b.a*255|0)+', '+(b.e*255|0)+', '+b.c+')'}function y(b,a){if(b<0||b>255)throw new Error('First parameter '+b+' is out of bounds. Must be between 0 and 255.');
if(a<0||a>255)throw new Error('Second parameter '+a+' is out of bounds. Must be between 0 and 255.');return (b<<8)+a|0}function f(b){return new Y((b>>16&255)/255|0,(b>>8&255)/255,(b&255)/255,1)}function q(b){b.b.defaultFramebuffer.bind(),b.h.bind(0),b.b.gl.viewport(0,0,b.v.width,b.v.height),b.u.use().attrib('quad',b.d,2).uniformi('iCellGridTexture',0).uniform('iCanvasSize',new Float32Array([b.v.width,b.v.height])).uniform('iGridSize',new Float32Array([b.a,b.a])).uniform('iRelease',!0,!0).draw(5,4)}function r(e,b){e.j.attach(e.g);var a=e.b.gl;a.bindTexture(3553,e.i.texture),a.texImage2D(3553,0,6408,6408,5121,b),e.i.bind(0),e.b.gl.viewport(0,0,e.a,e.a),e.c.use().attrib('quad',e.d,2).uniformi('iCellGridTexture',0).uniform('iCellGridSize',new Float32Array([e.a,e.a])).uniform('iBackgroundColor',new Float32Array([0,0,0,0])).draw(5,4)}function M(j,b){for(var a=new Float32Array(j.a*j.a<<2),e=0,A=a.length;e<A;e=e+1|0)a[e]=-1;for(var c=0,u=b.length;c<u;c=c+1|0){var d=b[c],g=(d.b.a*j.a+d.b.b)*4|0,h=y(d.a.b*255|0,d.a.a*255|0),i=y(d.a.e*255|0,
d.a.c*255|0);a[g]=h,a[g+1|0]=i,a[g+2|0]=d.b.b,a[g+3|0]=d.b.a}j.g.subset(a,0,0,j.a,j.a)}function s(a){for(var b=a.a/2|0;b>0;)t(a,b),b=b/2|0;t(a,2),t(a,1)}function t(a,b){a.j.attach(a.h),a.g.bind(0),a.b.gl.viewport(0,0,a.a,a.a),a.e.use().attrib('quad',a.d,2).uniformi('iCellGridTexture',0).uniformi('iStepSize',b).uniform('iCellGridSize',new Float32Array([a.a,a.a])).draw(5,4),N(a)}function N(a){var b=a.g;a.g=a.h,a.h=b}function O(b,a){return new _(new $(b.b*Math.random(),b.a*Math.random()),a[Math.random()*a.length|0])}function P(b,a,e){for(var c=[],d=0;d<e;d=d+1|0)c.push(O(b,a));return c}function Q(a,b){a.b=z(a.b,b.b),a.a=z(a.a,b.a)}function R(a,b){a.b+=b,a.a+=b}function k(b,a,e){b.addEventListener(a,e)}function K(b){b.preventDefault()}function m(b){try{return b.getContext('2d')}catch(a){}return null}function U(b){var g=this;g.a=null,g.e=!1,g.c=0,g.d=1,g.g=null,g.b=b,G(g,b),g.a=m(g.b),k(document,'keyup',function(a){a.which^67||(g.c=(g.c+1|0)%F.length|0)}),k(g.b,'mousedown',function(e){g.e=!0,e.stopPropagation(),o(g,
new $(e.offsetX,e.offsetY))}),k(g.b,'mousemove',function(c){g.e&&o(g,new $(c.offsetX,c.offsetY)),c.stopPropagation()}),k(g.b,'mouseup',function(d){o(g,new $(d.offsetX,d.offsetY)),g.e=!1,d.stopPropagation()})}function V(b){this.b=b,this.a=2,this.e=new Y(0,0,1,1)}function W(b){var c=this;c.b=c.a=c.e=null,c.c=40,c.d=[],c.g=[],c.h=null,c.b=b,c.a=m(c.b);for(var a=1,d=c.c;a<d;a=a+1|0)c.d.push(new V(new $(Math.random()*c.b.width,Math.random()*c.b.height))),c.d[c.d.length-1|0].e=H[a%H.length|0],c.g.push(10+Math.random()*4);c.h=new V(new $(Math.random()*c.b.width,Math.random()*c.b.height)),c.h.e=f(16771345),k(b,'mousemove',function(e){c.h.b.b=e.offsetX,c.h.b.a=e.offsetY}),I(c)}function X(b){var d=this;d.a=d.e=d.c=d.d=d.g=null,d.h=!1,d.i=1,d.j=null,d.b=b,d.a=m(d.b),b.width=b.height=256,d.e=document.createElement('canvas'),d.c=m(d.e),d.e.width=d.b.width,d.e.height=d.b.height,d.d=document.getElementById('eye'),d.g=d.c.createPattern(d.d,'repeat'),d.a.drawImage(d.d,0,0),k(d.b,'mousedown',function(a){d.h=!0,K(a),a.stopPropagation(),
p(d,new $(a.offsetX,a.offsetY))}),k(d.b,'mousemove',function(e){d.h&&p(d,new $(e.offsetX,e.offsetY)),e.stopPropagation()}),k(d.b,'mouseup',function(c){p(d,new $(c.offsetX,c.offsetY)),d.h=!1,c.stopPropagation()})}function Y(b,a,e,c){this.b=b,this.a=a,this.e=e,this.c=c}function Z(b,a){if(this.b=this.e=this.c=this.d=this.g=this.h=this.i=this.j=this.A=this.u=null,this.a=a,this.v=b,this.b=new Igloo(b),!this.b.gl)throw new Error('Failed to initialize Igloo');this.b.gl.disable(2929),this.u=new Igloo.Program(this.b.gl,'precision highp float;\n\nconst vec4 q = vec4(1.0, 0.0, 0.0, 1.0), m = vec4(0.0, 1.0, 0.0, 1.0), k = vec4(0.0, 0.0, 1.0, 1.0), r = vec4(0.0, 1.0, 1.0, 1.0), o = vec4(1.0, 0.0, 1.0, 1.0), j = vec4(1.0, 1.0, 0.0, 1.0), g = vec4(0.0, 0.0, 0.0, 1.0), l = vec4(1.0, 1.0, 1.0, 1.0);\nattribute vec2 quad;\n\nvoid main() {\n  gl_Position = vec4(quad, 0, 1.0);\n}\n','precision highp float;\n\nuniform sampler2D iCellGridTexture;\nuniform vec2 iGridSize, iCanvasSize;\nuniform int iRelease;\nconst vec4 q = vec4(1.0, 0.0, 0.0, 1.0), m = vec4(0.0, 1.0, 0.0, 1.0), k = vec4(0.0, 0.0, 1.0, 1.0), r = vec4(0.0, 1.0, 1.0, 1.0), o = vec4(1.0, 0.0, 1.0, 1.0), j = vec4(1.0, 1.0, 0.0, 1.0), g = vec4(0.0, 0.0, 0.0, 1.0), l = vec4(1.0, 1.0, 1.0, 1.0);\n\nint A(int a, int b) {\n  return int(mod(float(a), float(b)));\n}\n\nvec2 v(int a) {\n  return vec2(a / 256, A(a, 256));\n}\n\nbool e(float a, float b) {\n  return abs(a - b) < 1e-4;\n}\n\nbool t(vec2 a, vec2 b, vec2 c) {\n  return a.x > b.x && a.x < c.x && a.y > b.y && a.y < c.y;\n}\n\nvec2 y(vec2 b) {\n  vec2 a = gl_FragCoord.xy / iCanvasSize;\n  return vec2(0.0, 0.0) + iGridSize * a;\n}\n\nbool h(vec2 a) {\n  return a.x >= 0.0 && a.y >= 0.0 && a.x <= 1.0 && a.y <= 1.0;\n}\n\nvec4 C(const vec4 a) {\n  int b = int(a.x), c = int(a.y);\n  return vec4(v(b), v(c)) / 255.0;\n}\n\nbool i(const vec4 a) {\n  return!e(a.y, -1.0);\n}\n\nvoid B(vec2 a) {\n  if (iRelease == 1)\n    return;\n  vec4 b = vec4(1.0, 0.5, 0.5, 1.0), c = vec4(0.5, 0.5, 1.0, 1.0), f = vec4(0.5, 1.0, 0.5, 1.0);\n  if (mod(a.x, 100.0) < 3.0 || mod(a.y, 100.0) < 3.0)\n    gl_FragColor = (b + gl_FragColor) / 2.0;\n  if (t(a.xy, vec2(0.0, 0.0), vec2(10.0, 10.0)))\n    gl_FragColor = (f + gl_FragColor) / 2.0;\n  if (t(a.xy, vec2(100.0, 100.0), vec2(110.0, 110.0)))\n    gl_FragColor = (c + gl_FragColor) / 2.0;\n}\n\nvoid main() {\n  vec2 a = y(gl_FragCoord.xy), b = a / iGridSize;\n  if (!h(b)) {\n    gl_FragColor = g, B(a);\n    return;\n  }\n  vec4 c = texture2D(iCellGridTexture, b);\n  if (!i(c))\n    discard;\n  else\n    gl_FragColor = C(c);\n}\n');
var e=this.b.gl;L(e,'OES_texture_float'),e.disable(2929),this.e=new Igloo.Program(this.b.gl,'precision highp float;\n\nconst vec4 q = vec4(1.0, 0.0, 0.0, 1.0), m = vec4(0.0, 1.0, 0.0, 1.0), k = vec4(0.0, 0.0, 1.0, 1.0), r = vec4(0.0, 1.0, 1.0, 1.0), o = vec4(1.0, 0.0, 1.0, 1.0), j = vec4(1.0, 1.0, 0.0, 1.0), g = vec4(0.0, 0.0, 0.0, 1.0), l = vec4(1.0, 1.0, 1.0, 1.0);\nattribute vec2 quad;\n\nvoid main() {\n  gl_Position = vec4(quad, 0, 1.0);\n}\n','precision highp float;\n\nuniform sampler2D iCellGridTexture;\nuniform vec2 iCellGridSize;\nuniform int iStepSize;\nconst vec4 q = vec4(1.0, 0.0, 0.0, 1.0), m = vec4(0.0, 1.0, 0.0, 1.0), k = vec4(0.0, 0.0, 1.0, 1.0), r = vec4(0.0, 1.0, 1.0, 1.0), o = vec4(1.0, 0.0, 1.0, 1.0), j = vec4(1.0, 1.0, 0.0, 1.0), g = vec4(0.0, 0.0, 0.0, 1.0), l = vec4(1.0, 1.0, 1.0, 1.0);\n\nbool e(float a, float b) {\n  return abs(a - b) < 1e-4;\n}\n\nbool h(vec2 a) {\n  return a.x >= 0.0 && a.y >= 0.0 && a.x <= 1.0 && a.y <= 1.0;\n}\n\nvec4 n() {\n  return vec4(-1.0, -1.0, -1.0, -1.0);\n}\n\nvec2 s(const vec4 a) {\n  return vec2(a.z, a.w);\n}\n\nbool i(const vec4 a) {\n  return!e(a.y, -1.0);\n}\n\nvec4 d(const vec4 a, const vec2 f) {\n  vec2 c = (gl_FragCoord.xy + f) / iCellGridSize;\n  vec4 b = h(c) ? texture2D(iCellGridTexture, c) : n();\n  if (!i(b))\n    return a;\n  else if (!i(a))\n    return b;\n  else {\n    vec2 p = s(a), x = s(b);\n    if (distance(p, gl_FragCoord.xy) > distance(x, gl_FragCoord.xy))\n      return b;\n  }\n  return a;\n}\n\nvoid main() {\n  vec2 b = gl_FragCoord.xy / iCellGridSize;\n  if (!h(b))\n    discard;\n  vec4 a = texture2D(iCellGridTexture, b);\n  a = d(a, vec2(0, iStepSize)), a = d(a, vec2(iStepSize, iStepSize)), a = d(a, vec2(iStepSize, 0)), a = d(a, vec2(iStepSize, -iStepSize)), a = d(a, vec2(0, -iStepSize)), a = d(a, vec2(-iStepSize, -iStepSize)), a = d(a, vec2(-iStepSize, 0)), a = d(a, vec2(-iStepSize, iStepSize)), gl_FragColor = a;\n}\n'),
this.c=new Igloo.Program(this.b.gl,'precision highp float;\n\nconst vec4 q = vec4(1.0, 0.0, 0.0, 1.0), m = vec4(0.0, 1.0, 0.0, 1.0), k = vec4(0.0, 0.0, 1.0, 1.0), r = vec4(0.0, 1.0, 1.0, 1.0), o = vec4(1.0, 0.0, 1.0, 1.0), j = vec4(1.0, 1.0, 0.0, 1.0), g = vec4(0.0, 0.0, 0.0, 1.0), l = vec4(1.0, 1.0, 1.0, 1.0);\nattribute vec2 quad;\n\nvoid main() {\n  gl_Position = vec4(quad, 0, 1.0);\n}\n','precision highp float;\n\nuniform sampler2D iCellGridTexture;\nuniform vec2 iCellGridSize;\nuniform vec4 iBackgroundColor;\nconst vec4 q = vec4(1.0, 0.0, 0.0, 1.0), m = vec4(0.0, 1.0, 0.0, 1.0), k = vec4(0.0, 0.0, 1.0, 1.0), r = vec4(0.0, 1.0, 1.0, 1.0), o = vec4(1.0, 0.0, 1.0, 1.0), j = vec4(1.0, 1.0, 0.0, 1.0), g = vec4(0.0, 0.0, 0.0, 1.0), l = vec4(1.0, 1.0, 1.0, 1.0);\n\nint u(int a, int b) {\n  return a * 256 + b;\n}\n\nbool e(float a, float b) {\n  return abs(a - b) < 1e-4;\n}\n\nbool w(vec4 a, vec4 b) {\n  return e(a.x, b.x) && e(a.y, b.y) && e(a.z, b.z) && e(a.w, b.w);\n}\n\nvec4 z(float a, float b, vec2 c) {\n  return vec4(a, b, c);\n}\n\nvec4 n() {\n  return vec4(-1.0, -1.0, -1.0, -1.0);\n}\n\nvoid main() {\n  vec2 b = gl_FragCoord.xy / iCellGridSize, c = vec2(b.x, 1.0 - b.y);\n  vec4 a = texture2D(iCellGridTexture, c);\n  if (w(a, iBackgroundColor))\n    gl_FragColor = n();\n  else {\n    int f = u(int(a.r * 255.0), int(a.g * 255.0)), p = u(int(a.b * 255.0), int(a.a * 255.0));\n    gl_FragColor = z(float(f), float(p), gl_FragCoord.xy);\n  }\n}\n'),
this.d=this.b.array(Igloo.QUAD2),this.g=this.b.texture(null,6408,10497,9728,5126).blank(a,a),this.h=this.b.texture(null,6408,10497,9728,5126).blank(a,a),this.i=this.b.texture(null,6408,10497,9728,5121).blank(a,a),this.j=this.b.framebuffer(),M(this,P(new $(256,256),S,200))}function _(b,a){this.b=b,this.a=a}function $(b,a){this.b=b,this.a=a}var F=[f(7667884),f(14373119),f(5046527),f(9651967),f(10042034),f(4150527),f(233724),f(16777215)],H=[f(7051762),f(4814543),f(8428277),f(8305894),f(9011445),f(970239),f(5611513)],S=[f(7112959),f(4379135),f(12075479),f(9971199),f(6225916),f(4849577),f(8285951),f(10551246),f(15226111)];T()})();
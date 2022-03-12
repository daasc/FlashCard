(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{259:function(t,e,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(134).default)("65149850",content,!0,{sourceMap:!1})},260:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(134).default)("258b7211",content,!0,{sourceMap:!1})},261:function(t,e,r){"use strict";r.r(e);var o={name:"AlertFlash",computed:{correct:function(){return!1===this.$store.state.flash.isCorrect?"Wrong":!0===this.$store.state.flash.isCorrect?"Correct":""}},methods:{start:function(){this.$store.commit("flash/START")}}},n=(r(263),r(50)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert"},[r("span",{staticClass:"message",class:{correct:"Correct"===t.correct,error:"Wrong"===t.correct},attrs:{"data-testid":"message"}},[t._v("\n    "+t._s(t.correct))]),t._v(" "),"Correct"!==t.correct?r("div",{staticClass:"choose"},[t._v("Choose Your Answer")]):t._e(),t._v(" "),"Correct"===t.correct?r("button",{staticClass:"button-19",attrs:{role:"button","data-testid":"start"},on:{click:function(e){return t.start()}}},[t._v("\n    Play Again?\n  ")]):t._e()])}),[],!1,null,"39f66624",null);e.default=component.exports},262:function(t,e,r){"use strict";r.r(e);var o={name:"AnswerFlash",computed:{answer:function(){return this.$store.state.flash.answer}},methods:{check:function(t){this.$store.commit("flash/CHECK_RESULT",t)}}},n=(r(265),r(50)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"answers"},t._l(t.answer,(function(e,o){return r("div",{key:o,staticClass:"answer",attrs:{"data-testid":"answer"},on:{click:function(r){return t.check(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,r){"use strict";r(259)},264:function(t,e,r){var o=r(133)(!1);o.push([t.i,'.alert[data-v-39f66624]{display:flex;flex-direction:column;align-items:center}.alert .choose[data-v-39f66624]{font-size:18px}.alert .correct[data-v-39f66624]{color:#1899d6}.alert .error[data-v-39f66624]{color:#e70d0d}.alert .message[data-v-39f66624]{font-size:17px;margin-bottom:5px}.alert .button-19[data-v-39f66624]{-webkit-appearance:button;-moz-appearance:button;appearance:button;background-color:#1899d6;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:din-round,sans-serif;font-weight:700;letter-spacing:.8px;line-height:20px;margin:0;outline:none;overflow:visible;padding:13px 16px;text-align:center;text-transform:uppercase;touch-action:manipulation;transform:translateZ(0);transition:filter .2s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;vertical-align:middle;white-space:nowrap;width:40%;height:45px}.alert .button-19[data-v-39f66624],.alert .button-19after[data-v-39f66624]{border-radius:16px;border:solid transparent;border-width:0 0 4px}.alert .button-19after[data-v-39f66624]{background-clip:padding-box;background-color:#1cb0f6;bottom:-4px;content:"";left:0;position:absolute;right:0;top:0;z-index:-1}.alert .button-19[data-v-39f66624]:focus,.alert .button-19main[data-v-39f66624]{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.alert .button-19[data-v-39f66624]:hover:not(:disabled){filter:brightness(1.1)}.alert .button-19[data-v-39f66624]:disabled{cursor:auto}',""]),t.exports=o},265:function(t,e,r){"use strict";r(260)},266:function(t,e,r){var o=r(133)(!1);o.push([t.i,".answers{margin-top:10px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(auto-fill,30px);grid-row-gap:3.5em;grid-column-gap:1em}.answers .answer{cursor:pointer;font-size:3rem}",""]),t.exports=o},267:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(134).default)("81ff285e",content,!0,{sourceMap:!1})},268:function(t,e,r){"use strict";r(267)},269:function(t,e,r){var o=r(133)(!1);o.push([t.i,".card{background:#262a27;border-radius:15px;color:#fff;display:block;float:left;margin:10px 1%;max-width:320px;padding-bottom:25px;width:98%;box-shadow:0 15px 25px rgba(0,0,0,.15),0 5px 10px rgba(0,0,0,.05);display:flex;flex-direction:column;text-align:center;align-self:center}.card .multiplier{font-size:8em}.card .multiplier-symbol .symbol{font-size:4em;margin-right:20px}.card .divider{height:10px;background-color:#fff;width:80%;border-radius:10px;padding:0;margin:0 auto 10px}",""]),t.exports=o},270:function(t,e,r){"use strict";r.r(e);var o=r(261),n={name:"CardFlash",components:{AnswerFlash:r(262).default,AlertFlash:o.default},computed:{multiplier:function(){return this.$store.state.flash.multiplier},secondMultiplier:function(){return this.$store.state.flash.secondMultiplier}}},l=(r(268),r(50)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"multiplier"},[r("span",{attrs:{"data-testid":"multiplier"}},[t._v(t._s(t.multiplier))])]),t._v(" "),r("div",{staticClass:"multiplier-symbol"},[r("span",{staticClass:"symbol"},[t._v("X")]),t._v(" "),r("span",{staticClass:"multiplier",attrs:{"data-testid":"secondMultiplier"}},[t._v(t._s(t.secondMultiplier))])]),t._v(" "),r("hr",{staticClass:"divider"}),t._v(" "),r("alert-flash"),t._v(" "),r("answer-flash")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertFlash:r(261).default,AnswerFlash:r(262).default})},271:function(t,e,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(134).default)("28f1127f",content,!0,{sourceMap:!1})},272:function(t,e,r){"use strict";r(271)},273:function(t,e,r){var o=r(133)(!1);o.push([t.i,"body{background:url(https://a-static.mlcdn.com.br/1500x1500/papel-de-parede-laboratorio-quimica-atamos-dna-autocolante-lrp/lojariopreto/7839845040/d8bf668c260fd18fa22ab98d675b53d4.jpg)}.container{display:flex;flex-direction:column;justify-content:center;height:100vh}",""]),t.exports=o},274:function(t,e,r){"use strict";r.r(e);var o={name:"IndexPage",components:{CardFlash:r(270).default},created:function(){this.$store.commit("flash/START")}},n=(r(272),r(50)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("card-flash")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardFlash:r(270).default})}}]);
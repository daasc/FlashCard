(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{259:function(t,e,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(134).default)("65149850",content,!0,{sourceMap:!1})},261:function(t,e,r){"use strict";r.r(e);var o={name:"AlertFlash",computed:{correct:function(){return!1===this.$store.state.flash.isCorrect?"Wrong":!0===this.$store.state.flash.isCorrect?"Correct":""}},methods:{start:function(){this.$store.commit("flash/START")}}},n=(r(263),r(50)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert"},[r("span",{staticClass:"message",class:{correct:"Correct"===t.correct,error:"Wrong"===t.correct},attrs:{"data-testid":"message"}},[t._v("\n    "+t._s(t.correct))]),t._v(" "),"Correct"!==t.correct?r("div",{staticClass:"choose"},[t._v("Choose Your Answer")]):t._e(),t._v(" "),"Correct"===t.correct?r("button",{staticClass:"button-19",attrs:{role:"button","data-testid":"start"},on:{click:function(e){return t.start()}}},[t._v("\n    Play Again?\n  ")]):t._e()])}),[],!1,null,"39f66624",null);e.default=component.exports},263:function(t,e,r){"use strict";r(259)},264:function(t,e,r){var o=r(133)(!1);o.push([t.i,'.alert[data-v-39f66624]{display:flex;flex-direction:column;align-items:center}.alert .choose[data-v-39f66624]{font-size:18px}.alert .correct[data-v-39f66624]{color:#1899d6}.alert .error[data-v-39f66624]{color:#e70d0d}.alert .message[data-v-39f66624]{font-size:17px;margin-bottom:5px}.alert .button-19[data-v-39f66624]{-webkit-appearance:button;-moz-appearance:button;appearance:button;background-color:#1899d6;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:din-round,sans-serif;font-weight:700;letter-spacing:.8px;line-height:20px;margin:0;outline:none;overflow:visible;padding:13px 16px;text-align:center;text-transform:uppercase;touch-action:manipulation;transform:translateZ(0);transition:filter .2s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;vertical-align:middle;white-space:nowrap;width:40%;height:45px}.alert .button-19[data-v-39f66624],.alert .button-19after[data-v-39f66624]{border-radius:16px;border:solid transparent;border-width:0 0 4px}.alert .button-19after[data-v-39f66624]{background-clip:padding-box;background-color:#1cb0f6;bottom:-4px;content:"";left:0;position:absolute;right:0;top:0;z-index:-1}.alert .button-19[data-v-39f66624]:focus,.alert .button-19main[data-v-39f66624]{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.alert .button-19[data-v-39f66624]:hover:not(:disabled){filter:brightness(1.1)}.alert .button-19[data-v-39f66624]:disabled{cursor:auto}',""]),t.exports=o}}]);
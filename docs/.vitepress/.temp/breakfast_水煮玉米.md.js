import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"水煮玉米的做法","description":"","frontmatter":{},"headers":[],"relativePath":"breakfast/水煮玉米.md","filePath":"breakfast/水煮玉米.md"}');
const _sfc_main = { name: "breakfast/水煮玉米.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="水煮玉米的做法" tabindex="-1">水煮玉米的做法 <a class="header-anchor" href="#水煮玉米的做法" aria-label="Permalink to &quot;水煮玉米的做法&quot;">​</a></h1><p>水煮玉米是一道家常快手菜，口感清甜软糯。新鲜玉米带皮煮制，保留原香，加入盐和糖更能提味。它富含膳食纤维、维生素与碳水化合物，能为身体提供饱足感。做法极其简单，新手也能轻松上手，从准备到上桌只需大约 15 分钟。</p><p>预估烹饪难度：★★</p><p>预估卡路里：108 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>新鲜玉米</li><li>放得下玉米的锅</li><li>水</li><li>盐</li><li>糖（可选）</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><ul><li>一个带皮玉米</li><li>淹过玉米约半节指头的水</li><li>煮玉米的时候，开始和淡盐水，差不多 2 克盐加 50ml 的水</li><li>根据口味选择加或者不加糖（可选）</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>将新鲜玉米剥去外皮，剩部分玉米皮入锅</li><li>加入淹过玉米约半节指头的水，加盐和糖</li><li>水煮开之后转至小火，加盖继续煮 15-20 分钟，玉米煮久点没事。</li><li>煮熟后沥干水分，冷却后食用。</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("breakfast/水煮玉米.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

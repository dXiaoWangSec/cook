import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/cook/assets/1.NEcTV0IA.jpeg";
const __pageData = JSON.parse('{"title":"话梅煮毛豆的做法","description":"","frontmatter":{},"headers":[],"relativePath":"lunch/话梅煮毛豆/话梅煮毛豆.md","filePath":"lunch/话梅煮毛豆/话梅煮毛豆.md"}');
const _sfc_main = { name: "lunch/话梅煮毛豆/话梅煮毛豆.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="话梅煮毛豆的做法" tabindex="-1">话梅煮毛豆的做法 <a class="header-anchor" href="#话梅煮毛豆的做法" aria-label="Permalink to &quot;话梅煮毛豆的做法&quot;">​</a></h1><p>话梅煮毛豆是一道酸甜开胃的家常小菜，口感清爽软糯，带有梅子的自然果香。毛豆富含植物蛋白和膳食纤维，有助于补充能量、促进消化。做法非常简单，新手也能轻松上手，全程只需 35 到 45 分钟即可完成。</p><p>预估烹饪难度：★★</p><p>预估卡路里：454 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>毛豆</li><li>话梅</li><li>食用盐</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>每份：</p><ul><li>毛豆 300 g</li><li>话梅 6 颗</li><li>食用盐 2 g</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>清水加入食用盐，毛豆浸泡 15 分钟</li><li>加入开水，倒入毛豆、话梅，水煮 20-30 分钟</li><li>起锅开吃</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="话梅煮毛豆-预览图-1"></p><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("lunch/话梅煮毛豆/话梅煮毛豆.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _____ as default
};

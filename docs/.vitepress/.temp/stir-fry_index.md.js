import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"炒菜","description":"","frontmatter":{},"headers":[],"relativePath":"stir-fry/index.md","filePath":"stir-fry/index.md"}');
const _sfc_main = { name: "stir-fry/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="炒菜" tabindex="-1">炒菜 <a class="header-anchor" href="#炒菜" aria-label="Permalink to &quot;炒菜&quot;">​</a></h1><p>这里收录炒菜相关的菜谱和笔记。</p><p>从侧边栏选择菜谱即可查看。后续添加到 <code>docs/stir-fry/</code> 目录中的 Markdown 文件，也会自动显示在炒菜栏目中。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stir-fry/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

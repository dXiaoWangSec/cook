import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"午餐","description":"","frontmatter":{},"headers":[],"relativePath":"lunch/index.md","filePath":"lunch/index.md"}');
const _sfc_main = { name: "lunch/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="午餐" tabindex="-1">午餐 <a class="header-anchor" href="#午餐" aria-label="Permalink to &quot;午餐&quot;">​</a></h1><p>这里收录午餐相关的菜谱和笔记。</p><p>从侧边栏选择菜谱即可查看。后续添加到 <code>docs/lunch/</code> 目录中的 Markdown 文件，也会自动显示在午餐栏目中。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("lunch/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

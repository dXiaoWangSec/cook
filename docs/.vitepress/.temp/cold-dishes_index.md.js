import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"冷菜","description":"","frontmatter":{},"headers":[],"relativePath":"cold-dishes/index.md","filePath":"cold-dishes/index.md"}');
const _sfc_main = { name: "cold-dishes/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="冷菜" tabindex="-1">冷菜 <a class="header-anchor" href="#冷菜" aria-label="Permalink to &quot;冷菜&quot;">​</a></h1><p>冷菜不只是开胃小菜，也是餐桌上调节节奏的一笔清爽颜色。提前准备好，吃饭时会更轻松。</p><h2 id="菜单预览" tabindex="-1">菜单预览 <a class="header-anchor" href="#菜单预览" aria-label="Permalink to &quot;菜单预览&quot;">​</a></h2><div class="dish-grid"><div class="dish-card"><h3>凉拌黄瓜</h3><p>脆、酸、香，冰箱里常备几根黄瓜就能完成。</p></div><div class="dish-card"><h3>麻酱菠菜</h3><p>芝麻酱的醇厚和菠菜的清新，搭配出柔和的口感。</p></div><div class="dish-card"><h3>柠檬手撕鸡</h3><p>鸡肉鲜嫩，带一点柠檬的明亮酸香，适合提前冷藏。</p></div></div><h2 id="备菜小记" tabindex="-1">备菜小记 <a class="header-anchor" href="#备菜小记" aria-label="Permalink to &quot;备菜小记&quot;">​</a></h2><ul><li>绿叶菜焯水后及时过凉，颜色和口感会更好。</li><li>凉拌汁建议单独保存，食用前再拌，避免食材出水。</li><li>冷菜的咸味会随着时间变明显，调味时可以略微保守。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cold-dishes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

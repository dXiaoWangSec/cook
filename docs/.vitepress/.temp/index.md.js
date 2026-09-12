import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"小厨房","text":"把厨房里的好味道，认真记录下来","tagline":"家常热菜、清爽冷菜，以及每一次愿意为自己开火的时刻。","actions":[{"theme":"brand","text":"看看热菜","link":"/hot-dishes"},{"theme":"alt","text":"认识我","link":"/about"}]},"features":[{"icon":"🔥","title":"热菜","details":"锅气、香气和刚出锅的温度，适合认真吃一顿饭。","link":"/hot-dishes"},{"icon":"🥗","title":"冷菜","details":"清爽、利落、少负担，让餐桌多一点轻盈的层次。","link":"/cold-dishes"},{"icon":"✍️","title":"关于我","details":"记录我的厨房日常，也分享那些值得重复的做法。","link":"/about"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="home-note"><h2 id="今日厨房" tabindex="-1">今日厨房 <a class="header-anchor" href="#今日厨房" aria-label="Permalink to &quot;今日厨房&quot;">​</a></h2><p>这里会慢慢收集我的家常菜谱、备菜心得和一些关于吃饭的碎片想法。网站的内容会持续更新，先从最常做、最想分享的几道菜开始。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

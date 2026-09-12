import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"小厨房","text":"认真做饭，好好吃饭","tagline":"从一顿早餐开始，记录午餐、晚餐、家常炒菜和喜欢的饮品。","actions":[{"theme":"brand","text":"开始逛逛","link":"/lunch/"},{"theme":"alt","text":"认识我","link":"/about/"}]},"features":[{"icon":"🌅","title":"早餐","details":"鸡蛋、粥、面包与简单主食，用一顿温暖的早餐开启新一天。","link":"/breakfast/"},{"icon":"☀️","title":"午餐","details":"素菜、豆腐和家常小炒，为忙碌的白天认真补充能量。","link":"/lunch/"},{"icon":"🌙","title":"晚餐","details":"炒饭、面食和各式主食，用熟悉的味道安稳结束一天。","link":"/dinner/"},{"icon":"🍳","title":"炒菜","details":"肉菜、炖菜和下饭菜，收录值得反复端上餐桌的家常味。","link":"/stir-fry/"},{"icon":"🥤","title":"饮品","details":"奶茶、果饮和调制饮品，为日常餐桌添一点轻松和清爽。","link":"/drinks/"},{"icon":"✍️","title":"关于我","details":"关于这个小厨房，以及记录这些菜谱和生活片段的人。","link":"/about/"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="home-note"><h2 id="欢迎来到小厨房" tabindex="-1">欢迎来到小厨房 <a class="header-anchor" href="#欢迎来到小厨房" aria-label="Permalink to &quot;欢迎来到小厨房&quot;">​</a></h2><p>这里收集早餐、午餐、晚餐、家常炒菜和饮品配方，也记录备菜、调味与火候带来的细微变化。每一篇菜谱都来自真实的厨房实践，希望下一次站在灶台前时，可以更从容地做出喜欢的味道。</p><h2 id="一日三餐" tabindex="-1">一日三餐 <a class="header-anchor" href="#一日三餐" aria-label="Permalink to &quot;一日三餐&quot;">​</a></h2><p>早晨可以从一碗粥、一个鸡蛋或一份三明治开始；午餐准备几道简单小菜，照顾白天的胃口；晚餐则慢一点，让炒饭、面食和热腾腾的主食为一天收尾。</p><h2 id="家常滋味" tabindex="-1">家常滋味 <a class="header-anchor" href="#家常滋味" aria-label="Permalink to &quot;家常滋味&quot;">​</a></h2><p>炒菜栏目里记录了适合配米饭的肉菜、炖菜与地方风味，饮品栏目则收集果饮、奶茶和调制饮料。菜单会随着厨房日常继续丰富，把那些值得再做一次的味道好好留下来。</p><blockquote><p>不必每顿都复杂，愿意为自己开火，就是很好的生活。</p></blockquote></div></div>`);
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

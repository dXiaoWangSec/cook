import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"热菜","description":"","frontmatter":{},"headers":[],"relativePath":"hot-dishes.md","filePath":"hot-dishes.md"}');
const _sfc_main = { name: "hot-dishes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="热菜" tabindex="-1">热菜 <a class="header-anchor" href="#热菜" aria-label="Permalink to &quot;热菜&quot;">​</a></h1><p>热菜是厨房里最有即时感的部分：热油下锅的声音、调味料被激发出来的香气，以及端上桌时刚刚好的温度。</p><h2 id="菜单预览" tabindex="-1">菜单预览 <a class="header-anchor" href="#菜单预览" aria-label="Permalink to &quot;菜单预览&quot;">​</a></h2><div class="dish-grid"><div class="dish-card"><h3>番茄炒蛋</h3><p>酸甜柔软，适合配一大碗热米饭的家常味。</p></div><div class="dish-card"><h3>葱爆牛肉</h3><p>大火快炒，保留牛肉的嫩和大葱的香。</p></div><div class="dish-card"><h3>蒜蓉粉丝虾</h3><p>蒜香铺底，粉丝吸饱鲜味，简单但很有存在感。</p></div></div><h2 id="做菜小记" tabindex="-1">做菜小记 <a class="header-anchor" href="#做菜小记" aria-label="Permalink to &quot;做菜小记&quot;">​</a></h2><ul><li>先准备好所有食材，再开火，炒菜过程会从容很多。</li><li>调味可以少量多次加入，给食材留下调整空间。</li><li>热菜出锅后尽快食用，口感通常在前几分钟最好。</li></ul><p>后续可以在这里继续添加独立菜谱页面，并从侧边栏或卡片链接过去。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("hot-dishes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hotDishes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hotDishes as default
};

import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/cook/assets/%E7%82%92%E6%BB%91%E8%9B%8B.D_-yk8Fk.jpg";
const __pageData = JSON.parse('{"title":"炒滑蛋的做法","description":"","frontmatter":{},"headers":[],"relativePath":"lunch/炒滑蛋/炒滑蛋.md","filePath":"lunch/炒滑蛋/炒滑蛋.md"}');
const _sfc_main = { name: "lunch/炒滑蛋/炒滑蛋.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="炒滑蛋的做法" tabindex="-1">炒滑蛋的做法 <a class="header-anchor" href="#炒滑蛋的做法" aria-label="Permalink to &quot;炒滑蛋的做法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="炒滑蛋成品"></p><p>炒滑蛋是一道口感嫩滑、蛋香浓郁的经典家常菜，带有淡淡的奶香。鸡蛋富含优质蛋白质和多种维生素，营养丰富，易于吸收。做法非常友好，新手也能轻松掌握，从备料到出锅只需约 5 分钟，是忙碌时快速补充能量的理想选择。</p><p>预估烹饪难度：★</p><p>预估卡路里：391 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>鸡蛋（最好是无菌蛋）</li><li>牛奶</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>每份：</p><ul><li>鸡蛋 4 颗</li><li>牛奶 30ml</li><li>食用油 10ml</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>鸡蛋加入牛奶以及 5ml 食用油搅拌均匀，备用</li><li>大火烧热平底锅约 30s, 加入 5ml 食用油</li><li>烧 30s 转小火, 并且放入搅拌好的鸡蛋</li><li>在锅中静置 5 秒后，用锅铲将蛋液从边缘缓慢推向中间</li><li>翻炒至鸡蛋大致凝固后关火，装盘</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><ul><li>最后可根据个人口味撒些黑胡椒或者盐来调味。</li></ul><p>参考资料</p><ul><li><a href="http://sweetheartkitchen.com/recipes/scrambled-egg/" target="_blank" rel="noreferrer">甜琛廚房</a></li></ul><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("lunch/炒滑蛋/炒滑蛋.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};

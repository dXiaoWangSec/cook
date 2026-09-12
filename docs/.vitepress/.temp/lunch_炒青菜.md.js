import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"炒青菜的做法","description":"","frontmatter":{},"headers":[],"relativePath":"lunch/炒青菜.md","filePath":"lunch/炒青菜.md"}');
const _sfc_main = { name: "lunch/炒青菜.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="炒青菜的做法" tabindex="-1">炒青菜的做法 <a class="header-anchor" href="#炒青菜的做法" aria-label="Permalink to &quot;炒青菜的做法&quot;">​</a></h1><p>这是一道清爽可口的家常素菜，口感脆嫩、咸鲜回甘。青菜富含维生素与膳食纤维，有助于促进消化。做法非常简单，零基础也能轻松驾驭，从备菜到出锅大约只需 10 分钟。</p><p>预估烹饪难度：★★</p><p>预估卡路里：152 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>青菜</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>每次制作前需要确定计划做几份。一份正好够 1 个人食用</p><p>总量：</p><ul><li>青菜 100g * 份数</li><li>蒜瓣 2 粒 * 份数</li><li>食用油 10-15ml（覆盖锅底即可）</li><li>食盐 2g * 份数</li><li>饮用水 70ml * 份数</li><li>白糖 5g * 份数</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>青菜掰成小瓣，用清水洗净，备用。</li><li>将蒜瓣剁碎，备用</li><li>中火或大火热锅后，锅内放入 10-15ml 食用油。再等待 30 秒让油温升高。</li><li>将准备好的青菜倒入锅中，翻炒至青菜变软（约 1 分钟）。</li><li>放入剁碎的蒜瓣</li><li>倒入计算好的清水，水位应当完全浸润或即将没过青菜，加入食盐 （2g * 份数），继续翻炒约 1 分钟。</li><li>最后加入白糖小火加热 2 分钟，加热时盖上锅盖。</li><li>盛盘。</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><p>加入白糖，会让青菜颜色更绿。</p><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("lunch/炒青菜.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};

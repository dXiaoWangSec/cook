import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"奶茶的做法","description":"","frontmatter":{},"headers":[],"relativePath":"drinks/奶茶.md","filePath":"drinks/奶茶.md"}');
const _sfc_main = { name: "drinks/奶茶.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="奶茶的做法" tabindex="-1">奶茶的做法 <a class="header-anchor" href="#奶茶的做法" aria-label="Permalink to &quot;奶茶的做法&quot;">​</a></h1><p>这是一道用红茶和奶粉轻松调制的家常饮品，茶香与奶香交融，口感顺滑温暖。红茶中的茶多酚搭配牛奶的蛋白质和钙质，既能提神又补充日常营养。做法非常简单，新手也能一次成功，仅需大约半 小时就能喝上自制奶茶。</p><p>预估烹饪难度：★★</p><p>预估卡路里：81 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>袋泡红茶（推荐立顿黄牌精选红茶）</li><li>全脂奶粉或淡奶</li><li>杯子，例如带刻度的杯子，陶瓷杯或保温杯</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>每份：</p><ul><li>袋泡红茶 2 包（约 4g）</li><li>奶粉 11-12g</li><li>砂糖 5-7g</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>取袋泡红茶 2 包放入杯中，加入 180-200mL <strong>沸水</strong>。</li><li><strong>等待 20 - 30 分钟</strong>。</li><li>称取 11-12g 奶粉和 5-7g 砂糖，分别加入前一步骤得到的液体中。</li><li>搅拌均匀即可饮用。</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><ul><li>加入沸水后，尽量保持杯子内部温暖，例如使用开口较小的杯子或盖上盖子。如果气温较低时，使用量杯量取可能导致沸水在冲入红茶前冷却，则可以不使用量杯量取而直接估计其体积。</li><li>等待时间结束后可提起或搅动茶包以使冲泡更加均匀。</li></ul><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("drinks/奶茶.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};

import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/%E9%A5%AD%E5%9B%A2.COPBLRnz.png";
const __pageData = JSON.parse('{"title":"火腿饭团的做法","description":"","frontmatter":{},"headers":[],"relativePath":"dinner/火腿饭团/火腿饭团.md","filePath":"dinner/火腿饭团/火腿饭团.md"}');
const _sfc_main = { name: "dinner/火腿饭团/火腿饭团.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="火腿饭团的做法" tabindex="-1">火腿饭团的做法 <a class="header-anchor" href="#火腿饭团的做法" aria-label="Permalink to &quot;火腿饭团的做法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="火腿饭团"> 一道简单快手的日式风味饭团，咸香火腿搭配沙拉酱与海苔，口感丰富饱腹。富含碳水化合物、蛋白质和维生素，能快速补充能量。制作难度极低，新手也能轻松上手，从煮饭到完成大约只需 1 小时。</p><p>预估烹饪难度：★★★★</p><p>预估卡路里：665 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>火腿</li><li>米饭</li><li>水</li><li>冷冻青豆（可选）</li><li>冷冻玉米粒（可选）</li><li>海苔碎（可选）</li><li>喜欢的沙拉酱（推荐日式 mayo！）</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>每次制作前需要确定计划做几份。一份正好够 2 个人吃。</p><p>每份：</p><ul><li>火腿(100g)</li><li>米饭(125g)</li><li>水(90ml)</li><li>冷冻青豆(30g)</li><li>冷冻玉米粒(30g)</li><li>海苔碎(10g)</li><li>喜欢的沙拉酱(20g)</li><li>食用油 10-15ml</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>将米饭和水放到电饭锅里，点击米饭模式，等待完成</li><li>冷冻玉米粒和青豆放到锅里，加水没过所有食材，沸腾后静待 2 分钟后，捞出。</li><li>火腿切成 1cm 的方块</li><li>与此同时，加入 10ml 食用油，加入火腿翻炒至火腿上色</li><li>将米饭，火腿，海苔碎，青豆，玉米粒，沙拉酱放入碗中，混合均匀即可</li><li>装盘（如果有的话）</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><ul><li>沙拉酱的程度可以根据个人口味酌情删减。</li><li>可以尝试混合沙拉酱。</li><li>参考资料：小红书 - 干饭选手又困了</li></ul><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dinner/火腿饭团/火腿饭团.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

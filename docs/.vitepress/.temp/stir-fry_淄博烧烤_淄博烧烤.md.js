import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/%E6%B7%84%E5%8D%9A%E7%83%A7%E7%83%A4.7QWv9wtD.jpg";
const __pageData = JSON.parse('{"title":"淄博烧烤的做法","description":"","frontmatter":{},"headers":[],"relativePath":"stir-fry/淄博烧烤/淄博烧烤.md","filePath":"stir-fry/淄博烧烤/淄博烧烤.md"}');
const _sfc_main = { name: "stir-fry/淄博烧烤/淄博烧烤.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="淄博烧烤的做法" tabindex="-1">淄博烧烤的做法 <a class="header-anchor" href="#淄博烧烤的做法" aria-label="Permalink to &quot;淄博烧烤的做法&quot;">​</a></h1><p>这是一道山东淄博特色烧烤，小饼卷肉配大葱的吃法风味独特，肉香、酱香与葱香交融，口感层次丰富。五花肉富含优质蛋白质和脂肪，大葱提供膳食纤维，搭配小饼能快速补充能量。制作需要控制炭火火候和翻烤技巧，对新手稍具挑战，全程约 40 分钟即可完成。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="淄博烧烤"></p><p>预估烹饪难度：★★★★</p><p>预估卡路里：650 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>猪五花肉</li><li>小薄饼（市售现成）</li><li>大葱</li><li>芝麻酱</li><li>甜面酱</li><li>芝麻盐</li><li>烧烤炉</li><li>烤网</li><li>炭火或燃气</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>每份为 1 个人吃的量，多人按比例加量即可。</p><p>每份：</p><ul><li>猪五花肉 200g</li><li>小薄饼 5 张</li><li>大葱 1 根（约 100g）</li><li>芝麻酱 20g</li><li>甜面酱 15g</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>五花肉切成厚度不超过 2cm 长的块，并串成串。（五花肉可以预先腌制一下，味道更佳）</li><li>大葱切成 5cm 长的葱段，备用</li><li>芝麻酱加 10ml 温水调稀，与甜面酱混合均匀，备用（可以换成&quot;芝麻盐&quot;）</li><li>点燃炭火，等待炭火烧至<strong>通红无明火</strong>状态（约 15 分钟）</li><li>将五花肉串均匀摆在在烤网上，烤至<em>底面焦黄出油</em>后翻面</li><li>继续烤制约 2 - 3 分钟，至<em>两面焦黄、边缘微焦</em>后取下</li><li>取一张小薄面饼平铺，抹上 3 - 4g 混合酱料</li><li>放上烤好的肉片和 1 - 2 段大葱，卷起即可食用</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><ul><li>五花肉切片时建议放入冰箱冷冻 30 分钟后再切，更易切块。</li><li>炭火烤制风味优于燃气，有条件建议使用木炭。</li><li>酱料可根据个人口味调整芝麻酱与甜面酱的比例，也可以换成芝麻盐。</li></ul><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stir-fry/淄博烧烤/淄博烧烤.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

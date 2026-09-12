import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/%E6%9F%A0%E6%AA%AC%E6%B0%B4.Bjb64L6l.jpg";
const __pageData = JSON.parse('{"title":"柠檬水的做法","description":"","frontmatter":{},"headers":[],"relativePath":"drinks/柠檬水/柠檬水.md","filePath":"drinks/柠檬水/柠檬水.md"}');
const _sfc_main = { name: "drinks/柠檬水/柠檬水.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="柠檬水的做法" tabindex="-1">柠檬水的做法 <a class="header-anchor" href="#柠檬水的做法" aria-label="Permalink to &quot;柠檬水的做法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="柠檬水成品"></p><p>这道饮品以新鲜柠檬为主角，搭配果蜜调和，酸甜平衡，冰镇后更感清凉解暑。柠檬富含维生素 C，经常饮用有助于补充营养、提神美白。制作步骤极简，只需捶打、加料、摇晃，新手也能在三五分钟内完成。</p><p>预估烹饪难度：★</p><p>预估卡路里：141 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><ul><li>原料 <ul><li>柠檬</li><li>果蜜</li><li>冰（可选）</li></ul></li><li>工具 <ul><li>雪克杯</li></ul></li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>一杯分量，约 500 毫升</p><ul><li>柠檬 40~45 克</li><li>果蜜 40~45 克</li><li>冰几块（可选）</li></ul><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li>称 40~45 克柠檬，放入雪克杯中</li><li>雪克杯盖盖子锤大约 10 次</li><li>加入果蜜 40~45 克</li><li>补水</li><li>摇晃均匀</li><li>最后根据喜好加冰</li></ol><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><ul><li>参考资料：<a href="https://v.douyin.com/TVNTcXDi46I" target="_blank" rel="noreferrer">柠檬水教程</a></li></ul><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("drinks/柠檬水/柠檬水.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};

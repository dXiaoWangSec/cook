import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"关于我","description":"","frontmatter":{},"headers":[],"relativePath":"about/index.md","filePath":"about/index.md"}');
const _sfc_main = { name: "about/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于我" tabindex="-1">关于我 <a class="header-anchor" href="#关于我" aria-label="Permalink to &quot;关于我&quot;">​</a></h1><p>你好，我是这个小厨房的记录者。</p><p>我喜欢把日常吃到的味道做得更简单一点，也喜欢把一次成功的经验写下来，让下一次做饭时少一点犹豫。这个网站会从家常菜开始，慢慢记录我的菜单、备菜方式和厨房里那些值得分享的小发现。</p><h2 id="这里会有什么" tabindex="-1">这里会有什么 <a class="header-anchor" href="#这里会有什么" aria-label="Permalink to &quot;这里会有什么&quot;">​</a></h2><ul><li>可以反复做的家常热菜</li><li>清爽省事的冷菜和小食</li><li>食材准备、调味与火候的实践笔记</li><li>关于吃饭、生活和好好照顾自己的短记</li></ul><h2 id="联系方式" tabindex="-1">联系方式 <a class="header-anchor" href="#联系方式" aria-label="Permalink to &quot;联系方式&quot;">​</a></h2><p>后续会在这里补充社交账号、邮箱或其他联系入口。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("about/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

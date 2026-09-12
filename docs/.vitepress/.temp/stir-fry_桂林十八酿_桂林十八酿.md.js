import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/arch.C1Lk4UzP.png";
const _imports_1 = "/assets/%E8%8B%A6%E7%93%9C%E9%85%BF.BnK00_oT.png";
const _imports_2 = "/assets/%E8%8C%84%E5%AD%90%E9%85%BF.BEF1Jt8k.png";
const _imports_3 = "/assets/%E7%AB%B9%E7%AC%8B%E9%85%BF.dHEYEjjv.png";
const _imports_4 = "/assets/%E6%B2%B9%E8%B1%86%E8%85%90%E9%85%BF.BUPDTouk.png";
const _imports_5 = "/assets/%E5%8D%97%E7%93%9C%E8%8A%B1%E9%85%BF.C7WKCZet.png";
const __pageData = JSON.parse('{"title":"桂林十八酿的做法","description":"","frontmatter":{},"headers":[],"relativePath":"stir-fry/桂林十八酿/桂林十八酿.md","filePath":"stir-fry/桂林十八酿/桂林十八酿.md"}');
const _sfc_main = { name: "stir-fry/桂林十八酿/桂林十八酿.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="桂林十八酿的做法" tabindex="-1">桂林十八酿的做法 <a class="header-anchor" href="#桂林十八酿的做法" aria-label="Permalink to &quot;桂林十八酿的做法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="架构总览"></p><p>桂林传统酿菜系列，将调好味的猪肉、虾滑等馅料酿入青椒、苦瓜、田螺、茄子等十多种中空食材中，煎焖成菜，一菜一味，鲜香多汁，口感软嫩或弹牙，属于浓郁的地方家常风味。馅料提供优质蛋白质，搭配多种蔬菜，富含维生素与膳食纤维，营养较为均衡。制作步骤需要逐一填馅和掌控火候，稍需耐心，但操作逻辑简单，厨艺新手也能尝试，预计全部完成约需 1.5 小时。</p><p>预估烹饪难度：★★★</p><p>预估卡路里：468 大卡</p><h2 id="必备原料和工具" tabindex="-1">必备原料和工具 <a class="header-anchor" href="#必备原料和工具" aria-label="Permalink to &quot;必备原料和工具&quot;">​</a></h2><p><strong>容器(Wrapper)—— 管状物即可：</strong></p><ul><li>青椒、苦瓜、茄子、田螺、豆腐、香菇、南瓜花</li><li>柚子、笋、冬瓜、香芋、蒜、番茄、豆芽、蛋、香菌</li><li>原则：万物皆可酿</li></ul><p><strong>馅料(Filling)—— 肉馅为主：</strong></p><ul><li>猪肉馅（基础款，肥瘦比例 3:7）</li><li>虾滑馅（fork 版本）</li><li>鱼肉馅</li><li>混合馅（猪肉 + 虾滑，猪肉 + 螺肉等自由组合）</li></ul><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>18 种容器 × 4 种馅料 = 72 种组合，实际常用组合约 20 余种。</p><p>核心公式：<strong>管状物 + 肉馅 + 煎/焖 = 酿</strong></p><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><h3 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to &quot;核心思路&quot;">​</a></h3><p>所谓&quot;酿&quot;，就是找一个中空的管状食材作为容器，把调好味的肉馅塞进去，再煎或焖熟。</p><p>以两道已收录的酿菜为例：</p><ol><li><strong>青椒酿</strong>：青椒去籽挖空 → 塞入猪肉馅或虾滑 → 煎至虎皮色 → 酱汁焖煮</li><li><strong>田螺酿</strong>：田螺焯水取肉 → 螺肉与猪肉剁碎混合 → 塞回螺壳 → 紫苏薄荷焖煮</li></ol><p>换成其他管状食材，同样的工序再来一遍，就是一道新菜。苦瓜酿、茄子酿、豆腐酿……皆是如此。</p><p>酿心（馅料）同样可以变化：</p><ol start="3"><li><strong>猪肉馅</strong>：最基础通用的选择，肥瘦 3:7 口感最佳</li><li><strong>虾滑馅</strong>：鲜甜弹牙，青椒酿里常用</li><li><strong>螺肉猪肉混合馅</strong>：田螺酿的灵魂，螺肉与猪肉 1:1，加紫苏薄荷</li><li><strong>混合馅</strong>：猪肉 + 虾滑混搭，鲜甜与油脂香兼得</li></ol><p>一个容器配一种馅，换一个就是一道新酿。当地有&quot;万物皆可酿&quot;的说法，正是这个道理。</p><h3 id="桥接模式-bridge-pattern" tabindex="-1">桥接模式(Bridge Pattern) <a class="header-anchor" href="#桥接模式-bridge-pattern" aria-label="Permalink to &quot;桥接模式(Bridge Pattern)&quot;">​</a></h3><p>将&quot;容器&quot;与&quot;馅料&quot;解耦，二者独立变化、自由组合：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>抽象层（Abstract Wrapper）：管状物（CylindricalContainer）</span></span>
<span class="line"><span>    ├── 青椒酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 苦瓜酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 茄子酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 螺蛳酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 豆腐酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 香菇酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 南瓜花酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 柚子酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 笋酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 冬瓜酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 香芋酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 蒜酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 番茄酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 豆芽酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 蛋酿 extends CylindricalContainer</span></span>
<span class="line"><span>    ├── 香菌酿 extends CylindricalContainer</span></span>
<span class="line"><span>    └── ... 万物皆可酿</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现层（Filling Implementation）：肉馅（MeatFilling）</span></span>
<span class="line"><span>    ├── 猪肉馅 implements MeatFilling</span></span>
<span class="line"><span>    ├── 虾滑馅 implements MeatFilling</span></span>
<span class="line"><span>    ├── 鱼肉馅 implements MeatFilling</span></span>
<span class="line"><span>    └── 混合馅 implements MeatFilling  // 猪肉 + 虾滑，猪肉 + 螺肉...</span></span></code></pre></div><p>换一个 wrapper 就是一道新菜，换一种 filling 又是一个变体。</p><h2 id="附加内容" tabindex="-1">附加内容 <a class="header-anchor" href="#附加内容" aria-label="Permalink to &quot;附加内容&quot;">​</a></h2><h3 id="已有菜谱" tabindex="-1">已有菜谱 <a class="header-anchor" href="#已有菜谱" aria-label="Permalink to &quot;已有菜谱&quot;">​</a></h3><ul><li><a href="./../青椒酿/青椒酿">青椒酿</a> — 青椒酿肉 / 虾滑酿青椒（fork 版本）</li><li><a href="./../田螺酿/田螺酿">田螺酿</a> — 螺肉猪肉 1:1，配紫苏薄荷</li></ul><h3 id="酿菜图鉴" tabindex="-1">酿菜图鉴 <a class="header-anchor" href="#酿菜图鉴" aria-label="Permalink to &quot;酿菜图鉴&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt="苦瓜酿"><img${ssrRenderAttr("src", _imports_2)} alt="茄子酿"><img${ssrRenderAttr("src", _imports_3)} alt="竹笋酿"><img${ssrRenderAttr("src", _imports_4)} alt="油豆腐酿"><img${ssrRenderAttr("src", _imports_5)} alt="南瓜花酿"></p><p>如果您遵循本指南的制作流程而发现有问题或可以改进的流程，请提出 Issue 或 Pull request 。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stir-fry/桂林十八酿/桂林十八酿.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _____ as default
};

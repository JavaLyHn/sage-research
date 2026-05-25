# Audits 目录索引

由 **product-audit Skill v1.15** 生成的所有产品评测报告归档于此。

> 🧹 **v1.13 精简结构**：报告章节简化为 §1/§2/§3/§4/§5/§6（v1.14 起从 §1 编号；v1.15 加 §5 第三方社区反馈）。
> Workspace 默认只留 `figs/` + `report.md` + `report.html`，其他中间文件 cleanup 删除。
> `generate_report.py --keep-raw` 可保留 raw/+meta+.auth 供 regen。
>
> 📡 **v1.15 §5 第三方社区反馈**：synthesis #7 用 WebSearch 抓 Reddit / Product Hunt / Hacker News / G2 用户真实讨论，对照 §4.1 官网 Narrative 找 gap。所有内容明确标**非官方**，需 URL + 原文引用。

> ⚠️ **v1.10 HARD RULE**：如果检测到登录入口（dashboard / login / signin / 等），
> Skill 调用方**必须**让用户登录并跑 `--login-mode`，否则报告会标记为 partial coverage。
>
> ⚠️ **v1.11 §1.5 身份验证**：WebSearch 必须用域名锚定查询（site:/exact-match）+
> 4 步交叉验证；搜到的公司必须 LinkedIn/Crunchbase/新闻显式链接回审计域名才能采信；
> 不确定时输出"需要用户确认"模板而非编造（避免 pika.me ≠ pika.art 这类重名混淆）。

---

## 📋 当前可审查的报告

| # | 目录 | 产品 | 模板 | 测点 | 唯一图 | 真实子页 | 背景递归 | 登录态 | Synthesis | Skill 版本 |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 01 | [`01-artisan-co/`](./01-artisan-co/) | [Artisan](https://www.artisan.co) — AI BDR 平台 | multi-agent | **19+8+4+13** | **40+** ⭐⭐⭐⭐ | 14 公开 + 12 dashboard | **4 ✨** | **13 L\* ✨** | **6 个 ⭐** | **v1.8** |
| 02 | [`02-kuse-ai/`](./02-kuse-ai/) | [Kuse](https://www.kuse.ai) — AI 工作流 Agent | ai-tool | 16+8 | 24/25 | 13 个 | — | — | — | v1.3 |
| 03 | [`03-okara-ai/`](./03-okara-ai/) | [Okara](https://okara.ai) — AI 内容生成 | ai-tool | 16+2 | 19/19 | 5 个 | — | — | — | v1.3 |

> 🎯 **01-Artisan 是 v1.8 全特性参考样本** —— 看完它就能看懂 skill 现在的全部能力。
> Kuse / Okara 是 v1.3 旧版（迁移到 v1.8 需重跑 `audit.py`）。

### Skill 版本演进速览

| 版本 | 新能力 |
|---|---|
| v1.0-v1.1.4 | 模板化测点 + 截图去重 |
| v1.2 | Phase 0 主页 nav 发现 + click 跳转 |
| v1.3 | auto-explore 自动遍历剩余 nav 子页 |
| **v1.4** | **递归背景挖掘**（help/docs/resources, 跨子域 BFS 深度 2-3）+ 删 §5 §6 + 删 C6 mobile + 功能视角 LLM prompt |
| **v1.5** | **3 个 synthesis 调用**：§0.5 综合评分（5 分制 × 6 维度）/ §1.4 战略 X 化叙事 / §4.1 综合产品级风险 |
| **v1.6** | **+2 synthesis** §3.1 官网 Narrative 综合 + §5.4 用户增长漏斗推断；**§3.2 按模块聚合**（17 类语义）；hub fallback (about/features/how-it-works/blog) |
| **v1.7** | **Login-mode** `capture_login.py` + `audit.py --storage-state --login-mode`，dashboard 全 nav 遍历，L* 测点，自动过滤 logout 链接 |
| **v1.8** | **+1 synthesis** §1.5 公司基本信息（**WebSearch + WebFetch** 工具，融资 / 团队 / 上线 / 近期动态 + 来源引用） |
| **v1.9** | **简化总结**：删除 §4.1 综合产品级风险 / §5.5 下一季度建议优先级 / §5.6 给产品方的元建议；§5.4 增长漏斗收紧到「官网作用域」（不再吃 dashboard L\* 数据）。**synthesis 6 → 5 次调用** |
| **v1.10** | **HARD RULE：检测到登录入口必须捕获登录态**。audit.py 加 `detect_login_interface()` 扫 nav-link + app subdomain（dashboard./app./admin./portal./console./hub.）；写 `login_detected/login_indicators/login_mode_run/login_skipped_by_user` 到 audit-meta.json；报告 §0.2 + §1.2 surface 登录覆盖状态；新增 `--skip-login` 显式跳过 flag；SKILL.md 加 HARD RULE 章节 + 决策树 + Claude prompt 模板 |
| **v1.11** | **§1.5 实体身份验证修复**：synthesis #6 prompt 重写——强制 `site:` / `"{domain}"` 域名锚定搜索（禁用裸名称搜索）；4 步验证流程（提取锚点 → 域名搜 → 交叉验证 → 不确定就拒绝）；要求 LinkedIn/Crunchbase/新闻**显式链接**到审计域名才能采信；置信度列 ✅/⚠️ 标注；Format A 已确认 / Format B 待用户核实双模板。已在 pika.me 验证（成功识别为 Pika Labs 新产品线而非独立公司）|
| **v1.12** | **HARD RULE 检测加 URL 探测层**：detect_login_interface 新增第 3 层主动 HTTP 探测（`/login` `/signin` `/sign-in` `/auth` + `app.X` `dashboard.X` 子域），抓 JS-only CTA 和未在 nav 显式链接的登录页（Kuse / Okara 这类情况）|
| **v1.13** | **精简报告结构 + workspace cleanup**：报告**删 §4 问题清单 + 附录**（重编号 §5 → §4，最终 §0/§1/§2/§3/§4）；generate_report.py **默认 cleanup**——产生 report.md+html 后删 raw/ + .auth/ + audit-meta.json，**workspace 只留 figs/+md+html**；`--keep-raw` 是 escape hatch |
| **v1.14** | **TOC 完整化 + 章节编号从 1 起**：所有章节统一从 §1 开始（不再 §0 Executive Summary 这种异类）；TOC 列**全部** sub-sections (24 个标题)，不只是 ⭐ 综合章节 |
| **v1.15** | **§5 第三方社区反馈**（倒数第二章, NEW）：synthesis #7 用 WebSearch 抓 Reddit / Product Hunt / Hacker News / G2 / Trustpilot 真实用户讨论；强制域名锚定搜索避免重名混入；带 URL + 原文 blockquote 引用；明确标注**非官方**；找不到时输出"未找到讨论"模板而非编造。原 §5 总结 → §6 |

---

## 📂 工作目录结构

```
NN-product/
├── report.md              ← 完整 Markdown 报告
├── report.html            ← 含 base64 截图嵌入 (单文件可分享)
├── audit-meta.json        ← 元数据 (time / template / depth / token / login-mode 等)
├── .auth/                 ← v1.7 登录态 storage_state (gitignore)
│   └── storage_state.json
├── figs/                  ← 真实页面截图 (编号 + 语义命名)
│   ├── 01-c1-homepage-*.png       主审计截图
│   ├── 02-c2-pricing-page.png
│   ├── ...
│   └── NN-l*-dashboard-*.png      登录后截图 (v1.7)
└── raw/
    ├── findings.jsonl     ← 每个测点的原始 JSON 观察
    └── synthesis.json     ← 6 个跨测点 synthesis 输出 (v1.5+)
```

---

## 🚀 快速打开

```bash
# 01-Artisan (推荐先看 — v1.8 全特性, 40+ 截图, 6 个 synthesis 章节)
open /Users/aa00945/Desktop/octok/audits/01-artisan-co/report.html

# 02-Kuse (v1.3 旧版)
open /Users/aa00945/Desktop/octok/audits/02-kuse-ai/report.html

# 03-Okara (v1.3 旧版)
open /Users/aa00945/Desktop/octok/audits/03-okara-ai/report.html

# VS Code 看整个目录
code /Users/aa00945/Desktop/octok/audits/
```

---

## 📊 三份报告横向对比

| 维度 | 01-Artisan (**v1.8**) | 02-Kuse (v1.3) | 03-Okara (v1.3) |
|---|---|---|---|
| 产品定位 | AI BDR / 销售自动化 | AI 工作流 Agent | AI 内容生成 |
| 评测模板 | `multi-agent` | `ai-tool` | `ai-tool` |
| 深度档位 | **standard** | standard | standard |
| 主测点 | 19 | 16 | 16 |
| Auto-explore | **+8** | +8 | +2 |
| **递归背景挖掘 (v1.4)** | **+4** ✨ | — | — |
| **Login-mode dashboard (v1.7)** | **+13** ✨ | — | — |
| **6 个 synthesis 章节 (v1.5-v1.8)** | ✅ 全套 | — | — |
| 总测点 | **44** | 24 | 18 |
| LLM 调用 | 45 / 200 | ~24 | ~18 |
| LLM 视角 | **聚焦产品功能层** | UI + 功能 | UI + 功能 |
| 报告耗时 | ~25 分钟（含 login + 6 synthesis） | ~9 分钟 | ~7 分钟 |
| report.md 行数 | **1455** | ~700 | 673 |
| report.html 大小 | **8.5 MB** | ~3-4 MB | 2.9 MB |
| §1.5 公司信息 (web search) | ✅ 含 17 个来源 URL | ❌ | ❌ |
| §6 竞品对比 | ❌ v1.4 已删除 | ✅ 有 | ✅ 有 |

### 子页覆盖示例

**01-Artisan v1.8** 全覆盖：

```
公开页 (marketing):
  / /about /pricing /contact-us /request-demo
  /ai-lead-generation /ai-outreach /ai-sales-agent /intent-data
  /meeting-scheduling-software /customers/saastr
  /solutions/enterprise /solutions/smbs /solutions/startups

help.artisan.co 递归背景 (v1.4, BFS 深度 ≤ 2):
  /  ← hub (cross-subdomain)
  /collections/1258822112-general (Getting Started, depth 1)
  /articles/6243068911-pre-onboarding-form (depth 1)
  /articles/5834370686-what-is-artisan-a-quick-overview (depth 2) ✨
  /articles/3857275619-getting-started (depth 2)

dashboard.artisan.co 登录后 (v1.7, --login-mode):
  /manage-ava (Manage Ava — 入口 + 3 大支柱: Outbound/Replies/Guardrails)
  /campaigns
  /analytics
  /organization/settings/teams (邮箱矩阵 + 多人协作架构)
  /inbox  /tasks  /dialer
  /find-leads  /signals  /website-visitors
  /lists  /leads
```

**02-Kuse v1.3** 13 个真实子页（仅公开页）：
```
/ /about /faqs /team-plan /open-cowork/features
/blog/workflows-productivity
/ai-tools/ai-document-generator
/ai-tools/ai-notes-generator
/ai-tools/ai-presentation-maker
/ai-tools/ai-study-tools
/ai-tools/flashcard-maker
/ai-tools/text-formatter
```

**03-Okara v1.3** 5 个真实子页（仅公开页）：
```
/ /chat /pricing /blog /changelog /affiliates
```

---

## 🔧 Skill 能力档位说明 (v1.8)

| 档位 | 主测点 | Auto-explore | 递归背景挖掘 | Login-mode | Synthesis (6 calls) | 总耗时 |
|---|:---:|:---:|:---:|:---:|:---:|---|
| **Express** | 6-10 | ❌ | ❌ | 可选 | ❌ (不足 6 LLM 预算) | 3-5 min |
| **Standard** | 15-20 | ✅ 最多 +8 | ✅ 深度 ≤2, 最多 6 页 | ✅ 可选 | ✅ 全 6 个 | 15-25 min |
| **Deep** | 30+ | ✅ 最多 +20 | ✅ 深度 ≤3, 最多 15 页 | ✅ 可选 | ✅ 全 6 个 | 30-60 min |

**核心机制**：

- **Phase 0 nav 探索**：单次主页加载同时采集同源 nav + 跨子域 hub (`help.X.com`)
- **Auto-explore**：跑完主测点后自动遍历首页 nav/footer 上未被覆盖的真实子页。法律页（Privacy/Terms/Refund）智能跳过
- **递归背景挖掘 (v1.4)**：进入 help/docs/resources 等内容枢纽，BFS 找 "What is X / Getting Started / Overview" 类介绍页。v1.6 fallback：没有 help 的产品退级到 /about → /features → /how-it-works → /blog
- **Login-mode (v1.7)**：`capture_login.py` 抓 session → `audit.py --login-mode` 遍历 dashboard nav → L* 测点 → 自动滤掉 logout 链接
- **Synthesis pass (v1.5-v1.8)**：6 次跨测点 LLM 综合：评分 / X 化 / 综合风险 / Narrative / 增长漏斗 / 公司信息（WebSearch）

---

## 🛠️ 重新跑某个产品的 audit (v1.8 完整流程)

### 1. 公开页 audit（必跑）

```bash
cd /Users/aa00945/Desktop/octok/.claude/skills/product-audit/scripts

unset ANTHROPIC_API_KEY  # 走 Claude Code 订阅而不是 API
python3 -u audit.py \
  --url <PRODUCT_URL> \
  --template <saas|multi-agent|ai-tool|ecommerce> \
  --depth <express|standard|deep> \
  --workspace /Users/aa00945/Desktop/octok/audits/<NN-product-name> \
  --language zh-CN
```

这一步跑完后已经有 31+ 测点（主+explore+背景）+ 6 个 synthesis 章节。

### 2. (可选) 登录后 audit (v1.7)

```bash
# 2a. 抓 session (headed 浏览器，用户登录，自动检测保存)
python3 capture_login.py \
  --url https://dashboard.<PRODUCT>.com/<some_logged_in_page> \
  --output /Users/aa00945/Desktop/octok/audits/<NN-product-name>/.auth/storage_state.json \
  --success-url-contains <dashboard_substring>

# 2b. login-mode audit (追加 L* 测点到现有 workspace)
unset ANTHROPIC_API_KEY
python3 -u audit.py \
  --url https://dashboard.<PRODUCT>.com/<entry_page> \
  --template <same_as_step_1> \
  --depth <same_as_step_1> \
  --workspace /Users/aa00945/Desktop/octok/audits/<NN-product-name> \
  --storage-state /Users/aa00945/Desktop/octok/audits/<NN-product-name>/.auth/storage_state.json \
  --login-mode
```

### 3. 生成报告

```bash
python3 generate_report.py \
  --workspace /Users/aa00945/Desktop/octok/audits/<NN-product-name> \
  --formats md,html
```

或者直接在 Claude Code 里说："用 product-audit skill 测评 https://example.com" 即可触发自动执行。

---

## 📐 报告结构 (v1.9)

```
0. Executive Summary
   0.1 一句话判定
   0.2 整体兑现度
   0.3 风险与机会 Top 3 (功能层)
   0.4 立即可做的 Quick Wins
   0.5 综合评分 (5 分制 × 6 维度)             ⭐ v1.5 synthesis

1. 产品概览
   1.1 基础信息
   1.2 测点速览
   1.3 产品 / 公司背景信息（递归发现）         ← v1.4
   1.4 产品战略抽象（X 化 叙事）              ⭐ v1.5 synthesis
   1.5 公司基本信息（WebSearch 自动补充）     ⭐ v1.8 synthesis

2. 体验方法论

3. 体验流程记录
   3.1 官网 Narrative 综合                  ⭐ v1.6 synthesis
   3.2 测点流程详情（按 17 个语义模块聚合）   ← v1.6 module clustering
     🏠 首页 / 🤖 AI 能力 / Agent / ✨ 产品功能 / 🎯 解决方案 / ⭐ 客户案例
     💰 定价 / 🚪 注册 / 📞 Demo / 🔌 集成 / 🔒 安全 / 📅 日程
     🏢 公司 / 👥 招聘 / 📰 博客 / 📖 文档 / 📧 联系 / 🔑 登录
     ❌ 404 / 📚 产品官方介绍（递归发现）/ 🔐 登录后 Workspace (v1.7)
     📌 其他 / ⚠️ 未找到的测点

4. 问题清单 (按严重度)                       ← v1.9 已简化（移除 §4.1 综合归纳）
   ・ 全部 P1 / P2 / P3 观察按严重度分组

5. 总结 (v1.9 简化版, 只剩 4 节)
   5.1 一句话评价
   5.2 最大优点 Top 3
   5.3 最大风险 Top 3
   5.4 用户增长漏斗推断（官网作用域）          ⭐ v1.6 synthesis (v1.9 收紧)
   (v1.9 移除: 5.5 下一季度建议 / 5.6 元建议)

附录
   A. 截图索引
   B. 原始数据 (findings.jsonl + synthesis.json + audit-meta.json)
   C. 工具版本
```

⭐ 标记的章节由 synthesis pass LLM 调用产生（**v1.9 起合计 5 次**），其余由 audit.py 主循环 + LLM 单测点解读产生。

**v1.9 设计取舍**：移除"综合产品级风险 / 下一季度建议 / 元建议"等带处方性 (prescriptive) 的小结章节——
报告应该提供观察 + 结构性分析，**不替决策者拍板**。决策者结合 §0.3 + §4 自行综合判断即可。

---

## 🗄️ 归档目录 `_archive/`

包含 Skill 迭代过程中产生的早期报告版本和 mock 测试。**仅作历史追溯使用**，不建议作为评测样本审查。

详见 [`_archive/README.md`](./_archive/README.md)。

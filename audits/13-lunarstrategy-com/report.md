# www.lunarstrategy.com 产品深度体验报告

> **本报告聚焦：产品**功能层**的可理解性与完整性 — 不评 UI 美学**

## 报告信息

| 项 | 内容 |
|---|---|
| 产品名称 | www.lunarstrategy.com |
| 产品 URL | https://www.lunarstrategy.com/ |
| 体验时间 | 2026-05-21T21:17:27.763876 |
| 体验人 | product-audit Skill（自动化） |
| 体验环境 | Darwin 25.3.0 / Python 3.9.6 |
| 评测模板 | `saas` |
| 深度档位 | `standard` |
| 主测点数 | 25（含 0 个递归背景测点） |
| LLM 调用 | 24 / 200 |
| 报告语言 | zh-CN |
| 报告版本 | v1.13 (auto-generated; v1.11 实体身份验证 + v1.12 URL 探测 + **v1.13 精简结构：删 §4 问题清单 / 附录, workspace 只留 figs+md+html**) |
| 工具 | product-audit Skill |

---

## 目录

- [1. Executive Summary](#1-executive-summary)
  - [1.1 一句话判定](#11-一句话判定)
  - [1.2 整体兑现度](#12-整体兑现度)
  - [1.3 风险与机会 Top 3](#13-风险与机会-top-3)
  - [1.4 立即可做的 Quick Wins](#14-立即可做的-quick-wins)
  - [1.5 综合评分（5 分制 × 6 维度）⭐](#15-综合评分5-分制--6-维度)
- [2. 产品概览](#2-产品概览)
  - [2.1 基础信息](#21-基础信息)
  - [2.2 测点速览](#22-测点速览)
  - [2.3 产品 / 公司背景信息（递归发现）](#23-产品--公司背景信息递归发现)
  - [2.4 产品战略抽象（X 化 叙事）⭐](#24-产品战略抽象x-化-叙事)
  - [2.5 公司基本信息（web search 自动补充）⭐](#25-公司基本信息web-search-自动补充-)
- [3. 体验方法论](#3-体验方法论)
  - [3.1 测试用例矩阵](#31-测试用例矩阵)
  - [3.2 评分与严重度分级（功能层）](#32-评分与严重度分级功能层)
  - [3.3 限制与边界声明](#33-限制与边界声明)
- [4. 体验流程记录](#4-体验流程记录)
  - [4.1 官网 Narrative 综合（叙事手法 + 关键词图谱）⭐](#41-官网-narrative-综合叙事手法--关键词图谱)
  - [4.2 测点流程详情（按模块聚合）](#42-测点流程详情按模块聚合)
- [5. 第三方社区反馈（非官方）⭐](#5-第三方社区反馈非官方)
- [6. 总结](#6-总结)
  - [6.1 一句话评价](#61-一句话评价)
  - [6.2 最大优点 Top 3](#62-最大优点-top-3)
  - [6.3 最大风险 Top 3](#63-最大风险-top-3)
  - [6.4 用户增长漏斗推断（官网作用域）⭐](#64-用户增长漏斗推断官网作用域-)

---

## 1. Executive Summary

### 1.1 一句话判定

目标产品 **https://www.lunarstrategy.com/** 在 **saas** 模板的 **standard** 档位评测下存在严重问题：识别问题 65 个（P1 20 / P2 33 / P3 12），正面发现 9 个。详见 §4 体验流程详情。

### 1.2 整体兑现度

| 维度 | 兑现度 / 状态 |
|---|---|
| 测点覆盖 | ✅ 25 / 25 点 |
| 递归背景测点 | ⚠️ 未发现 — 产品可能无 help/docs/resources 区域 |
| 登录态覆盖 | ➖ 未检测到登录入口（rule N/A）|
| 严重问题 (P1) | ❌ 有 20 个 |
| 中等问题 (P2) | ⚠️ 33 个 |
| 轻微问题 (P3) | ⚪ 12 个 |
| LLM 预算使用 | 24 / 200 |

### 1.3 风险与机会 Top 3

#### 🔴 Top 3 风险（功能层）

1. **[C1]** P1 商业化路径与合作模式不透明：页面只有 "Book a Free Consultation / Book a Meeting" 两类 CTA，未说明**服务定价模型**（按月 retainer？项目制？token 置换？）、**最小合作周期**、**适合的项目阶段**（pre-launch / post-TGE / 成熟生态？），潜在客户难以自评匹配度。
2. **[C4]** P1 功能性产品缺失**：页面定位为 "Crypto Ecosystem Growth Agency"，本质是**人力服务型代理机构**而非 SaaS / 软件产品，没有任何可登录的产品功能、自助工具或工作台 — 用户期待的 "Login page" 在此场景下不存在对应的产品能力入口（仅有 "Book a Meeting" / "Start Live Chat" 等销售线索通道）。
3. **[C4]** P1 服务交付机制完全不透明**：列出了 7 项服务（GTM Strategy、SMM、Community Management、Influencer Marketing、PR、Event Management、Crypto SEO），但每项仅 1-2 句宣传语，**未说明工作流（如何启动项目 / 交付周期 / 报告频率）、交付物形态（报告？内容？KOL 名单？）、客户参与方式**，无法判断"购买后会得到什么"。

#### 🚀 Top 3 机会 / 优势

1. **[C1]** ✅ 产品定位清晰：明确说明这是面向 Crypto/Web3 领域的"生态增长代理机构"，自 2019 年起服务 250+ 项目（Polkadot、ICP、OKX），用户 5 秒内即可判断业务范围与服务对象。
2. **[C1]** ✅ 服务能力矩阵直观呈现：首页列出 6 大核心服务（Web3 GTM 咨询、Social Media Marketing、Community Management、Influencer Marketing、PR、Event Management），每项配一句话功能描述（如 PR = "narrative development and media placements"），用户能快速判断"这家能不能帮我做某件事"。
3. **[C5]** ✅** Footer 区域同时提供邮件（info@lunarstrategy.com）、Live Chat、Book a Meeting 三种联系方式，覆盖异步咨询、即时沟通、正式会议三种客户接触路径，对 B2B 销售线索捕获是合理的功能配置。

### 1.4 立即可做的 Quick Wins

| # | 改进 | 来源 |
|---|---|---|
| QW-1 | P2 服务交付机制说明缺失：页面只罗列服务名称和概念性描述，但未说明**每项服务的具体交付物**（例如 Influencer Marketing 是否包含 KOL 名单筛选、合约管理、效果报告？Com | [C1] |
| QW-2 | P2 缺少量化效果与案例细节：虽然提到 "250+ ecosystems" 和 Featured Cases 入口，但首页未直接展示**关键 KPI 案例**（如某项目通过 PR 服务获得多少媒体曝光 | [C1] |
| QW-3 | P2 集成与工具栈信息为零**：作为 Crypto 营销代理，未披露使用的**KOL 资源库、数据分析平台、社区管理工具、链上数据来源**等关键能力底座 — 客户无法评估该机构相对于竞争对手的能力护城 | [C4] |
| QW-4 | P2 服务边界与定价模型缺失**：250+ 客户、Polkadot/ICP/OKX 等案例堆砌了规模感，但**未说明最小服务单元（按月 retainer？按项目？按 KOL 单次？）、价格区间、适合的 | [C4] |
| QW-5 | P2** 页面文本节选中未见标准 footer 信息（如完整服务清单链接、法律条款、隐私政策、Cookie 声明、地址/公司注册信息、Sitemap），仅出现 "Download for Free / | [C5] |
| QW-6 | P2** "Download for Free" 入口未在 footer 上下文说明下载的是什么资产（白皮书？案例集？营销指南？），用户无法判断点击后获得的具体内容与价值。 | [C5] |

### 1.5 综合评分（5 分制 × 6 维度）

> 跨全部测点的产品级综合评分，由 synthesis-pass LLM 调用产出（见 §3.1 体验方法论）。

| 维度 | 评分 | 1-2 句话说明（引用具体 [测点ID]） |
|---|---:|---|
| 产品方向清晰度 | 4.0 / 5 | [C1] 首页 5 秒内可识别"Crypto/Web3 生态增长代理机构 + 250+ 项目"定位，服务对象明确；但 [S1][C4] 未划定适用项目阶段（pre-TGE / 主网 / 成熟期）边界。 |
| Narrative 表达力 | 3.0 / 5 | [C1][S4] 用 Polkadot/ICP/OKX + "250+ ecosystems" 构建规模感，但 [S5] 仅 Hansen/Levva 一条带量化结果（$350K token sale），其余证言均为"great team/reliable"泛化表达，"infofi era" [S6] 核心叙事概念在 Blog 列表中无旗舰入口，narrative 断链。 |
| 信息架构（IA） | 2.5 / 5 | [C8] 全局导航暴露 7 大入口（含差异化的 Verified Telegrams）尚算清晰，但 [C5] footer 服务清单与主页 "Our Services" 不一致（多出未定义的 "Yap Strategy"），[C2][S2][S3] Pricing/Use cases/Integrations 三大常规子页全部缺失，[S6] Blog 无主题分类筛选。 |
| 功能广度与深度 | 2.0 / 5 | [S1][C7] 六大服务仅一句话定性描述，未披露交付物清单、工作流、周期、团队配置；[C4] 工具栈/KOL 资源池/数据平台完全不透明；[C8] "Verified Telegrams" 这一差异化能力在导航出现但无任何机制说明。 |
| AI / 核心能力可信度 | 2.0 / 5 | [S4][S5] 250+ 客户为累计数字未区分在服/历史，3 个标杆客户名未映射到具体服务与成果；[C1][C7] "Award-Winning" 未说明奖项，案例缺少曝光/社区/TVL 等可验证量化指标，能力护城河难以还原。 |
| 商业化清晰度 | 1.0 / 5 | [C1][C4][C5][S1] 全站无 Pricing 页（[C2] Link not found），未披露 retainer/项目制/token 置换计费模式、最小起步预算、合作周期、KPI 承诺，所有商业信息全部塞进 "Book a Free Consultation" 销售漏斗。 |
| **综合平均** | **2.4 / 5** | **定位清晰但作为人力服务型代理机构，功能交付机制、可验证案例与定价模型三重缺位，B2B 买家无法完成自助评估。** |

---

## 2. 产品概览

### 2.1 基础信息

- **URL**: https://www.lunarstrategy.com/
- **首屏标题 / Slogan**: get in touch
info@lunarstrategy.com
Start Live Chat
Book a Meeting
menu
PR
Socia
- **评测模板分类**: saas

### 2.2 测点速览

本次审计覆盖 25 个测点，其中 **0 个**来自递归背景信息挖掘（详见 §2.3）。详细列表见 §4。

> 🟢 未检测到登录入口；本报告即为完整覆盖。

### 2.3 产品 / 公司背景信息（递归发现）

> 本节通过对 help / docs / resources / 跨子域 `help.X.com` 等内容枢纽**递归挖掘**得到，
> 旨在抽出产品方自己写的 "What is X / Getting Started / Overview" 类介绍页内容，
> 还原产品方对自家产品的**官方定义**。

_本次未通过递归挖掘发现产品 / 公司的官方介绍页面。可能产品没有 help / docs / resources 板块，或这些板块下没有显式的 "What is X / Getting Started" 入口。_

_如需扩大递归深度，可改用 `--depth deep` 重跑（最多 15 个背景介绍页）。_

### 2.4 产品战略抽象（X 化 叙事）

> 跨全部测点 + 背景递归的综合分析，由 synthesis-pass LLM 调用从 4-6 个不同角度
> 抽取产品的战略本质，**对齐人工产品分析报告 §2 章节的写法**。

### 1. Agency 化 (Agency-ification)
**核心叙事**: 这不是一个 SaaS 产品，而是一家把"人力代运营"包装成"6 大服务 SKU"对外售卖的 Web3 营销代理机构。
**支撑证据**:
- [C4] 页面没有任何可登录的产品功能、自助工具或工作台，仅有 "Book a Meeting" / "Start Live Chat" 等销售线索通道
- [C3] 整站无 sign-up / get started / 免费试用 入口，不存在自助开通路径
- [S1] 核心"产品"本质是服务交付能力——GTM、SMM、社区、KOL、PR、活动六大服务模块
**对用户/产品的含义**: 客户买的不是软件席位，而是一支外包营销团队的工时与人脉网络，决策周期、客单价与传统乙方代理一致。

### 2. Crypto Vertical 化 (Crypto-Vertical-ification)
**核心叙事**: 产品所有能力（KOL、PR、SEO、Community、Events）都被收窄并深度植入加密垂直生态，拒绝做泛行业代理。
**支撑证据**:
- [C1] 明确定位 "Crypto Ecosystem Growth Agency"，自 2019 起服务 250+ 项目（Polkadot、ICP、OKX）
- [S6] Blog 主题清一色围绕 Token Launch、Node Sales、Market Makers、KOL Fundraising、Crypto Twitter
- [C7] 服务清单中出现 "Crypto SEO"——把通用 SEO 能力垂直化为加密专属
**对用户/产品的含义**: 只有 Web3 项目方是目标客户，非加密领域客户不在服务范围内；护城河在于垂直人脉与生态认知，而非通用营销方法论。

### 3. InfoFi / Yap 化 (InfoFi-Yap-ification)
**核心叙事**: 产品正在从传统 KOL Marketing 升级为 InfoFi 时代的"Yap Strategy"，即用注意力金融化的新逻辑重构影响者打法。
**支撑证据**:
- [S6] About 定位语 "We help leading teams into the **infofi era** with creatives campaigns and growth initiatives"
- [C7] 导航出现 "Yap Strategy"、"Crypto SEO" 等差异化子服务条目
- [S1] "Yap Strategy"、"IMM（Head of IMM）"等专业术语直接出现在首页
**对用户/产品的含义**: 用户若不了解 InfoFi / Kaito Yap 等新范式，会感到术语门槛高；但对走在风口上的项目方而言，这是该机构区别于传统加密代理的核心钩子。

### 4. Black Box 化 (Black-Box-ification)
**核心叙事**: 服务交付的关键参数（交付物、周期、定价、SLA、KPI）系统性地被隐藏在销售漏斗后面，客户必须先 Book a Meeting 才能解锁。
**支撑证据**:
- [C1] 服务交付机制说明缺失——只列服务名称和概念性描述，不说明每项服务的具体交付物
- [C5] 整页未说明核心交付机制——项目制、retainer 月费、performance-based 计费、SLA、报告频率全部缺失
- [S5] 证言中只有 Hansen/Levva 给出 "$350,000 token sale" 等可量化结果，其余全部是 "great team / reliable" 的泛化表达
**对用户/产品的含义**: 用户无法自助评估匹配度，只能进入销售对话才能获得报价与方案；这把所有客户筛选成本转嫁给了销售团队，也排斥了想"先逛一逛"的早期项目方。

### 5. Content Funnel 化 (Content-Funnel-ification)
**核心叙事**: Blog / Guides / Cases / Verified Telegrams 等内容资产被设计为获客漏斗的顶端入口，而非独立产品。
**支撑证据**:
- [C8] 全局导航保留 Blog / Cases / Services / Verified Telegrams / Team / Guides 七大入口，内容矩阵是产品骨架
- [S6] Blog 列表持续输出 Token Launch Strategy Guide、Crypto Marketing Playbook、KOL Fundraising Guide 等实操方法论
- [S6] 侧栏重复 20 次 "Subscribe to Our Blog"——订阅意图被反复曝光
**对用户/产品的含义**: 用户进入网站第一触点大概率不是 Services 页，而是某篇 Guide；这意味着内容质量直接决定线索质量，但也存在"读完 Playbook 客户自己 DIY 走人"的转化损失风险。

### 6. Verified Telegram 化 (Verified-Telegram-ification)
**核心叙事**: 在通用加密代理同质化的市场里，"Verified Telegrams" 被作为差异化能力提到导航位，试图把 Telegram 渠道认证打造成专有资产。
**支撑证据**:
- [C8] 全局导航中出现 "Verified Telegrams" 一级入口，与 Blog / Cases / Services 并列
- [C8] P1 明确指出 "Verified Telegrams 作为最具特色的功能模块出现在导航中"，但未说明工作机制
- [C1] 在 6 大常规服务（GTM/SMM/Community/Influencer/PR/Events）之外，唯一一个非通用服务名的能力点
**对用户/产品的含义**: 产品正在尝试用一个有专有性的"渠道资产"（认证过的 Telegram 群/KOL 网络）来摆脱"和别家加密代理一样"的同质化困境，但当前功能边界仍模糊，差异化主张未被有效阐释。

### 2.5 公司基本信息（web search 自动补充）⭐

> 由 synthesis-pass LLM 调用 **WebSearch 工具**主动搜索 Crunchbase / TechCrunch /
> LinkedIn / 公司新闻稿等外部公开信息，补足审计本身看不到的事实数据（成立时间 /
> 融资轮次 / 团队规模 / 创始人背景 / 近期动态）。每条信息标注来源。

## 1.5 公司基本信息

#### ✅ 实体身份已确认

经过域名 + 产品描述 + LinkedIn + Crunchbase + 新闻报道交叉验证，本次审计对象 `lunarstrategy.com` 对应：
**Lunar Strategy（法定主体：Lunar Strategy Lda，葡萄牙商业税号 PT517768933）**

验证证据链：
- 官网 footer / Disclosure 页直接署名 Lunar Strategy Lda（[disclosure 页](https://www.lunarstrategy.com/disclosure)）
- [LinkedIn 公司页](https://www.linkedin.com/company/lunar-strategy-crypto) 自我介绍与 `lunarstrategy.com` 完全一致
- [Crunchbase profile](https://www.crunchbase.com/organization/lunar-strategy) 列出域名为 lunarstrategy.com
- 创始人 [Tim Haldorsson LinkedIn](https://www.linkedin.com/in/timhaldorsson/) bio 链接至本域名
- [DailyCoin 专访](https://dailycoin.com/tim-haldorsson-lunar-strategy-founder-interview/)、[The Portugal News](https://www.theportugalnews.com/news/2025-08-28/the-leading-european-agency-lunar-strategy-expands-its-operations-through-calib3r-acquisition/604858) 等多家媒体报道均锚定同一公司

#### 公司基础事实表

| 项 | 内容 | 置信度 | 来源 |
|---|---|---|---|
| 公司名称 | Lunar Strategy Lda（品牌：Lunar Strategy） | ✅ | [官网 Disclosure](https://www.lunarstrategy.com/disclosure) |
| 成立年份 | 2019 | ✅ | [About Us](https://www.lunarstrategy.com/about-us)、[Crunchbase](https://www.crunchbase.com/organization/lunar-strategy) |
| 总部地点 | Lisboa, Portugal（Av. Duque de Loulé 24A） | ✅ | [官网](https://www.lunarstrategy.com/) |
| 法律实体编号 | PT 517768933 | ✅ | [Northdata](https://www.northdata.com/Lunar%20Strategy%20Lda%C2%B7,%20Lisboa/PT%20517768933) |
| 产品上线 | 2019（咨询服务上线即业务上线） | ✅ | [DailyCoin 专访](https://dailycoin.com/tim-haldorsson-lunar-strategy-founder-interview/) |
| 当前阶段 | 未公开（私营机构 / 营收驱动型 agency，无对外公开融资记录） | ⚠️ | [Crunchbase](https://www.crunchbase.com/organization/lunar-strategy)（公开页未列出融资轮） |
| 融资总额 | 未公开 / 未找到（按公开资料判断为 bootstrap） | ⚠️ | 同上 |
| 团队规模 | 30+ 人（Crunchbase 显示 11–50 区间） | ✅ | [About Us](https://www.lunarstrategy.com/about-us)、[Crunchbase](https://www.crunchbase.com/organization/lunar-strategy) |
| 行业类别 | 加密 / Web3 营销与增长咨询机构（PR / KOL / SMM / 活动 / GTM） | ✅ | [官网首页](https://www.lunarstrategy.com/) |
| 累计代理品牌 | 250+ 客户（含 Polkadot、ICP、OKX、Cardano、MultiversX、ROSE 等） | ✅ | [About Us](https://www.lunarstrategy.com/about-us) |
| 累计代管营销预算 | $200M+ 历史 / $25M+ 仅 2025 年 | ⚠️ (自报口径) | [2026 Vision 文章](https://www.lunarstrategy.com/article/were-back-lunar-strategys-2026-vision) |

#### 融资历史

| 轮次 | 时间 | 金额 | 领投 + 主要参与方 | 来源指向本域名? |
|---|---|---|---|---|
| — | 未公开 | 未找到 | 未找到 | — |

说明：Lunar Strategy 是一家服务型营销代理机构（agency）而非典型 VC-backed startup。Crunchbase 公开页未列出任何融资轮次。其投资业务由独立子品牌 **Lunar Capital**（[capital.lunarstrategy.com](https://capital.lunarstrategy.com/)）承载，方向是对外投资 Web3 项目，而非接受外部融资。

#### 创始人 / 核心团队背景

- **Tim Haldorsson** (Co-Founder & CEO) — 2018 年底加密寒冬期间筹备公司，2019 年正式创立；同时是 Lunar Capital 的发起人；多次受邀 Rolling Stone Culture Council 撰稿。验证：[LinkedIn](https://www.linkedin.com/in/timhaldorsson/) 与 [Rolling Stone profile](https://council.rollingstone.com/profile/Tim-Haldorsson-CEO-Lunar-Strategy/cd235171-2044-4e12-bdaf-dededa59f668) 均锚定本域名 ✅
- **Jack Haldorsson** (Co-Founder & Managing Partner) — 与 Tim 共同创立，负责合伙人级运营。验证：[LinkedIn 联合创始人帖文](https://www.linkedin.com/posts/lunar-strategy-crypto_our-managing-director-and-co-founder-shann-activity-7317561038852239360-s5Ow) ✅
- **Shann Holmberg** (Co-Founder & Managing Partner) — 创始三人组之一，Managing Director。验证：同上 LinkedIn 帖文 ✅
- **Adam Westerén** (Head of Sales) — 销售线负责人。⚠️ 公开背景信息有限
- **Luka Mrkić** (Head of Business Development) — BD 负责人。⚠️ 公开背景信息有限
- **Lev Valetskiy** (Compliance Officer) — 合规负责人，见于公司 Disclosure 页。✅ 来源 [Disclosure](https://www.lunarstrategy.com/disclosure)

#### 近期重大动态（最近 6–12 个月）

- **2025-08-28** — 收购加密营销公司 **Calib3r**，目标"成为加密领域最大的媒体集团"。[The Portugal News](https://www.theportugalnews.com/news/2025-08-28/the-leading-european-agency-lunar-strategy-expands-its-operations-through-calib3r-acquisition/604858) ✅
- **2025（全年）** — 服务 110+ 客户、管理 $25M+ 营销预算、KOL 网络扩展至 1,000+。[We're Back: 2026 Vision](https://www.lunarstrategy.com/article/were-back-lunar-strategys-2026-vision) ✅
- **2025–2026** — 内部孵化 4 款新产品：Kaito Radar、Creator Wire、Vibe Haus、Blixt Editor，从纯服务型代理向"产品 + 服务"双轨延伸。同上 ✅
- **2025-Q4** — Web Summit Lisbon 期间承办 afterwork 系列活动，强化 Lisbon 加密生态主场地位。[The Defiant](https://thedefiant.io/news/event/lunar-strategy-to-host-afterwork-series-during-web-summit-in-lisbon) ✅
- **2026 战略指向** — Tim Haldorsson 公开发声主张创业项目应优先"founder-led organic marketing"而非 KOL 投放，业务向 AI 自动化方向扩展。[DailyCoin](https://dailycoin.com/tim-haldorsson-lunar-strategy-founder-interview/) ⚠️ (战略表态，非签约/财务事件)

#### 综合判断

Lunar Strategy 是一家 **bootstrap 起家、营收驱动、定位欧洲领先的加密/Web3 营销代理机构**，历经 2019 加密寒冬、2022 熊市、2024–2026 复苏三轮周期仍活跃，目前以"Lisbon 总部 + 30 人团队 + 250+ 客户 + $200M+ 累计预算"形成稳定的中型 agency 规模。优势集中在**长期生态资源（Polkadot/ICP/OKX 等头部品牌沉淀的客户网络与 1000+ KOL 池）+ 实体活动能力**；2025 年 Calib3r 收购与 4 款自研产品发布，反映其从"纯人力代理"向"媒体集团 + 产品化"转型的清晰意图。短板在于：**无公开融资 / 资本弹性较弱**，自有产品矩阵尚属早期未经验证；行业天花板与加密市场周期高度绑定，去周期化能力有待观察。对潜在客户或合作方而言，是一家在欧洲加密营销 niche 有可信履历、但尚未规模化为平台型公司的成熟代理机构。

Sources:
- [Lunar Strategy 官网](https://www.lunarstrategy.com/)
- [Lunar Strategy About Us](https://www.lunarstrategy.com/about-us)
- [Lunar Strategy Disclosure](https://www.lunarstrategy.com/disclosure)
- [Lunar Capital 子站](https://capital.lunarstrategy.com/)
- [LinkedIn 公司页](https://www.linkedin.com/company/lunar-strategy-crypto)
- [Crunchbase profile](https://www.crunchbase.com/organization/lunar-strategy)
- [Tim Haldorsson LinkedIn](https://www.linkedin.com/in/timhaldorsson/)
- [Northdata 法律实体登记](https://www.northdata.com/Lunar%20Strategy%20Lda%C2%B7,%20Lisboa/PT%20517768933)
- [DailyCoin 创始人专访](https://dailycoin.com/tim-haldorsson-lunar-strategy-founder-interview/)
- [The Portugal News — Calib3r 收购](https://www.theportugalnews.com/news/2025-08-28/the-leading-european-agency-lunar-strategy-expands-its-operations-through-calib3r-acquisition/604858)
- [We're Back: 2026 Vision](https://www.lunarstrategy.com/article/were-back-lunar-strategys-2026-vision)
- [The Defiant — Web Summit afterwork](https://thedefiant.io/news/event/lunar-strategy-to-host-afterwork-series-during-web-summit-in-lisbon)
- [Rolling Stone Council profile](https://council.rollingstone.com/profile/Tim-Haldorsson-CEO-Lunar-Strategy/cd235171-2044-4e12-bdaf-dededa59f668)

---

## 3. 体验方法论

### 3.1 测试用例矩阵

本次评测使用 **saas** 模板的 **standard** 深度档位，共执行 25 个测试点。

执行流程：

1. **浏览器操作**（Playwright 驱动） — 导航 / 点击 / 截图
2. **Phase 0**：发现首页 nav / footer 全部子页（同源 + 跨子域 hub）
3. **主测点循环**：对每个测点优先**真跳转**到 Phase 0 发现的子页
4. **Auto-explore**：主测点跑完后自动遍历剩余未访问的 nav 子页
5. **Phase 0++（v1.4 新增）：递归背景挖掘** — 进入 help / docs / resources 等内容枢纽（含 `help.X.com` 跨子域），BFS 二次发现 "What is X / Getting Started / Overview" 类介绍页面并捕获
6. **LLM 功能解读**（Claude） — 对每个测点的截图 + 页面文本做产品**功能层**结构化观察（不评 UI）
7. **Phase final（v1.5-v1.9）：Synthesis pass** — 全部测点跑完后追加 **5 次**跨测点综合 LLM 调用：
   - §2.4 战略 X 化叙事（产品本质的 4-6 个抽象方向）
   - §1.5 综合评分（6 维度 5 分制）
   - §4.1 官网 Narrative 综合（关键词图谱 + 叙事手法）
   - §5.4 官网用户增长漏斗推断（**官网作用域**, v1.9 起不再含登录后数据）
   - §2.5 公司基本信息（WebSearch + WebFetch — 融资 / 团队 / 上线 / 来源引用，v1.8）
   - ~~原 §4.1 综合产品级风险~~（v1.9 已移除）
8. **归档**（JSONL + JSON） — 持久化到 `raw/findings.jsonl` + `raw/synthesis.json`

### 3.2 评分与严重度分级（功能层）

- **P1** 严重: 关键功能描述缺失 / 误导
- **P2** 中等: 功能信息不完整
- **P3** 轻微: 功能细节可改进
- **✅** 正面: 功能介绍清晰有力

### 3.3 限制与边界声明

- 本报告由 AI 半自动生成，关键决策建议结合人工 review
- 截图基于审计时刻状态，产品后续更新可能使报告过时
- **焦点是产品功能可理解性**，不评视觉 / UI / 移动端适配

---

## 4. 体验流程记录

### 4.1 官网 Narrative 综合（叙事手法 + 关键词图谱）

> 由 synthesis-pass LLM 从所有营销 / 介绍页观察中抽取，**先 top-down 看叙事**，
> 再看 §4.2 模块细节。对齐人工产品分析报告 §3.5 章节。

#### 关键词图谱

| 关键词 / 短语 | 频次或权重 | 在哪类页面出现 | 想建立的认知 |
|---|---|---|---|
| Crypto Ecosystem Growth Agency | 高 | 首页定位语 / About | 垂直赛道权威定位——不做泛营销，只做加密生态 |
| 250+ Ecosystems / Projects | 高 | 首页 / Logo 墙 / About | 规模化交付能力，行业头部体量 |
| Polkadot / ICP / OKX | 高 | Logo 墙 / About | 借头部公链与交易所的光环建立"服务大客户"的可信度 |
| 1000+ KOLs in Network | 中高 | About / S7 | 资源型护城河——KOL 资源池是核心资产 |
| Award-Winning | 中 | 首页 / About | 行业地位与第三方认可（虽未明示奖项） |
| GTM / Yap Strategy / Crypto SEO | 中 | 服务清单 / 导航 | 紧跟 Web3 营销热词，制造"前沿打法"印象 |
| +40m Marketing Budget Invested | 中 | About | 用资金规模反推操盘经验 |
| Book a Meeting / Live Chat | 高（CTA 频次） | 全站 | 高接触 B2B 销售漏斗——不卖产品，卖关系 |
| Featured Cases / Crypto Marketing Guides | 中 | 首页 / Footer | 内容资产化——暗示"我们有方法论"而非纯执行 |
| Crypto AI Conference | 低中 | About | 自办会议，构建行业话语权与圈层影响力 |

#### 叙事手法分析

**1. 数字堆砌式权威建构（Numerical Authority Stacking）**
- 具体表现：以 "250+ ecosystems"、"1000+ KOLs in Network"、"+40m Marketing Budget Invested" 三组大数字密集排布 [S7]
- 效果意图：用累计量级在第一屏建立"行业头部体量感"，绕过对单个项目效果的追问。

**2. 借光式信任转移（Borrowed Credibility via Logo Name-Dropping）**
- 具体表现："Polkadot、ICP、OKX" 等头部客户 logo 与名称在首页与 About 反复出现 [S4][S7]
- 效果意图：让读者把对 L1 公链 / 头部 CEX 的信任，迁移到该机构的服务能力上——不必说明"为它们做了什么"，名字本身就是论据。

**3. 热词紧贴式前沿包装（Buzzword-Hugging Positioning）**
- 具体表现：服务清单中并列出现 "Yap Strategy"、"Crypto SEO"、"Head of IMM" 等 2024-2025 年新兴术语，与传统 SMM / PR 混搭 [S1]
- 效果意图：营造"始终在打法最前沿"的印象，让潜在客户产生"不签他们就会落伍"的 FOMO，同时刻意不下定义以保留解释权。

**4. 销售触点替代产品功能（Sales-Funnel-as-Product）**
- 具体表现：全站没有任何登录入口、文档、自助工具，所有路径终点都是 "Book a Meeting / Start Live Chat / info@lunarstrategy.com" [C4][C7]
- 效果意图：把"无产品功能"重构为"高触达定制服务"的优势——刻意不透明化交付细节，迫使买家进入一对一销售对话才能获取关键信息。

**5. 资产清单式自我证明（Asset-Inventory Self-Validation）**
- 具体表现：以 "1000+ KOLs in Network"、自办 "Crypto AI Conference"、"Crypto Marketing Guides" 内容库列举资源 [S7][S1]
- 效果意图：把机构包装成"资源持有者"而非"人力外包"，暗示买家购买的是稀缺资源的访问权，而非可被替代的执行工时。

#### 整体叙事评价

Lunar Strategy 想让用户感觉它是一家**"掌握 Web3 头部资源的垂直营销操盘手"**——通过大数字、大客户 logo 和前沿术语堆叠出权威感，但刻意回避交付物、计费模式与可量化结果。叙事在"建立第一印象"层面有效，但在"促成尽调级决策"层面可信度较弱：所有功能性证据（具体案例结果、服务边界、价格区间）都被锁在销售漏斗后，读者只能选择信任或退出。

### 4.2 测点流程详情（按模块聚合）

> 全部测点按 URL 路径**模块化聚合**：AI 能力 / 解决方案 / 商业化 / 集成 等。
> 每个模块下列出该模块覆盖的页面 + 每个测点的 LLM 功能观察。


### 🏠 首页（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/`

#### C5: Footer audit

**URL:** https://www.lunarstrategy.com/

![C5](./figs/03-c5-footer-audit.png)

**观察：**

- P2** 页面文本节选中未见标准 footer 信息（如完整服务清单链接、法律条款、隐私政策、Cookie 声明、地址/公司注册信息、Sitemap），仅出现 "Download for Free / get in touch / info@lunarstrategy.com / Start Live Chat / Book a Meeting" 等转化入口——作为 B2B 加密营销代理商，缺少法律与合规链接会影响企业客户的尽调判断。
- ✅** Footer 区域同时提供邮件（info@lunarstrategy.com）、Live Chat、Book a Meeting 三种联系方式，覆盖异步咨询、即时沟通、正式会议三种客户接触路径，对 B2B 销售线索捕获是合理的功能配置。
- P2** "Download for Free" 入口未在 footer 上下文说明下载的是什么资产（白皮书？案例集？营销指南？），用户无法判断点击后获得的具体内容与价值。
- P3** 服务清单在 footer 出现的版本（PR / Social Media Marketing / Yap Strategy / Go-To-Market-Strategy / Influencer Strategy）与主页 "Our Services" 列出的 6 项（含 Community Management、Crypto Event Management、Crypto SEO）不一致，存在 "Yap Strategy" 这种主区未定义的服务名，功能边界对潜在客户不清晰。
- P1** 整页（含 footer）未说明核心交付机制——服务以项目制、retainer 月费制还是 performance-based 计费？是否提供 SLA、报告频率、客户专属 AM？对一家声称服务 250+ 项目的代理商，缺失这些功能性运营信息会让买家无法评估"这个产品能为我做什么"。


### ✨ 产品功能 / 介绍（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/`

#### S1: Features / Product page

**URL:** https://www.lunarstrategy.com/

![S1](./figs/06-s1-features-product-page.png)

**观察：**

- P1** 页面仅罗列六大服务名称（GTM、SMM、社区管理、KOL、PR、活动），未说明每项服务的**交付物清单 / 工作流程 / 周期 / 团队配置**。例如"PR"只写"叙事开发与媒体投放"，但具体能投放到哪些媒体（CoinDesk？The Block？）、保证发稿量、是否包含撰稿都未交代——读者无法判断"这个服务能为我做什么"。
- P1** 作为代理服务公司，其核心"产品"应是**服务交付能力**，但页面缺失关键功能信息：**项目周期**（一次合作多久）、**最小起步预算 / 计费模式**（按月 retainer？按项目？按 KPI？）、**KPI 承诺**（增长指标、保底数据）——这些是 B2B 服务采购的决策刚需。
- P2** "250+ ecosystems"、"Polkadot/ICP/OKX"等社会证明很强，但未说明**典型客户画像与适用场景边界**：是早期项目融资前后的 GTM？还是 L1/L2 生态长期运营？还是单次 TGE 活动？不同阶段的 Crypto 项目用户难以自我对号入座。
- P2** "Yap Strategy"、"Crypto SEO"、"Head of IMM"等术语在首页直接出现但未定义。**IMM 是什么？Yap Strategy 与 SMM 区别在哪？** 对 Web3 新项目方而言是认知摩擦，对功能定位也制造模糊。
- P3** 提供了"Crypto Marketing Guides"内容板块，暗示其具备**行业知识库 / 教育资产**这一附加能力——✅ 这是除服务交付外的差异化功能，但页面未说明其内容深度、更新频率或是否需要订阅获取，弱化了该资产的功能价值。


### ⭐ 客户案例（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/`

#### S4: Customer / logo wall

**URL:** https://www.lunarstrategy.com/

![S4](./figs/07-s4-customer-logo-wall.png)

**观察：**

- P2** 页面以"Customer / logo wall"为测点，但实际呈现的是"250+ Clients"数字声明 + 列举 Polkadot / ICP / OKX 三个客户名称，缺少完整的客户 logo 墙或可验证的客户清单，用户无法快速判断该机构服务过的项目类型、规模和领域分布（DeFi / L1 / CEX / NFT 等）。
- P1** 仅列出 3 个标杆客户名（Polkadot、ICP、OKX），未说明这些客户**具体购买了哪些服务**（PR？KOL？SMM？GTM？）以及**取得了什么结果**——客户案例与服务能力之间没有建立映射，用户读完无法判断"我的项目类型能否在这里复用成功经验"。
- P2** "250+ ecosystems and projects"是一个累计数字，未区分**当前在服客户 vs. 历史客户**、**长期合作 vs. 单次项目**，对评估机构的客户留存能力和服务深度信息量不足。
- P3** 服务清单（01-06：GTM / SMM / Community / Influencer / PR / Event）与客户列表是分离的两块信息，缺少"哪类客户用哪类服务"的交叉证据（如案例标签、服务组合），削弱了 logo wall 作为社会证明的说服力。
- 功能信息缺口 (P2)**：页面提到"Featured Cases / All Cases"入口，但 logo wall 区块本身未嵌入**可点击的客户案例缩略图 / 成果数据**（粉丝增长、媒体曝光量、TVL 提升等量化指标），用户无法在不跳转的情况下验证"250+ 客户"声明背后的真实交付能力。


### 🏢 公司 / 团队（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/about-us`

#### S7: About / Company

**URL:** https://www.lunarstrategy.com/about-us

![S7](./figs/10-s7-about-company.png)

**观察：**

- P1 产品功能边界完全缺失**：页面只用 "PR, Social Media, Influencer Marketing, and Ads" 四个词概括服务，未说明每条服务线**具体交付什么**（例如 PR 是媒体投放、新闻稿撰写还是危机公关？Influencer Marketing 是否包含 KOL 筛选 / 合约管理 / 效果追踪？），读者无法判断"它能为我做什么"。
- P1 工作流与交付物零描述**：作为代理服务，最关键的"接入流程、项目周期、交付物清单、汇报机制"完全未提及——用户不知道签约后会拿到什么（策略文档？月报？Dashboard？），也不知道项目典型时长和介入深度。
- P2 "1000+ KOLs in Network" 是核心资产但无任何细化**：未说明 KOL 覆盖的语种 / 地区 / 垂直赛道（DeFi / GameFi / Infra）/ 粉丝量级分布，也没有展示如何匹配项目与 KOL 的机制，使这一数字无法转化为可评估的能力。
- P2 案例只有客户 Logo，缺功能性证据**：提到服务过 Polkadot、ICP、OKX，但未说明**为这些客户具体做了什么、取得什么可量化结果**（曝光量 / 转化 / 社群增长），"+40m Marketing Budget Invested" 也未拆解到典型项目预算区间，潜在客户无法对照自身预算评估适配度。
- P2 "Crypto AI Conference" 与主营业务关系未交代**：作为 2024 起自办的会议产品线，未说明这是营销资产、付费产品、还是客户曝光渠道之一，也未说明客户能否通过签约获得演讲位 / 展位等权益——一个潜在的差异化能力被埋没。


### 📰 博客 / 内容（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/blog`

#### S6: Blog / Resources

**URL:** https://www.lunarstrategy.com/blog

![S6](./figs/09-s6-blog-resources.png)

**观察：**

- P2** Blog 作为内容营销资产，主题覆盖广泛（NFT、AI Blockchain、Token Launch、Node Sales、Market Makers、KOL Fundraising、Crypto Twitter、Webinars 等），揭示 Lunar Strategy 的服务能力矩阵覆盖加密营销全链路——但页面仅以"近期新闻列表"形式呈现，未对文章做主题分类/标签筛选（如按"Fundraising / Community / PR / KOL / Content"分组），用户难以快速定位与自身需求匹配的功能性指南。
- P2** 文章标题暗示产品具备**实操方法论交付能力**（"Token Launch Strategy Guide""Crypto Marketing Playbook""KOL Fundraising Guide"），即除代运营服务外还输出可复用 Playbook，但页面未说明这些 Guide 是免费阅读、邮件订阅门控、还是付费/Gated 内容，也未与具体 Service SKU 关联——读者无法判断"读完这篇我能直接 DIY，还是需要购买服务"。
- P3** 列表仅显示日期 + 标题，缺少作者、阅读时长、文章摘要/TL;DR、标签，用户必须点进每篇才能判断与自己业务（如 L1 公链 vs DeFi vs NFT 项目）的相关度，功能性筛选成本较高。
- P1** 页面底部出现 "We help leading teams into the **infofi era** with creatives campaigns and growth initiatives" 的定位语，但 Blog 列表中并未直接看到解释 "infofi" 的旗舰文章入口（无 Pinned/Featured Post 机制），核心定位概念与内容资产之间断链——新访客读完这一页无法理解 Lunar Strategy 区别于其他 crypto marketing agency 的差异化产品主张。
- P2** 功能信息缺口：未说明内容更新频率承诺（看似每周 2-3 篇但无明示）、是否提供 RSS、Newsletter 订阅后的内容形式（Digest？独家？）、是否有 Podcast / Video / Case Study 等其他形态资源——侧栏重复 20 次的 "Subscribe to Our Blog" 只表达了订阅意图，没传递订阅价值（订阅后我会收到什么、多久一次、能否退订）。


### 📖 文档 / 帮助（2 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/`
- `https://www.lunarstrategy.com/guides`

#### C7: Help / Documentation

**URL:** https://www.lunarstrategy.com/

![C7](./figs/04-c7-help-documentation.png)

**观察：**

- P1** 页面以"Help / Documentation"为测点，但实际呈现的是营销代理机构的服务介绍页，**完全没有产品文档、知识库、FAQ、操作手册或自助帮助中心**——用户无法通过自助方式了解服务的具体执行流程、交付细节或常见问题答疑，所有信息获取必须依赖"Book a Meeting / Live Chat"等销售触点。
- P1** 六大服务（GTM Strategy、SMM、Community Management、Influencer Marketing、PR、Event Management）仅有一句话定性描述，**未说明工作机制**：例如 Influencer Marketing 不披露 KOL 资源池规模/筛选标准、SMM 不说明内容产出频次与团队配比、Community Management 不说明 Discord 搭建包含哪些模块（机器人、分级、活动机制等），用户读完无法判断"具体能拿到什么交付物"。
- P2** 提及"250+ ecosystems"和 Polkadot、ICP、OKX 等头部客户作为信任背书，但**没有任何案例库的功能入口说明**——"Featured Cases / All Cases"虽存在，但页面未透露案例是否包含可量化结果（涨粉数、媒体覆盖、TVL 增长等可检索维度），削弱了功能可验证性。
- P2** **缺失关键的服务化信息**：套餐分层、起步价格区间、合作周期（项目制 vs. retainer）、地域覆盖、语言能力、是否支持代币激励兑换服务等——这些是 B2B 决策的核心信息缺口，目前全部塞进"Book a Free Consultation"的销售漏斗中。
- P3** "Crypto SEO"、"Yap Strategy"等条目出现在导航中，但页面正文未对这些较新/差异化的子服务做功能解释（尤其"Yap Strategy"是 InfoFi 时代的新兴打法），**专业术语未做面向新客户的释义**，可能造成对非 KOL 玩家的认知门槛。

#### E2: 探索: Guides

**URL:** https://www.lunarstrategy.com/guides

![E2](./figs/13-e2-guides.png)

**观察：**

- P1 页面文本仅显示 20 次重复的 "download for free" 按钮，但**完全没有列出任何 guide 的标题、主题或简介**，用户无法判断这些指南到底覆盖哪些内容（Web3 营销？KOL 投放？社区增长？代币发行？）——核心产品信息（指南内容本身）完全缺失。
- P1 未说明 guides 的**功能定位与价值主张**：这些是潜在客户的 lead magnet（用邮箱换下载）？是付费咨询前的免费教育资源？还是已合作客户的方法论沉淀？"subscribe to receive new guides" 暗示是邮件订阅获客工具，但产品定位未明示。
- P2 缺少关键的**功能元数据**：每份 guide 的页数 / 阅读时长 / 适用受众（创始人 / 营销负责人 / KOL）/ 发布日期 / 难度等级均未呈现，用户无从筛选与自己相关的资源。
- P2 **下载工作流不透明**：是否需要填表 / 留邮箱 / 注册账户？下载格式是 PDF 还是在线阅读？20 份内容是否分类（按行业、按阶段、按服务线）？这些影响转化决策的功能细节均未说明。
- P3 "subscribe to receive new guides" CTA 重复 20 次但未说明**订阅频率、内容形式、是否可退订**——作为一个内容营销功能，订阅产品的基本承诺（每周一份？每月精选？）缺位。


### 📧 联系 / 客服（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/contact`

#### S14: Customer support channels

**URL:** https://www.lunarstrategy.com/contact

![S14](./figs/11-s14-customer-support-channels.png)

**观察：**

- ✅ 多渠道客户接触能力清晰：页面同时提供邮件（info@lunarstrategy.com）、Telegram（含 "verified telegram" 标识，应对加密行业常见冒充风险）、Calendly 预约会议、表单提交四种入口，覆盖异步与即时两类沟通偏好，对加密项目方这种跨时区客户群是合理配置。
- ✅ 表单设计揭示了销售线索预筛选工作流：必填字段包括 Company Website、Telegram Handle、Estimated Budget（分 $15K-25K / $25K-50K / $50K+ / Looking to raise funds 四档），表明产品定位是面向有预算的 Web3 项目方，而非小客户，可在首轮接触就完成 lead qualification。
- P2 服务响应机制信息不完整：仅披露 "Mon-Fri 09:00-18:00"（里斯本时区），但未说明 Telegram "Start Live Chat" 是真人即时响应还是工时内回复、表单提交后的 SLA、是否提供 24/7 紧急支持——这对加密行业 7×24 运作的客户是关键决策信息。
- P2 缺少售后/项目期支持渠道说明：此页全部聚焦售前 contact（"Have a Project?"），未区分已合作客户的服务通道、专属客户经理、项目管理工具（Slack channel / Notion 共享空间等）——读者无法判断签约后如何与团队协同。
- P3 "verified telegram" 是行业特有的反诈机制但未解释：页面两次出现该字样并作为单独导航项，反映出 Lunar Strategy 意识到 Telegram 冒充诈骗问题，但未在 contact 页内联说明如何验证（官方账号列表、签名、域名链路），对首次接触的客户而言信任建立链路不闭环。


### 🔑 登录入口（1 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/`

#### C4: Login page

**URL:** https://www.lunarstrategy.com/

![C4](./figs/02-c4-login-page.png)

**观察：**

- P1 功能性产品缺失**：页面定位为 "Crypto Ecosystem Growth Agency"，本质是**人力服务型代理机构**而非 SaaS / 软件产品，没有任何可登录的产品功能、自助工具或工作台 — 用户期待的 "Login page" 在此场景下不存在对应的产品能力入口（仅有 "Book a Meeting" / "Start Live Chat" 等销售线索通道）。
- P1 服务交付机制完全不透明**：列出了 7 项服务（GTM Strategy、SMM、Community Management、Influencer Marketing、PR、Event Management、Crypto SEO），但每项仅 1-2 句宣传语，**未说明工作流（如何启动项目 / 交付周期 / 报告频率）、交付物形态（报告？内容？KOL 名单？）、客户参与方式**，无法判断"购买后会得到什么"。
- P2 集成与工具栈信息为零**：作为 Crypto 营销代理，未披露使用的**KOL 资源库、数据分析平台、社区管理工具、链上数据来源**等关键能力底座 — 客户无法评估该机构相对于竞争对手的能力护城河。
- P2 服务边界与定价模型缺失**：250+ 客户、Polkadot/ICP/OKX 等案例堆砌了规模感，但**未说明最小服务单元（按月 retainer？按项目？按 KOL 单次？）、价格区间、适合的项目阶段（pre-TGE / 主网上线 / 成熟期）**，潜在客户难以自我筛选是否匹配。
- P3 案例与方法论的可验证性弱**：仅以 logo 形式展示客户，未给出**具体 case 的可量化结果**（曝光、社区增长、Token 表现等），"Award-Winning" 也未说明奖项名称 — 功能层的"做了什么、产出了什么"无法被读者还原。


### 📌 其他（6 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com//`
- `https://www.lunarstrategy.com/this-page-should-not-exist-product-audit-test-1234`
- `https://www.lunarstrategy.com/testimonial`
- `https://www.lunarstrategy.com/services`
- `https://www.lunarstrategy.com/our-cases`
- `https://www.lunarstrategy.com/verify-telegram`

#### C1: Homepage 5-second test

**URL:** https://www.lunarstrategy.com//

![C1](./figs/01-c1-homepage-5-second-test.png)

**观察：**

- ✅ 产品定位清晰：明确说明这是面向 Crypto/Web3 领域的"生态增长代理机构"，自 2019 年起服务 250+ 项目（Polkadot、ICP、OKX），用户 5 秒内即可判断业务范围与服务对象。
- ✅ 服务能力矩阵直观呈现：首页列出 6 大核心服务（Web3 GTM 咨询、Social Media Marketing、Community Management、Influencer Marketing、PR、Event Management），每项配一句话功能描述（如 PR = "narrative development and media placements"），用户能快速判断"这家能不能帮我做某件事"。
- P2 服务交付机制说明缺失：页面只罗列服务名称和概念性描述，但未说明**每项服务的具体交付物**（例如 Influencer Marketing 是否包含 KOL 名单筛选、合约管理、效果报告？Community Management 是否包含 7x24 值守、Bot 配置？），用户无法判断范围边界。
- P2 缺少量化效果与案例细节：虽然提到 "250+ ecosystems" 和 Featured Cases 入口，但首页未直接展示**关键 KPI 案例**（如某项目通过 PR 服务获得多少媒体曝光、社区增长数据），削弱了"Proven track record"主张的说服力。
- P1 商业化路径与合作模式不透明：页面只有 "Book a Free Consultation / Book a Meeting" 两类 CTA，未说明**服务定价模型**（按月 retainer？项目制？token 置换？）、**最小合作周期**、**适合的项目阶段**（pre-launch / post-TGE / 成熟生态？），潜在客户难以自评匹配度。

#### C8: 404 error handling

**URL:** https://www.lunarstrategy.com/this-page-should-not-exist-product-audit-test-1234

![C8](./figs/05-c8-404-error-handling.png)

**观察：**

- P3** 404 页面仅提供"back home"单一恢复路径，未引导到 Services / Cases / Guides 等核心功能入口，错失对走丢用户进行**功能转化**的机会（例如：推荐相关服务、最近案例、热门指南）。
- ✅ 全局导航在 404 页面仍保留 Blog / Cases / Services / **Verified Telegrams** / Team / Guides / Contact 七大入口，可推断产品矩阵覆盖"内容营销 + 案例展示 + 服务交付 + Telegram 渠道认证 + 知识库"，**Verified Telegrams** 是该产品差异化能力的强信号（疑似 Web3/加密领域的 Telegram 频道认证或营销服务）。
- P1** "Verified Telegrams" 作为最具特色的功能模块出现在导航中，但 404 页面（及其上下文）未对其**工作机制 / 验证标准 / 输入输出 / 适用对象**做任何说明，用户无法判断这是 Telegram 群组审计、KOL 验证、还是反诈服务。
- ✅ 同时暴露三条销售触达通道——`info@lunarstrategy.com`（邮件）/ **Start Live Chat**（即时沟通）/ **Book a Meeting**（预约制），表明产品采用"咨询式销售"工作流，适用于客单价较高、需人工介入的 B2B 营销服务场景。
- P2** 404 页面未集成站内搜索或"你是否在找…"的智能跳转能力，对一个以 **Blog / Cases / Guides** 内容为流量入口的营销代理产品而言，缺失内容检索功能会直接影响其内容资产的可达性。

#### S5: Case studies / Testimonials

**URL:** https://www.lunarstrategy.com/testimonial

![S5](./figs/08-s5-case-studies-testimonials.png)

**观察：**

- P1** 页面只展示了客户证言/Logo 墙，但没有呈现一个真正意义上的 **Case Study**（缺少"客户背景 → 面临问题 → Lunar 采用的服务/打法 → 关键动作 → 可验证的成果指标 → 时间周期"的完整结构），用户无法据此判断 Lunar Strategy 在不同项目类型中的具体交付能力。
- P1** 仅 Hansen/Levva 一条提到了可量化结果（"raised and sold out $350,000 during our token sale"、"KOL 投放带来 X 曝光"），其余证言全部是"great team / reliable / solid"等泛化表达，**没有说明 Lunar 的服务到底解决了客户哪些具体问题**（融资?上所?Token Sale 流量?社区冷启动?Twitter 增长?），功能价值无法落地。
- P2** 证言里出现了"KOL 组织""PR campaigns""ecosystem growth"等关键词，但页面**没有把这些证言反向映射到 Lunar 的服务清单**（即"该客户用的是 KOL Marketing 模块 / PR 模块 / Ecosystem Growth 模块"），读者无法据此理解每条产品线分别能产生什么结果。
- P2** 功能信息缺口：缺少**项目类型分布**（L1/L2、DeFi、GameFi、NFT、Memecoin 等分别有多少案例）、**客户规模分布**（早期项目 vs 已上所项目）、**典型项目周期与预算区间**——这些是 Web3 marketing agency 类产品最关键的"我适不适合用"判断依据。
- P3** 证言来源做了 Trustpilot / Ethos 的外链背书（✅ 这一点对加密行业建立 credibility 是有效的），但**没有按"服务类型 / 行业 / 成果类型"分类筛选**，读者想找"和我类似的项目案例"时只能逐条阅读。

#### E1: 探索: Services

**URL:** https://www.lunarstrategy.com/services

![E1](./figs/12-e1-services.png)

**观察：**

- ✅ **服务矩阵清晰呈现六大功能模块**：页面以编号列表展示 Lunar Strategy 提供的六类核心服务——Web3 Consulting & GTM Strategy、Crypto Social Media Marketing、Community Management、Influencer Strategy、PR、Crypto Event Management，覆盖了 Web3 项目从战略规划到社区运营、KOL 投放、媒体公关、线下活动的完整营销链路，让访客快速理解这家代理机构"能做什么"。
- ✅ **每项服务附带一句话价值定位**：每个服务下方都有简短描述说明工作机制与目标（例如 GTM 服务是"将产品、品牌、代币策略对齐为一个增长系统"；社区管理是"完整 Discord 社区基础设施，构建黏性、可扩展、自维持的增长"），让访客对每条服务的功能定位有初步判断。
- P2 缺少功能交付细节与工作流说明**：六项服务都只有一句概括性描述，未披露关键功能要素——例如 Influencer Strategy 没说明 KOL 库规模、筛选机制、是否提供合同/支付托管；Community Management 没说明是否提供 7×24 值守、机器人配置、反女巫策略；PR 没列出合作媒体清单。读完后用户难以判断"具体交付物是什么"。
- P2 缺少套餐/定价/参与方式信息**：页面只列服务名称，未说明服务是按项目制、订阅制还是 retainer 制，也没有起步价、最小周期、团队配比等关键采购决策信息，用户无法判断自身预算是否匹配。
- P1 单项服务的"Learn more"是否能补齐功能细节存疑**：六个服务都附 "Learn more" 入口暗示有详情子页，但从当前页面无法验证子页是否真正解决了功能信息缺口（典型场景：DeFi 项目方代币发行前的 GTM + KOL + 社区冷启动组合）。若详情页同样只是营销话术而无可量化的功能/交付物清单，将直接影响 B2B 决策转化。

#### E3: 探索: Cases

**URL:** https://www.lunarstrategy.com/our-cases

![E3](./figs/14-e3-cases.png)

**观察：**

- P2** 案例列表仅展示项目名/赛道/年份/"learn more"链接，未在本页直接呈现"挑战-方法-成果"摘要，用户无法在不跳转的情况下快速判断 Lunar Strategy 在每个项目上具体交付了什么、达成了哪些可量化结果（如曝光量、转化、融资额、社区增长）。
- P1** 服务标签（Social Media Marketing、Influencer Strategy、GTM、Yap Strategy、PR）与下方 10 个案例之间没有任何映射或过滤机制，用户无法回答"我想看 KOL 案例 / 想看 PR 案例"——核心功能(按服务类型筛选案例)实际上缺失。
- P2** 全部案例 direction 均为"Crypto"且年份集中在 2024-2025，未透露子细分（DeFi / L1 / RWA / GameFi / AI×Crypto 等），潜在客户难以判断该机构在自身赛道的实操经验，功能信息颗粒度不足。
- P3** "Yap Strategy"作为服务出现但未在页面任何位置解释其含义（推测与 InfoFi / 注意力经济相关），对不熟悉该术语的项目方构成理解门槛，应在案例页给出一句话能力定义。
- P2** 关键功能信息缺口：交付物清单（推文数量、KOL 数量、PR 媒体覆盖、活动场次）、合作周期、典型预算区间与案例的对应关系均未展示——预算选项($15k-$50k+)出现在表单但未与案例规模挂钩，用户无法据此自评匹配度。

#### E8: 探索: Verified Telegrams,

**URL:** https://www.lunarstrategy.com/verify-telegram

![E8](./figs/19-e8-verified-telegrams.png)

**观察：**

- P2 该页面本质上是一个"团队 Telegram 账号验证清单"，但未说明背后的**反诈骗工作流**——例如用户如何发起验证、是否提供官方 Telegram bot 校验入口、被冒充时的举报通道，仅靠静态列表难以构成真正的"verify"能力
- P1 列表中出现三位 **AI Assistant**（Jenny / Lisa / Josefine），但完全没有说明这些 AI 助理的功能边界：它们能代表 Lunar Strategy 做什么决策（报价？合同？项目推进？）、何时会移交人工、用户如何识别正在与 AI 对话——这是加密营销服务中关键的信任与合规问题
- P2 两位 AI Assistant（Lisa Brandt、Josefine Adler）共用同一个 Telegram handle `@Den1Design`，且与"Den1Design"这一外部品牌的关系未解释，反而加剧了"这真的是官方账号吗"的疑问，与页面声称的"防诈骗"目的相悖
- P3 部分成员列出多个 handle（如 `@jacklunar / jacklunarcapital`、`@lunarhampus / hampuslunarstrategy`），但未说明主备账号、不同场景用途，用户难以判断哪个是"官方对接"入口
- P2 页面未交代该清单的**更新机制与时效性**（最后更新时间、离职员工下架流程、新成员加入流程），对一个声称"防止冒充诈骗"的安全页面而言，这是核心信任要素的缺口


### ⚠️ 未找到的测点（6 个测点）

**该模块覆盖页面**:

- `https://www.lunarstrategy.com/`

#### C2: Pricing page

**URL:** https://www.lunarstrategy.com/
**观察：**

- [Link not found] 该模板期望的链接（pricing|定价|價格）在 https://www.lunarstrategy.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### C3: Sign-up flow (no submit)

**URL:** https://www.lunarstrategy.com/
**观察：**

- [Link not found] 该模板期望的链接（sign up|signup|get started|start free|注册|免费试用|开始）在 https://www.lunarstrategy.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### S2: Use cases / Industry

**URL:** https://www.lunarstrategy.com/
**观察：**

- [Link not found] 该模板期望的链接（use case|industries|solutions|应用场景|行业）在 https://www.lunarstrategy.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### S3: Integrations page

**URL:** https://www.lunarstrategy.com/
**观察：**

- [Link not found] 该模板期望的链接（integration|connect|集成|连接）在 https://www.lunarstrategy.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### S9: API / Developer docs

**URL:** https://www.lunarstrategy.com/
**观察：**

- [Link not found] 该模板期望的链接（api|developer|docs.|开发者）在 https://www.lunarstrategy.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### S12: Trust / Security page

**URL:** https://www.lunarstrategy.com/
**观察：**

- [Link not found] 该模板期望的链接（security|trust|compliance|安全|信任）在 https://www.lunarstrategy.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。


---

## 5. 第三方社区反馈（非官方）⭐

#### 5.1 调研范围与方法

WebSearch 在多个第三方平台对 `lunarstrategy.com` 进行了主动检索，覆盖时间窗为 2019（公司创立）至 2026-05。检索范围与结果：

- **Reddit** (`site:reddit.com`)：未找到任何讨论 thread
- **Hacker News** (`site:news.ycombinator.com`)：仅出现在 "Who is hiring" 通用版面，无独立讨论
- **Product Hunt**：未找到该域名的 Listing 或 Reviews 页
- **G2.com**：无产品收录
- **Trustpilot** (`trustpilot.com/review/lunarstrategy.com`)：21 条评价，4 星均分
- **Clutch.co** (`clutch.co/profile/lunar-strategy`)：16 条已验证客户评价
- 其他二级评论 / 行业目录：DesignRush、Sortlist、AgencyVista、CryptoSlate、InfluencerMarketingHub、bestcryptomarketing.agency、coinweb.com 等

**信号特征**：所有用户反馈集中在 **B2B 代理评论平台**（Trustpilot / Clutch / 行业目录），**社区原生平台（Reddit / HN / Twitter dev 圈）零讨论**。这与服务对象是"项目方决策人"而非"终端散户"相吻合，但也意味着评价多来自被邀请回填的客户，缺乏独立社区交叉验证。

#### 5.2 核心议题（按讨论频次）

| 议题 | 讨论方向 | 出现频次 | 主要来源平台 |
|---|---|---|---|
| KOL 网络 / PR 渠道 connections | 正面 | 高 | Trustpilot, Clutch, DesignRush |
| Web3/DeFi/GameFi 领域专业度 | 正面 | 高 | Trustpilot, Clutch |
| ROAS / 投放结果（含 900% ROAS 个案） | 正面 | 中 | Clutch |
| 团队响应速度 & 灵活性 | 正面 | 中 | Trustpilot, Clutch |
| 价格不透明 / 无公开报价 | 中性偏负 | 中 | bestcryptomarketing.agency, InfluencerMarketingHub |
| 公开案例 / 客户名单不完整 | 负面 | 低 | InfluencerMarketingHub, Sortlist |
| 公司地址在 LinkedIn 与官网不一致 | 负面 | 低 | 第三方综述 |

#### 5.3 正面评价 / 用户喜欢的点

- **来源**: [Lunar Strategy Reviews on Trustpilot](https://www.trustpilot.com/review/lunarstrategy.com) — 长期客户（1 年以上合作）
  - **原文引用**:
    > "Great with PR, good writers and good connections in places crypto projects want to be."
  - **关键词**: PR、文案能力、渠道关系

- **来源**: [Trustpilot — Lunar Strategy](https://www.trustpilot.com/review/lunarstrategy.com) — DeFi/GameFi 项目方
  - **原文引用**:
    > "An exceptional marketing agency... the team is highly skilled and knowledgeable in the DeFi and GameFi space. Strategies are effective, innovative, and tailored to specific needs."
  - **关键词**: 领域专业度、策略定制化

- **来源**: [Lunar Strategy on Clutch.co (16 verified reviews)](https://clutch.co/profile/lunar-strategy) — 付费投放客户（$25K 项目预算档）
  - **原文引用**:
    > "900% ROAS and low CPCs... deep understanding of business goals... proactive approach and effective communication."
  - **关键词**: 投放 ROI、主动沟通、商业理解

- **来源**: [Clutch.co — Lunar Strategy](https://clutch.co/profile/lunar-strategy) — Web3 客户
  - **原文引用**:
    > "Excellent team, and result oriented. Always productive working with this group. Incredibly flexible approach and extensive knowledge and vast network."
  - **关键词**: 网络资源、灵活性、可重复合作

#### 5.4 负面 / 批评 / 担忧

- **来源**: [Lunar Strategy Review (bestcryptomarketing.agency, Feb 2026)](https://bestcryptomarketing.agency/lunarstrategy/) — 第三方独立评测
  - **原文引用**:
    > "Limited pricing information may be considered a drawback... it is not clear where the company's main address is, as its LinkedIn page and website have different information."
  - **关键词**: 报价不透明、注册地信息不一致

- **来源**: [Lunar Strategy Review on InfluencerMarketingHub](https://influencermarketinghub.com/crypto-agencies/lunar-strategy/) — 行业综述
  - **原文引用**:
    > "This agency has not added any of their clients to their portfolio."
  - **关键词**: 案例不公开（与官方"300+ projects"叙事存在 gap）

- **结构性观察（来自检索本身，非具体引用）**:
  - **Reddit / HN / 加密推特 dev 圈零自然讨论** — 对于自称"European leading"、6 年历史、110+ 客户的代理而言，缺乏社区原生 mention 是值得注意的信号，说明品牌声量集中在 B2B 销售漏斗内，而非项目方的自发口碑传播
  - **评价样本量与宣称规模不匹配** — Trustpilot 21 + Clutch 16 ≈ 37 条公开评价 vs. 官方宣称的 300+ 项目，覆盖率约 12%；这在 agency 行业属正常区间，但意味着可见的评价池可能是经过筛选的"推荐客户"

#### 5.5 与官方叙事的差异（vs §4.1 Narrative）

官方网站强调"Award-Winning Agency"、"300+ projects"、"$200M+ marketing budgets managed"、与 Polkadot / Cardano / ICP / OKX 等头部协议合作，叙事调性是"机构级、领头型欧洲 Web3 营销机构"。第三方社区图景与之相比有两处显著 gap：

1. **声量集中度倒挂**：官方塑造"行业 leader"形象，但社区可见度集中在**付费 B2B 评论平台**（Trustpilot/Clutch/DesignRush 等多为代理付费/认证展示渠道），而**自然社区**（Reddit、HN、加密 dev 推特）零提及。这意味着品牌资产更接近"销售线索引擎"而非"被市场自发讨论的品类标杆"。

2. **透明度反差**：官方页面对成果（5000 万曝光、$25M 预算、1000+ KOL）有具体数字，但**实际报价、完整客户名单、地址登记信息**在第三方评测中被标记为缺失或矛盾。对于售卖"信任与人脉"作为核心价值的代理服务，这个 gap 会影响潜在客户的尽调体验。

#### ⚠️ 信息来源声明

本节所有内容来自**非官方第三方平台**（Trustpilot / Clutch / DesignRush / InfluencerMarketingHub / bestcryptomarketing.agency 等）。其中 Trustpilot 与 Clutch 评价为客户自填且平台允许商家邀请回填，存在**选择性偏差**；行业目录站可能与被评测对象有商业关系。内容可能含偏见 / 过时 / 个别极端观点。决策时建议结合 §2.5 官方信息 + §4 实测综合判断。

Sources:
- [Lunar Strategy Reviews on Trustpilot](https://www.trustpilot.com/review/lunarstrategy.com)
- [Lunar Strategy Reviews (16) on Clutch.co](https://clutch.co/profile/lunar-strategy)
- [Lunar Strategy Review (bestcryptomarketing.agency, Feb 2026)](https://bestcryptomarketing.agency/lunarstrategy/)
- [Lunar Strategy Review on InfluencerMarketingHub](https://influencermarketinghub.com/crypto-agencies/lunar-strategy/)
- [Lunar Strategy on DesignRush](https://www.designrush.com/agency/profile/lunar-strategy-crypto-marketing)
- [Lunar Strategy Review on Coinweb](https://coinweb.com/comparison/best-crypto-marketing-agency/lunar-strategy/)
- [Lunar Strategy on Sortlist](https://www.sortlist.co.uk/agency/lunar-strategy)

---

## 6. 总结

### 6.1 一句话评价

目标产品 **https://www.lunarstrategy.com/** 在 **saas** 模板的 **standard** 档位评测下存在严重问题：识别问题 65 个（P1 20 / P2 33 / P3 12），正面发现 9 个。详见 §4 体验流程详情。

### 6.2 最大优点 Top 3

1. **[C1]** ✅ 产品定位清晰：明确说明这是面向 Crypto/Web3 领域的"生态增长代理机构"，自 2019 年起服务 250+ 项目（Polkadot、ICP、OKX），用户 5 秒内即可判断业务范围与服务对象。
2. **[C1]** ✅ 服务能力矩阵直观呈现：首页列出 6 大核心服务（Web3 GTM 咨询、Social Media Marketing、Community Management、Influencer Marketing、PR、Event Management），每项配一句话功能描述（如 PR = "narrative development and media placements"），用户能快速判断"这家能不能帮我做某件事"。
3. **[C5]** ✅** Footer 区域同时提供邮件（info@lunarstrategy.com）、Live Chat、Book a Meeting 三种联系方式，覆盖异步咨询、即时沟通、正式会议三种客户接触路径，对 B2B 销售线索捕获是合理的功能配置。

### 6.3 最大风险 Top 3

1. **[C1]** P1 商业化路径与合作模式不透明：页面只有 "Book a Free Consultation / Book a Meeting" 两类 CTA，未说明**服务定价模型**（按月 retainer？项目制？token 置换？）、**最小合作周期**、**适合的项目阶段**（pre-launch / post-TGE / 成熟生态？），潜在客户难以自评匹配度。
2. **[C4]** P1 功能性产品缺失**：页面定位为 "Crypto Ecosystem Growth Agency"，本质是**人力服务型代理机构**而非 SaaS / 软件产品，没有任何可登录的产品功能、自助工具或工作台 — 用户期待的 "Login page" 在此场景下不存在对应的产品能力入口（仅有 "Book a Meeting" / "Start Live Chat" 等销售线索通道）。
3. **[C4]** P1 服务交付机制完全不透明**：列出了 7 项服务（GTM Strategy、SMM、Community Management、Influencer Marketing、PR、Event Management、Crypto SEO），但每项仅 1-2 句宣传语，**未说明工作流（如何启动项目 / 交付周期 / 报告频率）、交付物形态（报告？内容？KOL 名单？）、客户参与方式**，无法判断"购买后会得到什么"。

### 6.4 用户增长漏斗推断（官网作用域）⭐

> 基于 pricing / signup / demo / 背景介绍页的观察，**推断**产品的官网层增长漏斗、
> 评估分叉、价格心智锚点、可见的 Aha 承诺等。**作用域：到访客转化为注册/试用用户为止**。
> v1.9：不再分析团队扩散、登录后留存等需要 dashboard 数据的环节。

观察数据区块为空——`=== Pricing / Signup / Demo / Background 观察（仅官网） ===` 下方没有任何测点内容。

无法在没有原始观察的情况下输出推断，否则会变成凭空捏造测点 ID 和页面陈述。请补充以下任一形式的数据后再让我推断：

1. **测点列表**（推荐）：粘贴 pricing / signup / demo / background 相关的测点条目，格式类似 `[P01] Pricing 页有 3 档套餐，最低 $X/月，标注 "Most Popular"` —— 我会基于这些 ID 引用证据。
2. **页面截图描述 / 摘录**：直接贴 pricing 页的套餐结构、CTA 按钮文案、signup 表单字段、demo 表单字段、首页 hero 区文案等。
3. **product-audit 产物**：如果你已经跑过 `product-audit` skill，把生成的 `report.md` 中 §1 产品概览 + §3 体验流程记录里关于 pricing / signup / demo 的段落贴过来。

补完数据后我会严格按你要求的结构输出（漏斗图 + 3–5 个 Stage 详解 + 转化设计观察 + 强弱判断），且只用未登录访客视角、不引用任何 L* 登录态测点。

---

*生成时间: 2026-05-21T21:40:09.607002*

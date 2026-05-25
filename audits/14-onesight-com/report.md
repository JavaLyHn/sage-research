# onesight.com 产品深度体验报告

> **本报告聚焦：产品**功能层**的可理解性与完整性 — 不评 UI 美学**

## 报告信息

| 项 | 内容 |
|---|---|
| 产品名称 | onesight.com |
| 产品 URL | https://onesight.com/ |
| 体验时间 | 2026-05-21T21:15:55.981784 |
| 体验人 | product-audit Skill（自动化） |
| 体验环境 | Darwin 25.3.0 / Python 3.9.6 |
| 评测模板 | `saas` |
| 深度档位 | `standard` |
| 主测点数 | 17（含 0 个递归背景测点） |
| LLM 调用 | 17 / 200 |
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

目标产品 **https://onesight.com/** 在 **saas** 模板的 **standard** 档位评测下存在严重问题：识别问题 54 个（P1 22 / P2 27 / P3 5），正面发现 6 个。详见 §4 体验流程详情。

### 1.2 整体兑现度

| 维度 | 兑现度 / 状态 |
|---|---|
| 测点覆盖 | ✅ 17 / 17 点 |
| 递归背景测点 | ⚠️ 未发现 — 产品可能无 help/docs/resources 区域 |
| 登录态覆盖 | ⚠️ **用户显式跳过** — 本报告为公开页 only（partial coverage） |
| 严重问题 (P1) | ❌ 有 22 个 |
| 中等问题 (P2) | ⚠️ 27 个 |
| 轻微问题 (P3) | ⚪ 5 个 |
| LLM 预算使用 | 17 / 200 |

### 1.3 风险与机会 Top 3

#### 🔴 Top 3 风险（功能层）

1. **[C1]** P1 关键集成信息缺失**：作为"出海整合营销云"，页面完全没有列出可对接的平台清单、API/数据源、广告投放系统集成情况，用户读完仍不知道"一键发帖"覆盖哪些平台、"舆情监测"抓取哪些数据源。
2. **[C5]** P1 "Advertising & Promotion Services"（付费社媒项目代运营）作为 Solutions 之一暴露出 OneSight 不只是纯 SaaS，还有人工服务/代运营业务，但 footer 未说明该服务的工作机制（是平台工具 + 人工组合？还是纯代理服务？是否包含投放预算管理、素材生产、效果优化等具体环节），用户无法判断这是产品功能还是外包服务。
3. **[C7]** P1** 页面未提供任何 Help Center / 文档中心 / 知识库入口 — 抓取的文本只包含导航菜单（Product / Solutions / About）和公司介绍，没有"帮助文档""使用教程""API 文档""FAQ"等链接，用户在购买前无法自助了解产品的具体操作流程和功能边界。

#### 🚀 Top 3 机会 / 优势

1. **[C1]** ✅ 场景化客户证言较有力**：四段客户引言分别覆盖智能硬件、非洲手机市场、汽车出海、光伏行业，具体描述了"跨平台运营效率""非洲市场动态监测""搭建海外引流体系"等使用场景，比功能描述本身更能说明产品价值。
2. **[C5]** ✅ Footer 的 Product 菜单作为产品能力清单非常有信息量：6 大功能模块（社媒运营/互动管理/灵感-内容创作/数据监测/社交聆听/数据报告）每条都附带一句话能力描述（如"跨平台多账号发布、定时排程、团队内部审批"），用户可在不进入子页的情况下快速建立产品功能地图。
3. **[S1]** ✅ 页面用六个功能模块清晰勾勒出"出海社媒管理一站式平台"的能力边界：发布调度（Social Media Operations）+ 互动管理（Interaction Management）+ 内容灵感（Inspiration）+ 数据监测（Data Monitoring）+ 舆情监听（Social Listening）+ 跨平台数据报表（Data Report），覆盖了出海社媒运营从内容生产→发布→互动→监测→复盘的完整闭环。

### 1.4 立即可做的 Quick Wins

| # | 改进 | 来源 |
|---|---|---|
| QW-1 | P2 功能描述泛化**：七大模块（内容发布、互动管理、社媒监控、消费者洞察、舆情监测、Dashboard、素材灵感）仅有 1-2 句概括，未说明具体支持哪些海外社媒平台（Facebook/Instag | [C1] |
| QW-2 | P2 AI 能力语焉不详**：反复强调"AI+大数据驱动"、"评论自动化情绪分析"、"AI 洞察消费者"，但未说明 AI 做什么具体任务（是分类、生成、翻译还是预测？）、是否支持多语言、模型如何与品牌 | [C1] |
| QW-3 | P2 产品边界模糊**：页面同时呈现"营销云（SaaS 工具）"和"整合营销（策略/运营/媒介代运营服务）"两条业务线，但未清晰区分 — 用户不确定 OneSight 是软件工具、代运营服务、还是两者 | [C1] |
| QW-4 | P2 Solutions 与 Product 两个菜单存在概念重叠且边界不清："Social Media Operations" 同时出现在 Product 和 Solutions 下，但页面未说明二 | [C5] |
| QW-5 | P2 关键集成与覆盖平台信息缺失：所有功能都强调"跨平台"（Cross-platform multi-account posting、Cross-platform Opinion & Sentimen | [C5] |
| QW-6 | P2 "Interaction Management — Reply to private messages and comments" 和 "Social Listening — Keywords  | [C5] |

### 1.5 综合评分（5 分制 × 6 维度）

> 跨全部测点的产品级综合评分，由 synthesis-pass LLM 调用产出（见 §3.1 体验方法论）。

| 维度 | 评分 | 1-2 句话说明（引用具体 [测点ID]） |
|---|---:|---|
| 产品方向清晰度 | 2.5 / 5 | 六大功能模块勾勒出社媒运营闭环 [S1]，但 SaaS 工具与代运营服务边界混乱 [C1][C5][S3]，"Product 与 Solutions 同名模块"加剧了买软件还是买服务的困惑 [S1][C7]。 |
| Narrative 表达力 | 2.5 / 5 | 四段场景化客户引言（智能硬件/非洲手机/汽车出海/光伏）有一定说服力 [C1]，但"AI-powered global marketing SaaS""服务 20+ 行业"等主张停留在销售话术层 [S2][S4]，缺乏数据、案例与 ROI 支撑。 |
| 信息架构（IA） | 2.0 / 5 | Footer 的 Product 菜单作为功能地图清晰可用 [C5]，但 Product 与 Solutions 概念重叠 [C5][S1]、行业列表前后不一致 [S2]、Pricing/Sign-up/Login/Case Studies 等关键入口全部缺失 [C2][C3][C4][S5]，整体导航有重大缺口。 |
| 功能广度与深度 | 2.0 / 5 | 六大模块覆盖发布→互动→监听→报表全链路 [S1][S6]，但平台支持清单、账号上限、审批层级、语种/地域覆盖、API 等关键参数全部未交代 [C1][C7][S1][S3]，停留在名词级标签。 |
| AI / 核心能力可信度 | 1.5 / 5 | 反复强调"AI+大数据""自动化情绪分析""AI 洞察消费者" [C1][C8]，但六大模块描述里 AI 完全缺席 [S1][S3]，没有任何具体任务、模型来源、demo 或案例佐证 [C7][S6]。 |
| 商业化清晰度 | 1.0 / 5 | Pricing 页面完全缺失 [C2]，Sign-up/Login 入口也找不到 [C3][C4]，SaaS 许可与代运营服务的计费边界未交代 [C5][C7][S3]，无法判断套餐分层与计费单位。 |
| **综合平均** | **1.9 / 5** | **功能蓝图清晰但停留在标签层，平台清单/AI 细节/定价三大关键信息缺失，更像企业官网而非可被自助评估的 SaaS 产品页。** |

---

## 2. 产品概览

### 2.1 基础信息

- **URL**: https://onesight.com/
- **首屏标题 / Slogan**: 营销云 
整合营销 
解决方案 
OneSight学院
关于OneSight 
OneSight数据

简体中文

登录
免费试用
 
 

 

- **评测模板分类**: saas

### 2.2 测点速览

本次审计覆盖 17 个测点，其中 **0 个**来自递归背景信息挖掘（详见 §2.3）。详细列表见 §4。

> ⚠️ **登录态覆盖：用户显式跳过**（`login_skipped_by_user=true`）。
> 检测到的登录入口：?、?、?。
> 本报告仅为**公开页 partial coverage**——dashboard / workspace 内部能力未覆盖。§4.2 🔐 模块为空。

### 2.3 产品 / 公司背景信息（递归发现）

> 本节通过对 help / docs / resources / 跨子域 `help.X.com` 等内容枢纽**递归挖掘**得到，
> 旨在抽出产品方自己写的 "What is X / Getting Started / Overview" 类介绍页内容，
> 还原产品方对自家产品的**官方定义**。

_本次未通过递归挖掘发现产品 / 公司的官方介绍页面。可能产品没有 help / docs / resources 板块，或这些板块下没有显式的 "What is X / Getting Started" 入口。_

_如需扩大递归深度，可改用 `--depth deep` 重跑（最多 15 个背景介绍页）。_

### 2.4 产品战略抽象（X 化 叙事）

> 跨全部测点 + 背景递归的综合分析，由 synthesis-pass LLM 调用从 4-6 个不同角度
> 抽取产品的战略本质，**对齐人工产品分析报告 §2 章节的写法**。

### 1. 出海垂直化 (Overseas-Vertical-ification)
**核心叙事**: 产品并非通用社媒管理工具，而是专为中国品牌出海运营场景定制的垂直 SaaS。
**支撑证据**:
- [C1] 自我定位为"出海整合营销云"，客户证言全部来自出海场景（非洲手机市场、汽车出海、光伏行业）
- [S2] About 段反复强调服务对象是出海中国品牌，主打"global marketing SaaS"
- [C8] 落地内容围绕"覆盖海外社媒"展开，但有意未涵盖国内平台（未提微信/微博/抖音）
**对用户/产品的含义**: 适合中国出海品牌方/MCN/外贸企业，但纯本土运营或纯海外原生品牌不在画像里。

---

### 2. SaaS + 代运营双轨化 (Hybrid Product-Service-ification)
**核心叙事**: OneSight 同时卖软件许可（OneSight Cloud Platform）与人工代运营服务（Advertising & Promotion Services），是产品与服务混合体而非纯 SaaS。
**支撑证据**:
- [C1] 页面同时呈现"营销云（SaaS 工具）"与"整合营销（策略/运营/媒介代运营）"两条业务线，但未划清边界
- [C5] Solutions 菜单中"Advertising & Promotion Services"暴露代运营业务存在，但未说明是平台工具+人工，还是纯外包
- [S3] 三条 Solutions（OneSight Cloud / Advertising & Promotion / Social Media Operations）与六个 Product 模块关系不清，疑似 SaaS + Service 双 SKU
**对用户/产品的含义**: 用户购买决策从"软件订阅"变成"合同谈判"，定价/交付/SLA 因签的是工具还是服务而显著不同。

---

### 3. 闭环工作流化 (Closed-loop Workflow-ification)
**核心叙事**: 产品不是单点工具，而是把社媒运营拆成 6 个串联模块（发布→互动→灵感→监测→聆听→报表），整套替代多个独立工具。
**支撑证据**:
- [S1] 六大模块覆盖出海社媒运营从内容生产→发布→互动→监测→复盘的完整闭环
- [S3] 顶部导航的六大功能清晰呈现"全链路社媒运营平台"心智
- [S6] 模块矩阵完整：社媒运营 + 互动管理 + 内容灵感 + 数据监测 + 社交聆听 + 数据报告
**对用户/产品的含义**: 适合需要"一站式"省心的客户，但对已有 Sprinklr/Hootsuite 局部模块的客户而言切换成本高、且不一定全模块都比专业工具深。

---

### 4. 销售驱动化 (Sales-Led-ification)
**核心叙事**: 产品完全不走 PLG/自助路径，无公开定价、无注册入口、无登录页、无文档中心，所有转化必须经销售触达。
**支撑证据**:
- [C2] Pricing 页面不存在（Link not found）
- [C3][C4] Sign-up / Login 链接均未找到，说明无自助试用通道
- [C7] 完全没有 Help Center / 文档 / API 文档 / FAQ 入口，用户购买前无法自助评估
- [S5] Case studies / Testimonials 页面也未独立成页
**对用户/产品的含义**: 适合企业客户（年合同制、需 RFP），但中小客户/个体运营者很难自主评估并购买，转化漏斗严重依赖销售产能。

---

### 5. AI 标签化 (AI-Labeling-ification)
**核心叙事**: 反复以"AI-powered global marketing SaaS"为核心卖点，但 AI 能力始终停留在营销标签层，从未在功能模块层落地说明。
**支撑证据**:
- [C1] 反复强调"AI+大数据驱动""评论自动化情绪分析""AI 洞察消费者"，但未说明 AI 做什么具体任务（分类/生成/翻译/预测）
- [S1] About 称"AI-powered"，但六大功能模块的描述里没有任何一条说明 AI 在哪个环节起作用
- [S6] "AI-powered" 在此停留在标签层面，未落到具体能力，与 Hootsuite/Sprinklr 的 AI 差异化无法判断
**对用户/产品的含义**: 用户无法在采购阶段评估 AI 的实际深度，"AI" 更像市场话术而非可验证的产品资产，在与原生 AI 竞品对比时容易失去溢价。

---

### 6. 行业泛化化 (Industry-Horizontalization)
**核心叙事**: 自称服务 20+ 行业（科技/媒体/制造/教育/能源/安防……），坚持横向通用路线而非垂直深耕，但通用度可能稀释行业 know-how。
**支撑证据**:
- [S2] 行业覆盖只列名词、零方案映射——20+ 行业但未说明任一行业对应使用哪些模块、解决什么业务问题
- [S2] 前后两份行业清单（technology/media/exhibition/manufacturing vs media/consumer electronics/e-commerce/automobile）不一致，目标行业无权威口径
- [S4] 罗列 20+ 行业但未说明不同行业用 OneSight 解决的具体问题差异
**对用户/产品的含义**: 客户"什么行业都做"反而触发"是否对我这行做得深"的怀疑，垂直行业买家在做 RFP 时缺乏行业级用例叙事可参考。

### 2.5 公司基本信息（web search 自动补充）⭐

> 由 synthesis-pass LLM 调用 **WebSearch 工具**主动搜索 Crunchbase / TechCrunch /
> LinkedIn / 公司新闻稿等外部公开信息，补足审计本身看不到的事实数据（成立时间 /
> 融资轮次 / 团队规模 / 创始人背景 / 近期动态）。每条信息标注来源。

#### ✅ 实体身份已确认

经过域名 + 产品描述 + 创始人 LinkedIn 交叉验证，本次审计对象 `onesight.com` 对应：
**一网互通（北京）科技有限公司**（OneSight Marketing Cloud）。多家中文媒体（36氪、Morketing、白鲸出海、AMZ123、China Daily）的报道同时锚链接到 `onesight.com` 域名与「一网互通」实体；创始人 LinkedIn 页 [「李蕾 - CEO - 一网互通」](https://cn.linkedin.com/in/%E8%95%BE-%E6%9D%8E-6aa18b190) 也明确指向此公司。产品自我定位「全球社交媒体数据营销管理平台」与所有第三方报道一致。

#### 公司基础事实表

| 项 | 内容 | 置信度 | 来源 |
|---|---|---|---|
| 公司全名 | 一网互通（北京）科技有限公司 | ✅ 直接 | [白鲸出海](https://www.baijing.cn/people/103742) / [快出海](https://m.kchuhai.com/company/view-2066.html) |
| 产品品牌名 | OneSight / OneSight 营销云 | ✅ 直接 | [onesight.com](https://www.onesight.com/) |
| 成立年份 | 2017 年 10 月 | ✅ 直接 | [36氪 PitchHub](https://pitchhub.36kr.com/project/2144466774689027) / [Morketing 专访](https://www.morketing.com/detail/12711) |
| 总部地点 | 中国北京 | ✅ 直接 | [Crunchbase](https://www.crunchbase.com/organization/onesight-9bea) / 白鲸出海 |
| 产品上线 | 2018 年初推出 OneSight 内测 | ✅ | [Morketing 二次创业访谈](https://zhuanlan.zhihu.com/p/37208722) |
| 当前阶段 | Series A 已完成（2020 年）；2020 年后未见公开新一轮融资 | ⚠️ 公开报道止于 A 轮 | [China Daily 2020-09](https://qiye.chinadaily.com.cn/a/202009/22/WS5f69b346a3101e7ce9725df4.html) |
| 融资总额 | 约 1 亿元 RMB 量级（三轮均为「数千万元」，未披露精确金额） | ⚠️ 估算 | 各轮报道（见下表） |
| 团队规模 | 未公开 | ❌ | — |
| 行业类别 | 出海营销 SaaS / 社交媒体数据营销 / MarTech | ✅ | [新浪科技](https://finance.sina.com.cn/tech/2022-03-23/doc-imcwipii0050636.shtml) |
| 工商主体 | 一网互通（北京）科技有限公司 | ✅ | [企查查](https://m.qcc.com/product/c3cdce5c-bdd9-4394-b85f-88216d88196b) |

#### 融资历史

| 轮次 | 时间 | 金额 | 领投 + 主要参与方 | 来源指向本域名? |
|---|---|---|---|---|
| 天使轮 | 2018 年 9 月 | 数千万元 RMB（估值过亿） | 厚翼资本（中文来源） / Crunchbase 另列 Plug and Play、Sumitomo、Genilink Capital | ✅ [36氪](https://36kr.com/p/5155038) / ⚠️ 与 [Crunchbase](https://www.crunchbase.com/organization/onesight-9bea) 投资方记载不完全一致 |
| Pre-A 轮 | 2019 年 9 月 | 数千万元 RMB | 未明确披露领投 | ✅ [TopMarketing](https://www.itopmarketing.com/index.php/News/show/id/11787/lmid/197) / [Morketing 专访](https://www.morketing.com/detail/12711) |
| A 轮 | 2020 年 9 月 | 数千万元 RMB | 至临资本 | ✅ [中国日报](https://qiye.chinadaily.com.cn/a/202009/22/WS5f69b346a3101e7ce9725df4.html) / [阿里云创业](https://startup.aliyun.com/info/1027987.html) |

> ⚠️ **2021 年至今未见公开新一轮融资报道**。考虑公司创立已 8 年、仍停留在 A 轮，需关注其现金流与商业自驱能力。

#### 创始人 / 核心团队背景

- **李蕾**（创始人 & CEO）— 中国首批互联网品牌出海创业者。前猎豹移动出海团队成员；首次创业创办出海整合营销公司 **PandaMobo**（年海外营销业绩 5.5 亿元），后将 PandaMobo 业务并入 A 股上市公司 **久其软件** 旗下子公司「久其数字传播」；引入 **Twitter 广告业务进入中国** 的关键推动者。2017 年开启二次创业创立一网互通。2021 年获中国日报「年度创新人物奖」。[LinkedIn 验证 ✅](https://cn.linkedin.com/in/%E8%95%BE-%E6%9D%8E-6aa18b190) / [China Daily 报道 ✅](https://cn.chinadaily.com.cn/a/202111/04/WS61836223a3107be4979f67e2.html)
- **景亚男**（华南区总经理）— 2024 年代表 OneSight 公开演讲《出海加速，如何挖掘数据价值》。[维科网 ⚠️](https://mp.ofweek.com/Internet/a756714131527)（公开露面但未在本域名页面明确背书）

#### 近期重大动态（2024-2026）

- **2024 年**：华南区总经理景亚男公开演讲，主题《出海加速，如何挖掘数据价值，突破企业增长瓶颈》(✅ [维科网](https://mp.ofweek.com/Internet/a756714131527))
- **2024 年 12 月**：发布《2025 全球化营销日历》，主打「AI 制作」标签 (⚠️ [报告汇](https://www.vicsdf.com/doc/7f61407e6155669b))
- **2024-2025**：宣布「AI+」战略，推出 **OneAI 智能系统**，将 AI 能力下沉到内容生成、数据分析等模块 (✅ 多源报道)
- **平台扩张**：四大中心架构成型 — 数据中心 / 内容中心 / 广告中心 / 服务中心，覆盖 Facebook、X(Twitter)、Instagram、YouTube、LinkedIn、VK 等海外主流社媒
- **客户规模**：宣传口径「服务 6 万+ 出海企业」，标杆客户包括阿里、腾讯、百度、小米、华为、科大讯飞、上汽、海尔、芒果 TV、宇视等 (⚠️ 自报数据)

#### 综合判断

OneSight 是一家**典型的中国出海 SaaS「老兵」**：2017 年成立、定位扎实（社交媒体数据 + 营销云）、创始人有出海整合营销的真实战功（PandaMobo + Twitter 中国引入），早期资本支持到位（3 轮共约亿元级），客户名单中头部出海企业齐全。但**两个明显短板**值得审计时重点验证：

1. **资本端停摆**：A 轮后 5 年未见新融资公开披露，无 B 轮、无被并购、无 IPO 传闻 → 公司可能已进入自我造血阶段（健康），也可能融资遇阻（风险），需通过现网产品成熟度、定价、活跃客户口碑侧面验证。
2. **AI 转型尚处早期**：「AI+」战略与 OneAI 系统主要在 2024 年公开亮相，相对今天（2026 年 5 月）的 AI MarTech 竞品（如 HubSpot、Sprout Social、本土的有米/飞书深诺/数说故事）来说，「AI 真正落地深度」是这次产品审计的关键验证点。

报告主体（§2-§4）将围绕「老牌 SaaS 的 AI 升级是否真实可用」这一核心问题展开。

---

## 3. 体验方法论

### 3.1 测试用例矩阵

本次评测使用 **saas** 模板的 **standard** 深度档位，共执行 17 个测试点。

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

输入数据缺失：`=== 营销页 / 介绍页观察 ===` 和 `=== 产品方官方介绍 ===` 两个章节均为空，没有可供分析的原文素材。

无法在没有原始观察数据的情况下生成关键词图谱和叙事手法分析——任何输出都将是凭空捏造，违反 product-audit v1.11 §1.5 的反事实编造原则。

请提供以下任一类素材后重新调用：
- 官网首页 / 产品页 / 定价页的 hero copy、value prop、tagline
- 公司博客 / About 页 / 创始人访谈的关键段落
- 测点截图中提取的官方文案（含测点 ID）
- 至少 5-10 条带出处的原文短句

### 4.2 测点流程详情（按模块聚合）

> 全部测点按 URL 路径**模块化聚合**：AI 能力 / 解决方案 / 商业化 / 集成 等。
> 每个模块下列出该模块覆盖的页面 + 每个测点的 LLM 功能观察。


### 📌 其他（12 个测点）

**该模块覆盖页面**:

- `https://onesight.com//`
- `https://onesight.com/en/`
- `https://onesight.com/this-page-should-not-exist-product-audit-test-1234`

#### C1: Homepage 5-second test

**URL:** https://onesight.com//

![C1](./figs/01-c1-homepage-5-second-test.png)

**观察：**

- P2 功能描述泛化**：七大模块（内容发布、互动管理、社媒监控、消费者洞察、舆情监测、Dashboard、素材灵感）仅有 1-2 句概括，未说明具体支持哪些海外社媒平台（Facebook/Instagram/X/TikTok/YouTube/LinkedIn 等），用户无法判断是否覆盖自己运营的渠道。
- P1 关键集成信息缺失**：作为"出海整合营销云"，页面完全没有列出可对接的平台清单、API/数据源、广告投放系统集成情况，用户读完仍不知道"一键发帖"覆盖哪些平台、"舆情监测"抓取哪些数据源。
- P2 AI 能力语焉不详**：反复强调"AI+大数据驱动"、"评论自动化情绪分析"、"AI 洞察消费者"，但未说明 AI 做什么具体任务（是分类、生成、翻译还是预测？）、是否支持多语言、模型如何与品牌私域数据结合。
- ✅ 场景化客户证言较有力**：四段客户引言分别覆盖智能硬件、非洲手机市场、汽车出海、光伏行业，具体描述了"跨平台运营效率""非洲市场动态监测""搭建海外引流体系"等使用场景，比功能描述本身更能说明产品价值。
- P2 产品边界模糊**：页面同时呈现"营销云（SaaS 工具）"和"整合营销（策略/运营/媒介代运营服务）"两条业务线，但未清晰区分 — 用户不确定 OneSight 是软件工具、代运营服务、还是两者打包，定价和交付方式都无从判断。

#### C5: Footer audit

**URL:** https://onesight.com/en/

![C5](./figs/02-c5-footer-audit.png)

**观察：**

- ✅ Footer 的 Product 菜单作为产品能力清单非常有信息量：6 大功能模块（社媒运营/互动管理/灵感-内容创作/数据监测/社交聆听/数据报告）每条都附带一句话能力描述（如"跨平台多账号发布、定时排程、团队内部审批"），用户可在不进入子页的情况下快速建立产品功能地图。
- P2 Solutions 与 Product 两个菜单存在概念重叠且边界不清："Social Media Operations" 同时出现在 Product 和 Solutions 下，但页面未说明二者区别（功能模块 vs 解决方案打包？托管服务 vs 自助 SaaS？），用户难以判断该点哪个入口、对应的交付形态是什么。
- P1 "Advertising & Promotion Services"（付费社媒项目代运营）作为 Solutions 之一暴露出 OneSight 不只是纯 SaaS，还有人工服务/代运营业务，但 footer 未说明该服务的工作机制（是平台工具 + 人工组合？还是纯代理服务？是否包含投放预算管理、素材生产、效果优化等具体环节），用户无法判断这是产品功能还是外包服务。
- P2 关键集成与覆盖平台信息缺失：所有功能都强调"跨平台"（Cross-platform multi-account posting、Cross-platform Opinion & Sentiment Monitoring），但 footer 完全未列出支持哪些社媒平台（Facebook/X/LinkedIn/TikTok/YouTube/Instagram？是否含国内平台微信/微博？），而平台覆盖范围是出海 SaaS 的核心选型依据。
- P2 "Interaction Management — Reply to private messages and comments" 和 "Social Listening — Keywords and Platform Trend Insights" 描述停留在功能名词层级，未说明工作机制：是否有 AI 自动回复/情感分类？关键词监测的实时性、数据源、告警机制如何？用户读完只知道"有这个模块"，无法判断深度。

#### C7: Help / Documentation

**URL:** https://onesight.com/en/

![C7](./figs/03-c7-help-documentation.png)

**观察：**

- P1** 页面未提供任何 Help Center / 文档中心 / 知识库入口 — 抓取的文本只包含导航菜单（Product / Solutions / About）和公司介绍，没有"帮助文档""使用教程""API 文档""FAQ"等链接，用户在购买前无法自助了解产品的具体操作流程和功能边界。
- P1** 功能描述停留在极度抽象的标签层（"Cross-platform multi-account posting""Real-Time Monitoring""Sentiment Monitoring"），未说明**支持哪些社媒平台**（Facebook / X / TikTok / LinkedIn / YouTube / Instagram 是否全覆盖？是否支持中国平台？）、**单账号上限**、**审批流层级**、**社媒舆情监测的语种和地区范围**等关键功能参数 — 这些恰恰是 SaaS 选型阶段最需要的信息。
- P2** "Interaction Management（回复私信和评论）"和"Data Report（跨平台数据整合）"两个能力只有一句话标语，未说明**输入输出形态**（是否提供统一收件箱？是否支持 AI 草拟回复？报告是定时推送还是自助生成？导出格式？）— 用户读完无法判断这些模块与竞品（Hootsuite / Sprout Social / Meltwater）的差异点。
- P2** "AI-powered global marketing SaaS"是核心卖点之一，但页面未说明 **AI 具体用在哪里**（是用于内容生成？情感分类？热点推荐？广告投放优化？）、**模型/能力来源**，也没有任何 demo 或案例说明 AI 工作流 — 关键差异化能力信息缺失。
- P3** "Advertising & Promotion Services（付费社媒代运营）"与自助 SaaS 产品 OneSight Cloud Platform 并列出现，但未说明二者**关系与边界**（代运营是否使用同一平台？是 SaaS + Service 双轨还是仅服务？）— 用户难以判断自己应该购买软件许可还是服务合同。

#### C8: 404 error handling

**URL:** https://onesight.com/this-page-should-not-exist-product-audit-test-1234

![C8](./figs/04-c8-404-error-handling.png)

**观察：**

- P1 404 处理机制不透明**：访问不存在的 URL 时页面直接返回首页内容而非显式 404 提示，用户无法判断自己是点错了链接还是被刻意重定向；对于点击失效外链（如旧版报告、过期客户案例 URL）的访问者，缺乏"页面不存在 + 建议跳转路径"的功能性引导，可能导致用户错误以为内容已下线而非链接错误。
- P2 错误页未承担产品引导功能**：很多 SaaS 在 404 页会嵌入站内搜索、热门功能入口（如"试用 Dashboard""查看产品指南"）来挽回流量，OneSight 当前直接返回首页，等同于把找不到目标的用户重新扔回营销漏斗顶端，没有体现"用户想找的是某个具体功能/案例/文档"这一意图，缺失"帮助中心搜索""最近浏览页面"等弥补型功能。
- P2 落地内容暴露的产品能力清单清晰但缺机制说明**：页面列出 7 个核心能力（内容发布、互动管理、社媒监控、消费者洞察、舆情监测、Dashboard、素材灵感），覆盖了出海社媒运营的关键工作流，但未说明每个模块支持哪些平台（Facebook/X/Instagram/TikTok/YouTube？是否覆盖 LinkedIn、Threads？），用户读完无法判断自己运营的平台是否被支持。
- P2 AI 能力描述模糊**：多处提到"AI+大数据""AI 自动化情绪分析""AI 洞察消费者需求"，但未说明 AI 处理的是中文还是多语种舆情、情绪分析支持哪些语言、洞察输出形式（报告/标签/热词云？）、是否可导出，用户难以评估 AI 能力的实际深度。
- P1 功能信息缺口：缺少集成与数据接入说明**：作为整合营销云，未提及是否支持与 CRM、广告投放平台（Meta Ads/Google Ads/TikTok Ads）、企业 BI 工具的数据打通，也没有 API 或 Webhook 信息；对企业级买家而言，"数据到数据"承诺缺乏可验证的对接细节。

#### S1: Features / Product page

**URL:** https://onesight.com/en/

![S1](./figs/05-s1-features-product-page.png)

**观察：**

- ✅ 页面用六个功能模块清晰勾勒出"出海社媒管理一站式平台"的能力边界：发布调度（Social Media Operations）+ 互动管理（Interaction Management）+ 内容灵感（Inspiration）+ 数据监测（Data Monitoring）+ 舆情监听（Social Listening）+ 跨平台数据报表（Data Report），覆盖了出海社媒运营从内容生产→发布→互动→监测→复盘的完整闭环。
- P1 关键功能缺口：未列出支持的社媒平台清单**。产品定位是"跨平台 / cross-platform"，但全页未明确说明覆盖哪些海外社媒（Facebook / X / Instagram / TikTok / LinkedIn / YouTube 等是否全部支持？是否含 Telegram / Threads / 小红书国际版？）。对于出海客户这是最核心的选型问题，缺失会直接影响转化判断。
- P1 "AI-powered" 宣称缺乏功能落地**。About 区域称自己是"AI-powered global marketing SaaS"，但六大功能模块的描述里没有任何一条说明 AI 在哪个环节起作用（是 AI 生成内容？AI 翻译多语种？AI 情绪分析？AI 智能回复？AI 选题推荐？），用户无法判断它与传统社媒管理工具（Hootsuite / Sprinklr）的 AI 差异化。
- P2 功能描述停留在名词级，缺少输入/输出/工作机制**。例如 "Team internal approval" 没说明审批层级 / 审批角色 / 是否支持移动端审批；"Competitor Monitoring" 没说明可监控的指标维度、采样频率、可监控的竞品账号数量；"Social Listening" 没说关键词数量上限、历史数据回溯窗口、语种支持范围——这些是 enterprise 客户做 RFP 时必须的功能颗粒度。
- P2 Product（功能视图）与 Solutions（方案视图）切分逻辑不清**。Solutions 下的 "Social Media Operations" 与 Product 下的 "Social Media Operations" 同名，但页面没说明二者关系——是产品模块 vs 配套服务（人力代运营）？还是 SaaS 版 vs 托管版？这会让客户混淆"我买的是工具还是服务"。

#### S2: Use cases / Industry

**URL:** https://onesight.com/en/

![S2](./figs/06-s2-use-cases-industry.png)

**观察：**

- P1 行业覆盖只列名词、零方案映射**：页面声称"覆盖 20+ 行业（科技、媒体、展会、制造、教育、安防、能源等）"，但**未说明任何一个行业对应使用哪些产品模块、解决什么业务问题**——例如制造业是用 social listening 做品牌舆情、还是用多账号矩阵做经销商管理？教育行业是招生获客还是品牌出海？读者无法把"行业"翻译成"我的用例"。
- P1 前后两份行业清单不一致，暴露信息治理问题**：上半页 "Our Customers" 写的是 *technology / media / exhibition / manufacturing / education / security / energy*；下半页 About 段又改成 *media / consumer electronics / e-commerce / automobile / new energy / industrial manufacturing*。两份列表交集很小，**目标行业到底是哪些**没有权威口径，企业采购方读到会产生信任折扣。
- P2 缺少行业级用例叙事 (use case storytelling)**：页面有 6 个产品模块（多账号发布 / 互动管理 / 内容灵感 / 数据监测 / Social Listening / 数据报告），但**没有把这些模块串成一个具体行业的工作流**——典型 SaaS 至少会写"汽车品牌出海如何用 OneSight 在 Facebook + X + LinkedIn 同时投放并监测竞品声量"，这里只有模块定义，没有"链路演示"。
- P2 "出海案例" 入口存在但内容未在 Use cases 页面体现**：底部出现 *出海案例* 标签，说明站内应有客户故事库，但 Solutions / Our Customers 区块**未嵌入任何具名客户、行业 KPI、ROI 数字**（如"帮助 X 品牌在东南亚 3 个月粉丝增长 200%"）。功能能力是否真实兑现缺乏第三方证据。
- P3 "20+ 行业" 是规模主张而非能力主张**：宣称服务超 20 个行业更像销售话术，没有解释**OneSight 的功能为何能跨这么多行业通用**（是因为社媒平台抽象层一致？还是因为有行业模板？）。对垂直行业买家来说，"什么都做"反而会让人怀疑"是否对我这行做得深"。

#### S3: Integrations page

**URL:** https://onesight.com/en/

![S3](./figs/07-s3-integrations-page.png)

**观察：**

- P1 页面命名为"Integrations page"（S3）但实际内容并非集成清单 — 完全没有列出 OneSight 与哪些社媒平台（Facebook/X/Instagram/TikTok/LinkedIn/YouTube 等）、广告平台、CRM、BI 工具的对接关系，用户无法判断"我的目标平台是否被覆盖"，这是社媒管理 SaaS 最关键的功能信息缺口
- P1 产品定位为"global social media management platform"，但页面未明确支持的具体平台名称、API 对接深度（发布 / 评论 / 私信 / 数据回流分别支持到什么粒度）、是否覆盖中国境内平台（微信/微博/抖音）— 出海 SaaS 的核心能力边界未交代
- ✅ 通过顶部导航的六大功能模块（Social Media Operations / Interaction Management / Inspiration / Data Monitoring / Social Listening / Data Report）清晰呈现了产品工作流闭环：发布排程 → 互动回复 → 内容灵感 → 竞品监测 → 舆情听写 → 数据报表，用户能快速建立"全链路社媒运营平台"的心智
- P2 "Interaction Management — Reply to private messages and comments" 和 "Social Listening — Cross-platform Opinion & Sentiment Monitoring" 均未说明是否使用 AI / NLP 进行自动回复、情感分类、关键词聚类，AI 能力（产品自称 AI-powered）在功能描述中完全缺席
- P2 三条 Solutions（OneSight Cloud / Advertising & Promotion / Social Media Operations）与六个 Product 模块之间的关系不清晰 — 是同一产品的不同包装，还是独立 SKU？功能上有何差异？企业客户在选型时无法对应到自己的需求

#### S4: Customer / logo wall

**URL:** https://onesight.com/en/

![S4](./figs/08-s4-customer-logo-wall.png)

**观察：**

- P1** 客户 logo 墙缺失实质内容：页面仅以一句话"covers over 20 industries including technology, media, exhibition, manufacturing, education, security, energy, etc."概括客户覆盖范围，没有列出任何具体客户名称、品牌 logo 或行业代表案例，用户无法验证产品在哪些规模 / 类型的企业真实落地。
- P1** 行业列表与功能映射断裂：罗列了 20+ 个行业（科技、媒体、会展、制造、教育、安防、能源……），但未说明不同行业用 OneSight 解决的具体问题差异（例如制造业用社媒监测做什么、能源行业的合规场景是什么），客户读完无法判断"我的行业是否有对口方案"。
- P2** 缺少社会证明的关键功能证据：典型的客户 logo 墙应承担"该产品在头部品牌跑通"的信任锚作用，而本页未提供任何客户故事、ROI 数据、使用规模（如管理账号数、监测帖子量），无法验证"global marketing SaaS"与"market leaders"等自述。
- P2** "出海案例"入口存在但页面未展开：底部出现"出海 / 案例"这类提示词，暗示存在案例库，但本页没有把核心案例摘要 / 客户 logo / 使用功能模块前置，用户必须额外点击才能获取功能落地证据，信息漏斗过深。
- P3** 客户分层与功能套餐对应关系未交代：未说明所列客户分别使用了哪些产品模块（多账号管理 / 社交聆听 / 广告投放 / 数据报告），缺乏"功能 × 客户类型"矩阵，潜在买家难以将自身需求映射到合适的能力组合。

#### S6: Blog / Resources

**URL:** https://onesight.com/en/

![S6](./figs/09-s6-blog-resources.png)

**观察：**

- P2 该页面标题为 "Blog / Resources"，但抓取到的文本中**完全没有任何博客文章、白皮书、案例研究、行业报告等资源内容**，只有导航菜单和公司简介——产品在"内容资产 / 知识库 / 客户教育"维度的能力无法判断，对 B2B SaaS 而言这是重要的功能信号缺口。
- ✅ 通过顶部导航能清晰拼出 OneSight 的**六大功能模块矩阵**：社媒运营（跨平台多账号发布、排期、团队审批）、互动管理（私信/评论回复）、内容灵感（热门帖子/话题追踪+一键收藏）、数据监测（竞品+实时+行业分析）、社交聆听（跨平台舆情+情感监测+关键词趋势）、数据报告（跨平台数据整合+账号对比）——产品的"做什么"是清楚的。
- P1 **核心功能细节几乎全部缺失**：跨平台覆盖哪些平台（Facebook/X/TikTok/微信/抖音？）、支持账号数量上限、审批工作流的层级机制、社交聆听的语言/地域覆盖、数据报告的导出格式与 API 能力——这些是企业采购决策的关键输入，但页面只给了一句话的功能名词。
- P2 自称 "AI-powered global marketing SaaS"，但**没有任何一处说明 AI 具体做什么**——是 AI 生成内容？AI 情感分析？AI 翻译？AI 推荐发布时间？"AI-powered" 在此停留在标签层面，未落到具体能力。
- P2 解决方案区分了三条线（OneSight Cloud Platform / Advertising & Promotion Services / Social Media Operations），但**"平台"与"运营服务"的边界不清晰**——后两者是托管式代运营服务还是软件功能模块？典型场景"出海企业管理 20+ 海外社媒账号"虽可推断，但**输入（账号接入方式）→ 工作机制（统一发布/审批/监测）→ 输出（报表/告警）的端到端工作流**未在本页串联展示。

#### S7: About / Company

**URL:** https://onesight.com/en/

![S7](./figs/10-s7-about-company.png)

**观察：**

- ✅ **P1 公司定位与产品矩阵清晰**：明确说明 OneSight 是 2017 年成立的 AI 驱动全球营销 SaaS，主打"全球社交媒体管理平台"，提供多账号管理、团队协作、社交聆听、互动管理四大核心能力，用户能快速理解"出海企业的社媒中台"这一定位。
- ✅ **功能模块划分明确**：导航中暴露了 6 大产品功能（社媒运营、互动管理、内容创作灵感、数据监测、社交聆听、数据报告）+ 3 类解决方案（云平台、广告投放服务、社媒代运营），覆盖"发布 → 互动 → 监测 → 分析 → 服务代运营"完整工作流。
- P1 缺少"覆盖哪些社交平台"的关键信息**：作为出海社媒管理工具，About 页未列出支持的具体平台清单（Facebook / Instagram / X / TikTok / LinkedIn / YouTube 等），这是用户决策的第一关键信息，仅靠"major social media platforms across the globe"过于模糊。
- P1 AI 能力黑盒**：自称 "AI-powered" 但未说明 AI 具体应用在哪些环节（内容生成？情感分析？智能回复？竞品洞察？）、模型机制、与人工运营的协作方式，无法判断 AI 的实质价值。
- P2 SaaS 产品 vs 代运营服务边界模糊**："Advertising & Promotion Services" 和 "Social Media Operations Services" 属于人工代运营，而 OneSight Cloud 是软件平台，但页面未区分订阅 SaaS 与外包服务的关系，用户难以判断自己该买软件还是买服务。

#### S12: Trust / Security page

**URL:** https://onesight.com/en/

![S12](./figs/11-s12-trust-security-page.png)

**观察：**

- P1 严重 — 页面缺失实质性 Trust/Security 信息**: 测点定位为 Trust/Security page，但抓取到的页面文本完全没有任何安全/合规/信任相关内容（无 SOC 2、ISO 27001、GDPR、数据加密、访问控制、SLA、数据驻留、隐私政策摘要等任何安全能力披露），仅展示了产品导航和公司简介。对于面向企业客户（B2B SaaS）的全球社媒管理平台而言，这是严重的功能信息缺失——企业采购方无法判断该平台是否满足其合规要求。
- P1 严重 — 多账号/多平台管理的安全机制完全未说明**: 产品核心能力是"multi-account management"和"team internal collaboration"，但页面未披露任何与此强相关的安全功能细节：账号凭证如何存储？是否支持 SSO / SAML？团队成员权限分级（RBAC）如何实现？审批流的审计日志能力？这些都是企业级社媒管理工具的关键功能，但用户读完无法获知。
- P2 中等 — 数据处理与跨境合规信息缺失**: 产品定位"global marketing SaaS"、覆盖"major social media platforms across the globe"并提供"Social Listening""Data Monitoring"等数据抓取/分析功能，但页面没有说明数据存储位置、是否区分中国大陆与海外区域部署、对 GDPR / CCPA / 个人信息保护法的支持情况。对于跨境营销场景这是关键功能性信息。
- P2 中等 — AI 能力的数据使用边界未披露**: 公司自我定位为"AI-powered global marketing SaaS"，但未说明 AI 在 Trust 维度的具体机制：客户数据是否用于训练模型？AI 生成内容（Content Creation / Inspiration 模块）的数据隔离方式？第三方平台（如 OpenAI）调用链路是否存在？这是 AI SaaS 必须澄清的功能边界。
- P3 轻微 — 集成第三方平台的授权方式未说明**: 产品支持"Cross-platform multi-account posting"和私信/评论回复，必然依赖各社媒平台的 OAuth 授权或 API 集成，但页面未列出支持的平台清单、授权范围、token 刷新机制等功能性细节，企业用户无法评估接入复杂度与潜在风险。

#### S14: Customer support channels

**URL:** https://onesight.com/en/

![S14](./figs/12-s14-customer-support-channels.png)

**观察：**

- P1 客户支持渠道严重缺失** — 整个页面仅在角落出现"微信 咨询"二维码作为唯一可见的售后/咨询入口，未提供电话、邮箱、在线客服、工单系统、Help Center 链接中的任何一项，企业客户无法判断购买后能通过什么渠道获得技术支持。
- P1 售前 vs 售后渠道未区分** — "Request a Free Trial"和"Request a demo"按钮重复出现 5 次以上，但这些是销售线索入口，并非客户支持渠道；现有客户遇到问题时找不到独立的 Support 入口（无 Contact Support / Help / Status 导航项）。
- P2 SLA 与响应时效完全无说明** — 作为面向企业客户的 SaaS（覆盖 20+ 行业、服务媒体/汽车/新能源等大客户），页面未披露任何支持等级（7×24？工作日？）、响应时间承诺、专属客户成功经理等关键 B2B 采购决策信息。
- P2 区域化支持能力不明** — 产品定位是"global marketing SaaS"、服务出海客户，但仅有"微信咨询"这一中国本地化渠道，海外客户使用何种语言、何种时区获得支持完全未提及，与"global"定位存在功能信息落差。
- P3 自助服务资源缺位** — 未看到知识库、API 文档、视频教程、社区论坛等自助式支持资源入口；对于"多账号管理 + 社交聆听 + 数据看板"这种功能颗粒度的产品，用户读完无法预期能否通过文档自行解决常见操作问题。


### ⚠️ 未找到的测点（5 个测点）

**该模块覆盖页面**:

- `https://onesight.com/en/`

#### C2: Pricing page

**URL:** https://onesight.com/en/
**观察：**

- [Link not found] 该模板期望的链接（pricing|定价|價格）在 https://onesight.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### C3: Sign-up flow (no submit)

**URL:** https://onesight.com/en/
**观察：**

- [Link not found] 该模板期望的链接（sign up|signup|get started|start free|注册|免费试用|开始）在 https://onesight.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### C4: Login page

**URL:** https://onesight.com/en/
**观察：**

- [Link not found] 该模板期望的链接（log in|login|sign in|登录|登入）在 https://onesight.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### S5: Case studies / Testimonials

**URL:** https://onesight.com/en/
**观察：**

- [Link not found] 该模板期望的链接（case stud|testimonials|stories|案例|客户故事）在 https://onesight.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。

#### S9: API / Developer docs

**URL:** https://onesight.com/en/
**观察：**

- [Link not found] 该模板期望的链接（api|developer|docs.|开发者）在 https://onesight.com/ 上未找到 — 可能产品用了不同的措辞或这个功能不存在。 已跳过截图与 LLM 解读以避免重复首页快照。


---

## 5. 第三方社区反馈（非官方）⭐

#### ⚠️ 未找到显著社区讨论

WebSearch 在 Reddit / Product Hunt / Hacker News / G2 等平台未找到 `onesight.com` 的显著用户讨论。本节为 null finding — 不代表产品质量好或差。

---

## 6. 总结

### 6.1 一句话评价

目标产品 **https://onesight.com/** 在 **saas** 模板的 **standard** 档位评测下存在严重问题：识别问题 54 个（P1 22 / P2 27 / P3 5），正面发现 6 个。详见 §4 体验流程详情。

### 6.2 最大优点 Top 3

1. **[C1]** ✅ 场景化客户证言较有力**：四段客户引言分别覆盖智能硬件、非洲手机市场、汽车出海、光伏行业，具体描述了"跨平台运营效率""非洲市场动态监测""搭建海外引流体系"等使用场景，比功能描述本身更能说明产品价值。
2. **[C5]** ✅ Footer 的 Product 菜单作为产品能力清单非常有信息量：6 大功能模块（社媒运营/互动管理/灵感-内容创作/数据监测/社交聆听/数据报告）每条都附带一句话能力描述（如"跨平台多账号发布、定时排程、团队内部审批"），用户可在不进入子页的情况下快速建立产品功能地图。
3. **[S1]** ✅ 页面用六个功能模块清晰勾勒出"出海社媒管理一站式平台"的能力边界：发布调度（Social Media Operations）+ 互动管理（Interaction Management）+ 内容灵感（Inspiration）+ 数据监测（Data Monitoring）+ 舆情监听（Social Listening）+ 跨平台数据报表（Data Report），覆盖了出海社媒运营从内容生产→发布→互动→监测→复盘的完整闭环。

### 6.3 最大风险 Top 3

1. **[C1]** P1 关键集成信息缺失**：作为"出海整合营销云"，页面完全没有列出可对接的平台清单、API/数据源、广告投放系统集成情况，用户读完仍不知道"一键发帖"覆盖哪些平台、"舆情监测"抓取哪些数据源。
2. **[C5]** P1 "Advertising & Promotion Services"（付费社媒项目代运营）作为 Solutions 之一暴露出 OneSight 不只是纯 SaaS，还有人工服务/代运营业务，但 footer 未说明该服务的工作机制（是平台工具 + 人工组合？还是纯代理服务？是否包含投放预算管理、素材生产、效果优化等具体环节），用户无法判断这是产品功能还是外包服务。
3. **[C7]** P1** 页面未提供任何 Help Center / 文档中心 / 知识库入口 — 抓取的文本只包含导航菜单（Product / Solutions / About）和公司介绍，没有"帮助文档""使用教程""API 文档""FAQ"等链接，用户在购买前无法自助了解产品的具体操作流程和功能边界。

### 6.4 用户增长漏斗推断（官网作用域）⭐

> 基于 pricing / signup / demo / 背景介绍页的观察，**推断**产品的官网层增长漏斗、
> 评估分叉、价格心智锚点、可见的 Aha 承诺等。**作用域：到访客转化为注册/试用用户为止**。
> v1.9：不再分析团队扩散、登录后留存等需要 dashboard 数据的环节。

目录里只有 product-audit skill 的脚本（`audit.py` / `generate_report.py` 等），没有任何已采集的产品观察数据。

---

## 缺失输入

你的 prompt 模板里这一段是**空的**：

```
=== Pricing / Signup / Demo / Background 观察（仅官网） ===
[这里应该有 pricing 页 / signup 页 / demo 表单 / 背景介绍页 的观察数据]
```

我无法**仅凭一个空的观察块**就推断出某个产品的增长漏斗——没有页面陈述、没有测点ID、没有套餐结构、没有 CTA 文案。任何输出都会是凭空捏造，违反这个模板自己写的"明确标注哪些是页面直接陈述、哪些是你的推断"的核心要求。

---

## 我需要你提供以下任一种输入才能继续

**选项 A：粘贴观察数据**
把 pricing / signup / demo / 背景页的关键观察直接贴进来（包括测点ID 命名约定，例如 `P1`、`P2`... 或你自己用的编号系统）。

**选项 B：指向一份已生成的 audit 报告**
如果你已经用 `audit.py` 跑过某个产品，告诉我 workspace 路径（含 `report.md` / `audit-meta.json` / `raw/` 的那个目录），我会读取里面的非登录态观察作为输入。

**选项 C：指定一个产品 URL**
如果你希望我**现场**采集该产品的官网公开页面再做推断——告诉我产品域名，并明确授权使用 WebFetch / 网页抓取。这种情况下输出里的"页面陈述"会用我抓到的原文，而不是测点ID。

---

请告诉我用哪种方式继续，以及对应的输入内容。

---

*生成时间: 2026-05-21T21:39:49.706282*

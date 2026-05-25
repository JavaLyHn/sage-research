# Octok 产品意见 — 深度体验后的真实判断

> 这不是 bug 清单，是产品策略层的判断。所有意见都附解决方案。
> 体验对象：https://www.octok.com/ ｜ 输出日期：2026-05-25

---

## 总判断：一句话

> **Octok 当下不是"产品不够好"，是"承诺定位没想清楚"——它在 copilot 与 autopilot 之间走钢丝，
> 用 6 个具名 AI 员工的叙事把营销做到 9 分，但产品深度只到 3 分，定价、垂直度、商业化都还是
> 含混词。需要的不是再加功能，是**砍掉一半承诺**把另一半做透。**

---

## 1. 「You make the decisions. They execute」这句口号是产品最致命的一句

**真实判断**：
这句话是 Octok 整个差异化的支点——它说 AI agent 不是"帮你写"（copilot），是"替你干"（autopilot）。
但放到「出海」这个场景里，「execute」99% 的动作必须有人类签字、KYC、本地律师参与：
- Ethan 做 K-BDS compliance review → 真要提交到韩国监管部门吗？需要本地律所盖章
- Daniel 做开户报税 → 没有 KYC 任何 AI 都开不了银行账户
- William 做本地化 → 翻译能 AI 干，品牌定调最后还是要人拍板

用户被「Hire Navigator」、「They execute」养大的胃口，最后拿到一份**漂亮的 PDF 报告**，
心理落差不是产品功能问题，是**期望管理失败**。这个落差比任何 bug 都更伤复购。

**解决方案**：
- 短期（1 个月内）：把 slogan 改成 **"They prepare. You decide. We deliver together."**——
  把"execute"降级为"prepare"，把人类 / 本地服务商显式纳入交付链路。
- 中期（3-6 个月）：把产品分两层：
  - **Research Layer（autopilot 真的能做）** — 市场地图、竞品分析、合规清单、本地化策略
  - **Execution Layer（human-in-the-loop）** — 真的提交注册、真的对接服务商，明确人类介入节点
- 长期（12 个月+）：选 1-2 个 narrow wedge 把 execution 做成真正的端到端（如新加坡 EOR 注册全流程
  从 KYC → 注册 → 报税都打通，配合本地律所伙伴）。**只在这 1-2 个 wedge 上敢说 "they execute"。**

---

## 2. 6 个具名 AI 员工是 brand asset，但也是 brand liability

**真实判断**：
Navigator / Alice / Sophia / William / Daniel / Ethan 是 Octok 最大的营销资产——它把"AI 工具"翻译成
"AI 同事"，**心智门槛降到 0**。这是绝活，要保留。

但有三个隐形成本：
1. **失败的心理放大**：Ethan 的合规审查出错，用户感觉"被 Ethan 坑了"，远比"工具出 bug"更伤产品
2. **协作幻觉**：真实员工之间有 social context、tribal knowledge、能讨论灰色地带；6 个 AI agent
   只是 6 次独立调用，**协作是被 Navigator 单线程编排出来的假象**——用户期待团队默契，拿到的是 RPC
3. **扩展僵硬**：6 个员工像 6 个固定 slot，第 7 个、第 8 个职能怎么加？加 agent 还是扩 Alice 的能力？
   品牌叙事会和产品需求打架

**解决方案**：
- **保留**：拟人化命名 + 头像 + 职能 ←这是 Octok 的护城河
- **新增"职业履历"页**：每个 agent 一个页面，写清楚（a）能做什么（b）**不能做什么** ←这一项关键
  （c）训练数据源（d）SLA / 准确度承诺。把"AI 拟人化"升级为"AI 职业化"
- **新增"团队 vs 单点"对比说明**：明确告诉用户 6 个 agent 的协作是 Navigator 编排出来的，不是
  agent 之间自发交流——这降低预期、提升信任
- **未来扩 agent 的命名规则提前定**：不要 ad hoc 加，比如"按办公室位置分"（北美办公室 / 亚太办公室）
  或"按职能层级分"（Director / Specialist / Associate）——为以后 30+ agent 留扩展空间

---

## 3. "Global Expansion" 是 vision 不是 wedge — 产品垂直度其实是横向需求集合

**真实判断**：
官方说 Octok 是 "Vertical AI Workforce for Global Expansion"——但"出海"其实是**伪垂直**：
- 跨境电商出海日本 vs SaaS 出海欧盟 vs 硬件出海中东——**完全不同的工作流、监管、客户**
- 第一次出海 vs 已有 3 个市场扩第 4 个——**完全不同的产品需求**
- B2B vs B2C，月费 $100 vs ACV $50K——**完全不同的销售周期与触达方式**

Octok 现在的 6 个 agent 矩阵长得像"通用咨询公司的 6 个职能"——覆盖度看起来 100%，**每一项做的都是
顾问稿件级别**，没有任何一项做到端到端可执行。这是**广而浅 trap**——投资人爱听，用户不付费。

**解决方案**：
- **选一个 narrow wedge 做透 12 个月**，候选：
  1. **中国 SaaS → 日本市场**（监管温和、本地化壁垒高、付费意愿强、案例容易复制）
  2. **跨境电商 → 欧盟 VAT 注册 + EPR 合规**（高度结构化、可全 autopilot、单价高）
  3. **AI startup → 新加坡 + 中东扩张**（早期阶段、决策者懂 AI、付费速度快）
- 选定后，**官网把"global expansion" 改成 wedge 化**："Help Chinese SaaS founders launch in Japan
  in 30 days" —— 仍然保留 6 个 agent，但每个 agent 的能力收敛到这个 wedge
- "Global Expansion Platform" 作为 vision 留在 about 页 / docs，不在首屏

---

## 4. 把所有信息关在登录墙后，是早期产品的 self-sabotage

**真实判断**：
当前 octok.com 上 pricing / use cases / integrations / customers / case studies / about / API / blog
**7 个常规 SaaS 页面全部缺失**，404 重定向到 login。这是一个非常奇怪的早期产品策略选择——

类比一下：
- **Linear / Cursor / Vercel** 都在早期就开放 docs、pricing、changelog——他们用透明换信任
- **Notion / Figma** 早期甚至开放 templates 给完全未注册用户——这是 SEO + WOM 的核心动力
- **只有 Palantir 这种已经有 enterprise 客户、不在乎 SMB 流量的公司**才敢做全私域

Octok 现在的状态是 **founder 不想把"还没做完"的功能展示给世界看**——但市场的耐心比 founder 想的
更宽容，**"诚实地展示在做什么"** 比"藏起来等做完"更能赢得早期用户。

**解决方案**（按优先级排，每项都是 2-7 天工作量）：
- **本周内**：上线 pricing 页 — 哪怕只写 "Starting from $X/market, contact for details"
- **2 周内**：写 3 篇 hypothetical case study — "How a Chinese SaaS launched in Japan with Octok"
  即使虚构也要写，注明 "Scenario based on real customer workflows"
- **3 周内**：开放 docs/agents 页 — 每个 agent 一页，列能力、不能做什么、示例输出
- **1 个月内**：blog 至少 5 篇 — founder essay + 2 篇行业洞察 + 2 篇产品 deep dive
- 同时保留：dashboard / workspace 内部体验在登录后，没问题

---

## 5. 「Free Expansion Plan + Hire Navigator」反映商业模式没想清楚

**真实判断**：
- 头部 CTA 是 "Free Expansion Plan"（免费拿一份 plan，lead magnet 路数）
- Agent 卡片 CTA 是 "Hire Navigator"（雇佣单个 agent，暗示 per-seat 定价）

这两个 CTA 暴露了一个更深的问题：**Octok 自己也没想清楚怎么收费**——
- 按 agent 收费？但 Alice 的工作量和 Ethan 完全不同
- 按月费？但访问 6 个 agent 的人 vs 只用 2 个的人 ARPU 差 3 倍
- 按任务收费？但"一份 K-BDS report" 和 "一篇韩国市场分析" 不是同 unit

**用户买的不应该是 agent，是 outcome。** Per-agent 模式从第一天就会有 unit economics 问题。

**解决方案**：
重新设计三层定价，按 **outcome × market** 打包：

| 层 | 名称 | 价位 | 包含 | 适合 |
|---|---|---|---|---|
| 1 | **Research Pass** | $299 / market / 月 | 6 agents 的 research-grade 输出（market analysis / compliance checklist / localization strategy / financial model） | 探索阶段 |
| 2 | **Launch Pass** | $1,500 / market / 月 | Research + 本地服务商对接（EOR / 律所 / 银行）+ human review | 准备落地 |
| 3 | **Operate Pass** | Custom | Launch + 持续运营 + 多市场协同 + dedicated CSM | 已落地拓展 |

每个 market（日本 / 韩国 / 美国 / 欧盟…）单独计费——**让访客一眼算出"我要扩 2 个市场就是 $598/月"**。
这比"先免费 plan 然后不知道要花多少钱"清晰 100 倍。

---

## 6. 试用漏斗（onboarding/URL → free plan）的 4 个具体改造点

**真实判断**：
当前漏斗是「输入 URL → 黑盒等待 → ??」。Aha 完全押在后端 LLM 第一次输出的质量上，**任何抖动都直接
转化为流失**。3 个具体问题：
1. 用户输入 URL 时没有 sample preview——不知道接下来会拿到什么样的 plan
2. 不知道还需要回答几个问题（如果是多轮，半路退出率会很高）
3. 拿到 plan 后没有明确升级路径——下一步该干啥？

**解决方案**：
- **改造 1（最关键）**：URL 输入前增加 sample report 滚动展示——3 张截图轮播 "Korea Market Report
  样例 / Japan Compliance Checklist 样例 / SEA Localization Strategy 样例"，让访客看到产出形态
- **改造 2**：URL 输入后明示流程长度——
  "Step 1/3：URL → Step 2/3：目标市场 → Step 3/3：行业 → 90 秒内生成 Plan"
- **改造 3**：plan 生成时显示进度——"Alice 正在分析竞品... Ethan 正在校验合规..."
  ← 把 6 个 agent 的 brand visibility 也带到等待时段
- **改造 4**：plan 末尾固定 3 个 CTA：
  - 📩 Download as PDF（拿走也行）
  - 🚀 Continue to Execution（升级 Launch Pass，明确什么解锁）
  - 💬 Talk to founder（人工 sales path，B2B 高价值客户专用）

---

## 7. 公司透明度 — 现在 0 个外部数据点能背书 Octok

**真实判断**：
report 里 §2.5 写得很明确——Crunchbase 0 / LinkedIn 0 / TechCrunch 0 / Product Hunt 0 / Hacker News 0。
对于一个早期 B2B 产品，**这是除了产品力之外的第二大流失原因**。访客评估时会做这件事：
1. 搜公司 → 搜不到
2. 搜创始人 → 搜不到
3. 搜融资 → 没有
4. 搜员工 → 没有 LinkedIn 公司页
5. 退出

**解决方案**（顺序很重要）：
- **第 1 步**：本周内创建 LinkedIn 公司页 + 把 founder 的个人 LinkedIn 加 "Founder @ Octok"
- **第 2 步**：本月内提交 Product Hunt launch（哪怕没融资，PH launch 是 ~free 的 credibility 来源）
- **第 3 步**：founder 写一篇 essay 发自己博客 / Substack — 「为什么我们建一个 Vertical AI Workforce」
  发到 Hacker News + Indie Hackers + Reddit r/SaaS
- **第 4 步**：申请几个 AI startup 榜单（如 Y Combinator 校友、AI Grant、a16z Speedrun…）即使
  不入选，申请过程本身会留下网络足迹

---

## 优先级排序（如果只能做 3 件事）

| 优先级 | 任务 | 周期 | 影响 |
|---|---|---|---|
| 🥇 P0 | 上线 pricing 页 + 三层 outcome-based 定价 | 本周 | 立刻解决"价格黑盒"的转化杀手 |
| 🥈 P0 | 选定 1 个 narrow wedge（推荐"中国 SaaS → 日本"），首页 hero 改成 wedge 化文案 | 2 周 | 让产品从"看起来什么都做"变成"看起来什么都做透" |
| 🥉 P1 | 改造试用漏斗——sample preview + 流程明示 + 升级 CTA | 3 周 | 把现有访客的 try-rate / aha-rate 翻倍 |

剩下的（agent 履历页、公司透明度、case study、docs 开放）**按时间分摊到 3 个月内做完**。

---

## 不建议做的事

- ❌ **不要继续加 agent**（不要出 Bob 第 7 号员工）——现在 6 个的故事还没讲完
- ❌ **不要做 mobile app**——B2B 出海决策不在手机上
- ❌ **不要做 API / 开放生态**——现在还没有客户基数，API 会分散精力
- ❌ **不要追求 logo wall**——前 5 个客户不要急着挂 logo，先把交付做到口碑级别再说

---

*作者：Claude (product-audit skill) ｜ 数据源：15-octok-com/report.md ｜ 体验深度：standard tier ｜ 公开页面 only*

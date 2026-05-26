<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# AI Employee Research — 协作约定

> 项目协作与变更约定。任何 AI 助手 / 协作者动手之前都应先读完本文。
> CLAUDE.md 用 `@AGENTS.md` 引用本文件,本文是单一事实源。

## 1. 项目概览

| 项 | 值 |
|---|---|
| 名称 | AI Employee Research |
| 性质 | AI 员工 / AI Agent 类产品的深度调研站点(展示层) |
| 生产地址 | https://ai-employee-research.vercel.app |
| Vercel 项目 | `ly-hn-s-projects/my-app` |
| GitHub 仓库 | https://github.com/JavaLyHn/my-vercel |
| 内容上游 | `/Users/aa00945/Desktop/octok/audits/`(报告与素材,暂未线上托管) |

## 2. 技术栈

- **Next.js 16.2.6** — App Router + Turbopack
- **TypeScript** — 严格模式
- **Tailwind CSS v4** — `@theme` 内联设计 token
- **部署** — Vercel,push `main` 自动触发

## 3. 本地运行

```bash
cd my-app
npm install
npm run dev      # http://localhost:3000(占用时自动顺延)
npm run build    # 上线前本地验证
```

## 4. 目录结构

```
ai-employee-research/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 字体 + 元数据 + 根 wrapper
│   │   ├── page.tsx                # 首页:Sidebar + 主区(Hero / Marquee / 表格 / 方法论 / Footer)
│   │   └── globals.css             # 设计 token (@theme) + 动画 keyframes
│   ├── components/
│   │   ├── FilterProvider.tsx      # 全局筛选 + CRUD + 拖拽 context(含 localStorage 持久化)
│   │   ├── Sidebar.tsx             # 左侧固定目录 + 类别筛选(280px;移动端 hamburger)
│   │   ├── Hero.tsx                # 顶部 Hero(网格底纹 + 渐变光球)
│   │   ├── Marquee.tsx             # 横向无缝滚动产品名
│   │   ├── ProductGrid.tsx         # 产品表格(增删改查 + HTML5 拖拽排序)
│   │   ├── ProductFormModal.tsx    # 新增/编辑表单 modal
│   │   ├── AnimatedNumber.tsx      # 入视口数字缓动(目前未使用,保留)
│   │   └── Reveal.tsx              # 入视口浮现包装器
│   └── lib/
│       └── products.ts             # ⭐ 产品初始数据(运行时改动走 localStorage)
├── audits/                         # 📁 元文档(README / 表格 / 竞品总结),报告产物已迁出
│   ├── README.md
│   ├── 表格.md
│   └── _competitors_summary.md
├── public/
│   └── products/                   # 📁 16 款产品的报告(线上可访问,Vercel 静态托管)
│       ├── 01-artisan-co/
│       │   ├── report.md
│       │   └── report.html         # HTML 已内联截图,~5-16MB/份
│       └── 02-kuse-ai/ ... 16-theaicmo-com/
└── AGENTS.md                       # 本文件
```

**关键约定**
- 产品数据**只在 `src/lib/products.ts` 维护**,所有页面/组件都从这里读。
- 颜色**不写裸 hex**,只用 `globals.css` 定义的 token(`bg-primary` / `text-accent` / `border-border` 等)。
- **Server Component 优先**,只有需要交互(useState / 事件)的组件加 `'use client'`。

## 5. 编码约定

| 规则 | 说明 |
|---|---|
| TypeScript 严格 | 不用 `any`;外部数据用 type guard |
| 中文文案 | UI 文本以中文为主,技术词保留英文 |
| 设计 token | 颜色/字体走 CSS 变量,不裸写 hex |
| 图标 | 用 SVG(内联或 Lucide),**禁用 emoji 当功能图标** |
| 命名清晰 > 注释 | 必要的「为什么」才写一行注释 |
| 不过度抽象 | 三处相似代码 ≠ 必须抽象,真正需要再抽 |

## 6. 常见任务工作流

### A. 新增一款产品

1. 在 `/Users/aa00945/Desktop/octok/audits/` 下产出报告(用 product-audit Skill)
2. 编辑 `src/lib/products.ts`,按现有格式追加一项:
   ```ts
   {
     id: "xxx",
     index: 15,                // 接续编号
     name: "产品名",
     positioning: "一句话定位",
     url: "https://...",
     access: "开放 / 联系销售 / ...",
     owner: "何龙",
     status: "completed",      // completed | in-progress
     category: "agent",        // 见 ProductCategory 类型
     reportPath: "15-xxx",     // 对应 audits 文件夹名
   }
   ```
3. `npm run build` 本地验证通过
4. commit + push → Vercel 自动部署
5. **在 §8 迭代日志追加一条**

### B. 修改产品状态 / 文案
直接改 `src/lib/products.ts` → push。

### C. 调整视觉风格
改 `src/app/globals.css` 里的 token,所有组件自动跟随。**不要在组件里硬编码颜色绕过 token。**

### D. 新增类别 / 状态
1. `src/lib/products.ts` 扩展 `ProductCategory` / `ProductStatus` 联合类型
2. 同文件 `CATEGORY_LABEL` / `STATUS_LABEL` 加映射
3. `Sidebar.tsx` 的 `CATEGORIES` / `STATUSES` 加选项(同时它会自动按计数过滤掉 0 项)

## 7. 协作规则

- **分支策略**:直接 push 到 `main`(小团队、快迭代)
- **拉前先 rebase**:`git pull --rebase`,避免无意义的 merge commit
- **commit message** — 动词开头的祈使句,带类型前缀:
  - `feat: 新增 XX 产品卡片`
  - `fix: 修复移动端卡片溢出`
  - `docs: 更新方法论描述`
  - `refactor:` / `chore:` / `style:`
- **大改前同步**:改设计 token、数据 schema、部署配置 之前在群里说一声
- **绝对不要做**:
  - force push 到 `main`
  - 改别人的 commit 历史
  - 删除或改写迭代日志已有条目(只追加,不修改)

## 8. 迭代日志

> 每次有意义的变更合并到 main 时追加。**最新在上**。
> 日期 YYYY-MM-DD;作者用中文名;类型 `feat` 新增 / `fix` 修复 / `docs` 文档 / `refactor` 重构 / `chore` 杂项 / `style` 样式

### 2026-05-25 · 何龙
- feat: 初始化项目,Next.js 16 + Tailwind v4,接入 Vercel
- feat: 首页设计完成 — Hero + 22 款产品卡片 + 类别/状态双筛选 + 方法论
- feat: 接入 GitHub 自动部署(push main 触发)
- docs: 撰写 AGENTS.md 协作约定
- feat: 首页重做 — 居中 Hero / 网格底纹 + 渐变光球 / Marquee 横向滚动 / 精选 3 卡 / 数字滚动 / 卡片光晕 hover
- chore: 主域名切换为 `ai-employee-research.vercel.app`(旧的 `my-app-pink-ten-78` 仍可访问)
- chore: 项目重命名 — 本地目录 / GitHub 仓库 / Vercel 项目全部统一为 `ai-employee-research`,重连 git remote 与 Vercel link
- refactor: 首页重构为 Dashboard 布局 — 左侧固定 280px Sidebar(导航 + 筛选 + 统计),右侧主区滚动
- feat: 产品列表从卡片改为表格 — 删 Featured 区(三精选) / 删状态列 / 名称即官网链接 / 移除负责人显示
- refactor: 数据层只保留 14 款已研产品 — 删除 7 个计划中条目,`ProductStatus` 简化为 completed | in-progress,`ProductCategory` 移除 dev
- feat: 补录 Octok(15) + The AI CMO(16) 两个产品 — 表格.md 漏列但 audits 文件夹有完整报告。ProductGrid 标题数字改为动态绑定 stats.total
- feat: 产品 CRUD — 新增 modal / 行内编辑/删除 / 一键重置 / localStorage 持久化(仅浏览器本地)
- feat: 表格支持 HTML5 原生拖拽排序,上下吸附指示线,自动重排 index
- chore: 上传 16 款产品的 audits 报告归档(MD+HTML,~101MB)到同仓库 `audits/` 目录
- refactor: 路由拆分 — `/` 只显 Hero,`/products` 独立页(表格 + 方法论);Sidebar 类别筛选只在 /products 显示
- refactor: 删除产品编辑功能 / 横向滚动 Marquee / 方法论独立入口,简化为新增 + 删除 + 拖动排序
- feat: 接通「查看报告」按钮 — audits/* 迁到 `public/products/`,链接到 `/products/{reportPath}/report.html`,新标签页打开

<!--
追加模板(复制下面这段到「迭代日志」标题下方,删除注释包裹):

### YYYY-MM-DD · 你的名字
- feat: 描述
- fix: 描述

-->

## 9. 已知限制 / TODO

- [ ] **报告 HTML 未托管** — "查看报告"按钮在 UI 上 disabled,需决定方案(打包进 public / 外部托管 / 其他)
- [ ] 暗黑模式仅跟随系统,未提供手动切换
- [ ] 没有搜索框 — 产品数 ≤ 30 暂可,再多需要加
- [ ] 移动端方法论区在小屏可优化(横向卡片)
- [ ] 产品数据硬编码在 TS 数组,未来超过 50 款可考虑改 JSON / 简单 CMS

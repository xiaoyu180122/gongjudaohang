# 🛠️ 程序员工具导航 (developer-nav)

一个精美且高效的程序员/开发者工具箱导航网站，专为开发者打造。集成了多种常用的开发辅助工具、API 管理、数据分析报告与开发效率工具统计。

✨ **在线预览**：[https://xiaoyu180122.github.io/developer-nav/](https://xiaoyu180122.github.io/developer-nav/)

---

## 🚀 核心功能

- **分类工具箱**：囊括 AI 工具、开发工具、效率工具与文档索引。
- **流畅动效**：基于 Motion (Framer Motion) 库驱动，拥有极具质感的玻璃拟态（Glassmorphism）与平滑微动效。
- **一键搜索**：内置流畅的全局模糊搜索，帮助快速定位目标工具。
- **现代化面板**：支持数据报表可视化、API 状态监控、以及工具快速提交与定制。

---

## 🛠️ 技术栈

- **前端框架**：Next.js 16 (App Router)
- **渲染库**：React 19
- **逻辑编写**：TypeScript
- **样式方案**：Tailwind CSS v4 + 现代 Vanilla CSS
- **动效库**：Motion (formerly Framer Motion)
- **包管理器**：pnpm v11

---

## 💻 本地开发

### 前置条件
确保安装了 [Node.js](https://nodejs.org/) (推荐 v22+) 与 [pnpm](https://pnpm.io/)。

1. **克隆项目**
   ```bash
   git clone https://github.com/xiaoyu180122/developer-nav.git
   cd developer-nav
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **运行开发服务**
   ```bash
   pnpm run dev
   ```
   启动后可在浏览器中访问 [http://localhost:3000](http://localhost:3000)。

4. **构建静态导出**
   ```bash
   pnpm run build
   ```
   导出结果将保存在 `./out` 目录中。

---

## 📦 部署与构建

项目已集成 **GitHub Actions** 自动化构建流。每次向 `main` 分支推送代码时，工作流会自动执行以下步骤：
1. 拉取代码，安装 Node.js v22 与 pnpm v11 环境。
2. 注入仓库基路径 `NEXT_PUBLIC_BASE_PATH=/developer-nav`。
3. 运行静态构建与导出 (`pnpm run build`)。
4. 自动上传产物并部署至该仓库的 **GitHub Pages** 分支。

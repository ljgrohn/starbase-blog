---
title: "Getting Started: Installation & Setup"
description: "A complete guide to installing Node.js and setting up your B-SIDE blog"
pubDate: 2025-01-15
author: "Starbase"
featured: true
tags: ["installation", "setup", "getting-started"]
---

# Getting Started: Installation & Setup

> System initialization required. Let's get your terminal blog up and running.

## Prerequisites

Before you begin, you'll need Node.js installed on your system. This blog is built with Astro, which requires Node.js version 18.14.1 or higher.

## Step 1: Install Node.js

### Windows

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Verify installation by opening PowerShell or Command Prompt:

```bash
$ node --version
v20.x.x

$ npm --version
10.x.x
```

### macOS

Using Homebrew (recommended):

```bash
$ brew install node
```

Or download from [nodejs.org](https://nodejs.org/)

### Linux

```bash
# Ubuntu/Debian
$ sudo apt update
$ sudo apt install nodejs npm

# Fedora
$ sudo dnf install nodejs npm

# Arch Linux
$ sudo pacman -S nodejs npm
```

## Step 2: Clone the Repository

```bash
$ git clone https://github.com/ljgrohn/starbase-blog.git
$ cd starbase-blog
```

Or if you've already cloned it, navigate to the project directory.

## Step 3: Install Dependencies

```bash
$ npm install
```

This will install all required packages:
- Astro (the framework)
- Tailwind CSS (for styling)
- TypeScript (for type safety)

## Step 4: Start the Development Server

```bash
$ npm run dev
```

You should see output like:

```
  ┃ Local:   http://localhost:4321/
  ┃ Network: use --host to expose
```

Open your browser and navigate to `http://localhost:4321/` to see your blog!

## Step 5: Build for Production

When you're ready to deploy:

```bash
$ npm run build
```

This creates a `dist/` folder with your static site ready to deploy.

Preview the production build locally:

```bash
$ npm run preview
```

## Available Commands

```
┌─────────────────┬─────────────────────────────────────┐
│ Command         │ Description                         │
├─────────────────┼─────────────────────────────────────┤
│ npm run dev     │ Start dev server (localhost:4321)  │
│ npm run build   │ Build for production               │
│ npm run preview │ Preview production build locally   │
│ npm run astro   │ Run Astro CLI commands             │
└─────────────────┴─────────────────────────────────────┘
```

## Troubleshooting

### Port Already in Use

If port 4321 is taken, Astro will automatically use the next available port. Check the terminal output for the actual URL.

### Node Version Issues

If you encounter version errors, use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to switch versions:

```bash
$ nvm install 20
$ nvm use 20
```

### Permission Errors (Linux/macOS)

If you get permission errors, you may need to use `sudo` or fix npm permissions:

```bash
$ sudo npm install
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● STATUS: READY FOR CONFIGURATION

Next: Learn how to [write your first blog post](/blog/writing-blog-posts).


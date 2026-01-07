# MFE Shop

A sample e‑commerce application demonstrating a micro‑frontend architecture

This repository contains a demonstration implementation of an e‑shop built using a micro‑frontend architecture with a
shared application runtime. The project aims to validate design decisions, integration patterns and limits of
micro‑frontends in a modern frontend application.

## Table of contents

- Project overview
- Architecture
- Repository structure
- Technologies
- Requirements
- Installation
- Development (hot‑reload)
- Production build and preview
- Quick commands

## Project overview

The application is split into independent frontend modules (micro‑frontends), each representing separate e‑commerce
domains:

- Shell — the host application that orchestrates runtime and integration
- Products — a micro‑frontend responsible for product listing and product details
- Cart — a micro‑frontend handling the shopping cart state and UI
- Shared — shared utilities and small modules (event bus, contracts)

The architecture follows a shell‑centric approach with a shared runtime (Vue + Pinia). This is a pragmatic trade‑off
between strong isolation and a good user experience, and is common in real‑world SPA micro‑frontend setups.

## Architecture

- Micro‑frontends are integrated using Module Federation (via a Vite plugin)
- Each micro‑frontend is built independently
- Application state (e.g. cart) is initialized and provided by the shell host
- Communication between micro‑frontends is event‑driven (an event bus + contract enums)
- The shell acts as the lifecycle orchestrator and integration point

Note: the project intentionally does not enforce full runtime isolation for each micro‑frontend — the goal is to present
a realistic, usable architecture for SPA apps (this work is part of a diploma thesis).

## Known Limitations

- Microfrontends share a single application runtime
- Independent deployment of microfrontends is not supported
- Cross-microfrontend communication is asynchronous only

These limitations are a deliberate trade-off in favor of:

- simpler development
- better user experience
- lower maintenance overhead

## Repository structure

```
packages/
├─ shell/ # host application (orchestrator)
├─ products/ # products micro‑frontend
├─ cart/ # cart micro‑frontend
└─ shared/ # shared utilities (eventBus, contracts)
```

This repository is managed as a PNPM monorepo.

## Technologies

- Vue 3
- Vite
- Module Federation (Vite plugin)
- Pinia
- Vue Router
- Vuetify 3
- Material Design Icons
- JavaScript
- PNPM (workspaces)

## Requirements

- Node.js (LTS recommended)
- PNPM (workspace aware)

## Installation

From the repository root:

```bash
pnpm install
```

## Development (hot‑reload)

To run all packages with hot‑reload locally (recommended):

```bash
pnpm run all
```

Or run packages individually:

```bash
pnpm --filter shell dev
pnpm --filter products dev
pnpm --filter cart dev
```

## Production build and preview

The repository provides scripts that use `vite preview` to:

- test the behavior of the production build
- verify Module Federation behavior in production mode
- simulate deployment without actually deploying

Example (coordinated build + preview for all packages):

```bash
pnpm run all_with_preview
```

Or build/preview a single package:

```bash
pnpm --filter products build
pnpm --filter products preview -- --port 5001 --strictPort
```

## Quick commands

```bash
# install dependencies
pnpm install

# run all apps in dev mode (hot reload)
pnpm run all

# build + preview for all apps
pnpm run all_with_preview

# run individual packages
pnpm --filter shell dev
pnpm --filter products dev
pnpm --filter cart dev
```

## Note

This project is part of a diploma thesis focused on micro‑frontend architecture. The goal is not to provide a
production‑ready online store but to validate architectural principles, integration patterns and trade‑offs in a
realistic SPA environment.

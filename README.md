# @ohin/greetify

Tiny, privacy-first greeting utilities for JavaScript and React.

- Small and dependency-free
- React-friendly (hook + component)
- TypeScript types included
- LocalStorage persistence with TTL
- SSR-safe

---

## Table of Contents

- [Install](#install)
- [Quick Demo](#quick-demo)
- [API](#api)
  - [`sayHello(name?, options?)`](#sayhelloname-options)
  - [`useGreeting(name?, options?)`](#usegreetingname-options)
  - [`<Greeting />` component](#greeting--component)
- [Examples](#examples)
  - [Node / Plain JS](#node--plain-js)
  - [React (JavaScript)](#react-javascript)
  - [React (TypeScript)](#react-typescript)
  - [Custom template example](#custom-template-example)
  - [Persistence (localStorage + TTL) example](#persistence-localstorage--ttl-example)
- [Test locally before publish](#test-locally-before-publish)
- [Publish to npm](#publish-to-npm)
- [Versioning & updates](#versioning--updates)
- [Why use this package](#why-use-this-package)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)

---

## Install

```bash
npm install @ohin/greetify
# or
yarn add @ohin/greetify


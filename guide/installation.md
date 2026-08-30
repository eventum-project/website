# Installation

Eventum can be installed via your preferred package manager:

::: code-group

```bash [npm]
npm install eventum
```

```bash [yarn]
yarn add eventum
```

```bash [pnpm]
pnpm add eventum
```

:::

No compiler, no Rust toolchain, no build step. Eventum ships prebuilt native binaries and
your package manager downloads only the one matching your platform.

## Supported platforms

Prebuilt binaries are published for all eight targets below, each signed with
[npm provenance](https://docs.npmjs.com/generating-provenance-statements):

| Operating system | x64 | arm64 |
| ---------------- | :-: | :---: |
| macOS            | ✅  |  ✅   |
| Linux (glibc)    | ✅  |  ✅   |
| Linux (musl)     | ✅  |  ✅   |
| Windows          | ✅  |  ✅   |

Windows prebuilt binaries are available as of **v0.1.0-alpha.8** — Windows users install
exactly like everyone else, with no Visual Studio Build Tools required.

## Requirements

- Node.js >= 18

## Building from source

You should not need this, but if no prebuilt binary matches your platform, Eventum falls
back to compiling the native addon during `npm install`. That path requires:

- [Rust](https://rustup.rs) (stable toolchain)
- A C/C++ toolchain — Visual Studio Build Tools on Windows, Xcode Command Line Tools on
  macOS, or `build-essential` on Linux

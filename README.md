<a href="https://twitter.com/lootrealms">
<img src="https://img.shields.io/twitter/follow/lootrealms?style=social"/>
</a>
<a href="https://twitter.com/BibliothecaDAO">
<img src="https://img.shields.io/twitter/follow/BibliothecaDAO?style=social"/>
</a>

[![discord](https://img.shields.io/badge/join-bibliothecadao-black?logo=discord&logoColor=white)](https://discord.gg/realmsworld)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![background](/docs/assets/images/bg.png)

# Realms.World

## The portal to the Realms Autonomous World

Realms.World is the information and activity hub for entrance to the Realms Autonomous World. It includes a comprehensive and interactive marketplace dedicated to the Loot and Realms ecosystem (both on Ethereum and Starknet), ecosystem functionality such as bridging, staking, and NFT minting, and information about the various games of the World. The client is built on Next.js 13, utilizing server and client components to achieve high performance and scalability.

#### Table of Contents

- Getting Started
- Contributing
- License

### Getting Started

- [`apps/nextjs`](https://bibliothecadao.github.io/frontend) - The next.js Frontend
- [`packages/subgraph`](https://bibliothecadao.github.io/subgraph) - The L1 Starknet Messaging Indexer for Bridge Transactions
- [`packages/apibara`](https://bibliothecadao.github.io/starknet-indexer) = The L2 indexer for Bridge and NFT Transactions

### How to Start

Clone the repository and navigate to the directory.

```bash
git clone https://github.com/BibliothecaDAO/RealmsWorld.git
cd RealmsWorld
```

Install Bun

```bash
npm install -g bun # for macOS and Linux
```

for Homebrew users

```bash
brew install oven-sh/bun/bun # for macOS and Linux
```

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called bun.

Install dependencies required to launch storybook and the Realms.World client.

```bash
bun i
```

#### Edit Enviroment Variables

Depending on which environment you want to run, first copy the values from `.env.sepolia` or `.env.mainnet` into your `.env` file.

- To create your `.env` for mainnet, you will need to copy `.env.mainnet` and paste it in your `.env`.
- Ensure these lines exist in `.env` and point to your desired location (this example is for mainnet)

  `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=c8d27e7d62b1bb4d1ea2e6d4ed1604ee`
  `DATABASE_URL=postgresql://readonly_rw:RealmsWorld%21@ep-frosty-sea-90384545.us-east-2.aws.neon.tech/main`

### Running the App

```bash
bun run dev
```

### Documentation

Available at [Realms.World Docs](https://docs.realms.world)

### Contributing

We welcome contributions from the community to help improve Realms.World. If you are interested in contributing, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Submit a pull request with a detailed description of your changes.

We will review your contribution and provide feedback. Once your changes have been approved, they will be merged into the main branch.

### To add a Game

Check out the docs at [Add Data Docs](https://docs.realms.world/data) - WIP for Loot Survivor mods

### License

Realms.World is an open-source project released under the MIT License. This license allows you to freely use, modify, and distribute the code, as long as you include the original copyright and permission notice in any copy of the software or substantial portions of it.

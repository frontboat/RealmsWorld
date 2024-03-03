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

### Approve the setup script to run

```bash
chmod +x setup.sh
```

### Run the setup script

```bash
./setup.sh
```

This will install all the necessary dependencies, and open a storybook for you.

### Last Step

In your web browser, navigate to

`localhost:3000`

Congratulations! You are now running the realms.world client locally.

### Documentation

Available at [Realms.World Docs](https://docs.realms.world)

#### Notes on the build

- The setup script installs a plethora of dependencies on your machine, which may take a few minutes to complete.
- This script also copies `.env.mainnet` to your `.env` for mainnet by default. To customize your env for other networks, simply copy-paste everything from the `.env.goerli` or `.env.sepolia` to your `.env`. These files are located in the root directory of the project.

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

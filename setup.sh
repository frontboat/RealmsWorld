#!/bin/bash

# Install Bun globally
echo "Installing Bun globally..."
npm install -g bun

# Ensure you're in the correct project directory before continuing
if [ ! -f "./package.json" ]; then
    echo "This script must be run from the root of your project directory."
    echo "Please navigate to your project directory and try again."
    exit 1
fi

# Install project dependencies with Bun
echo "Installing project dependencies with Bun..."
bun i

# Copy .env.mainnet to .env
if [ -f ".env.mainnet" ]; then
    echo "Setting up environment variables..."
    cp .env.mainnet .env
else
    echo "Warning: .env.mainnet file not found. Please ensure you have the correct environment file."
fi

# Start the development environment
echo "Starting development environment with Bun..."
bun run dev

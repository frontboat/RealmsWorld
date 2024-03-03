#!/bin/bash

# Function to install Bun
install_bun() {
    echo "Installing Bun globally..."
    npm install -g bun
    if command -v bun &> /dev/null; then
        echo "Bun installation was successful."
    else
        echo "Failed to install Bun. Please check your npm setup and try again."
        exit 1
    fi
}

# Function to install Yarn
install_yarn() {
    echo "Installing Yarn globally..."
    npm install -g yarn
    if command -v yarn &> /dev/null; then
        echo "Yarn installation was successful."
    else
        echo "Failed to install Yarn. Please check your npm setup and try again."
        exit 1
    fi
}

# Check for package manager availability and prompt for installation if necessary
check_and_install_package_manager() {
    local response
    echo "Checking for available package managers..."
    if ! command -v bun &> /dev/null; then
        echo "Bun is not installed."
        read -p "Would you like to install Bun? (Y/n/skip): " response
        if [[ "$response" =~ ^[Yy]$ ]]; then
            install_bun
        elif [[ "$response" =~ ^[Ss]kip$ ]]; then
            echo "Skipping Bun installation."
        else
            echo "Exiting. Bun is required to proceed."
            exit 1
        fi
    fi

    if ! command -v yarn &> /dev/null; then
        echo "Yarn is not installed."
        read -p "Would you like to install Yarn? (Y/n/skip): " response
        if [[ "$response" =~ ^[Yy]$ ]]; then
            install_yarn
        elif [[ "$response" =~ ^[Ss]kip$ ]]; then
            echo "Skipping Yarn installation."
        else
            echo "Yarn installation will be skipped."
        fi
    fi
}

# Prompt user for environment setup choice
echo "Select the environment setup:"
echo "1) Mainnet"
echo "2) Sepolia"
echo "3) Skip"
read -p "Enter your choice for environment setup (1/2/3): " env_setup_choice

case $env_setup_choice in
    1)
        if [ -f ".env.mainnet" ]; then
            echo "Setting up Mainnet environment variables..."
            cp .env.mainnet .env
        else
            echo "Warning: .env.mainnet file not found. Please ensure you have the correct environment file."
            exit 1
        fi
        ;;
    2)
        if [ -f ".env.sepolia" ]; then
            echo "Setting up Sepolia environment variables..."
            cp .env.sepolia .env
        else
            echo "Warning: .env.sepolia file not found. Please ensure you have the correct environment file."
            exit 1
        fi
        ;;
    3)
        echo "Skipping environment setup."
        ;;
    *)
        echo "Invalid selection for environment setup. Exiting."
        exit 1
        ;;
esac

# Check and install package managers if necessary
check_and_install_package_manager

# Prompt user for package manager choice for installing dependencies
echo "Select the package manager to install dependencies:"
echo "1) Bun (if installed)"
echo "2) Yarn (if installed)"
echo "3) npm"
echo "4) Skip"
read -p "Enter your choice (1/2/3/4): " pkg_manager_choice

case $pkg_manager_choice in
    1)
        echo "Installing dependencies with Bun..."
        bun i
        ;;
    2)
        echo "Installing dependencies with Yarn..."
        yarn
        ;;
    3)
        echo "Installing dependencies with npm..."
        npm install
        ;;
    4)
        echo "Skipping dependency installation."
        ;;
    *)
        echo "Invalid selection. Exiting."
        exit 1
        ;;
esac

# Proceed only if not skipped
if [ "$env_setup_choice" != "3" ]; then
    # Prompt user for how to start the dev environment
    echo "How would you like to start the development environment?"
    echo "1) Bun run dev (if Bun is chosen)"
    echo "2) Yarn dev (if Yarn is chosen)"
    echo "3) npm run dev"
    echo "4) Skip"
    read -p "Enter your choice (1/2/3/4): " dev_start_choice

    case $dev_start_choice in
        1)
            echo "Starting development environment with Bun..."
            bun run dev
            ;;
        2)
            echo "Starting development environment with Yarn..."
            yarn dev
            ;;
        3)
            echo "Starting development environment with npm..."
            npm run dev
            ;;
        4)
            echo "Skipping development environment startup."
            ;;
        *)
            echo "Invalid selection. Exiting."
            exit 1
            ;;
    esac
fi

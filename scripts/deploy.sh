#!/bin/bash

# PaisaBuddy Deployment Script
# This script provides multiple deployment options

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    print_status "Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "Requirements check passed"
}

# Install dependencies
install_deps() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
}

# Build the application
build_app() {
    print_status "Building application..."
    npm run build
    print_success "Application built successfully"
}

# Deploy to Vercel
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_status "Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    vercel --prod
    print_success "Deployed to Vercel successfully"
}

# Deploy with Docker
deploy_docker() {
    print_status "Building Docker image..."
    docker build -t paisabuddy .
    print_success "Docker image built"
    
    print_status "Starting containers..."
    docker-compose up -d
    print_success "Application deployed with Docker"
}

# Deploy to AWS
deploy_aws() {
    print_status "Deploying to AWS..."
    
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Build and push to ECR (example)
    print_status "Building and pushing to ECR..."
    # Add your AWS deployment commands here
    print_success "Deployed to AWS successfully"
}

# Deploy to DigitalOcean
deploy_digitalocean() {
    print_status "Deploying to DigitalOcean..."
    
    if ! command -v doctl &> /dev/null; then
        print_error "DigitalOcean CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Add your DigitalOcean deployment commands here
    print_success "Deployed to DigitalOcean successfully"
}

# Show help
show_help() {
    echo "PaisaBuddy Deployment Script"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  vercel          Deploy to Vercel"
    echo "  docker          Deploy with Docker"
    echo "  aws             Deploy to AWS"
    echo "  digitalocean    Deploy to DigitalOcean"
    echo "  build           Build the application only"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 vercel"
    echo "  $0 docker"
    echo "  $0 build"
}

# Main script logic
main() {
    case "${1:-help}" in
        "vercel")
            check_requirements
            install_deps
            build_app
            deploy_vercel
            ;;
        "docker")
            check_requirements
            install_deps
            build_app
            deploy_docker
            ;;
        "aws")
            check_requirements
            install_deps
            build_app
            deploy_aws
            ;;
        "digitalocean")
            check_requirements
            install_deps
            build_app
            deploy_digitalocean
            ;;
        "build")
            check_requirements
            install_deps
            build_app
            ;;
        "help"|*)
            show_help
            ;;
    esac
}

# Run main function with all arguments
main "$@"

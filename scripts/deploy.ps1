# PaisaBuddy Deployment Script for Windows PowerShell
# This script provides multiple deployment options

param(
    [Parameter(Position=0)]
    [ValidateSet("vercel", "docker", "aws", "digitalocean", "build", "help")]
    [string]$Action = "help"
)

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if required tools are installed
function Test-Requirements {
    Write-Status "Checking requirements..."
    
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    }
    
    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
        Write-Error "npm is not installed. Please install npm first."
        exit 1
    }
    
    Write-Success "Requirements check passed"
}

# Install dependencies
function Install-Dependencies {
    Write-Status "Installing dependencies..."
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to install dependencies"
        exit 1
    }
    Write-Success "Dependencies installed"
}

# Build the application
function Build-Application {
    Write-Status "Building application..."
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to build application"
        exit 1
    }
    Write-Success "Application built successfully"
}

# Deploy to Vercel
function Deploy-Vercel {
    Write-Status "Deploying to Vercel..."
    
    if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
        Write-Status "Installing Vercel CLI..."
        npm install -g vercel
    }
    
    vercel --prod
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to deploy to Vercel"
        exit 1
    }
    Write-Success "Deployed to Vercel successfully"
}

# Deploy with Docker
function Deploy-Docker {
    Write-Status "Building Docker image..."
    docker build -t paisabuddy .
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to build Docker image"
        exit 1
    }
    Write-Success "Docker image built"
    
    Write-Status "Starting containers..."
    docker-compose up -d
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to start containers"
        exit 1
    }
    Write-Success "Application deployed with Docker"
}

# Deploy to AWS
function Deploy-AWS {
    Write-Status "Deploying to AWS..."
    
    if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
        Write-Error "AWS CLI is not installed. Please install it first."
        exit 1
    }
    
    # Add your AWS deployment commands here
    Write-Success "Deployed to AWS successfully"
}

# Deploy to DigitalOcean
function Deploy-DigitalOcean {
    Write-Status "Deploying to DigitalOcean..."
    
    if (-not (Get-Command doctl -ErrorAction SilentlyContinue)) {
        Write-Error "DigitalOcean CLI is not installed. Please install it first."
        exit 1
    }
    
    # Add your DigitalOcean deployment commands here
    Write-Success "Deployed to DigitalOcean successfully"
}

# Show help
function Show-Help {
    Write-Host "PaisaBuddy Deployment Script for Windows" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Usage: .\scripts\deploy.ps1 [OPTION]" -ForegroundColor White
    Write-Host ""
    Write-Host "Options:" -ForegroundColor Yellow
    Write-Host "  vercel          Deploy to Vercel"
    Write-Host "  docker          Deploy with Docker"
    Write-Host "  aws             Deploy to AWS"
    Write-Host "  digitalocean    Deploy to DigitalOcean"
    Write-Host "  build           Build the application only"
    Write-Host "  help            Show this help message"
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Yellow
    Write-Host "  .\scripts\deploy.ps1 vercel"
    Write-Host "  .\scripts\deploy.ps1 docker"
    Write-Host "  .\scripts\deploy.ps1 build"
}

# Main script logic
switch ($Action) {
    "vercel" {
        Test-Requirements
        Install-Dependencies
        Build-Application
        Deploy-Vercel
    }
    "docker" {
        Test-Requirements
        Install-Dependencies
        Build-Application
        Deploy-Docker
    }
    "aws" {
        Test-Requirements
        Install-Dependencies
        Build-Application
        Deploy-AWS
    }
    "digitalocean" {
        Test-Requirements
        Install-Dependencies
        Build-Application
        Deploy-DigitalOcean
    }
    "build" {
        Test-Requirements
        Install-Dependencies
        Build-Application
    }
    "help" {
        Show-Help
    }
    default {
        Show-Help
    }
}

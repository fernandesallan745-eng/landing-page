# 🚀 PaisaBuddy Deployment Guide

This guide covers multiple deployment options for the PaisaBuddy behavioral research platform.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended for Frontend)

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/paisabuddy)

**Manual Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Environment Variables for Vercel:**
- `NEXT_PUBLIC_APP_URL` - Your production URL
- `NEXTAUTH_SECRET` - Random secret for authentication
- `NEXTAUTH_URL` - Your production URL

### 2. Docker Deployment

**Build and Run:**
```bash
# Build the image
docker build -t paisabuddy .

# Run the container
docker run -p 3000:3000 paisabuddy
```

**With Docker Compose:**
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### 3. Traditional Hosting (VPS/Cloud)

**Build for Production:**
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

**With PM2 (Process Manager):**
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "paisabuddy" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

## 🔧 Platform-Specific Deployments

### AWS Deployment

**Using AWS Amplify:**
1. Connect your GitHub repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

**Using AWS EC2:**
```bash
# Install Node.js and dependencies
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone <your-repo>
cd paisabuddy
npm install
npm run build

# Install PM2
sudo npm install -g pm2
pm2 start npm --name "paisabuddy" -- start
```

### DigitalOcean App Platform

1. Create a new app in DigitalOcean
2. Connect your GitHub repository
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Run Command:** `npm start`
   - **Source Directory:** `/`

### Google Cloud Platform

**Using Cloud Run:**
```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/PROJECT-ID/paisabuddy

# Deploy to Cloud Run
gcloud run deploy paisabuddy --image gcr.io/PROJECT-ID/paisabuddy --platform managed
```

### Azure Static Web Apps

1. Create a new Static Web App in Azure Portal
2. Connect your GitHub repository
3. Configure build settings:
   - **App location:** `/`
   - **API location:** (leave empty)
   - **Output location:** `.next`

## 🔒 Security Configuration

### Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### Security Headers

The application includes security headers in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### SSL/HTTPS

For production deployments, ensure SSL certificates are configured:
- **Vercel:** Automatic SSL
- **Docker:** Use nginx with SSL certificates
- **VPS:** Use Let's Encrypt with Certbot

## 📊 Monitoring and Analytics

### Health Checks

The application includes health check endpoints:
- `/api/health` - Basic health check
- `/api/status` - Detailed status information

### Logging

Configure logging for production:
```bash
# Using PM2 with log rotation
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
```

## 🔄 CI/CD Pipeline

### GitHub Actions

The repository includes GitHub Actions workflow (`.github/workflows/deploy.yml`) for:
- Automated testing
- Building the application
- Deploying to Vercel
- Building Docker images

### Environment Setup

Configure the following secrets in your GitHub repository:
- `VERCEL_TOKEN` - Vercel deployment token
- `ORG_ID` - Vercel organization ID
- `PROJECT_ID` - Vercel project ID
- `DOCKER_USERNAME` - Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub password

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Memory Issues:**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

**Docker Issues:**
```bash
# Clean Docker cache
docker system prune -a
docker build --no-cache -t paisabuddy .
```

### Performance Optimization

**Next.js Optimization:**
- Enable static generation where possible
- Use dynamic imports for large components
- Optimize images with Next.js Image component
- Enable compression and caching

**Docker Optimization:**
- Use multi-stage builds
- Leverage Docker layer caching
- Use Alpine Linux base images
- Minimize image size

## 📈 Scaling

### Horizontal Scaling

**Load Balancer Configuration:**
```nginx
upstream paisabuddy {
    server app1:3000;
    server app2:3000;
    server app3:3000;
}
```

**Docker Swarm:**
```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml paisabuddy

# Scale services
docker service scale paisabuddy_app=3
```

### Vertical Scaling

**Resource Monitoring:**
- CPU usage
- Memory consumption
- Disk I/O
- Network traffic

## 📞 Support

For deployment issues:
- Check the logs: `docker-compose logs -f`
- Verify environment variables
- Test locally first: `npm run dev`
- Review the troubleshooting section above

## 🔗 Useful Links

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)

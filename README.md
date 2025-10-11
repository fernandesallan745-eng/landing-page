# PaisaBuddy - Behavioral Research Platform

A secure, flexible, and high-precision Software-as-a-Service (SaaS) platform that empowers researchers to build and deploy complex behavioral experiments directly in a web browser.

## 🚀 Features

- **High-Precision Timing Engine** - Millisecond-accurate timing with advanced stimulus-response tracking
- **Visual Experiment Builder** - Drag-and-drop interface for creating experimental trials with logic, branching, and randomization
- **Secure & Anonymous Data Handling** - GDPR-compliant data collection with IRB standards and enterprise-grade security

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paisabuddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard page
│   ├── builder/          # Experiment builder
│   ├── privacy/          # Privacy & security page
│   ├── login/            # Authentication pages
│   └── signup/
├── components/           # Reusable components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── navbar.tsx       # Navigation component
│   ├── footer.tsx       # Footer component
│   ├── feature-card.tsx # Feature display component
│   └── experiment-card.tsx # Experiment display component
├── lib/                 # Utility functions
└── globals.css         # Global styles
```

## 🎨 Design System

The platform uses a modern, scientific design system with:

- **Color Palette**: Professional blue primary with semantic color tokens
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Consistent, accessible UI components
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design approach

## 🔒 Security & Privacy

- **GDPR Compliance**: Full compliance with European data protection regulations
- **IRB Standards**: Built-in compliance with Institutional Review Board requirements
- **End-to-End Encryption**: AES-256 encryption for all data
- **Anonymous Collection**: No personally identifiable information stored
- **Secure Infrastructure**: SOC 2 and ISO 27001 certified

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured experience with advanced tools
- **Tablet**: Touch-optimized interface for mobile research
- **Mobile**: Streamlined experience for quick access

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Docker
```bash
docker build -t paisabuddy .
docker run -p 3000:3000 paisabuddy
```

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: support@paisabuddy.com
- Documentation: [docs.paisabuddy.com](https://docs.paisabuddy.com)
- Community: [community.paisabuddy.com](https://community.paisabuddy.com)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

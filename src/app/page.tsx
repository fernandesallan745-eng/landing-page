"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Clock, 
  Zap, 
  Shield, 
  Beaker, 
  ArrowRight, 
  CheckCircle,
  Users,
  BarChart3,
  Lock,
  Globe
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Clock,
    title: "High-Precision Timing Engine",
    description: "Millisecond-accurate timing with advanced stimulus-response tracking for lab-quality results.",
    details: [
      "Sub-millisecond precision timing",
      "Real-time performance monitoring",
      "Advanced response time analytics",
      "Cross-browser compatibility"
    ]
  },
  {
    icon: Beaker,
    title: "Visual Experiment Builder",
    description: "Drag-and-drop interface for creating complex experimental trials with logic, branching, and randomization.",
    details: [
      "Intuitive drag-and-drop interface",
      "Visual trial sequence builder",
      "Advanced logic and branching",
      "Real-time experiment preview"
    ]
  },
  {
    icon: Shield,
    title: "Secure & Anonymous Data Handling",
    description: "GDPR-compliant data collection with IRB standards and enterprise-grade security.",
    details: [
      "GDPR & HIPAA compliant",
      "End-to-end encryption",
      "Anonymous data collection",
      "IRB approval support"
    ]
  }
]

const stats = [
  { label: "Researchers", value: "10,000+", icon: Users },
  { label: "Experiments", value: "50,000+", icon: Beaker },
  { label: "Data Points", value: "1M+", icon: BarChart3 },
  { label: "Countries", value: "150+", icon: Globe }
]

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Cognitive Psychology Researcher",
    institution: "Stanford University",
    content: "PaisaBuddy has revolutionized our research capabilities. The precision timing and intuitive builder have enabled us to conduct studies that were previously impossible online."
  },
  {
    name: "Prof. Michael Rodriguez",
    role: "Behavioral Scientist",
    institution: "MIT",
    content: "The platform's security features and GDPR compliance give us confidence to collect sensitive behavioral data at scale. It's become an essential tool in our lab."
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    institution: "Oxford University",
    content: "The visual experiment builder is incredibly powerful. We can now design complex multi-session studies in minutes instead of weeks."
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                <Zap className="mr-2 h-3 w-3" />
                Now in Beta
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Democratize Cognitive Science Research
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build and deploy complex behavioral experiments directly in web browsers 
                with lab-quality precision. Our no-code platform makes advanced research 
                accessible to researchers worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Start Building Experiments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">
                    Explore Features
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-card rounded-2xl shadow-2xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground ml-4">Experiment Builder</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-secondary rounded w-1/2"></div>
                    <div className="h-4 bg-accent rounded w-2/3"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Ready to Deploy
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Key Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need for Behavioral Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with intuitive design 
              to deliver research-grade experiments that scale globally.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Leading Researchers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Researchers from top institutions worldwide rely on PaisaBuddy 
              for their most critical behavioral studies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.institution}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform Your Research?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of researchers who are already using PaisaBuddy 
                  to conduct groundbreaking behavioral experiments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      Start Your Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      Schedule a Demo
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

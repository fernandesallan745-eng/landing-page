"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  Server,
  Key,
  Fingerprint
} from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
    details: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 for data in transit",
      "Encrypted database connections",
      "Secure key management"
    ]
  },
  {
    icon: Users,
    title: "Anonymous Data Collection",
    description: "Participant data is collected anonymously with no personally identifiable information stored.",
    details: [
      "No IP address logging",
      "Anonymous participant IDs",
      "No personal information collection",
      "Data aggregation only"
    ]
  },
  {
    icon: Globe,
    title: "GDPR Compliance",
    description: "Full compliance with GDPR regulations for data protection and privacy rights.",
    details: [
      "Right to data portability",
      "Right to erasure (right to be forgotten)",
      "Data processing transparency",
      "Consent management"
    ]
  },
  {
    icon: FileText,
    title: "IRB Standards",
    description: "Built-in compliance with Institutional Review Board standards for human subjects research.",
    details: [
      "Informed consent workflows",
      "Ethics approval documentation",
      "Risk assessment tools",
      "Participant protection measures"
    ]
  }
]

const complianceStandards = [
  {
    name: "GDPR",
    description: "General Data Protection Regulation",
    status: "Compliant",
    icon: Shield,
    details: [
      "Data minimization principles",
      "Purpose limitation",
      "Storage limitation",
      "Lawfulness of processing"
    ]
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    status: "Compliant",
    icon: Lock,
    details: [
      "Administrative safeguards",
      "Physical safeguards",
      "Technical safeguards",
      "Business associate agreements"
    ]
  },
  {
    name: "SOC 2",
    description: "Service Organization Control 2",
    status: "Certified",
    icon: CheckCircle,
    details: [
      "Security controls",
      "Availability controls",
      "Processing integrity",
      "Confidentiality controls"
    ]
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    status: "Certified",
    icon: Server,
    details: [
      "Information security management system",
      "Risk assessment and treatment",
      "Security controls implementation",
      "Continuous improvement"
    ]
  }
]

const dataHandling = [
  {
    stage: "Collection",
    description: "Data is collected anonymously with no personal identifiers",
    icon: Database,
    measures: [
      "Anonymous participant IDs only",
      "No IP address collection",
      "No personal information requested",
      "Consent-based data collection"
    ]
  },
  {
    stage: "Processing",
    description: "Data is processed securely with encryption and access controls",
    icon: Server,
    measures: [
      "Encrypted data processing",
      "Role-based access controls",
      "Audit logging",
      "Secure data transformation"
    ]
  },
  {
    stage: "Storage",
    description: "Data is stored in secure, encrypted databases with backup protection",
    icon: Lock,
    measures: [
      "Encrypted database storage",
      "Regular security backups",
      "Geographic data residency",
      "Access monitoring and logging"
    ]
  },
  {
    stage: "Transmission",
    description: "Data transmission uses secure protocols and encrypted channels",
    icon: Globe,
    measures: [
      "TLS 1.3 encryption",
      "Secure API endpoints",
      "Certificate pinning",
      "Network security monitoring"
    ]
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Shield className="mr-2 h-3 w-3" />
            Security & Privacy
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Secure & Anonymous Data Handling
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your research data is protected by enterprise-grade security measures, 
            GDPR compliance, and IRB standards. We prioritize participant privacy 
            and data security in everything we do.
          </p>
        </motion.div>

        {/* Security Features */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Security Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security approach ensuring your research data remains 
              protected and participant privacy is maintained.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
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
        </section>

        {/* Compliance Standards */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of compliance with international 
              regulations and security certifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                        <standard.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{standard.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{standard.description}</p>
                    <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                      {standard.status}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Data Handling Process */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Data Handling Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive data handling process ensures security and privacy 
              at every stage of the research lifecycle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dataHandling.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <stage.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{stage.stage}</CardTitle>
                    </div>
                    <CardDescription>{stage.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stage.measures.map((measure, measureIndex) => (
                        <li key={measureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Privacy Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to privacy is built on fundamental principles that 
              guide every aspect of our platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Fingerprint className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy by Design</h3>
              <p className="text-muted-foreground">
                Privacy considerations are integrated into every aspect of our platform 
                from the ground up, not added as an afterthought.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We provide clear, accessible information about how data is collected, 
                processed, and used in your research.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Key className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Minimization</h3>
              <p className="text-muted-foreground">
                We collect only the data necessary for your research objectives, 
                ensuring participant privacy is maximized.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-muted-foreground mb-6">
                Our privacy team is available to answer any questions about our 
                data handling practices and security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Privacy Policy
                </Button>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Contact Privacy Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

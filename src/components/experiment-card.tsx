"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Play, 
  Edit, 
  Eye, 
  Download, 
  MoreVertical,
  Users,
  Clock,
  Calendar,
  Beaker
} from 'lucide-react'
import Link from 'next/link'

interface Experiment {
  id: number
  title: string
  description: string
  status: 'draft' | 'running' | 'published' | 'completed'
  participants: number
  createdAt: string
  lastModified: string
  duration: string
  type: string
}

interface ExperimentCardProps {
  experiment: Experiment
  index?: number
}

const statusColors = {
  draft: "secondary",
  running: "default",
  published: "default",
  completed: "outline"
} as const

const statusLabels = {
  draft: "Draft",
  running: "Running",
  published: "Published",
  completed: "Completed"
}

export function ExperimentCard({ experiment, index = 0 }: ExperimentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold">{experiment.title}</h3>
                <Badge variant={statusColors[experiment.status]}>
                  {statusLabels[experiment.status]}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">{experiment.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{experiment.participants} participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{experiment.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{new Date(experiment.lastModified).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Beaker className="h-4 w-4 text-muted-foreground" />
                  <span>{experiment.type}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/experiment/${experiment.id}`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/builder?edit=${experiment.id}`}>
                  <Edit className="h-4 w-4" />
                </Link>
              </Button>
              {experiment.status === 'completed' && (
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              )}
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

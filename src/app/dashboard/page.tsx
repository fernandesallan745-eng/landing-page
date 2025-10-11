"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Play,
  Edit,
  Trash2,
  Eye,
  Download,
  Calendar,
  Users,
  BarChart3,
  Clock,
  Beaker
} from 'lucide-react'
import Link from 'next/link'

// Mock data for experiments
const mockExperiments = [
  {
    id: 1,
    title: "Attention Bias Study",
    description: "Investigating attentional bias in anxiety disorders using dot-probe paradigm",
    status: "published",
    participants: 1247,
    createdAt: "2024-01-15",
    lastModified: "2024-01-20",
    duration: "15 min",
    type: "Cognitive"
  },
  {
    id: 2,
    title: "Working Memory Task",
    description: "N-back task for measuring working memory capacity",
    status: "draft",
    participants: 0,
    createdAt: "2024-01-18",
    lastModified: "2024-01-22",
    duration: "20 min",
    type: "Cognitive"
  },
  {
    id: 3,
    title: "Social Decision Making",
    description: "Ultimatum game with eye-tracking integration",
    status: "running",
    participants: 89,
    createdAt: "2024-01-10",
    lastModified: "2024-01-21",
    duration: "25 min",
    type: "Social"
  },
  {
    id: 4,
    title: "Emotion Recognition",
    description: "Facial emotion recognition task with varying intensities",
    status: "completed",
    participants: 2156,
    createdAt: "2024-01-05",
    lastModified: "2024-01-19",
    duration: "12 min",
    type: "Emotional"
  }
]

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

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredExperiments = mockExperiments.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || exp.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = {
    totalExperiments: mockExperiments.length,
    activeExperiments: mockExperiments.filter(exp => exp.status === 'running').length,
    totalParticipants: mockExperiments.reduce((sum, exp) => sum + exp.participants, 0),
    completedStudies: mockExperiments.filter(exp => exp.status === 'completed').length
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your behavioral experiments and track research progress
              </p>
            </div>
            <Button asChild>
              <Link href="/builder">
                <Plus className="mr-2 h-4 w-4" />
                New Experiment
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Experiments</p>
                  <p className="text-2xl font-bold">{stats.totalExperiments}</p>
                </div>
                <Beaker className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Studies</p>
                  <p className="text-2xl font-bold">{stats.activeExperiments}</p>
                </div>
                <Play className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Participants</p>
                  <p className="text-2xl font-bold">{stats.totalParticipants.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed Studies</p>
                  <p className="text-2xl font-bold">{stats.completedStudies}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search experiments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filterStatus === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={filterStatus === "draft" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("draft")}
                  >
                    Drafts
                  </Button>
                  <Button
                    variant={filterStatus === "running" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("running")}
                  >
                    Running
                  </Button>
                  <Button
                    variant={filterStatus === "completed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("completed")}
                  >
                    Completed
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experiments Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid gap-6"
        >
          {filteredExperiments.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Beaker className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No experiments found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm || filterStatus !== "all" 
                    ? "Try adjusting your search or filter criteria"
                    : "Get started by creating your first experiment"
                  }
                </p>
                <Button asChild>
                  <Link href="/builder">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Experiment
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredExperiments.map((experiment, index) => (
                <motion.div
                  key={experiment.id}
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
                            <Badge variant={statusColors[experiment.status as keyof typeof statusColors]}>
                              {statusLabels[experiment.status as keyof typeof statusLabels]}
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
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

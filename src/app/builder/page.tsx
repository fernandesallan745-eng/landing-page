"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Play,
  Save,
  Eye,
  Settings,
  Plus,
  Trash2,
  Copy,
  Move,
  Clock,
  MousePointer,
  Image,
  Type,
  Square,
  Circle,
  Triangle,
  ArrowRight,
  Shuffle,
  GitBranch,
  Timer,
  Target
} from 'lucide-react'

// Mock components for the experiment builder
const componentTypes = [
  { id: 'stimulus', name: 'Stimulus', icon: Image, description: 'Visual stimulus display' },
  { id: 'text', name: 'Text', icon: Type, description: 'Text presentation' },
  { id: 'shape', name: 'Shape', icon: Square, description: 'Geometric shapes' },
  { id: 'timer', name: 'Timer', icon: Timer, description: 'Timing control' },
  { id: 'response', name: 'Response', icon: MousePointer, description: 'User response collection' },
  { id: 'branch', name: 'Branch', icon: GitBranch, description: 'Conditional logic' },
  { id: 'randomize', name: 'Randomize', icon: Shuffle, description: 'Randomization' },
]

const mockTrials = [
  { id: 1, name: 'Welcome Screen', type: 'text', duration: 3000, order: 1 },
  { id: 2, name: 'Instructions', type: 'text', duration: 10000, order: 2 },
  { id: 3, name: 'Practice Trial 1', type: 'stimulus', duration: 5000, order: 3 },
  { id: 4, name: 'Practice Trial 2', type: 'stimulus', duration: 5000, order: 4 },
  { id: 5, name: 'Main Trial Block', type: 'stimulus', duration: 30000, order: 5 },
  { id: 6, name: 'Thank You', type: 'text', duration: 5000, order: 6 },
]

export default function BuilderPage() {
  const [selectedTrial, setSelectedTrial] = useState<number | null>(null)
  const [trials, setTrials] = useState(mockTrials)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const addTrial = (type: string) => {
    const newTrial = {
      id: Date.now(),
      name: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Trial`,
      type,
      duration: 5000,
      order: trials.length + 1
    }
    setTrials([...trials, newTrial])
  }

  const deleteTrial = (id: number) => {
    setTrials(trials.filter(trial => trial.id !== id))
    if (selectedTrial === id) {
      setSelectedTrial(null)
    }
  }

  const duplicateTrial = (id: number) => {
    const trial = trials.find(t => t.id === id)
    if (trial) {
      const newTrial = {
        ...trial,
        id: Date.now(),
        name: `${trial.name} (Copy)`,
        order: trial.order + 1
      }
      setTrials([...trials, newTrial])
    }
  }

  const moveTrial = (id: number, direction: 'up' | 'down') => {
    const index = trials.findIndex(t => t.id === id)
    if (index === -1) return

    const newTrials = [...trials]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    
    if (targetIndex >= 0 && targetIndex < trials.length) {
      [newTrials[index], newTrials[targetIndex]] = [newTrials[targetIndex], newTrials[index]]
      setTrials(newTrials)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar - Component Library */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-80 bg-card border-r flex flex-col"
        >
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold mb-2">Component Library</h2>
            <p className="text-sm text-muted-foreground">
              Drag components to build your experiment
            </p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid gap-3">
              {componentTypes.map((component) => (
                <motion.div
                  key={component.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <component.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{component.name}</h3>
                          <p className="text-xs text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="h-16 border-b bg-background flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Experiment Builder</h1>
              <Badge variant="secondary">Draft</Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(!isPreviewMode)}>
                <Eye className="mr-2 h-4 w-4" />
                {isPreviewMode ? 'Edit' : 'Preview'}
              </Button>
              <Button size="sm">
                <Play className="mr-2 h-4 w-4" />
                Run Experiment
              </Button>
            </div>
          </div>

          {/* Experiment Canvas */}
          <div className="flex-1 flex">
            {/* Trial List */}
            <div className="w-80 border-r bg-muted/20">
              <div className="p-4 border-b">
                <h3 className="font-semibold mb-2">Experiment Flow</h3>
                <p className="text-sm text-muted-foreground">
                  {trials.length} trials • ~{Math.round(trials.reduce((sum, trial) => sum + trial.duration, 0) / 1000 / 60)} min
                </p>
              </div>
              
              <div className="p-4 space-y-2">
                {trials.map((trial, index) => (
                  <motion.div
                    key={trial.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all ${
                        selectedTrial === trial.id 
                          ? 'ring-2 ring-primary shadow-md' 
                          : 'hover:shadow-sm'
                      }`}
                      onClick={() => setSelectedTrial(trial.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium">
                              {trial.order}
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{trial.name}</h4>
                              <p className="text-xs text-muted-foreground">
                                {trial.type} • {trial.duration / 1000}s
                              </p>
                            </div>
                          </div>
                          
                          {selectedTrial === trial.id && (
                            <div className="flex items-center space-x-1">
                              <Button variant="ghost" size="sm" onClick={(e) => {
                                e.stopPropagation()
                                moveTrial(trial.id, 'up')
                              }}>
                                ↑
                              </Button>
                              <Button variant="ghost" size="sm" onClick={(e) => {
                                e.stopPropagation()
                                moveTrial(trial.id, 'down')
                              }}>
                                ↓
                              </Button>
                              <Button variant="ghost" size="sm" onClick={(e) => {
                                e.stopPropagation()
                                duplicateTrial(trial.id)
                              }}>
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={(e) => {
                                e.stopPropagation()
                                deleteTrial(trial.id)
                              }}>
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => addTrial('stimulus')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Trial
                </Button>
              </div>
            </div>

            {/* Main Canvas */}
            <div className="flex-1 flex flex-col">
              {selectedTrial ? (
                <div className="flex-1 p-6">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>
                            {trials.find(t => t.id === selectedTrial)?.name}
                          </CardTitle>
                          <CardDescription>
                            Configure this trial's settings and behavior
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Trial Configuration */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Duration (ms)</label>
                          <input 
                            type="number" 
                            className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                            defaultValue={trials.find(t => t.id === selectedTrial)?.duration}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Type</label>
                          <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                            <option value="stimulus">Stimulus</option>
                            <option value="text">Text</option>
                            <option value="response">Response</option>
                            <option value="timer">Timer</option>
                          </select>
                        </div>
                      </div>

                      {/* Visual Preview */}
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                            <Target className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Trial Preview</h3>
                          <p className="text-muted-foreground">
                            This is how your trial will appear to participants
                          </p>
                          <Button variant="outline">
                            <Play className="mr-2 h-4 w-4" />
                            Preview Trial
                          </Button>
                        </div>
                      </div>

                      {/* Advanced Settings */}
                      <div className="space-y-4">
                        <h4 className="font-medium">Advanced Settings</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Randomization</label>
                            <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                              <option value="none">None</option>
                              <option value="trial">Trial Order</option>
                              <option value="stimulus">Stimulus Order</option>
                              <option value="both">Both</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Condition</label>
                            <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                              <option value="control">Control</option>
                              <option value="experimental">Experimental</option>
                              <option value="practice">Practice</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <Beaker className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Select a Trial to Configure</h3>
                    <p className="text-muted-foreground mb-4">
                      Choose a trial from the sidebar to start configuring your experiment
                    </p>
                    <Button onClick={() => addTrial('stimulus')}>
                      <Plus className="mr-2 h-4 w-4" />
                      Create First Trial
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

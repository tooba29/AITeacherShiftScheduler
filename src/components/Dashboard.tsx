import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Plus, AlertCircle, CheckCircle, Clock, Users, TrendingUp, Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { periods, weekDays, mockSchedule, ScheduleEntry } from '@/lib/utils'
import ReliefRequestModal from './ReliefRequestModal'

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getScheduleEntry = (day: string, period: number): ScheduleEntry | undefined => {
    return mockSchedule.find(entry => entry.day === day && entry.period === period)
  }

  const getStatusColor = (status: ScheduleEntry['status'] | undefined) => {
    switch (status) {
      case 'assigned':
        return 'bg-gradient-to-br from-green-50 to-emerald-50 text-green-800 border-green-200/50 shadow-green-100/50'
      case 'conflict':
        return 'bg-gradient-to-br from-red-50 to-rose-50 text-red-800 border-red-200/50 shadow-red-100/50'
      case 'requested':
        return 'bg-gradient-to-br from-yellow-50 to-amber-50 text-yellow-800 border-yellow-200/50 shadow-yellow-100/50'
      case 'available':
        return 'bg-gradient-to-br from-gray-50 to-slate-50 text-gray-600 border-gray-200/50 shadow-gray-100/50'
      default:
        return 'bg-gradient-to-br from-white to-gray-50 text-gray-400 border-gray-200/50 hover:border-blue-200/50 hover:shadow-blue-100/50 hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-indigo-50/30'
    }
  }

  const getStatusIcon = (status: ScheduleEntry['status'] | undefined) => {
    switch (status) {
      case 'assigned':
        return <CheckCircle className="h-4 w-4" />
      case 'conflict':
        return <AlertCircle className="h-4 w-4" />
      case 'requested':
        return <Clock className="h-4 w-4" />
      default:
        return null
    }
  }

  // Calculate summary stats
  const totalSlots = weekDays.length * periods.length
  const assignedSlots = mockSchedule.filter(entry => entry.status === 'assigned').length
  const requestedSlots = mockSchedule.filter(entry => entry.status === 'requested').length
  const conflictSlots = mockSchedule.filter(entry => entry.status === 'conflict').length

  const stats = [
    {
      title: 'Total Periods',
      value: totalSlots,
      icon: CalendarIcon,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      change: '+2.5%',
      changeType: 'positive'
    },
    {
      title: 'Assigned',
      value: assignedSlots,
      icon: CheckCircle,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      change: '+12.5%',
      changeType: 'positive'
    },
    {
      title: 'Pending',
      value: requestedSlots,
      icon: Clock,
      gradient: 'from-yellow-500 to-amber-600',
      bgGradient: 'from-yellow-50 to-amber-50',
      change: '-5.2%',
      changeType: 'negative'
    },
    {
      title: 'Conflicts',
      value: conflictSlots,
      icon: AlertCircle,
      gradient: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-50 to-rose-50',
      change: '-18.1%',
      changeType: 'positive'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Relief Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Week of {new Date().toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live updates enabled</span>
          </div>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          size="lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Relief Request
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className={cn(
            "modern-card animate-fade-in border-0 shadow-xl",
            `bg-gradient-to-br ${stat.bgGradient}`
          )} style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className={cn(
                      "h-4 w-4",
                      stat.changeType === 'positive' ? "text-green-600" : "text-red-600"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      stat.changeType === 'positive' ? "text-green-600" : "text-red-600"
                    )}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">vs last week</span>
                  </div>
                </div>
                <div className={cn(
                  "p-3 rounded-xl shadow-lg",
                  `bg-gradient-to-r ${stat.gradient}`
                )}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Schedule Grid */}
      <Card className="modern-card border-0 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Weekly Relief Schedule
              </CardTitle>
              <p className="text-gray-600 mt-1">Click any cell to manage relief assignments</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Real-time sync</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Header Row */}
              <div className="grid grid-cols-6 gap-3 mb-6">
                <div className="p-4 text-sm font-semibold text-gray-900 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200">
                  Period
                </div>
                {weekDays.map((day, index) => (
                  <div key={day} className={cn(
                    "p-4 text-sm font-semibold text-center rounded-lg border transition-all duration-300",
                    "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 border-blue-200",
                    "hover:shadow-md hover:scale-105"
                  )} style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="font-bold">{day}</div>
                    <div className="text-xs text-blue-600 mt-1">
                      {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Grid */}
              <div className="space-y-3">
                {periods.map((period, periodIndex) => (
                  <div key={period.id} className="grid grid-cols-6 gap-3 animate-fade-in" style={{ animationDelay: `${periodIndex * 0.1}s` }}>
                    {/* Period Info */}
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200 shadow-sm">
                      <div className="text-sm font-semibold text-gray-900">{period.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{period.time}</div>
                    </div>

                    {/* Daily Slots */}
                    {weekDays.map((day, dayIndex) => {
                      const entry = getScheduleEntry(day, period.id)
                      return (
                        <div
                          key={`${day}-${period.id}`}
                          className={cn(
                            'schedule-cell p-4 min-h-[100px] transition-all duration-300 cursor-pointer shadow-md',
                            getStatusColor(entry?.status),
                            entry?.status && 'status-indicator',
                            entry?.status === 'assigned' && 'status-assigned',
                            entry?.status === 'pending' && 'status-pending',
                            entry?.status === 'conflict' && 'status-conflict'
                          )}
                          onClick={() => !entry?.teacher && setIsModalOpen(true)}
                          style={{ animationDelay: `${(periodIndex * weekDays.length + dayIndex) * 0.02}s` }}
                        >
                          <div className="flex items-start justify-between h-full">
                            <div className="flex-1 space-y-2">
                              {entry?.teacher && (
                                <div className="text-sm font-semibold">
                                  {entry.teacher}
                                </div>
                              )}
                              {entry?.absentTeacher && (
                                <div className="text-xs opacity-75">
                                  <span className="font-medium">Covering:</span> {entry.absentTeacher}
                                </div>
                              )}
                              {entry?.reason && (
                                <div className="text-xs opacity-60 italic">
                                  {entry.reason}
                                </div>
                              )}
                              {!entry && (
                                <div className="text-xs opacity-50 text-center h-full flex items-center justify-center">
                                  <div className="space-y-1">
                                    <Plus className="h-5 w-5 mx-auto opacity-30" />
                                    <div>Click to assign</div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="ml-2 flex-shrink-0">
                              {getStatusIcon(entry?.status)}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="modern-card border-0">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-200 rounded-md"></div>
              <span className="font-medium">Assigned</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-200 rounded-md"></div>
              <span className="font-medium">Pending Request</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-200 rounded-md"></div>
              <span className="font-medium">Conflict</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 rounded-md"></div>
              <span className="font-medium">Available</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <ReliefRequestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Dashboard 
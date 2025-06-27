import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { mockTeachers } from '@/lib/utils'
import { Users, Mail, Phone, MapPin, Calendar, Plus, Filter, Search } from 'lucide-react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'

const Teachers: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredTeachers = mockTeachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const departments = [...new Set(mockTeachers.map(teacher => teacher.department))]
  
  const departmentColors = {
    'Mathematics': 'from-blue-500 to-blue-600',
    'English': 'from-green-500 to-green-600',
    'Science': 'from-purple-500 to-purple-600',
    'History': 'from-orange-500 to-orange-600',
    'Physical Education': 'from-red-500 to-red-600',
    'Art': 'from-pink-500 to-pink-600',
    'Music': 'from-indigo-500 to-indigo-600',
    'Spanish': 'from-yellow-500 to-yellow-600'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Teachers Directory
          </h1>
          <p className="text-gray-600 text-lg">
            Manage teacher information and availability across departments
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{mockTeachers.length} Total Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{departments.length} Departments</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search teachers or departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 h-11 bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" size="default" className="h-11">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="default" className="h-11">
            <Plus className="h-4 w-4 mr-2" />
            Add Teacher
          </Button>
        </div>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {departments.map((dept, index) => {
          const teacherCount = mockTeachers.filter(t => t.department === dept).length
          const gradient = departmentColors[dept] || 'from-gray-500 to-gray-600'
          return (
            <Card key={dept} className={cn(
              "modern-card border-0 shadow-lg animate-fade-in",
              `bg-gradient-to-br ${gradient.replace('to-', 'to-').replace('from-', 'from-').replace('-500', '-50').replace('-600', '-100')}`
            )} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-4 text-center">
                <div className={cn(
                  "w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center",
                  `bg-gradient-to-r ${gradient}`
                )}>
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900">{teacherCount}</div>
                <div className="text-xs text-gray-600 font-medium truncate">{dept}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher, index) => {
          const gradient = departmentColors[teacher.department] || 'from-gray-500 to-gray-600'
          const initials = teacher.name.split(' ').map(n => n[0]).join('')
          
          return (
            <Card key={teacher.id} className="modern-card border-0 shadow-lg hover:shadow-2xl animate-fade-in group" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg",
                      `bg-gradient-to-r ${gradient}`
                    )}>
                      {initials}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                        {teacher.name}
                      </CardTitle>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-xs font-medium border-2 mt-1",
                          `text-${gradient.split('-')[1]}-700 border-${gradient.split('-')[1]}-200 bg-${gradient.split('-')[1]}-50`
                        )}
                      >
                        {teacher.department}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <Mail className="h-4 w-4 mr-3 text-blue-500" />
                    <span className="truncate">
                      {teacher.name.toLowerCase().replace(/\s+/g, '.')}@school.edu
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <Phone className="h-4 w-4 mr-3 text-green-500" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-3 text-orange-500" />
                    <span>Room {100 + teacher.id * 3}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-600">Availability:</span>
                    <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                      Available
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      View Schedule
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 text-xs">
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No teachers found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}

export default Teachers 
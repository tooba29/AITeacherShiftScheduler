import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { mockTeachers, periods, weekDays } from '@/lib/utils'
import { UserCheck, Calendar, Clock, FileText, Send, X } from 'lucide-react'

interface ReliefRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

const ReliefRequestModal: React.FC<ReliefRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    absentTeacher: '',
    date: '',
    period: '',
    reason: '',
    notes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would normally submit to a backend
    console.log('Relief request submitted:', formData)
    
    // Show success message (in a real app, you'd handle this better)
    alert('Relief request submitted successfully!')
    
    // Reset form and close modal
    setFormData({
      absentTeacher: '',
      date: '',
      period: '',
      reason: '',
      notes: ''
    })
    setIsSubmitting(false)
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Generate date options for the next 30 days
  const getDateOptions = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Only include weekdays (Monday-Friday)
      if (date.getDay() >= 1 && date.getDay() <= 5) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        })
      }
    }
    return dates
  }

  const reasonOptions = [
    { value: 'sick-leave', label: 'Sick Leave', icon: '🤒' },
    { value: 'medical-appointment', label: 'Medical Appointment', icon: '🏥' },
    { value: 'professional-development', label: 'Professional Development', icon: '📚' },
    { value: 'personal-leave', label: 'Personal Leave', icon: '🏠' },
    { value: 'family-emergency', label: 'Family Emergency', icon: '👨‍👩‍👧‍👦' },
    { value: 'jury-duty', label: 'Jury Duty', icon: '⚖️' },
    { value: 'other', label: 'Other', icon: '📝' }
  ]

  const isFormValid = formData.absentTeacher && formData.date && formData.period && formData.reason

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-md border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <div>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              New Relief Request
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Submit a request for teacher relief coverage. All fields marked with * are required.
            </DialogDescription>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Absent Teacher */}
            <div className="space-y-3">
              <Label htmlFor="absentTeacher" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <UserCheck className="h-4 w-4 text-blue-600" />
                Absent Teacher *
              </Label>
              <Select 
                value={formData.absentTeacher} 
                onValueChange={(value) => handleInputChange('absentTeacher', value)}
              >
                <SelectTrigger className="h-12 bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200">
                  <SelectValue placeholder="Select teacher who will be absent" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-0 shadow-xl">
                  {mockTeachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.name} className="py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium">{teacher.name}</div>
                          <div className="text-xs text-gray-500">{teacher.department}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="space-y-3">
              <Label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Calendar className="h-4 w-4 text-green-600" />
                Date *
              </Label>
              <Select 
                value={formData.date} 
                onValueChange={(value) => handleInputChange('date', value)}
              >
                <SelectTrigger className="h-12 bg-white/50 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-0 shadow-xl max-h-60">
                  {getDateOptions().map((date) => (
                    <SelectItem key={date.value} value={date.value} className="py-2">
                      {date.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Period */}
            <div className="space-y-3">
              <Label htmlFor="period" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Clock className="h-4 w-4 text-orange-600" />
                Period *
              </Label>
              <Select 
                value={formData.period} 
                onValueChange={(value) => handleInputChange('period', value)}
              >
                <SelectTrigger className="h-12 bg-white/50 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-200">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-0 shadow-xl">
                  {periods.map((period) => (
                    <SelectItem key={period.id} value={period.id.toString()} className="py-3">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">{period.name}</span>
                        <span className="text-sm text-gray-500 ml-2">{period.time}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reason */}
            <div className="space-y-3">
              <Label htmlFor="reason" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText className="h-4 w-4 text-purple-600" />
                Reason for Absence *
              </Label>
              <Select 
                value={formData.reason} 
                onValueChange={(value) => handleInputChange('reason', value)}
              >
                <SelectTrigger className="h-12 bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-0 shadow-xl">
                  {reasonOptions.map((reason) => (
                    <SelectItem key={reason.value} value={reason.value} className="py-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{reason.icon}</span>
                        <span>{reason.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-3">
            <Label htmlFor="notes" className="text-sm font-semibold text-gray-700">
              Additional Notes
            </Label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Any special instructions, materials needed, or other relevant information..."
              className="h-12 bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <DialogFooter className="flex gap-3 pt-6 border-t border-gray-100">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1 h-12 border-gray-200 hover:bg-gray-50 transition-all duration-200"
              disabled={isSubmitting}
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!isFormValid || isSubmitting}
              className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Request
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ReliefRequestModal 
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const mockRequests = [
  {
    id: 1,
    absentTeacher: 'Dr. Brown',
    date: '2024-01-15',
    period: 'Period 3',
    reason: 'Medical appointment',
    status: 'pending',
    submittedBy: 'Admin',
    submittedAt: '2024-01-10T09:30:00Z',
    notes: 'Science lab class, equipment list attached'
  },
  {
    id: 2,
    absentTeacher: 'Ms. Anderson',
    date: '2024-01-16',
    period: 'Period 5',
    reason: 'Professional development',
    status: 'approved',
    submittedBy: 'Admin',
    submittedAt: '2024-01-08T14:15:00Z',
    assignedTo: 'Ms. Johnson',
    notes: 'Art class, materials ready'
  },
  {
    id: 3,
    absentTeacher: 'Mr. Wilson',
    date: '2024-01-17',
    period: 'Period 2',
    reason: 'Sick leave',
    status: 'rejected',
    submittedBy: 'Admin',
    submittedAt: '2024-01-12T11:00:00Z',
    notes: 'PE class, outdoor activity planned'
  },
  {
    id: 4,
    absentTeacher: 'Ms. Garcia',
    date: '2024-01-18',
    period: 'Period 7',
    reason: 'Family emergency',
    status: 'pending',
    submittedBy: 'Admin',
    submittedAt: '2024-01-13T16:45:00Z',
    notes: 'Spanish class, quiz scheduled'
  }
]

const Requests: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4" />
      case 'rejected':
        return <XCircle className="h-4 w-4" />
      case 'pending':
        return <Clock className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relief Requests</h1>
          <p className="text-gray-600 mt-1">
            Manage and track teacher relief requests
          </p>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {mockRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  Relief Request #{request.id}
                  <Badge 
                    variant="outline" 
                    className={getStatusColor(request.status)}
                  >
                    <span className="flex items-center gap-1">
                      {getStatusIcon(request.status)}
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </Badge>
                </CardTitle>
                <div className="flex gap-2">
                  {request.status === 'pending' && (
                    <>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        Reject
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Approve
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Absent Teacher:</span>
                    <span className="text-sm text-gray-900">{request.absentTeacher}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Date:</span>
                    <span className="text-sm text-gray-900">
                      {new Date(request.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Period:</span>
                    <span className="text-sm text-gray-900">{request.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Reason:</span>
                    <span className="text-sm text-gray-900">{request.reason}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Submitted By:</span>
                    <span className="text-sm text-gray-900">{request.submittedBy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Submitted At:</span>
                    <span className="text-sm text-gray-900">
                      {new Date(request.submittedAt).toLocaleDateString('en-US')}
                    </span>
                  </div>
                  {request.assignedTo && (
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Assigned To:</span>
                      <span className="text-sm text-gray-900">{request.assignedTo}</span>
                    </div>
                  )}
                </div>
              </div>
              {request.notes && (
                <div className="mt-4 pt-4 border-t">
                  <span className="text-sm font-medium text-gray-600">Notes:</span>
                  <p className="text-sm text-gray-900 mt-1">{request.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Requests 
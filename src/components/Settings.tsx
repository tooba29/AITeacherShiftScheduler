import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Settings as SettingsIcon, School, Users, Clock, Bell } from 'lucide-react'

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            Configure your relief scheduling preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* School Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5" />
              School Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School Name</Label>
              <Input id="schoolName" defaultValue="Lincoln High School" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="123 Education St, Learning City, LC 12345" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="(555) 123-4567" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Schedule Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Schedule Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="schoolStart">School Start Time</Label>
              <Input id="schoolStart" type="time" defaultValue="08:00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolEnd">School End Time</Label>
              <Input id="schoolEnd" type="time" defaultValue="15:30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="periodLength">Period Length (minutes)</Label>
              <Input id="periodLength" type="number" defaultValue="45" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifs">Email Notifications</Label>
                <p className="text-sm text-gray-600">Receive email alerts for new requests</p>
              </div>
              <input type="checkbox" id="emailNotifs" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smsNotifs">SMS Notifications</Label>
                <p className="text-sm text-gray-600">Receive text alerts for urgent requests</p>
              </div>
              <input type="checkbox" id="smsNotifs" className="rounded" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reminderTime">Reminder Time (hours before)</Label>
              <Input id="reminderTime" type="number" defaultValue="24" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input id="adminEmail" type="email" defaultValue="admin@school.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxRequests">Max Requests per Day</Label>
              <Input id="maxRequests" type="number" defaultValue="10" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoAssign">Auto-assign Relief Teachers</Label>
                <p className="text-sm text-gray-600">Automatically assign based on availability</p>
              </div>
              <input type="checkbox" id="autoAssign" className="rounded" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Settings 
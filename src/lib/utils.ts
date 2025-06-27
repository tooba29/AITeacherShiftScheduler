import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mock data for the teacher relief scheduler
export const mockTeachers = [
  { id: 1, name: "Ms. Johnson", department: "Mathematics" },
  { id: 2, name: "Mr. Smith", department: "English" },
  { id: 3, name: "Dr. Brown", department: "Science" },
  { id: 4, name: "Ms. Davis", department: "History" },
  { id: 5, name: "Mr. Wilson", department: "Physical Education" },
  { id: 6, name: "Ms. Anderson", department: "Art" },
  { id: 7, name: "Mr. Thompson", department: "Music" },
  { id: 8, name: "Ms. Garcia", department: "Spanish" },
]

export const periods = [
  { id: 1, name: "Period 1", time: "8:00-8:45" },
  { id: 2, name: "Period 2", time: "8:50-9:35" },
  { id: 3, name: "Period 3", time: "9:40-10:25" },
  { id: 4, name: "Period 4", time: "10:30-11:15" },
  { id: 5, name: "Period 5", time: "11:20-12:05" },
  { id: 6, name: "Period 6", time: "12:10-12:55" },
  { id: 7, name: "Period 7", time: "1:00-1:45" },
  { id: 8, name: "Period 8", time: "1:50-2:35" },
]

export const weekDays = [
  "Monday",
  "Tuesday", 
  "Wednesday",
  "Thursday",
  "Friday"
]

// Mock schedule data
export interface ScheduleEntry {
  day: string;
  period: number;
  teacher?: string;
  status: 'available' | 'assigned' | 'conflict' | 'requested';
  absentTeacher?: string;
  reason?: string;
}

export const mockSchedule: ScheduleEntry[] = [
  { day: "Monday", period: 1, teacher: "Ms. Johnson", status: "assigned" },
  { day: "Monday", period: 2, status: "available" },
  { day: "Monday", period: 3, teacher: "Mr. Smith", status: "conflict" },
  { day: "Monday", period: 4, status: "requested", absentTeacher: "Dr. Brown", reason: "Medical appointment" },
  { day: "Tuesday", period: 1, teacher: "Ms. Davis", status: "assigned" },
  { day: "Tuesday", period: 2, status: "available" },
  { day: "Tuesday", period: 5, teacher: "Mr. Wilson", status: "assigned" },
  { day: "Wednesday", period: 3, status: "requested", absentTeacher: "Ms. Anderson", reason: "Professional development" },
  { day: "Thursday", period: 1, teacher: "Mr. Thompson", status: "assigned" },
  { day: "Thursday", period: 4, status: "available" },
  { day: "Friday", period: 2, teacher: "Ms. Garcia", status: "assigned" },
  { day: "Friday", period: 6, status: "conflict" },
] 
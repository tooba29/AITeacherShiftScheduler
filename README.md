# Teacher Relief Scheduler

A modern, responsive web application for managing teacher relief and substitute scheduling in schools. Built with React, TypeScript, TailwindCSS, and Shadcn/UI components.

## 🌟 Features

### Dashboard View
- **Weekly Calendar Grid**: Visual schedule showing Monday-Friday periods
- **Color-coded Status Indicators**:
  - 🟢 Green: Assigned relief teachers
  - 🟡 Yellow: Pending requests
  - 🔴 Red: Conflicts or issues
  - ⚪ Gray: Available slots
- **Summary Statistics**: Quick overview of total periods, assignments, pending requests, and conflicts
- **Interactive Cells**: Click on empty slots to create new relief requests

### Relief Request Management
- **Smart Request Modal**: Easy-to-use form for submitting relief requests
- **Required Fields**: Absent teacher, date, period, and reason selection
- **Automated Validation**: Ensures all necessary information is provided
- **Reason Categories**: Pre-defined options like sick leave, medical appointments, professional development, etc.

### Teacher Management
- **Teacher Directory**: Complete list of all teaching staff
- **Department Organization**: Teachers grouped by subject departments
- **Contact Information**: Email and phone details for each teacher
- **Availability Status**: Real-time availability indicators

### Request Tracking
- **Request History**: Complete log of all relief requests
- **Status Management**: Approve, reject, or modify pending requests
- **Detailed Information**: Full context including notes, submission details, and assignments
- **Batch Actions**: Efficient handling of multiple requests

### Settings & Configuration
- **School Information**: Customize school details and contact information
- **Schedule Settings**: Configure school hours, period lengths, and timing
- **Notification Preferences**: Email and SMS alert configurations
- **User Management**: Admin controls and permissions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd teacher-relief-scheduler
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## 🎨 Design System

### Color Coding
- **Blue**: Primary actions and navigation
- **Green**: Success states and assignments
- **Yellow**: Pending or attention-required items
- **Red**: Conflicts, errors, or urgent items
- **Gray**: Available, neutral, or inactive states

### Typography
- **Headers**: Bold, clear hierarchy for page titles and sections
- **Body Text**: Readable font sizes with appropriate contrast
- **Labels**: Consistent styling for form elements and data labels

### Layout
- **Responsive Grid**: Adapts to desktop, tablet, and mobile screens
- **Card-based Design**: Clean, organized information presentation
- **Navigation**: Intuitive sidebar with clear page indicators

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard with sidebar navigation
- **Tablet**: Optimized grid layouts with touch-friendly controls
- **Mobile**: Collapsible navigation and stacked content

## 🔧 Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS for utility-first styling
- **Components**: Shadcn/UI for consistent, accessible components
- **Icons**: Lucide React for modern, consistent iconography
- **Routing**: React Router for client-side navigation
- **Build Tool**: Vite for fast development and building

## 📄 Mock Data

The application includes realistic mock data for demonstration:
- **8 Sample Teachers** across different departments
- **8 Daily Periods** with realistic time slots
- **Sample Schedule Entries** showing various status types
- **Relief Requests** in different stages of processing

## 🎯 Use Cases

### For School Administrators
- Quick visual overview of weekly relief coverage
- Easy request submission and approval workflow
- Teacher availability and contact management
- Comprehensive reporting and tracking

### For Administrative Staff
- Streamlined relief teacher assignments
- Automated notifications and reminders
- Conflict detection and resolution
- Historical request tracking

### For Teachers
- Simple absence request submission (future enhancement)
- Relief assignment notifications
- Schedule visibility and updates

## 🚧 Future Enhancements

### Planned Features
- **Backend Integration**: Real-time data persistence
- **User Authentication**: Role-based access control
- **Email Notifications**: Automated alerts and reminders
- **Mobile App**: Native iOS and Android applications
- **Reporting**: Advanced analytics and scheduling insights
- **Calendar Integration**: Sync with Google Calendar, Outlook
- **Bulk Operations**: Import/export functionality

### Technical Improvements
- **State Management**: Redux or Zustand for complex state
- **API Integration**: RESTful or GraphQL backend
- **Testing**: Comprehensive unit and integration tests
- **Performance**: Optimization for large datasets
- **Accessibility**: Enhanced WCAG compliance

## 📞 Support

For questions, suggestions, or support regarding the Teacher Relief Scheduler:

- **Documentation**: Review this README and inline code comments
- **Issues**: Report bugs or request features through appropriate channels
- **Customization**: The application is designed to be easily customizable for different school systems

## 📋 License

This project is created as a demonstration of modern web application development for educational administration tools.

---

**Built with ❤️ for educators and school administrators** 
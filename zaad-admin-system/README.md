# Zaad Admin System

A modern, comprehensive admin dashboard web application designed specifically for Holy Qur'an schools. Built with React, Vite, and Tailwind CSS.

## 🎯 Features

### 📊 Dashboard
- Overview cards showing total students, teachers, fees collected, and attendance rate
- Recent student registrations and fee payments
- Quick action buttons for common tasks

### 👥 Student Management
- View all students in a searchable, filterable table
- Add new students with form validation
- Edit existing student information
- Filter by class, status, and search by name
- Student status tracking (Active/Inactive)

### 👨‍🏫 Staff Management
- Manage teachers and staff information
- Subject/role assignment
- Contact information management
- Add, edit, and delete staff members

### 💰 Fee Management
- Track fee payments with detailed records
- Payment status monitoring (Paid/Pending/Overdue)
- Multiple payment methods support
- Summary cards showing financial overview
- Add new fee payments with comprehensive forms

### 📅 Attendance Management
- Daily attendance marking by class
- Visual status indicators (Present/Absent/Late)
- Attendance history and statistics
- Attendance rate calculations
- Filter by date and class

### 📊 Reports & Analytics
- Generate various reports (Students, Fees, Attendance, Staff)
- Export functionality (PDF, Excel, CSV)
- Statistical summaries for each report type
- Date range filtering

### ⚙️ Settings
- School information configuration
- Academic year and term settings
- Fee structure management
- System preferences (language, timezone, currency)
- Logo upload functionality

### 🔐 Authentication
- Simple admin login system
- Session management with localStorage
- Secure route protection

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd zaad-admin-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to**
   ```
   http://localhost:5173
   ```

### Login Credentials
- **Username**: admin
- **Password**: admin123

## 📁 Project Structure

```
zaad-admin-system/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Button.jsx       # Reusable button component
│   │   ├── Card.jsx         # Card container component
│   │   └── Table.jsx        # Table components
│   ├── layouts/             # Layout components
│   │   └── Layout.jsx       # Main layout with sidebar
│   ├── pages/               # Page components
│   │   ├── DashboardPage.jsx
│   │   ├── StudentPage.jsx
│   │   ├── StaffPage.jsx
│   │   ├── FeesPage.jsx
│   │   ├── AttendancePage.jsx
│   │   ├── ReportsPage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── LoginPage.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Tailwind CSS imports
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Green (representing Islamic values)
- **Secondary**: Gray tones for neutral elements
- **Status Colors**: 
  - Green for active/paid/present
  - Red for inactive/overdue/absent
  - Yellow for pending/late

### UI Components
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Interface**: Clean, professional design
- **Consistent Styling**: Uniform components across all pages
- **Icons**: Lucide React icons for clear visual communication

### Navigation
- **Sidebar Navigation**: Easy access to all sections
- **Active State Indication**: Clear visual feedback
- **Responsive Sidebar**: Adapts to different screen sizes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📝 Usage Guide

### Adding Students
1. Navigate to Students page
2. Click "Add Student" button
3. Fill in required information
4. Click "Add Student" to save

### Managing Attendance
1. Go to Attendance page
2. Select date and class
3. Mark each student as Present, Late, or Absent
4. Click "Save Attendance"

### Generating Reports
1. Visit Reports page
2. Select report type
3. Choose date range
4. Export in desired format (PDF, Excel, CSV)

### Configuring Settings
1. Access Settings page
2. Update school information
3. Set academic year dates
4. Configure fee structure
5. Save each section individually

## 🌟 Key Features for Islamic Schools

- **Islamic Naming**: Sample data uses common Islamic names
- **Relevant Subjects**: Islamic Studies, Quran Recitation, Arabic Language, Hadith, Fiqh
- **Cultural Sensitivity**: Design and content appropriate for Islamic education
- **Flexible Settings**: Accommodates different Islamic school structures

## 🔮 Future Enhancements

- Real database integration
- Advanced reporting with charts
- Email notifications
- Student portal
- Parent communication features
- Gradebook functionality
- Library management
- Transport management

## 📞 Support

This is a demo application built for educational purposes. For customization or production deployment, consider:

- Database integration (MongoDB, PostgreSQL, MySQL)
- Backend API development (Node.js, Python, PHP)
- User authentication system
- Real-time features (Socket.io)
- Advanced reporting libraries

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for Islamic Education**

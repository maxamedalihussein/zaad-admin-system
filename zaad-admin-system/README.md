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

## 🎨 Enhanced Design Features

### 🌟 **Premium Visual Design**
- **Islamic Green Theme**: Beautiful gradient-based green color scheme
- **Modern Animations**: Smooth fade-in, slide-in, and hover animations
- **Glassmorphism Effects**: Semi-transparent backgrounds with backdrop blur
- **Professional Typography**: Google Fonts Inter with gradient text effects

### 🎨 **Advanced Styling**
- **Custom CSS Animations**: Hardware-accelerated transitions and micro-interactions
- **Responsive Grid System**: Adaptive layouts for all screen sizes
- **Enhanced Components**: Cards, buttons, and forms with hover effects
- **Loading States**: Elegant loading animations and progress indicators

### Color Scheme
- **Primary**: Islamic Green gradients (#10b981 to #059669)
- **Zaad Colors**: Custom 50-900 green color scale
- **Islamic Palette**: Gold, Teal, and Cream accent colors
- **Status Colors**: Semantic colors with gradient backgrounds
  - Green gradients for active/paid/present states
  - Red gradients for inactive/overdue/absent states
  - Yellow gradients for pending/late states

### UI Components
- **Enhanced Cards**: Shadow effects, hover animations, and gradient accents
- **Interactive Buttons**: Multiple variants with gradient backgrounds and lift effects
- **Advanced Tables**: Hover highlighting, gradient headers, and responsive design
- **Form Controls**: Focus states, hover effects, and enhanced validation styling
- **Modal Dialogs**: Backdrop blur, smooth animations, and mobile optimization

### Navigation
- **Animated Sidebar**: Glass effect background with colored icons
- **Active State Indicators**: Gradient backgrounds and left border accents
- **Mobile-Responsive**: Overlay navigation with smooth transitions
- **Hover Effects**: Subtle animations and color transitions
- **User Avatar**: Gradient background with status indicators

### 🕌 **Islamic Design Elements**
- **Cultural Sensitivity**: Colors and patterns appropriate for Islamic education
- **Geometric Patterns**: Subtle SVG-based Islamic geometric backgrounds
- **Respectful Aesthetics**: Professional design honoring Islamic values
- **Green Symbolism**: Primary use of green colors associated with Islam

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

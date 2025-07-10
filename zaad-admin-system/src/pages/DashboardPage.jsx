import { Users, UserCheck, DollarSign, TrendingUp, BookOpen, Calendar, Award, Bell } from 'lucide-react';
import Card from '../components/Card';

const DashboardPage = () => {
  // Mock data - in real app, this would come from API
  const stats = {
    totalStudents: 156,
    totalTeachers: 12,
    feesCollected: 45000,
    attendanceRate: 92
  };

  const StatCard = ({ title, value, icon: Icon, color, change, delay = 0 }) => {
    return (
      <div 
        className="card-stat hover-lift transition-bounce"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2 font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-800 mb-1">{value}</p>
            {change && (
              <p className="text-sm text-green-600 font-semibold flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{change}% from last month
              </p>
            )}
          </div>
          <div className={`p-4 rounded-2xl ${color} shadow-lg hover-scale`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="animate-fadeIn">
        <div className="flex items-center space-x-4 mb-2">
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
            <p className="text-gray-600">Welcome to Zaad Admin System - Holy Qur'an School Management</p>
          </div>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon={Users}
          color="bg-gradient-to-br from-blue-500 to-blue-600"
          change={5}
          delay={0}
        />
        <StatCard
          title="Total Teachers"
          value={stats.totalTeachers}
          icon={UserCheck}
          color="bg-gradient-to-br from-green-500 to-green-600"
          change={2}
          delay={100}
        />
        <StatCard
          title="Fees Collected"
          value={`$${stats.feesCollected.toLocaleString()}`}
          icon={DollarSign}
          color="bg-gradient-to-br from-yellow-500 to-yellow-600"
          change={12}
          delay={200}
        />
        <StatCard
          title="Attendance Rate"
          value={`${stats.attendanceRate}%`}
          icon={TrendingUp}
          color="bg-gradient-to-br from-purple-500 to-purple-600"
          change={3}
          delay={300}
        />
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card 
          title="Recent Student Registrations" 
          icon={Users}
          className="animate-fadeIn"
          style={{ animationDelay: '400ms' }}
        >
          <div className="space-y-4">
            {[
              { name: 'Ahmed Hassan', class: 'Class 5', date: '2024-01-15', avatar: 'AH' },
              { name: 'Fatima Ali', class: 'Class 3', date: '2024-01-14', avatar: 'FA' },
              { name: 'Omar Mohammed', class: 'Class 7', date: '2024-01-13', avatar: 'OM' },
              { name: 'Aisha Ibrahim', class: 'Class 2', date: '2024-01-12', avatar: 'AI' },
            ].map((student, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-200 hover-lift"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {student.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">{student.date}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full ml-auto mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card 
          title="Recent Fee Payments" 
          icon={DollarSign}
          className="animate-fadeIn"
          style={{ animationDelay: '500ms' }}
        >
          <div className="space-y-4">
            {[
              { student: 'Ahmed Hassan', amount: 250, date: '2024-01-15', status: 'paid' },
              { student: 'Fatima Ali', amount: 250, date: '2024-01-14', status: 'paid' },
              { student: 'Omar Mohammed', amount: 300, date: '2024-01-13', status: 'paid' },
              { student: 'Aisha Ibrahim', amount: 200, date: '2024-01-12', status: 'pending' },
            ].map((payment, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-200 hover-lift"
              >
                <div>
                  <p className="font-semibold text-gray-800">{payment.student}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    ${payment.amount}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">{payment.date}</span>
                  <div className={`mt-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    payment.status === 'paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {payment.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card 
        title="Quick Actions" 
        icon={Award}
        className="animate-fadeIn"
        style={{ animationDelay: '600ms' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: 'Add Student', color: 'from-blue-500 to-blue-600', bgColor: 'from-blue-50 to-blue-100' },
            { icon: UserCheck, label: 'Add Teacher', color: 'from-green-500 to-green-600', bgColor: 'from-green-50 to-green-100' },
            { icon: DollarSign, label: 'Record Payment', color: 'from-yellow-500 to-yellow-600', bgColor: 'from-yellow-50 to-yellow-100' },
            { icon: TrendingUp, label: 'View Reports', color: 'from-purple-500 to-purple-600', bgColor: 'from-purple-50 to-purple-100' },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <button 
                key={index}
                className={`p-6 text-center bg-gradient-to-br ${action.bgColor} hover:shadow-lg rounded-2xl transition-all duration-200 hover-lift group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{action.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Announcements */}
      <Card 
        title="School Announcements" 
        icon={Bell}
        className="animate-fadeIn"
        style={{ animationDelay: '700ms' }}
      >
        <div className="space-y-4">
          {[
            { title: 'New Semester Registration Open', date: '2024-01-15', type: 'info' },
            { title: 'Parent-Teacher Meeting Schedule', date: '2024-01-14', type: 'warning' },
            { title: 'Islamic Studies Competition', date: '2024-01-13', type: 'success' },
          ].map((announcement, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-green-100 rounded-r-xl hover-lift"
            >
              <div>
                <p className="font-semibold text-gray-800">{announcement.title}</p>
                <p className="text-sm text-gray-600">{announcement.date}</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
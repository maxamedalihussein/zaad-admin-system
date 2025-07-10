import { Users, UserCheck, DollarSign, TrendingUp } from 'lucide-react';
import Card from '../components/Card';

const DashboardPage = () => {
  // Mock data - in real app, this would come from API
  const stats = {
    totalStudents: 156,
    totalTeachers: 12,
    feesCollected: 45000,
    attendanceRate: 92
  };

  const StatCard = ({ title, value, icon: Icon, color, change }) => {
    return (
      <Card className="relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            {change && (
              <p className="text-sm text-green-600 mt-1">
                +{change}% from last month
              </p>
            )}
          </div>
          <div className={`p-4 rounded-full ${color}`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to Zaad Admin System - Holy Qur'an School Management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon={Users}
          color="bg-blue-500"
          change={5}
        />
        <StatCard
          title="Total Teachers"
          value={stats.totalTeachers}
          icon={UserCheck}
          color="bg-green-500"
          change={2}
        />
        <StatCard
          title="Fees Collected"
          value={`$${stats.feesCollected.toLocaleString()}`}
          icon={DollarSign}
          color="bg-yellow-500"
          change={12}
        />
        <StatCard
          title="Attendance Rate"
          value={`${stats.attendanceRate}%`}
          icon={TrendingUp}
          color="bg-purple-500"
          change={3}
        />
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Student Registrations">
          <div className="space-y-3">
            {[
              { name: 'Ahmed Hassan', class: 'Class 5', date: '2024-01-15' },
              { name: 'Fatima Ali', class: 'Class 3', date: '2024-01-14' },
              { name: 'Omar Mohammed', class: 'Class 7', date: '2024-01-13' },
              { name: 'Aisha Ibrahim', class: 'Class 2', date: '2024-01-12' },
            ].map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.class}</p>
                </div>
                <span className="text-sm text-gray-500">{student.date}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Recent Fee Payments">
          <div className="space-y-3">
            {[
              { student: 'Ahmed Hassan', amount: 250, date: '2024-01-15' },
              { student: 'Fatima Ali', amount: 250, date: '2024-01-14' },
              { student: 'Omar Mohammed', amount: 300, date: '2024-01-13' },
              { student: 'Aisha Ibrahim', amount: 200, date: '2024-01-12' },
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{payment.student}</p>
                  <p className="text-sm text-gray-600">${payment.amount}</p>
                </div>
                <span className="text-sm text-gray-500">{payment.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 text-center bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-blue-800">Add Student</span>
          </button>
          <button className="p-4 text-center bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <UserCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-green-800">Add Teacher</span>
          </button>
          <button className="p-4 text-center bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
            <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-yellow-800">Record Payment</span>
          </button>
          <button className="p-4 text-center bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-purple-800">View Reports</span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
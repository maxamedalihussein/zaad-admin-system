import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  DollarSign, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  BookOpen,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
    { path: '/students', label: 'Students', icon: Users, color: 'text-green-600' },
    { path: '/staff', label: 'Staff', icon: UserCheck, color: 'text-purple-600' },
    { path: '/fees', label: 'Fees', icon: DollarSign, color: 'text-yellow-600' },
    { path: '/attendance', label: 'Attendance', icon: Calendar, color: 'text-orange-600' },
    { path: '/reports', label: 'Reports', icon: FileText, color: 'text-indigo-600' },
    { path: '/settings', label: 'Settings', icon: Settings, color: 'text-gray-600' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 islamic-pattern">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gradient">Zaad</span>
              <div className="text-xs text-gray-600 font-medium">Admin System</div>
            </div>
          </div>
          
          {/* Close button for mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`sidebar-item group ${isActive ? 'active' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`p-2 rounded-lg ${isActive ? 'bg-white shadow-sm' : 'group-hover:bg-white group-hover:shadow-sm'} transition-all duration-200`}>
                  <Icon className={`h-5 w-5 ${isActive ? 'text-green-600' : item.color} transition-colors duration-200`} />
                </div>
                <span className="ml-3 font-medium">{item.label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute right-0 w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-l-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Holy Qur'an School</div>
            <div className="text-xs text-gray-400">Management System</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 relative z-30">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>

          {/* Page title */}
          <div className="flex-1 lg:flex-none">
            <h1 className="text-xl lg:text-2xl font-bold text-gradient">
              Holy Qur'an School Management
            </h1>
            <div className="hidden lg:block text-sm text-gray-500 mt-1">
              Comprehensive Islamic Education Administration
            </div>
          </div>
          
          {/* User menu */}
          <div className="flex items-center space-x-4">
            {/* Notification badge */}
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* User info */}
            <div className="hidden md:block text-right">
              <div className="text-sm font-medium text-gray-700">Admin User</div>
              <div className="text-xs text-gray-500">System Administrator</div>
            </div>
            
            {/* Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
            
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
              title="Logout"
            >
              <LogOut className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 pattern-bg">
          <div className="p-4 lg:p-6 animate-fadeIn">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>© 2024 Zaad Admin System</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Built with ❤️ for Islamic Education</span>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                System Online
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
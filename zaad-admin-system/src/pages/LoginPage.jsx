import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Lock, User, Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple mock authentication
    if (formData.username === 'admin' && formData.password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Use admin/admin123');
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 flex items-center justify-center px-4 islamic-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white bg-opacity-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-10 left-1/3 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Login Card */}
        <div className="glass-effect rounded-3xl shadow-2xl p-8 animate-slideIn">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg hover-scale">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gradient mb-2">Zaad Admin System</h2>
            <p className="text-gray-600 font-medium">Holy Qur'an School Management</p>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mt-4"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                  className="input-enhanced pl-12 focus-enhanced"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-enhanced pl-12 pr-12 focus-enhanced"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              loading={loading}
              disabled={!formData.username || !formData.password}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="text-center">
              <div className="text-sm font-semibold text-blue-800 mb-2">Demo Credentials</div>
              <div className="text-sm text-blue-700 space-y-1">
                <div><strong>Username:</strong> admin</div>
                <div><strong>Password:</strong> admin123</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 text-center">
            <div className="text-xs text-gray-500 mb-3">Manage your Islamic school with</div>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Students
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                Staff
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                Fees
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                Reports
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white text-sm opacity-80">
            Built with ❤️ for Islamic Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
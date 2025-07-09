import { useState } from 'react';
import { Save, Upload, Calendar, DollarSign, School, Users } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const SettingsPage = () => {
  const [schoolSettings, setSchoolSettings] = useState({
    schoolName: 'Holy Qur\'an School',
    address: '123 Islamic Center St, City, State 12345',
    phone: '+1-234-567-8900',
    email: 'info@zaadschool.com',
    website: 'www.zaadschool.com',
    principalName: 'Dr. Muhammad Ibrahim',
    establishedYear: '2015'
  });

  const [academicSettings, setAcademicSettings] = useState({
    currentYear: '2023-2024',
    termStartDate: '2024-01-15',
    termEndDate: '2024-06-15',
    schoolDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    classStartTime: '08:00',
    classEndTime: '15:00'
  });

  const [feeSettings, setFeeSettings] = useState({
    registrationFee: 100,
    monthlyTuition: 250,
    booksFee: 75,
    examFee: 50,
    lateFeePercentage: 5
  });

  const [systemSettings, setSystemSettings] = useState({
    language: 'English',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
    attendanceThreshold: 80
  });

  const handleSchoolSettingsChange = (field, value) => {
    setSchoolSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleAcademicSettingsChange = (field, value) => {
    setAcademicSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleFeeSettingsChange = (field, value) => {
    setFeeSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSystemSettingsChange = (field, value) => {
    setSystemSettings(prev => ({ ...prev, [field]: value }));
  };

  const saveSettings = (section) => {
    alert(`${section} settings saved successfully!`);
  };

  const handleLogoUpload = () => {
    alert('Logo upload functionality would be implemented here');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">School Settings</h1>
        <p className="text-gray-600">Configure school information and system preferences</p>
      </div>

      {/* School Information */}
      <Card title="School Information" className="relative">
        <div className="absolute top-4 right-4">
          <School className="h-6 w-6 text-green-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
            <input
              type="text"
              value={schoolSettings.schoolName}
              onChange={(e) => handleSchoolSettingsChange('schoolName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Principal Name</label>
            <input
              type="text"
              value={schoolSettings.principalName}
              onChange={(e) => handleSchoolSettingsChange('principalName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              value={schoolSettings.address}
              onChange={(e) => handleSchoolSettingsChange('address', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={schoolSettings.phone}
              onChange={(e) => handleSchoolSettingsChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={schoolSettings.email}
              onChange={(e) => handleSchoolSettingsChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <input
              type="url"
              value={schoolSettings.website}
              onChange={(e) => handleSchoolSettingsChange('website', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Established Year</label>
            <input
              type="number"
              value={schoolSettings.establishedYear}
              onChange={(e) => handleSchoolSettingsChange('establishedYear', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">School Logo</label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <School className="h-8 w-8 text-gray-400" />
              </div>
              <Button
                variant="secondary"
                onClick={handleLogoUpload}
                className="flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Upload Logo</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button onClick={() => saveSettings('School Information')} className="flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save School Info</span>
          </Button>
        </div>
      </Card>

      {/* Academic Year Settings */}
      <Card title="Academic Year Settings" className="relative">
        <div className="absolute top-4 right-4">
          <Calendar className="h-6 w-6 text-blue-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Academic Year</label>
            <input
              type="text"
              value={academicSettings.currentYear}
              onChange={(e) => handleAcademicSettingsChange('currentYear', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Term Start Date</label>
            <input
              type="date"
              value={academicSettings.termStartDate}
              onChange={(e) => handleAcademicSettingsChange('termStartDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Term End Date</label>
            <input
              type="date"
              value={academicSettings.termEndDate}
              onChange={(e) => handleAcademicSettingsChange('termEndDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class Start Time</label>
            <input
              type="time"
              value={academicSettings.classStartTime}
              onChange={(e) => handleAcademicSettingsChange('classStartTime', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class End Time</label>
            <input
              type="time"
              value={academicSettings.classEndTime}
              onChange={(e) => handleAcademicSettingsChange('classEndTime', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => saveSettings('Academic Year')} className="flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save Academic Settings</span>
          </Button>
        </div>
      </Card>

      {/* Fee Structure */}
      <Card title="Fee Structure" className="relative">
        <div className="absolute top-4 right-4">
          <DollarSign className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Registration Fee ($)</label>
            <input
              type="number"
              value={feeSettings.registrationFee}
              onChange={(e) => handleFeeSettingsChange('registrationFee', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Tuition ($)</label>
            <input
              type="number"
              value={feeSettings.monthlyTuition}
              onChange={(e) => handleFeeSettingsChange('monthlyTuition', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Books Fee ($)</label>
            <input
              type="number"
              value={feeSettings.booksFee}
              onChange={(e) => handleFeeSettingsChange('booksFee', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Exam Fee ($)</label>
            <input
              type="number"
              value={feeSettings.examFee}
              onChange={(e) => handleFeeSettingsChange('examFee', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Late Fee (%)</label>
            <input
              type="number"
              value={feeSettings.lateFeePercentage}
              onChange={(e) => handleFeeSettingsChange('lateFeePercentage', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => saveSettings('Fee Structure')} className="flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save Fee Settings</span>
          </Button>
        </div>
      </Card>

      {/* System Settings */}
      <Card title="System Settings" className="relative">
        <div className="absolute top-4 right-4">
          <Users className="h-6 w-6 text-purple-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={systemSettings.language}
              onChange={(e) => handleSystemSettingsChange('language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={systemSettings.timezone}
              onChange={(e) => handleSystemSettingsChange('timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
            <select
              value={systemSettings.dateFormat}
              onChange={(e) => handleSystemSettingsChange('dateFormat', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select
              value={systemSettings.currency}
              onChange={(e) => handleSystemSettingsChange('currency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="SAR">SAR (﷼)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Attendance Threshold (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={systemSettings.attendanceThreshold}
              onChange={(e) => handleSystemSettingsChange('attendanceThreshold', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => saveSettings('System')} className="flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save System Settings</span>
          </Button>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="secondary" className="p-4 h-auto flex-col">
            <School className="h-8 w-8 mb-2" />
            <span className="font-medium">Backup Data</span>
            <span className="text-sm text-gray-600">Create system backup</span>
          </Button>
          
          <Button variant="secondary" className="p-4 h-auto flex-col">
            <Users className="h-8 w-8 mb-2" />
            <span className="font-medium">Reset Password</span>
            <span className="text-sm text-gray-600">Change admin password</span>
          </Button>
          
          <Button variant="secondary" className="p-4 h-auto flex-col">
            <Calendar className="h-8 w-8 mb-2" />
            <span className="font-medium">Import Data</span>
            <span className="text-sm text-gray-600">Import from Excel/CSV</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;
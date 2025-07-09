import { useState } from 'react';
import { Download, FileText, Users, DollarSign, Calendar, Filter } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Table, TableRow, TableCell } from '../components/Table';

const ReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState('students');
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: new Date().toISOString().split('T')[0]
  });

  const reportTypes = [
    { id: 'students', name: 'Student Report', icon: Users, description: 'Complete student information and enrollment status' },
    { id: 'fees', name: 'Fee Report', icon: DollarSign, description: 'Fee collection and payment status report' },
    { id: 'attendance', name: 'Attendance Report', icon: Calendar, description: 'Daily attendance records and statistics' },
    { id: 'staff', name: 'Staff Report', icon: Users, description: 'Teacher and staff information report' },
  ];

  const sampleData = {
    students: [
      { name: 'Ahmed Hassan', class: 'Class 5', status: 'Active', dob: '2010-05-15', gender: 'Male' },
      { name: 'Fatima Ali', class: 'Class 3', status: 'Active', dob: '2012-08-22', gender: 'Female' },
      { name: 'Omar Mohammed', class: 'Class 7', status: 'Active', dob: '2008-12-10', gender: 'Male' },
      { name: 'Aisha Ibrahim', class: 'Class 2', status: 'Inactive', dob: '2013-03-18', gender: 'Female' },
    ],
    fees: [
      { student: 'Ahmed Hassan', class: 'Class 5', amount: 250, date: '2024-01-15', status: 'Paid' },
      { student: 'Fatima Ali', class: 'Class 3', amount: 250, date: '2024-01-14', status: 'Paid' },
      { student: 'Omar Mohammed', class: 'Class 7', amount: 300, date: '2024-01-13', status: 'Paid' },
      { student: 'Aisha Ibrahim', class: 'Class 2', amount: 200, date: '2024-01-12', status: 'Pending' },
    ],
    attendance: [
      { date: '2024-01-15', class: 'Class 1', present: 15, absent: 3, late: 2, total: 20, rate: '75%' },
      { date: '2024-01-15', class: 'Class 2', present: 18, absent: 1, late: 1, total: 20, rate: '90%' },
      { date: '2024-01-15', class: 'Class 3', present: 14, absent: 4, late: 0, total: 18, rate: '77.8%' },
      { date: '2024-01-14', class: 'Class 1', present: 16, absent: 2, late: 2, total: 20, rate: '80%' },
    ],
    staff: [
      { name: 'Dr. Muhammad Ibrahim', subject: 'Quran Recitation', contact: '+1-234-567-8901', status: 'Active' },
      { name: 'Ustaza Khadija Ahmed', subject: 'Arabic Language', contact: '+1-234-567-8902', status: 'Active' },
      { name: 'Imam Hassan Ali', subject: 'Islamic Studies', contact: '+1-234-567-8903', status: 'Active' },
      { name: 'Sister Maryam Yusuf', subject: 'Hadith Studies', contact: '+1-234-567-8904', status: 'Active' },
    ]
  };

  const getCurrentReportData = () => {
    return sampleData[selectedReport] || [];
  };

  const getTableHeaders = () => {
    switch (selectedReport) {
      case 'students':
        return ['Name', 'Class', 'Gender', 'Date of Birth', 'Status'];
      case 'fees':
        return ['Student', 'Class', 'Amount', 'Date', 'Status'];
      case 'attendance':
        return ['Date', 'Class', 'Present', 'Absent', 'Late', 'Total', 'Rate'];
      case 'staff':
        return ['Name', 'Subject', 'Contact', 'Status'];
      default:
        return [];
    }
  };

  const exportReport = (format) => {
    const currentReport = reportTypes.find(r => r.id === selectedReport);
    alert(`Exporting ${currentReport.name} as ${format.toUpperCase()}...`);
    // In a real app, this would trigger actual export functionality
  };

  const getReportStats = () => {
    const data = getCurrentReportData();
    switch (selectedReport) {
      case 'students':
        return {
          total: data.length,
          active: data.filter(s => s.status === 'Active').length,
          inactive: data.filter(s => s.status === 'Inactive').length
        };
      case 'fees':
        return {
          total: data.reduce((sum, f) => sum + f.amount, 0),
          paid: data.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0),
          pending: data.filter(f => f.status === 'Pending').reduce((sum, f) => sum + f.amount, 0)
        };
      case 'attendance':
        return {
          totalRecords: data.length,
          avgAttendance: (data.reduce((sum, a) => sum + parseFloat(a.rate), 0) / data.length).toFixed(1) + '%'
        };
      case 'staff':
        return {
          total: data.length,
          active: data.filter(s => s.status === 'Active').length
        };
      default:
        return {};
    }
  };

  const stats = getReportStats();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">Generate and export detailed reports</p>
      </div>

      {/* Report Type Selection */}
      <Card title="Select Report Type">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTypes.map((report) => {
            const Icon = report.icon;
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`p-4 rounded-lg border-2 transition-colors text-left ${
                  selectedReport === report.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Icon className={`h-8 w-8 mb-2 ${
                  selectedReport === report.id ? 'text-green-600' : 'text-gray-600'
                }`} />
                <h3 className="font-semibold text-gray-800">{report.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{report.description}</p>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Filters and Export */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => setDateRange({...dateRange, startDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => setDateRange({...dateRange, endDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="secondary"
              onClick={() => exportReport('pdf')}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>PDF</span>
            </Button>
            <Button
              variant="secondary"
              onClick={() => exportReport('excel')}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Excel</span>
            </Button>
            <Button
              onClick={() => exportReport('csv')}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>CSV</span>
            </Button>
          </div>
        </div>
      </Card>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedReport === 'students' && (
          <>
            <Card className="bg-blue-50">
              <div className="text-center">
                <p className="text-sm text-blue-600 mb-1">Total Students</p>
                <p className="text-3xl font-bold text-blue-700">{stats.total}</p>
              </div>
            </Card>
            <Card className="bg-green-50">
              <div className="text-center">
                <p className="text-sm text-green-600 mb-1">Active Students</p>
                <p className="text-3xl font-bold text-green-700">{stats.active}</p>
              </div>
            </Card>
            <Card className="bg-red-50">
              <div className="text-center">
                <p className="text-sm text-red-600 mb-1">Inactive Students</p>
                <p className="text-3xl font-bold text-red-700">{stats.inactive}</p>
              </div>
            </Card>
          </>
        )}

        {selectedReport === 'fees' && (
          <>
            <Card className="bg-blue-50">
              <div className="text-center">
                <p className="text-sm text-blue-600 mb-1">Total Amount</p>
                <p className="text-3xl font-bold text-blue-700">${stats.total}</p>
              </div>
            </Card>
            <Card className="bg-green-50">
              <div className="text-center">
                <p className="text-sm text-green-600 mb-1">Collected</p>
                <p className="text-3xl font-bold text-green-700">${stats.paid}</p>
              </div>
            </Card>
            <Card className="bg-yellow-50">
              <div className="text-center">
                <p className="text-sm text-yellow-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-700">${stats.pending}</p>
              </div>
            </Card>
          </>
        )}

        {selectedReport === 'attendance' && (
          <>
            <Card className="bg-blue-50">
              <div className="text-center">
                <p className="text-sm text-blue-600 mb-1">Total Records</p>
                <p className="text-3xl font-bold text-blue-700">{stats.totalRecords}</p>
              </div>
            </Card>
            <Card className="bg-green-50">
              <div className="text-center">
                <p className="text-sm text-green-600 mb-1">Avg Attendance</p>
                <p className="text-3xl font-bold text-green-700">{stats.avgAttendance}</p>
              </div>
            </Card>
          </>
        )}

        {selectedReport === 'staff' && (
          <>
            <Card className="bg-blue-50">
              <div className="text-center">
                <p className="text-sm text-blue-600 mb-1">Total Staff</p>
                <p className="text-3xl font-bold text-blue-700">{stats.total}</p>
              </div>
            </Card>
            <Card className="bg-green-50">
              <div className="text-center">
                <p className="text-sm text-green-600 mb-1">Active Staff</p>
                <p className="text-3xl font-bold text-green-700">{stats.active}</p>
              </div>
            </Card>
          </>
        )}
      </div>

      {/* Report Preview */}
      <Card title={`${reportTypes.find(r => r.id === selectedReport)?.name} Preview`}>
        <Table headers={getTableHeaders()}>
          {getCurrentReportData().map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value, cellIndex) => (
                <TableCell key={cellIndex}>
                  {cellIndex === Object.values(row).length - 1 && typeof value === 'string' && (value.includes('Active') || value.includes('Paid') || value.includes('Present')) ? (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      value.includes('Active') || value.includes('Paid') ? 'bg-green-100 text-green-800' :
                      value.includes('Inactive') || value.includes('Pending') ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </Table>
      </Card>
    </div>
  );
};

export default ReportsPage;
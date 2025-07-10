import { useState } from 'react';
import { Calendar, CheckCircle, XCircle, Clock, Users } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Table, TableRow, TableCell } from '../components/Table';

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('Class 1');
  const [viewMode, setViewMode] = useState('mark'); // 'mark' or 'view'

  const students = {
    'Class 1': [
      { id: 1, name: 'Ahmed Hassan', status: 'present' },
      { id: 2, name: 'Fatima Ali', status: 'present' },
      { id: 3, name: 'Omar Mohammed', status: 'absent' },
      { id: 4, name: 'Aisha Ibrahim', status: 'present' },
    ],
    'Class 2': [
      { id: 5, name: 'Yusuf Ahmad', status: 'present' },
      { id: 6, name: 'Maryam Yusuf', status: 'late' },
      { id: 7, name: 'Hassan Ali', status: 'present' },
    ],
    'Class 3': [
      { id: 8, name: 'Khadija Ahmed', status: 'present' },
      { id: 9, name: 'Ibrahim Omar', status: 'absent' },
    ]
  };

  const [attendance, setAttendance] = useState(students);

  const [attendanceHistory] = useState([
    { date: '2024-01-15', class: 'Class 1', present: 15, absent: 3, late: 2, total: 20 },
    { date: '2024-01-15', class: 'Class 2', present: 18, absent: 1, late: 1, total: 20 },
    { date: '2024-01-15', class: 'Class 3', present: 14, absent: 4, late: 0, total: 18 },
    { date: '2024-01-14', class: 'Class 1', present: 16, absent: 2, late: 2, total: 20 },
    { date: '2024-01-14', class: 'Class 2', present: 19, absent: 0, late: 1, total: 20 },
  ]);

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];

  const updateAttendance = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [selectedClass]: prev[selectedClass].map(student =>
        student.id === studentId ? { ...student, status } : student
      )
    }));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'late':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentClassStudents = attendance[selectedClass] || [];
  const presentCount = currentClassStudents.filter(s => s.status === 'present').length;
  const absentCount = currentClassStudents.filter(s => s.status === 'absent').length;
  const lateCount = currentClassStudents.filter(s => s.status === 'late').length;

  const saveAttendance = () => {
    alert(`Attendance saved for ${selectedClass} on ${selectedDate}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Attendance Management</h1>
          <p className="text-gray-600">Mark daily attendance and view past records</p>
        </div>
        <div className="flex space-x-3">
          <Button
            variant={viewMode === 'mark' ? 'primary' : 'outline'}
            onClick={() => setViewMode('mark')}
          >
            Mark Attendance
          </Button>
          <Button
            variant={viewMode === 'view' ? 'primary' : 'outline'}
            onClick={() => setViewMode('view')}
          >
            View History
          </Button>
        </div>
      </div>

      {viewMode === 'mark' ? (
        <>
          {/* Controls */}
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              <Button onClick={saveAttendance} className="w-full">
                Save Attendance
              </Button>
            </div>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 mb-1">Total Students</p>
                  <p className="text-2xl font-bold text-blue-700">{currentClassStudents.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </Card>

            <Card className="bg-green-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 mb-1">Present</p>
                  <p className="text-2xl font-bold text-green-700">{presentCount}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </Card>

            <Card className="bg-red-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 mb-1">Absent</p>
                  <p className="text-2xl font-bold text-red-700">{absentCount}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </Card>

            <Card className="bg-yellow-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-600 mb-1">Late</p>
                  <p className="text-2xl font-bold text-yellow-700">{lateCount}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </Card>
          </div>

          {/* Attendance Marking */}
          <Card title={`Mark Attendance - ${selectedClass} (${selectedDate})`}>
            <div className="space-y-4">
              {currentClassStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(student.status)}
                    <span className="font-medium text-gray-800">{student.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={student.status === 'present' ? 'success' : 'outline'}
                      onClick={() => updateAttendance(student.id, 'present')}
                      className="flex items-center space-x-1"
                    >
                      <CheckCircle className="h-3 w-3" />
                      <span>Present</span>
                    </Button>
                    <Button
                      size="sm"
                      variant={student.status === 'late' ? 'secondary' : 'outline'}
                      onClick={() => updateAttendance(student.id, 'late')}
                      className="flex items-center space-x-1"
                    >
                      <Clock className="h-3 w-3" />
                      <span>Late</span>
                    </Button>
                    <Button
                      size="sm"
                      variant={student.status === 'absent' ? 'danger' : 'outline'}
                      onClick={() => updateAttendance(student.id, 'absent')}
                      className="flex items-center space-x-1"
                    >
                      <XCircle className="h-3 w-3" />
                      <span>Absent</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      ) : (
        /* Attendance History */
        <Card title="Attendance History">
          <Table headers={['Date', 'Class', 'Present', 'Absent', 'Late', 'Total', 'Attendance Rate']}>
            {attendanceHistory.map((record, index) => {
              const rate = ((record.present / record.total) * 100).toFixed(1);
              return (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.class}</TableCell>
                  <TableCell>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {record.present}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      {record.absent}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      {record.late}
                    </span>
                  </TableCell>
                  <TableCell className="font-semibold">{record.total}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rate >= 90 ? 'bg-green-100 text-green-800' :
                      rate >= 80 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {rate}%
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </Table>
        </Card>
      )}
    </div>
  );
};

export default AttendancePage;
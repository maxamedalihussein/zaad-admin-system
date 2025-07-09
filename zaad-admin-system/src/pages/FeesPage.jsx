import { useState } from 'react';
import { Plus, Search, Filter, DollarSign } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Table, TableRow, TableCell } from '../components/Table';

const FeesPage = () => {
  const [payments, setPayments] = useState([
    { id: 1, studentName: 'Ahmed Hassan', amount: 250, date: '2024-01-15', status: 'Paid', method: 'Cash', class: 'Class 5' },
    { id: 2, studentName: 'Fatima Ali', amount: 250, date: '2024-01-14', status: 'Paid', method: 'Card', class: 'Class 3' },
    { id: 3, studentName: 'Omar Mohammed', amount: 300, date: '2024-01-13', status: 'Paid', method: 'Bank Transfer', class: 'Class 7' },
    { id: 4, studentName: 'Aisha Ibrahim', amount: 200, date: '2024-01-12', status: 'Pending', method: 'Cash', class: 'Class 2' },
    { id: 5, studentName: 'Yusuf Ahmad', amount: 280, date: '2024-01-10', status: 'Overdue', method: 'Card', class: 'Class 6' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    status: 'Paid',
    method: 'Cash',
    class: ''
  });

  const paymentMethods = ['Cash', 'Card', 'Bank Transfer', 'Online Payment'];
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];

  const filteredPayments = payments.filter(payment => {
    return (
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === '' || payment.status === filterStatus)
    );
  });

  const totalCollected = payments
    .filter(p => p.status === 'Paid')
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = payments
    .filter(p => p.status === 'Pending' || p.status === 'Overdue')
    .reduce((sum, p) => sum + p.amount, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayments([...payments, { 
      id: Date.now(), 
      ...formData,
      amount: parseFloat(formData.amount)
    }]);
    setFormData({
      studentName: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      status: 'Paid',
      method: 'Cash',
      class: ''
    });
    setShowAddForm(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Fee Management</h1>
          <p className="text-gray-600">Track and manage school fee payments</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Payment</span>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 mb-1">Total Collected</p>
              <p className="text-3xl font-bold text-green-700">${totalCollected.toLocaleString()}</p>
            </div>
            <DollarSign className="h-12 w-12 text-green-600" />
          </div>
        </Card>

        <Card className="bg-yellow-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 mb-1">Pending Amount</p>
              <p className="text-3xl font-bold text-yellow-700">${pendingAmount.toLocaleString()}</p>
            </div>
            <DollarSign className="h-12 w-12 text-yellow-600" />
          </div>
        </Card>

        <Card className="bg-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 mb-1">Total Payments</p>
              <p className="text-3xl font-bold text-blue-700">{payments.length}</p>
            </div>
            <DollarSign className="h-12 w-12 text-blue-600" />
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setFilterStatus('');
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Payments Table */}
      <Card>
        <Table headers={['Student Name', 'Class', 'Amount', 'Date', 'Method', 'Status']}>
          {filteredPayments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.studentName}</TableCell>
              <TableCell>{payment.class}</TableCell>
              <TableCell className="font-semibold">${payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                  {payment.method}
                </span>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                  {payment.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>

      {/* Add Payment Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add Fee Payment</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select
                  required
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Class</option>
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <select
                  value={formData.method}
                  onChange={(e) => setFormData({...formData, method: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {paymentMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  Add Payment
                </Button>
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={() => setShowAddForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeesPage;
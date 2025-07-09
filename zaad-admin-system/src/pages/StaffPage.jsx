import { useState } from 'react';
import { Plus, Edit, Trash2, Search, Phone, Mail } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Table, TableRow, TableCell } from '../components/Table';

const StaffPage = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Dr. Muhammad Ibrahim', subject: 'Quran Recitation', contact: '+1-234-567-8901', email: 'ibrahim@zaadschool.com', status: 'Active' },
    { id: 2, name: 'Ustaza Khadija Ahmed', subject: 'Arabic Language', contact: '+1-234-567-8902', email: 'khadija@zaadschool.com', status: 'Active' },
    { id: 3, name: 'Imam Hassan Ali', subject: 'Islamic Studies', contact: '+1-234-567-8903', email: 'hassan@zaadschool.com', status: 'Active' },
    { id: 4, name: 'Sister Maryam Yusuf', subject: 'Hadith Studies', contact: '+1-234-567-8904', email: 'maryam@zaadschool.com', status: 'Active' },
    { id: 5, name: 'Sheikh Omar Farouk', subject: 'Fiqh', contact: '+1-234-567-8905', email: 'omar@zaadschool.com', status: 'Inactive' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    contact: '',
    email: '',
    status: 'Active'
  });

  const subjects = [
    'Quran Recitation',
    'Arabic Language', 
    'Islamic Studies',
    'Hadith Studies',
    'Fiqh',
    'Aqeedah',
    'Seerah',
    'Tajweed'
  ];

  const filteredStaff = staff.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStaff) {
      setStaff(staff.map(member => 
        member.id === editingStaff.id 
          ? { ...member, ...formData }
          : member
      ));
      setEditingStaff(null);
    } else {
      setStaff([...staff, { 
        id: Date.now(), 
        ...formData 
      }]);
    }
    setFormData({ name: '', subject: '', contact: '', email: '', status: 'Active' });
    setShowAddForm(false);
  };

  const handleEdit = (member) => {
    setEditingStaff(member);
    setFormData(member);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this staff member?')) {
      setStaff(staff.filter(member => member.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({ name: '', subject: '', contact: '', email: '', status: 'Active' });
    setEditingStaff(null);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Staff Management</h1>
          <p className="text-gray-600">Manage teachers and staff information</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Staff</span>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Staff</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-end">
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm('')}
            >
              Clear
            </Button>
          </div>
        </div>
      </Card>

      {/* Staff Table */}
      <Card>
        <Table headers={['Name', 'Subject', 'Contact', 'Email', 'Status', 'Actions']}>
          {filteredStaff.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="font-medium text-gray-900">{member.name}</div>
              </TableCell>
              <TableCell>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {member.subject}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3 text-gray-400" />
                  <span className="text-sm">{member.contact}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-1">
                  <Mail className="h-3 w-3 text-gray-400" />
                  <span className="text-sm">{member.email}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  member.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {member.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleEdit(member)}
                    className="flex items-center space-x-1"
                  >
                    <Edit className="h-3 w-3" />
                    <span>Edit</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(member.id)}
                    className="flex items-center space-x-1"
                  >
                    <Trash2 className="h-3 w-3" />
                    <span>Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>

      {/* Add/Edit Staff Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject/Role</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+1-234-567-8900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="email@zaadschool.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  {editingStaff ? 'Update Staff' : 'Add Staff'}
                </Button>
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={resetForm}
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

export default StaffPage;
const Table = ({ headers, children, className = '' }) => {
  return (
    <div className={`table-enhanced animate-fadeIn ${className}`}>
      <table className="min-w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {children}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ children, className = '', ...props }) => {
  return (
    <tr 
      className={`hover:bg-gradient-to-r hover:from-green-50 hover:to-green-50 transition-all duration-200 hover:shadow-sm ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
};

const TableCell = ({ children, className = '', ...props }) => {
  return (
    <td 
      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </td>
  );
};

export { Table, TableRow, TableCell };
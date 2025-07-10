const Card = ({ children, className = '', title, icon: Icon, ...props }) => {
  return (
    <div 
      className={`card-enhanced animate-fadeIn hover-lift ${className}`}
      {...props}
    >
      {title && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {Icon && (
              <div className="p-2 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                <Icon className="h-5 w-5 text-green-600" />
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
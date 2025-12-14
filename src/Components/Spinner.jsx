const Spinner = ({ size = 'medium', text = 'Loading...', showText = true, className = '' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={` min-h-screen flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <div 
          className={`
            ${sizeClasses[size]} 
            border-4 border-[#6657E2] border-t-transparent rounded-full animate-spin
          `}
        />
        {showText && (
          <p className="text-[14px] text-[#7C7C7C] font-medium animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spinner;

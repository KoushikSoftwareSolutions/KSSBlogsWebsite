const SuccessMsg = ({ msg , status }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
        <div className="mb-10 w-80 bg-white rounded-xl shadow-lg p-5 transition-all duration-300 ease-out animate-popup-slide">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">{msg}</h2>
          <p className="text-gray-600 mb-3">This will close in 3 seconds...</p>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full ${status ?  "bg-green-500" : "bg-red-500" } animate-progress`} />
          </div>
        </div>
      </div>
    );
  };
export default SuccessMsg;
  

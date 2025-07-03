export function Input({ className = "", ...props }) {
    return (
      <input
      className={`border border-gray-300 rounded text-left p-5 h-10 w-full 
        focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
      {...props}
    />
    );
  }
  
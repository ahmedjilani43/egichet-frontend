import * as React from "react";

export function Dialog({ open, onOpenChange, children }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onOpenChange(false);
  };

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      {children}
    </div>
  );
}

export function DialogContent({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg max-w-lg w-full p-6 ${className}`}
      role="document"
    >
      {children}
    </div>
  );
}

export function DialogHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }) {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
}

export function DialogClose({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close dialog"
      className={`absolute top-3 right-3 text-gray-600 hover:text-gray-900 ${className}`}
    >
      ✕
    </button>
  );
}

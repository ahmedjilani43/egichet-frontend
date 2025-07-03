export function Badge({ variant, className, children }) {
    const variantStyles = variant === 'outline' ? 'border border-gray-300' : 'bg-gray-100';
    return <span className={`inline-flex items-center px-2 py-1 rounded text-sm ${variantStyles} ${className}`}>{children}</span>;
}
const LoadingSpinner = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`animate-spin rounded-full border-2 border-primary/20 border-t-primary ${className}`} />
);

export default LoadingSpinner;
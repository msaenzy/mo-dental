import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-normal rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]';

  const sizeClasses = {
    sm: 'text-sm py-2 px-4 gap-1.5',
    md: 'text-base py-2.5 px-5 gap-2',
    lg: 'text-base sm:text-lg py-3.5 px-7 gap-2.5 shadow-sm',
  };

  const variantClasses = {
    primary:
      'bg-[#2B4650] text-[#F7F5F1] hover:bg-[#21373F] active:bg-[#1A2C32] shadow-sm hover:shadow',
    secondary:
      'bg-transparent text-[#2B4650] border border-[#2B4650] hover:bg-[#2B4650]/5 active:bg-[#2B4650]/10',
    gold:
      'bg-[#B08D57] text-[#FFFFFF] hover:bg-[#9C7A47] shadow-sm hover:shadow',
    outline:
      'bg-white/80 text-[#1F2421] border border-[#1F2421]/20 hover:border-[#1F2421]/40 hover:bg-white',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

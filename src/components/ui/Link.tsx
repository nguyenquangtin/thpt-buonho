import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ children, className = '', ...rest }) => {
  return (
    <a
      className={`cursor-pointer font-medium ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};
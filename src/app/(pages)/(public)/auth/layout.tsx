import React, { ReactNode } from "react";

interface AuthLayoutProps extends Readonly<{ children: ReactNode }> {}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default AuthLayout;

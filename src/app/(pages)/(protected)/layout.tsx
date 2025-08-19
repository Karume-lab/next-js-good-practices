import React, { ReactNode } from "react";

interface ProtectedLayoutProps extends Readonly<{ children: ReactNode }> {}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default ProtectedLayout;

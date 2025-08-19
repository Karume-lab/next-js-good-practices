import React, { ReactNode } from "react";

interface PublicLayoutProps extends Readonly<{ children: ReactNode }> {}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default PublicLayout;

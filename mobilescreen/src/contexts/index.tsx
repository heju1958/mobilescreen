import { ReactNode } from "react";
import { UserProvider } from "./userContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <UserProvider>{children}</UserProvider>;
};

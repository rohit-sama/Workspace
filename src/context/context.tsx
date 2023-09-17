"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

interface Session {
  expires: string;
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
}

export const UserContext = createContext<{ session: Session | undefined }>({
  session: undefined,
});

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [session, setsession] = useState<Session | undefined>(undefined);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((sessionData: Session) => {
        if (sessionData) {
          setsession(sessionData);
        }
      })
      .catch((error) => {
        console.error("Error fetching session:", error);
      });
  },[]);

  return (
    <UserContext.Provider value={{ session }}>{children}</UserContext.Provider>
  );
}

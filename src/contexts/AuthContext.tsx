import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; firstName?: string; lastName?: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      console.log("🔐 Mock login", { email, password });
      const fakeToken = "mock-token-123";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: { email: string; password: string; firstName?: string; lastName?: string }) => {
    setIsLoading(true);
    try {
      console.log("📝 Mock register", data);
      const fakeToken = "mock-token-123";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
    } catch (error) {
      console.error("Register failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
    console.log("👋 Logged out");
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

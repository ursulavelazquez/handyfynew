import React, { createContext, useContext, useState, useEffect } from 'react';

type UserType = 'client' | 'provider';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  userType: UserType;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  switchUserType: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userType: 'client',
  isLoading: true,
  signIn: async () => {},
  signOut: () => {},
  switchUserType: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>('client');
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    // Simulating loading user data from storage
    const loadUser = async () => {
      try {
        // In a real app, this would fetch from secure storage
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error loading user:', error);
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    // In a real app, this would call an API endpoint
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const mockUser = {
            id: '1',
            name: 'Juan Pérez',
            email: email,
            phone: '+54 9 11 2345 6789',
          };
          setUser(mockUser);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signOut = () => {
    setUser(null);
    setUserType('client'); // Reset to client type on sign out
  };

  const switchUserType = () => {
    setUserType(userType === 'client' ? 'provider' : 'client');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userType,
        isLoading,
        signIn,
        signOut,
        switchUserType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
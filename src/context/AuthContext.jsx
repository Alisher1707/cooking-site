import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = (userData) => {
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    const userExists = users.find(u => u.email === userData.email);
    if (userExists) {
      return { success: false, message: 'Bu email allaqachon ro\'yxatdan o\'tgan!' };
    }

    // Add new user
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!' };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;

      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));

      return { success: true, message: 'Xush kelibsiz!' };
    }

    return { success: false, message: 'Email yoki parol noto\'g\'ri!' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updatedData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedData };
      localStorage.setItem('users', JSON.stringify(users));

      const updatedUser = { ...users[userIndex] };
      delete updatedUser.password;

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      return { success: true, message: 'Profil yangilandi!' };
    }

    return { success: false, message: 'Xatolik yuz berdi!' };
  };

  const updateProfileImage = (imageData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], profileImage: imageData };
      localStorage.setItem('users', JSON.stringify(users));

      const updatedUser = { ...users[userIndex] };
      delete updatedUser.password;

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      return { success: true, message: 'Rasm yangilandi!' };
    }

    return { success: false, message: 'Xatolik yuz berdi!' };
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateProfile,
    updateProfileImage,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

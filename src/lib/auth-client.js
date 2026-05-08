// Simple auth client for demonstration purposes
// This file provides basic authentication functionality using localStorage
// In a real application, replace with actual API calls to your authentication service

export const authClient = {
  signIn: async (email, password) => {
    // Mock authentication - replace with real API call
    if (email === 'admin@example.com' && password === 'password') {
      const user = { id: 1, email, name: 'Admin User' };
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, user };
    }
    throw new Error('Invalid credentials');
  },

  signUp: async (email, password, name) => {
    // Mock registration - replace with real API call
    const user = { id: Date.now(), email, name };
    localStorage.setItem('user', JSON.stringify(user));
    return { success: true, user };
  },

  signOut: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  }
};
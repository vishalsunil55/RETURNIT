// src/services/authService.js

// Stubbed authentication service — replace with actual API calls
export const authService = {
  login: async ({ email, password }) => {
    // TODO: call your backend API: e.g., POST /auth/login
    // For now, return dummy user & token
    return {
      token: 'dummy-token',
      user: { id: '1', name: 'Demo User', email, role: 'user' }
    };
  },
  
  register: async ({ name, email, password }) => {
    // TODO: call your backend API: e.g., POST /auth/register
    // For now, simulate a successful register and return login result
    return {
      token: 'dummy-token',
      user: { id: '2', name, name, email, role: 'user' }
    };
  },
  
  logout: async () => {
    // TODO: inform backend of logout if needed
    return true;
  },
  
  getCurrentUser: async () => {
    // TODO: fetch current user data using token
    return { id: '1', name: 'Demo User', email: 'demo@example.com', role: 'user' };
  }
};

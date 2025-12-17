// src/services/authService.js

// Hard-coded "database" of users for stubbed login
const usersDB = [
  { id: '1', name: 'vishal', email: 'vishalsunil55@gmail.com', password: '123456', role: 'admin' },
  { id: '2', name: 'Bob User',   email: 'bob@example.com',   password: 'password456', role: 'user' }
];

export const authService = {
  login: async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const found = usersDB.find(u => u.email === email && u.password === password);
        if (!found) {
          reject(new Error('Invalid email or password.'));
        } else {
          const { id, name, email: userEmail, role } = found;
          resolve({
            token: `dummy-token-${id}`,
            user: { id, name, email: userEmail, role }
          });
        }
      }, 500);
    });
  },

  register: async ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exists = usersDB.some(u => u.email === email);
        if (exists) {
          reject(new Error('Email already registered.'));
        } else {
          const newId = (usersDB.length + 1).toString();
          const newUser = { id: newId, name, email, password, role: 'user' };
          usersDB.push(newUser);
          resolve({
            token: `dummy-token-${newId}`,
            user: { id: newId, name, email, role: 'user' }
          });
        }
      }, 500);
    });
  },

  logout: async () => {
    return Promise.resolve(true);
  },

  getCurrentUser: async (token) => {
    // stub: return first user (or decode token in real world)
    const u = usersDB[0];
    return { id: u.id, name: u.name, email: u.email, role: u.role };
  }
};

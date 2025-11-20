// src/services/itemService.js

// In-memory stub data
let itemsDb = [
  {
    id: '1',
    title: 'WALLET',
    description: 'wallet lost with id cards and cash',
    location: 'kochi',
    dateLost: '2025-11-18',
    dateFound: null,
    images: [],
    type: 'lost'
  },
  {
    id: '2',
    title: 'BACKPACK',
    description: 'nike yellow backpack with few valuables found',
    location: 'chennai',
    dateLost: null,
    dateFound: '2025-11-17',
    images: [],
    type: 'found'
  }
];

export const itemService = {
  getAllItems: async (filter = {}) => {
    // Simulate async (e.g., network) delay
    return new Promise(resolve => {
      setTimeout(() => {
        if (filter.type) {
          resolve(itemsDb.filter(item => item.type === filter.type));
        } else {
          resolve([...itemsDb]);
        }
      }, 300);
    });
  },

  createItem: async (itemData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newItem = {
          id: Date.now().toString(),
          ...itemData
        };
        itemsDb.unshift(newItem); // add new item at the front
        resolve(newItem);
      }, 300);
    });
  },

  getItemById: async (id) => {
    return new Promise(resolve => {
      const found = itemsDb.find(item => item.id === id);
      resolve(found || null);
    });
  },

  updateItem: async (id, updateData) => {
    return new Promise(resolve => {
      const index = itemsDb.findIndex(item => item.id === id);
      if (index !== -1) {
        itemsDb[index] = { ...itemsDb[index], ...updateData };
        resolve(itemsDb[index]);
      } else {
        resolve(null);
      }
    });
  },

  deleteItem: async (id) => {
    return new Promise(resolve => {
      itemsDb = itemsDb.filter(item => item.id !== id);
      resolve(true);
    });
  }
};

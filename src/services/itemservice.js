// src/services/itemService.js

// Stubbed item service — replace with actual API calls
export const itemService = {
  getItemById: async (id) => {
    // TODO: replace with real API: GET /items/:id
    return {
      id,
      title: 'Sample Item Title',
      description: 'Sample description of the item …',
      location: 'Sample Location',
      dateLost: '2025-11-20',
      dateFound: null,
      images: []
    };
  },

  getAllItems: async (filter = {}) => {
    // TODO: replace with real API: GET /items?type=lost|found
    return [
      {
        id: '1',
        title: 'Sample Lost Item',
        description: 'Description of lost item …',
        location: 'Location A',
        dateLost: '2025-11-18',
        dateFound: null,
        images: []
      },
      {
        id: '2',
        title: 'Sample Found Item',
        description: 'Description of found item …',
        location: 'Location B',
        dateLost: null,
        dateFound: '2025-11-17',
        images: []
      }
    ];
  },

  createItem: async (itemData) => {
    // TODO: replace with real API: POST /items
    // itemData may include type, title, description, dateLost/dateFound, location, contactInfo, images
    return {
      id: 'new-id',
      ...itemData
    };
  },

  updateItem: async (id, updateData) => {
    // TODO: replace with real API: PUT /items/:id
    return {
      id,
      ...updateData
    };
  },

  deleteItem: async (id) => {
    // TODO: replace with real API: DELETE /items/:id
    return true;
  }
};

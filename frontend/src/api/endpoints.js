import api from './config';

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
};

export const templeAPI = {
  getAll: (params) => api.get('/temples', { params }),
  getBySlug: (slug) => api.get(`/temples/${slug}`),
  create: (data) => api.post('/temples', data),
  update: (id, data) => api.put(`/temples/${id}`, data),
  delete: (id) => api.delete(`/temples/${id}`),
};

export const locationAPI = {
  getAll: () => api.get('/locations'),
};

export const deityAPI = {
  getAll: () => api.get('/deities'),
};

export const festivalAPI = {
  getAll: () => api.get('/festivals'),
};

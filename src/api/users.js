import usersData from '@data/users.json';
// src/api/users.js
export const getUserBySlug  = (slug) => {
  // Simulación de obtener usuario por slug
  
  const users = usersData;

 

  return users.find(user => user.slug === slug);
};
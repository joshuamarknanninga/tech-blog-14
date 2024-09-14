// utils/helpers.js
module.exports = {
  format_date: (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-GB'); // Formats to DD/MM/YYYY
  },
  
  // Optional: Add more helpers as needed
  capitalize: (str) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};

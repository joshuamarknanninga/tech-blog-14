// utils/helpers.js
module.exports = {
  format_date: (date) => {
    if (!date || isNaN(new Date(date))) return '';
    return new Date(date).toLocaleDateString('en-GB'); // Formats to DD/MM/YYYY
  },

  capitalize: (str) => {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  truncate: (str, len) => {
    if (typeof str !== 'string' || str.length === 0) return '';
    if (str.length > len) {
      return str.substr(0, str.lastIndexOf(' ', len)) + '...';
    }
    return str;
  },
};

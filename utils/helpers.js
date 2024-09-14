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

  truncate: (str, len) => {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' ';
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(' '));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + '...';
    }
    return str;
  }
};

// src/utils/apiBase.js
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
export const API_BASE = isLocalhost
  ? 'https://api-backend-rathhindia.holistichealervedika.com/api/v1/rathh'
  : 'https://api-backend-rathhindia.holistichealervedika.com/api/v1/rathh';

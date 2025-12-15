import React from 'react';

function NotificationBadge({ unreadCount }) {
  return (
    <div>
      <h4>Kotak Pesan</h4>
      
      {unreadCount > 0 && (
        <span style={{ 
          backgroundColor: 'orange', 
          color: 'white', 
          padding: '2px 8px', 
          borderRadius: '12px' 
        }}>
          {unreadCount} Pesan Baru!
        </span>
      )}

      {unreadCount === 0 && (
        <p style={{ color: 'gray' }}>Tidak ada pesan baru.</p>
      )}
    </div>
  );
}

export default NotificationBadge;
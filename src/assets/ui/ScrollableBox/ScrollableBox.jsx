import React from 'react';

const ScrollableBox = ({ children }) => {
  return (
    <div
      style={{
        overflowX: 'scroll', // Enable horizontal scrolling
        height:'100px',
        overflowY: 'hidden', // Disable vertical scrolling
        maxWidth: '100%', // Adjust as needed
        border: '1px solid #ccc',
        flexWrap:'nowrap',
        display:'flex'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollableBox;

import React from 'react';

const ProfileCard = () => {
  const imageStyle = {
    width: '200px', // Adjust the width and height as needed
    height: '200px',
    position: 'relative',
  };

  const borderStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    clipPath: 'polygon(100% 10%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    border: '100px solid #FFFF00', // Adjust the border style as needed
  };

  return (
    <div style={imageStyle} className="pentagon-border-image">
      <img src="https://avatars.githubusercontent.com/u/48338938?v=4" />
      <div style={borderStyle}></div>
    </div>
  );
};

export default ProfileCard;

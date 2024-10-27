import React, { useState } from 'react';

function MessageButton() {
  const [message, setMessage] = useState('Click me');

  const handleClick = () => {
    const messages = ['hello', 'welcome', 'hi', 'how are you'];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
    setMessage(newMessage);
  };

  return (
    <button onClick={handleClick}>
      {message}
    </button>
  );
}

export default MessageButton;
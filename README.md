# Leoisthegoat-
---
import { useState } from 'react';

const defaultMessage = "Welcome to the Official Leo Coin Website!";
const [message, setMessage] = useState(defaultMessage);

function handleMouseOver() {
  setMessage("Join the Revolution with Leo Coin!");
}

function handleMouseOut() {
  setMessage(defaultMessage);
}
---

<div style="text-align: center; padding: 50px; background: #111; color: #fff;">
  <h1 
    style="font-size: 2.5rem; cursor: pointer;" 
    onmouseover={handleMouseOver} 
    onmouseout={handleMouseOut}>
    {message}
  </h1>
  <p>Discover how Leo Coin is shaping the future of meme coins. 🚀</p>
  <div style="margin-top: 20px;">
    <a 
      href="https://t.me/LeoIsTheGoatofficial" 
      target="_blank" 
      rel="noopener noreferrer"
      style="…

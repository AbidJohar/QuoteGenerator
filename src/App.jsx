import React, { useState } from 'react';
import { getRandomQuote } from 'motivate-quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const colors = [
    'Aqua', 'Aquamarine', 'Black', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 
    'Coral', 'CornflowerBlue', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 
    'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 
    'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise'
  ];

  const [quote, setQuote] = useState("Hard work is the key to upskilling yourself.");
  const [author, setAuthor] = useState("Abid Johar");
  const [bgColor, setBgColor] = useState('');

  const handleSubmit = () => {
    const newQuote = getRandomQuote('Education');
    setQuote(newQuote.text);
    setAuthor(newQuote.author);
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    console.log("Math random", Math.random());
    console.log("Math random with colors.length", Math.random() * colors.length);
  };

  return (
    <div
      className='w-screen h-screen bg-red-400 flex justify-center items-center p-4' 
      style={{ backgroundColor: bgColor }}
    >
      <div
        className='h-fit bg-white w-[500px] rounded-lg flex flex-col items-start p-8 relative'
      >
        <h3
          style={{ color: bgColor }}
          className='font-mono text-2xl mb-4 text-red-400'
        >
          <FontAwesomeIcon icon={faQuoteLeft} />{" " + quote}
        </h3>
        <p
          style={{ color: bgColor }}
          className=' mt-2 self-end text-red-400 text-lg'
        >
          -{author}
        </p>
        <div className='w-full  flex items-end justify-between'>
          <div className=' flex gap-4'>
          <a 
          style={{backgroundColor: bgColor}}
          className='py-2 px-3 rounded-sm bg-red-400 ' href="#"><i  ><FontAwesomeIcon icon={faTwitter} /></i></a>
          <a style={{backgroundColor: bgColor}}
           className='py-2 px-4 rounded-sm bg-red-400' href="#"><i ><FontAwesomeIcon icon={faTumblr} /></i></a>
          </div>
        <button
          onClick={handleSubmit}
          style={{ backgroundColor: bgColor }}
          className='px-4 py-2 text-white font-normal bg-red-400 rounded-sm focus:border-none focus:outline-none mt-4'
        >
          New quote
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;

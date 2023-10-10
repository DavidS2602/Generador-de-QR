import React, { useState } from "react";
import "./App.css";
import QR from './components/QR';

function App() {
  const [url, setUrl] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center font-sans">
      <img
        className="relative w-screen h-screen object-cover"
        src="https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_1280.jpg"
        alt=""
      />
      <div className="absolute flex flex-col items-center mt-4 rounded-lg border w-3/4 h-1/2 backdrop:blur-sm">
        <h1 className="bg-gradient-to-r from-blue-700 mt-4 via-blue-800 to-gray-900 text-transparent text-3xl font-bold font-sans bg-clip-text">
          QR Generator
        </h1>
          <input type="text" value={url} onChange={handleChange} placeholder="Introduce el link" className="p-2 rounded bg-transparent text-black border-2 mb-2"/>
        <footer className="p-1.5 mt-20 flex items-center justify-center">
          {
            url.length > 0
            ?<QR url={url} />
            :<p className="text-gray-500">Introduce un link para generar el QR</p>
          }
        </footer>
      </div>
    </div>
  );
}

export default App;

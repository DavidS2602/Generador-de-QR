import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import QR from './components/QR';

function App() {
  const [url, setUrl] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <img
        className="relative w-screen h-screen object-cover"
        src="/src/assets/wallpaperflare.com_wallpaper.jpg"
        alt=""
      />
      <div className="absolute flex flex-col items-center mt-4 rounded-lg border border-gray-200 w-3/4 h-1/2 backdrop-blur-lg lg:w-1/4 lg:h-1/2">
        <h1 className="font-bold text-3xl text-sky-200 font-sans py-4">
          QR Generator
        </h1>
          <input type="text" value={url} onChange={handleChange} placeholder="Introduce el link" className="p-2 rounded bg-transparent text-gray-200 border-2 mb-2 focus:border-gray-300"/>
        <footer className="p-1.5 mt-5 flex items-center justify-center">
          {
            url.length > 0 ? (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                >
                  <QR url={url} />
                </motion.div>
            )
            : <p className="text-gray-300">Introduce un link para generar el QR</p>
          }
        </footer>
      </div>
    </div>
  );
}

export default App;

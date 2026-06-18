import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RedirectPage() {
  const { buttonName } = useParams();
  const navigate = useNavigate();

  const displayName = buttonName ? decodeURIComponent(buttonName) : 'Button';

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid opacity-10"></div>
      
      <div className="relative z-10 text-center max-w-lg">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-wider leading-tight">
          {displayName}
        </h1>
        <button
          onClick={() => navigate('/')}
          className="clip-button bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold py-3 px-8 transition-colors tracking-widest cursor-pointer"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}

export default RedirectPage;

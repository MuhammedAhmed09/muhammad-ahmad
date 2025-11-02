'use client';
import { Download } from 'lucide-react';
import React from 'react';

const DownloadCV = () => {
  const handleDownloadBtn = () => {
    const link = document.createElement('a');
    link.href = '/files/Muhammad Ahmad.pdf';
    link.download = 'Muhammad Ahmad.pdf';
    link.click();
  };

  return (
    <button
      onClick={handleDownloadBtn}
      className='flex items-center gap-2 bg-white rounded-full text-Charcoal font-semibold cursor-pointer py-2 px-4'
    >
      Download CV
      <span><Download size={18} /></span>
    </button>
  );
};

export default DownloadCV;

'use client';
import React, { useState } from 'react';

const SearchSection = () => {
  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Works', id: 'works' },
    { name: 'Contact', id: 'contact' },
  ];

  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSections = sections.filter((section) =>
    section.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (sectionId) => {
    setQuery('');
    setShowSuggestions(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // optional: update URL hash
      history.replaceState(null, '', `#${sectionId}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundSection = sections.find(
      (section) => section.name.toLowerCase() === query.toLowerCase()
    );
    if (foundSection) handleSelect(foundSection.id);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          placeholder="Search section..."
          className="bg-Dark-Navy text-sm outline-none focus:ring-2 focus:ring-Aqua-Neon focus:text-Aqua-Neon placeholder:text-white/60 font-semibold rounded-full px-2 py-1"
        />
      </form>

      {showSuggestions && filteredSections.length > 0 && (
        <ul className="absolute left-0 right-0 bg-Dark-Navy text-white/40 border mt-2 overflow-y-auto z-20 max-h-60 rounded-xl shadow-md">
          {filteredSections.map((section) => (
            <li
              key={section.id}
              onMouseDown={(e) => {
                e.preventDefault(); // to prevent input blur before click
                handleSelect(section.id);
              }}
              className="px-4 py-2 hover:bg-Aqua-Neon hover:text-Charcoal cursor-pointer"
            >
              {section.name}
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && filteredSections.length === 0 && (
        <div className="absolute left-0 right-0 bg-white border mt-2 rounded-xl py-2 px-4 z-20 text-Charcoal">
          No results found
        </div>
      )}
    </div>
  );
};

export default SearchSection;

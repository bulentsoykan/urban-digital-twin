import React from 'react';
import Logo from './ui/Logo';
import SearchBar from './ui/SearchBar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">
      <Logo />
      <div className="flex items-center space-x-4">
        <SearchBar />
      </div>
    </header>
  );
}
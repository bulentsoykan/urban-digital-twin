import React from 'react';
import { Building2, Layers, Map, Settings } from 'lucide-react';
import MenuItem from './navigation/MenuItem';

const menuItems = [
  { icon: Building2, label: 'Buildings' },
  { icon: Layers, label: 'Layers' },
  { icon: Map, label: 'Analysis' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <div className="w-16 bg-gray-800 h-full flex flex-col items-center py-4 space-y-6">
      {menuItems.map(({ icon, label }) => (
        <MenuItem key={label} Icon={icon} label={label} />
      ))}
    </div>
  );
}
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  Icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export default function MenuItem({ Icon, label, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
      title={label}
    >
      <Icon size={24} />
    </button>
  );
}
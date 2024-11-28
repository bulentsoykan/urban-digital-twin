import React from 'react';
import { Building2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Building2 className="text-blue-600" size={24} />
      <h1 className="text-xl font-semibold text-gray-800">Urban Digital Twin</h1>
    </div>
  );
}
import React from 'react';
import CesiumViewer from './components/viewer/CesiumViewer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 relative">
          <CesiumViewer />
        </main>
      </div>
    </div>
  );
}

export default App;
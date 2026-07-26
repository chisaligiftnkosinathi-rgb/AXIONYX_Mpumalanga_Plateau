import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Activity, BookOpen, Building2, Globe, FileText, Target, ShieldCheck } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="bg-gray-800 border-b border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-blue-400 font-bold text-xl hover:text-blue-300 transition-colors">
                <Globe className="w-6 h-6" />
                <span>AXIONYX Engineering Observatory</span>
              </Link>
            </div>
            <nav className="flex space-x-6">
              <Link to="/observatory" className="text-gray-300 hover:text-white flex items-center space-x-1">
                <Activity className="w-4 h-4" /> <span>Observatory</span>
              </Link>
              <Link to="/academy" className="text-gray-300 hover:text-white flex items-center space-x-1">
                <BookOpen className="w-4 h-4" /> <span>Academy</span>
              </Link>
              <Link to="/collaborate" className="text-gray-300 hover:text-white flex items-center space-x-1">
                <Building2 className="w-4 h-4" /> <span>Collaborate</span>
              </Link>
              <Link to="/progress" className="text-gray-300 hover:text-white flex items-center space-x-1">
                <Target className="w-4 h-4" /> <span>Progress</span>
              </Link>
              <Link to="/vision" className="text-gray-300 hover:text-white flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4" /> <span>Vision</span>
              </Link>
              <Link to="/journal" className="text-gray-300 hover:text-white flex items-center space-x-1">
                <FileText className="w-4 h-4" /> <span>Journal</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

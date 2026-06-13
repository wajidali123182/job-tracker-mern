import { Link, useLocation } from 'react-router-dom';
import { Briefcase, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-surface/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors">
          <Briefcase size={28} className="stroke-[1.5]" />
          <span className="text-xl font-bold tracking-tight text-white">JobTracker</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/login') ? 'text-primary-400 bg-primary-400/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LogIn size={18} />
            <span>Login</span>
          </Link>
          <Link 
            to="/register" 
            className="flex items-center space-x-1 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-md text-sm font-medium transition-all duration-200 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]"
          >
            <UserPlus size={18} />
            <span>Sign Up</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

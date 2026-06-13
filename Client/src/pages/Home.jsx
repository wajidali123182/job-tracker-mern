import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
          Land Your Dream Job Faster
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Keep track of your applications, prepare for interviews, and organize your job search with our modern job tracking platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/register" className="btn-primary flex items-center gap-2 text-lg px-8 py-3 shadow-[0_0_20px_rgba(20,184,166,0.4)]">
            Get Started Free
            <ArrowRight size={20} />
          </Link>
          <Link to="/login" className="px-8 py-3 rounded-lg text-lg font-medium text-slate-300 bg-surface border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors duration-200">
            Log In
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-800">
          <div className="flex flex-col items-center p-6 bg-surface/50 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Track Progress</h3>
            <p className="text-slate-400 text-sm">Monitor all your applications in one unified dashboard.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-surface/50 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Analytics</h3>
            <p className="text-slate-400 text-sm">Visualize your application success rate and response times.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-surface/50 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Network</h3>
            <p className="text-slate-400 text-sm">Keep track of your contacts and referrals efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

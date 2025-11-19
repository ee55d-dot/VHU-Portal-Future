
import React from 'react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="flex-shrink-0 bg-dark-blue/30 backdrop-blur-sm">
            <div className="flex items-center justify-between p-4 h-16 border-b border-highlight-yellow/10">
                <button onClick={onMenuClick} className="lg:hidden text-gray-300 hover:text-white">
                    <Bars3Icon className="h-6 w-6" />
                </button>
                <div className="hidden lg:block">
                    {/* Could be a breadcrumb or page title here */}
                </div>
                <div className="flex items-center space-x-4">
                    <button className="relative text-gray-300 hover:text-white">
                        <BellIcon className="h-6 w-6" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
                        </span>
                    </button>
                    <div className="flex items-center space-x-3">
                        <img src="https://picsum.photos/seed/student-avatar/40" alt="Student avatar" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm font-medium text-white hidden md:block">VÕ VĂN QUỐC BẢO</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
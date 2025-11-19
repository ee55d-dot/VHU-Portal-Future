
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    UserCircleIcon,
    CalendarIcon,
    AcademicCapIcon,
    ChartBarIcon,
    SparklesIcon,
    CogIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
    { to: '/', text: 'Thông tin cá nhân', icon: UserCircleIcon },
    { to: '/schedule', text: 'Lịch học', icon: CalendarIcon },
    { to: '/course-suggestions', text: 'Gợi ý đăng ký học phần', icon: AcademicCapIcon },
    { to: '/grades', text: 'Kết quả học tập', icon: ChartBarIcon },
    { to: '/ai-assistant', text: 'Trợ lý AI', icon: SparklesIcon },
    { to: '/settings', text: 'Cài đặt', icon: CogIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const activeLinkStyle = {
        backgroundColor: '#ffd700',
        color: '#001f3f',
        boxShadow: '0 0 15px #ffd700',
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            ></div>
            <aside
                className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] bg-dark-blue z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 flex flex-col border-r border-highlight-yellow/20`}
            >
                <div className="flex items-center justify-between p-6 border-b border-highlight-yellow/20">
                    <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-highlight-yellow rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">V</div>
                        <h1 className="text-xl font-bold text-white">VHU Portal</h1>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-white">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1 p-4">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.to} className="mb-2">
                                <NavLink
                                    to={item.to}
                                    end={item.to === '/'}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center p-3 rounded-lg text-gray-300 transition-all duration-300 hover:bg-highlight-yellow hover:text-dark-blue hover:shadow-neon-yellow"
                                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                                >
                                    <item.icon className="h-6 w-6 mr-3" />
                                    <span>{item.text}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                 <div className="p-4 border-t border-highlight-yellow/20 mt-auto">
                    <div className="p-4 rounded-lg bg-dark-blue-gradient-end/50 text-center">
                        <p className="text-sm text-gray-300">Cần hỗ trợ?</p>
                        <a href="#/ai-assistant" className="text-highlight-yellow font-semibold hover:underline">Hỏi trợ lý AI</a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

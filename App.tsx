
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AIFrame from './components/AIFrame';
import Header from './components/Header';
import CourseSuggestions from './pages/CourseSuggestions';
import PersonalInfo from './pages/PersonalInfo';
import Schedule from './pages/Schedule';
import Grades from './pages/Grades';
import AIAssistant from './pages/AIAssistant';
import Settings from './pages/Settings';

const AppLayout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isAiFrameOpen, setAiFrameOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gradient-to-br from-dark-blue to-dark-blue-gradient-end text-white font-sans overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex-1 flex overflow-hidden lg:ml-[20%]">
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1 overflow-y-auto p-4 md:p-8">
                        <Outlet />
                    </main>
                </div>
                <AIFrame isOpen={isAiFrameOpen} setIsOpen={setAiFrameOpen} />
            </div>
        </div>
    );
};


const App: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light'); // Assuming you have light mode styles
        } else {
            document.documentElement.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<PersonalInfo />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="course-suggestions" element={<CourseSuggestions />} />
                    <Route path="grades" element={<Grades />} />
                    <Route path="ai-assistant" element={<AIAssistant />} />
                    <Route path="settings" element={<Settings theme={theme} setTheme={setTheme} />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;

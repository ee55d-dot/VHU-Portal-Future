
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon, SunIcon, MoonIcon, LanguageIcon, ShieldCheckIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

interface SettingsProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ theme, setTheme }) => {
    const [language, setLanguage] = useState('vi');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };
    
    const settingsItems = [
        {
            icon: LockClosedIcon,
            title: 'Thay đổi mật khẩu',
            description: 'Bảo vệ tài khoản của bạn',
            action: <button className="text-sm font-semibold text-highlight-yellow hover:underline">Thay đổi</button>
        },
        {
            icon: theme === 'dark' ? SunIcon : MoonIcon,
            title: 'Chủ đề',
            description: `Chế độ hiện tại: ${theme === 'dark' ? 'Tối' : 'Sáng'}`,
            action: (
                <div onClick={toggleTheme} className="w-14 h-7 flex items-center bg-gray-600 rounded-full p-1 cursor-pointer">
                    <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-md"
                        layout
                        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                        style={{ marginLeft: theme === 'dark' ? '0' : 'auto' }}
                    />
                </div>
            )
        },
        {
            icon: LanguageIcon,
            title: 'Ngôn ngữ',
            description: 'Thay đổi ngôn ngữ hiển thị',
            action: (
                 <div className="flex items-center space-x-2">
                    <button onClick={() => setLanguage('vi')} className={`text-sm px-2 py-1 rounded ${language === 'vi' ? 'bg-highlight-yellow text-dark-blue' : 'text-white'}`}>VI</button>
                    <button onClick={() => setLanguage('en')} className={`text-sm px-2 py-1 rounded ${language === 'en' ? 'bg-highlight-yellow text-dark-blue' : 'text-white'}`}>EN</button>
                 </div>
            )
        },
        {
            icon: ShieldCheckIcon,
            title: 'Quyền riêng tư & Blockchain',
            description: 'Dữ liệu của bạn được xác thực bằng Blockchain để chống gian lận.',
            action: <a href="#" className="text-sm font-semibold text-accent-cyan hover:underline">Tìm hiểu thêm</a>
        },
        {
            icon: ArrowRightOnRectangleIcon,
            title: 'Đăng xuất',
            description: 'Kết thúc phiên làm việc',
            action: <button className="text-sm font-semibold text-red-500 hover:underline">Đăng xuất</button>
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 max-w-4xl mx-auto"
        >
            <h1 className="text-3xl font-bold text-white">Cài đặt</h1>

            <div className="bg-dark-blue/60 p-6 rounded-xl border border-highlight-yellow/30 space-y-4">
                {settingsItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="flex items-center justify-between p-4 bg-dark-blue-gradient-end/50 rounded-lg"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    >
                       <div className="flex items-center space-x-4">
                            <item.icon className="h-8 w-8 text-highlight-yellow flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-white">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                       </div>
                        <div>
                            {item.action}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Settings;

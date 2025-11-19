
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon, HeartIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { AITip } from '../types';

interface AIFrameProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = React.useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);
    React.useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isDesktop;
}

const aiTips: AITip[] = [
    {
        title: "Hỗ trợ học tập cá nhân hóa",
        description: "Xây dựng lộ trình học dựa trên điểm số và mục tiêu của bạn.",
        icon: AcademicCapIcon,
    },
    {
        title: "Hỗ trợ cảm xúc",
        description: "Phát hiện dấu hiệu stress qua phân tích và đưa ra gợi ý.",
        icon: HeartIcon,
    },
    {
        title: "Tự động hóa thủ tục",
        description: "Đăng ký học phần, xin giấy tờ nhanh chóng và tiện lợi.",
        icon: BoltIcon,
    },
    {
        title: "Blockchain & Bảo mật",
        description: "Xác thực chứng chỉ và bảo vệ dữ liệu cá nhân của bạn an toàn.",
        icon: ShieldCheckIcon,
    },
];

const AIFrame: React.FC<AIFrameProps> = ({ isOpen, setIsOpen }) => {
    const isDesktop = useIsDesktop();

    return (
        <>
            {/* Mobile toggle button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 lg:hidden w-16 h-16 bg-highlight-yellow rounded-full flex items-center justify-center text-dark-blue shadow-lg shadow-highlight-yellow/50 z-40"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                animate={!isDesktop && !isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            >
                <SparklesIcon className="h-8 w-8" />
            </motion.button>
       
            {/* Mobile overlay */}
            <AnimatePresence>
            {isOpen && !isDesktop && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            </AnimatePresence>
       
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isDesktop || isOpen ? '0%' : '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed lg:relative top-0 right-0 lg:inset-auto h-full w-[85%] md:w-[50%] lg:w-[25%] lg:flex-shrink-0 bg-dark-blue/50 backdrop-blur-xl border-l-2 border-highlight-yellow/50 shadow-2xl shadow-highlight-yellow/10 z-50 flex flex-col"
            >
                <div className="flex items-center justify-between p-4 border-b border-highlight-yellow/20">
                    <h2 className="text-lg font-bold text-highlight-yellow flex items-center">
                        <SparklesIcon className="h-6 w-6 mr-2" />
                        Trợ lý AI
                    </h2>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-white">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-6">
                    <motion.div 
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative w-32 h-32 mb-4">
                            <motion.div 
                                className="absolute inset-0 rounded-full bg-highlight-yellow/20"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <img src="https://picsum.photos/seed/ai-robot/200" alt="Cute 3D yellow robot AI assistant" className="w-32 h-32 rounded-full border-4 border-highlight-yellow object-cover" />
                        </div>
                        <h3 className="font-bold text-white text-xl">Xin chào!</h3>
                        <p className="text-gray-400 text-sm">Luôn sẵn sàng hỗ trợ bạn!</p>
                    </motion.div>

                    <div className="space-y-4">
                        {aiTips.map((tip, index) => (
                            <motion.div
                                key={tip.title}
                                className="bg-dark-blue-gradient-end/60 p-4 rounded-lg border border-cyan-400/20 flex items-start space-x-4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan/10 rounded-full flex items-center justify-center">
                                    <tip.icon className="h-6 w-6 text-accent-cyan" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{tip.title}</h4>
                                    <p className="text-sm text-gray-400">{tip.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="p-4 mt-auto border-t border-highlight-yellow/20">
                    <a href="#/ai-assistant" className="w-full flex items-center justify-center p-3 bg-highlight-yellow text-dark-blue font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-neon-yellow">
                        <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                        Bắt đầu trò chuyện
                    </a>
                </div>
            </motion.div>
        </>
    );
};

export default AIFrame;

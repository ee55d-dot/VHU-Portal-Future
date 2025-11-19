import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AcademicCapIcon, ExclamationTriangleIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const semesterData = [
    { name: 'HK1 23-24', gpa10: 8.1, gpa4: 3.2 },
    { name: 'HK2 23-24', gpa10: 7.9, gpa4: 3.1 },
];

const colors = ['#ffd700', '#00bfff'];

const aiAnalysis = [
    {
        icon: AcademicCapIcon,
        title: "Tiến độ học tập",
        description: "Bạn đang hoàn thành 70% chương trình với khả năng tốt nghiệp đúng hạn.",
        progress: 70,
        color: 'cyan'
    },
    {
        icon: ExclamationTriangleIcon,
        title: "Dự báo rủi ro",
        description: "40% nguy cơ trượt môn Toán cao cấp, không cần điểm rèn luyện thêm.",
        progress: 40,
        color: 'red'
    },
    {
        icon: LightBulbIcon,
        title: "Gợi ý học tập",
        description: "Điểm môn Tiếng Anh đang giảm, gợi ý video học thêm.",
        link: "Link Video tại đây"
    }
];

const Grades: React.FC = () => {
    const [activeTab, setActiveTab] = useState('semester');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <h1 className="text-3xl font-bold text-white">Kết quả học tập</h1>

            <div className="bg-dark-blue/60 p-6 rounded-xl border border-highlight-yellow/30">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2 p-1 bg-dark-blue-gradient-end rounded-lg">
                        <button
                            onClick={() => setActiveTab('year')}
                            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${activeTab === 'year' ? 'bg-highlight-yellow text-dark-blue shadow-md' : 'text-gray-300 hover:bg-white/10'}`}
                        >
                            Theo năm học
                        </button>
                        <button
                            onClick={() => setActiveTab('semester')}
                            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${activeTab === 'semester' ? 'bg-highlight-yellow text-dark-blue shadow-md' : 'text-gray-300 hover:bg-white/10'}`}
                        >
                            Theo học kỳ
                        </button>
                    </div>
                     <div className="text-right">
                        <p className="text-sm text-gray-400">Năm học: 2023-2024</p>
                        <p className="font-bold text-white">GPA: 3.2/4.0 | 8.0/10</p>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'semester' && (
                             <div className="h-96">
                                <h3 className="text-xl font-semibold text-white mb-4">Điểm trung bình các học kỳ</h3>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={semesterData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                                        <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
                                        <YAxis yAxisId="left" orientation="left" stroke="#ffd700" domain={[0, 10]} tick={{ fill: '#ffd700' }}/>
                                        <YAxis yAxisId="right" orientation="right" stroke="#00bfff" domain={[0, 4]} tick={{ fill: '#00bfff' }}/>
                                        <Tooltip contentStyle={{ backgroundColor: '#001f3f', border: '1px solid #ffd700' }} />
                                        <Bar yAxisId="left" dataKey="gpa10" name="Điểm TBC (Hệ 10)" fill="#ffd700" />
                                        <Bar yAxisId="right" dataKey="gpa4" name="Điểm TBC (Hệ 4)" fill="#00bfff" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                        {activeTab === 'year' && (
                           <div className="flex items-center justify-center h-96">
                                <div className="relative w-48 h-48">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle className="text-gray-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                                        <motion.circle
                                            className="text-accent-cyan"
                                            strokeWidth="10"
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="45"
                                            cx="50"
                                            cy="50"
                                            strokeDasharray={2 * Math.PI * 45}
                                            strokeDashoffset={2 * Math.PI * 45 * (1 - 0.7)}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                                            animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - 0.7) }}
                                            transition={{ duration: 1.5, delay: 0.2 }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-4xl font-bold text-white">70%</span>
                                        <span className="text-gray-400">Hoàn thành</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-highlight-yellow mb-4">Phân tích từ AI</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {aiAnalysis.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-blue/60 p-6 rounded-xl border border-cyan-400/20 flex flex-col items-start"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                           <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-dark-blue-gradient-end ${item.color === 'cyan' ? 'text-accent-cyan' : 'text-red-500'}`}>
                                <item.icon className="h-7 w-7" />
                           </div>
                           <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                           <p className="text-gray-400 text-sm flex-1">{item.description}</p>
                           {item.progress !== undefined && (
                                <div className="w-full mt-4">
                                    <div className="h-2 bg-gray-700 rounded-full">
                                        <div className={`h-2 rounded-full ${item.color === 'cyan' ? 'bg-accent-cyan' : 'bg-red-500'}`} style={{width: `${item.progress}%`}}></div>
                                    </div>
                                </div>
                           )}
                           {item.link && (
                               <a href="#" className="mt-4 text-accent-cyan font-semibold hover:underline">{item.link}</a>
                           )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Grades;

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const suggestedCourses = [
    { id: '1', title: 'Phát triển ứng dụng di động', instructor: 'GS. Phan', rating: '4.8', credits: '3 tín chỉ', schedule: 'Thứ 2, 9:00', description: 'Phù hợp định hướng: Xuất sắc' },
    { id: '2', title: 'Học máy nâng cao', instructor: 'TS. Vu', rating: '4.9', credits: '4 tín chỉ', schedule: 'Thứ 5, 10:00', description: 'Môn chuyên ngành: Xuất sắc' },
    { id: '3', title: 'Quản trị dự án PM', instructor: 'ThS. Pho', rating: '4.7', credits: '3 tín chỉ', schedule: 'Thứ 2, 1:30', description: 'Kỹ năng mềm: Xuất sắc' },
];

const futureCourses = [
    { id: 'INT306', title: '[INT306] - Introduction to the major (2.00)' },
    { id: 'INT310', title: '[INT310] - Industry and career experience (1.00)' },
    { id: 'ECO201', title: '[ECO201] - Microeconomics (3.00)' },
];

const CourseCard: React.FC<{ course: typeof suggestedCourses[0], index: number }> = ({ course, index }) => {
    return (
        <motion.div
            className="bg-dark-blue/60 p-6 rounded-xl border border-highlight-yellow/30 flex flex-col hover:border-highlight-yellow hover:shadow-neon-yellow transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: '1000px' }}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <span className="text-xs font-semibold bg-accent-cyan/20 text-accent-cyan py-1 px-2 rounded">{course.credits}</span>
            </div>
            <div className="text-sm text-gray-400 space-y-2 mb-4">
                <p>GV: {course.instructor} <StarIcon className="h-4 w-4 inline-block text-highlight-yellow -mt-1 ml-1" /> {course.rating}</p>
                <p>Lịch: {course.schedule}</p>
                <p>{course.description}</p>
            </div>
            <button className="mt-auto w-full bg-highlight-yellow text-dark-blue font-bold py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-highlight-yellow/30 transform hover:-translate-y-1">
                Đăng ký
            </button>
        </motion.div>
    );
};

const CourseSuggestions: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Trang tổng quan</h1>
                <p className="text-gray-400">Chào mừng trở lại! Đây là những gợi ý dành riêng cho bạn.</p>
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-highlight-yellow mb-4">Gợi ý đăng ký học phần</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suggestedCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-highlight-yellow mb-4">Chuẩn bị cho tương lai (Môn học tương đương)</h2>
                <div className="bg-dark-blue/60 p-4 rounded-xl border border-cyan-400/20 space-y-3">
                    {futureCourses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            className="flex justify-between items-center p-3 bg-dark-blue-gradient-end/50 rounded-lg"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                            <span className="font-medium text-gray-300">{course.title}</span>
                            <a href="#" className="text-accent-cyan hover:underline text-sm font-semibold">Hoàn thành</a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default CourseSuggestions;

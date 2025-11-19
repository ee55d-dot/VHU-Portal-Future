import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, CakeIcon, AcademicCapIcon, IdentificationIcon, DevicePhoneMobileIcon, UsersIcon, EnvelopeIcon, SparklesIcon, PencilSquareIcon, SunIcon } from '@heroicons/react/24/outline';

const studentInfo = {
    name: 'VÕ VĂN QUỐC BẢO',
    studentId: '231A290036',
    dateOfBirth: '01/01/2005 (Tuổi: 19)',
    class: '23TMDT01',
    faculty: 'Kinh tế - Quản trị',
    gender: 'Nam',
    email: 'bao.vg231a290036@vhu.edu.vn',
    major: 'Thương mại điện tử',
    avatarUrl: 'https://picsum.photos/seed/flower-avatar/200',
    studyProgress: 25,
    studyYears: '2023-2027',
};

const weatherInfo = {
    temperature: 28,
    condition: 'sunny',
    icon: SunIcon,
    suggestion: 'Trời nắng, nhớ mang nón nhé ☀️'
};

const InfoItem: React.FC<{ icon: React.ElementType, label: string, value: string }> = ({ icon: Icon, label, value }) => (
    <div className="flex items-start space-x-4">
        <Icon className="h-6 w-6 text-highlight-yellow mt-1" />
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="font-semibold text-white">{value}</p>
        </div>
    </div>
);


const PersonalInfo: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <h1 className="text-3xl font-bold text-white">Thông tin cá nhân</h1>
            
            <div className="grid lg:grid-cols-3 gap-8">
                <motion.div 
                    className="lg:col-span-1 bg-dark-blue/60 p-8 rounded-2xl border border-highlight-yellow/30 flex flex-col items-center text-center h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring' }}
                >
                    <img src={studentInfo.avatarUrl} alt="Student avatar" className="w-40 h-40 rounded-full object-cover border-4 border-highlight-yellow shadow-lg shadow-highlight-yellow/20 mb-4" />
                    <h2 className="text-2xl font-bold text-white">{studentInfo.name}</h2>
                    <p className="text-accent-cyan">{studentInfo.major}</p>
                     <button className="mt-6 flex items-center justify-center py-2 px-4 bg-highlight-yellow/20 text-highlight-yellow font-semibold rounded-lg hover:bg-highlight-yellow/30 transition-all duration-300">
                        <PencilSquareIcon className="h-5 w-5 mr-2" />
                        Chỉnh sửa
                    </button>
                </motion.div>

                <motion.div 
                    className="lg:col-span-2 bg-dark-blue/60 p-8 rounded-2xl border border-cyan-400/20"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold text-white mb-6">Thông tin chi tiết</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <InfoItem icon={IdentificationIcon} label="Mã sinh viên" value={studentInfo.studentId} />
                        <InfoItem icon={CakeIcon} label="Ngày sinh" value={studentInfo.dateOfBirth} />
                        <InfoItem icon={DevicePhoneMobileIcon} label="Lớp" value={studentInfo.class} />
                        <InfoItem icon={AcademicCapIcon} label="Khoa" value={studentInfo.faculty} />
                        <InfoItem icon={UserIcon} label="Giới tính" value={studentInfo.gender} />
                        <InfoItem icon={EnvelopeIcon} label="Email" value={studentInfo.email} />
                        <InfoItem icon={UsersIcon} label="Nhóm" value={studentInfo.major} />
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-2">Tiến độ học tập ({studentInfo.studyYears})</h4>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                            <motion.div
                                className="bg-gradient-to-r from-accent-cyan to-highlight-yellow h-4 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${studentInfo.studyProgress}%` }}
                                transition={{ duration: 1, delay: 0.5, type: 'spring' }}
                            ></motion.div>
                        </div>
                        <p className="text-right text-sm text-gray-400 mt-1">{studentInfo.studyProgress}% Hoàn thành</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="bg-dark-blue/60 p-6 rounded-2xl border border-cyan-400/20 flex items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="flex items-center space-x-6">
                    <weatherInfo.icon className="h-16 w-16 text-highlight-yellow" />
                    <div>
                        <p className="text-5xl font-bold text-white">{weatherInfo.temperature}°C</p>
                        <p className="text-gray-300">Thời tiết hôm nay</p>
                    </div>
                </div>
                <p className="text-lg font-medium text-accent-cyan">{weatherInfo.suggestion}</p>
            </motion.div>
        </motion.div>
    );
};

export default PersonalInfo;
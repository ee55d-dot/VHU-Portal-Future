import React from 'react';
import { motion } from 'framer-motion';

const scheduleData = [
    { day: 'Thứ 2', events: [{ name: 'Kinh tế vi mô', time: '9:00 - 11:30', location: '@A201', color: 'from-green-500 to-cyan-500' }] },
    { day: 'Thứ 3', events: [] },
    { day: 'Thứ 4', events: [{ name: 'Lập trình Web', time: '7:30 - 10:00', location: '@C301', color: 'from-blue-500 to-indigo-500' }] },
    { day: 'Thứ 5', events: [] },
    { day: 'Thứ 6', events: [{ name: 'Lập trình', time: '13:00 - 15:30', location: '@B105', color: 'from-purple-500 to-pink-500' }] },
    { day: 'Thứ 7', events: [{ name: 'Tiếng Anh chuyên ngành', time: '8:00 - 10:30', location: '@F402', color: 'from-yellow-500 to-orange-500' }] },
];

const upcomingEvents = [
    { id: 1, title: 'Hội thảo AI', date: '15/11/2025', time: '9:00 AM' },
    { id: 2, title: 'Ngày sinh viên', date: '20/11/2025', time: '2:00 PM' },
    { id: 3, title: 'Cuộc thi Hackathon', date: '25/11/2025', time: '8:00 AM' },
    { id: 4, title: 'Học thuật cùng AI', date: '30/11/2025', time: '10:00 AM' },
];

const Schedule: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div>
                <h1 className="text-3xl font-bold text-white mb-1">Lịch học & Sự kiện</h1>
                <p className="text-gray-400">Tuần 04/11 - 10/11/2024</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {scheduleData.map((day, index) => (
                        <motion.div
                            key={day.day}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="font-bold text-highlight-yellow mb-2">{day.day}</h3>
                            {day.events.length > 0 ? (
                                day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className={`p-4 rounded-lg bg-gradient-to-r ${event.color} text-white shadow-lg`}>
                                        <p className="font-bold">{event.name}</p>
                                        <p className="text-sm">{event.time} {event.location}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 rounded-lg bg-dark-blue/60 border border-gray-700">
                                    <p className="text-gray-500">Không có lớp học</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="lg:col-span-1 flex flex-col">
                    <h2 className="text-2xl font-semibold text-accent-cyan mb-4">Sự kiện sắp tới</h2>
                    <div className="relative flex-1">
                        {/* Vertical Timeline Bar */}
                        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-cyan-400/20"></div>
                        
                        <div className="ml-10 h-full flex flex-col justify-between">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    className="relative"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-7 top-1 h-5 w-5 rounded-full bg-highlight-yellow border-4 border-dark-blue flex items-center justify-center shadow-neon-yellow"></div>
                                    
                                    {/* Event Card */}
                                    <div className="bg-dark-blue/60 p-4 rounded-lg border border-cyan-400/20 space-y-2 transform transition-transform duration-300 hover:scale-105">
                                        <div>
                                            <p className="font-semibold text-white">{event.title}</p>
                                            <p className="text-sm text-gray-400">{event.date} - {event.time}</p>
                                        </div>
                                        <button className="w-full text-center py-2 bg-highlight-yellow/20 text-highlight-yellow text-sm font-bold rounded-md hover:bg-highlight-yellow/40 transition">
                                            RSVP
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Schedule;
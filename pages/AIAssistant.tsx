import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Message } from '../types';
// Fix: Import Gemini API modules.
import { GoogleGenAI, Chat } from '@google/genai';

const initialFeatures = [
    { text: "Hỗ trợ học tập cá nhân hóa" },
    { text: "Giải đáp thắc mắc 24/7" },
    { text: "Nhắc nhở lịch học, deadline" },
    { text: "Hỗ trợ cảm xúc và sức khỏe tinh thần" },
    { text: "Dự báo rủi ro học vụ" },
    { text: "Sử dụng Blockchain cho an toàn dữ liệu" },
];

const AIAssistant: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isChatting, setIsChatting] = useState(false);
    // Fix: Add loading state for better UX.
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    // Fix: Add ref to hold chat instance.
    const chatRef = useRef<Chat | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isLoading]);
    
    const handleStartChat = () => {
        setIsChatting(true);
        // Fix: Initialize Gemini chat session.
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: 'You are a helpful AI assistant for a university student portal called VHU Portal Future. Your name is V. You should be friendly and helpful. Respond in Vietnamese.',
                },
            });
            setMessages([{id: 1, text: "Xin chào! Tôi là trợ lý AI của VHU Portal Future. Tôi có thể giúp bạn những gì?", sender: 'ai'}]);
        } catch (error) {
            console.error("Failed to initialize AI:", error);
            setMessages([{id: 1, text: "Không thể khởi tạo trợ lý AI. Vui lòng kiểm tra lại cấu hình.", sender: 'ai'}]);
        }
    }

    // Fix: Replace mock AI logic with Gemini API chat functionality.
    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === '' || !chatRef.current || isLoading) return;

        const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        const userInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatRef.current.sendMessage({ message: userInput });
            const aiResponseText = response.text;
            
            if (aiResponseText) {
                const aiMessage: Message = { id: Date.now() + 1, text: aiResponseText, sender: 'ai' };
                setMessages(prev => [...prev, aiMessage]);
            } else {
                const errorMessage: Message = { id: Date.now() + 1, text: "Xin lỗi, tôi không thể trả lời câu hỏi của bạn lúc này.", sender: 'ai'};
                setMessages(prev => [...prev, errorMessage]);
            }
        } catch (error) {
            console.error("Error sending message to AI:", error);
            const errorMessage: Message = { id: Date.now() + 1, text: "Đã có lỗi xảy ra. Vui lòng thử lại sau.", sender: 'ai'};
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isChatting) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center"
            >
                <div className="bg-dark-blue/60 p-10 rounded-2xl border border-highlight-yellow/30 max-w-3xl">
                    <SparklesIcon className="h-16 w-16 text-highlight-yellow mx-auto mb-4"/>
                    <h1 className="text-4xl font-bold text-white mb-4">Trợ lý AI</h1>
                    <p className="text-gray-400 mb-8">Người bạn đồng hành thông minh cho hành trình học tập của bạn.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                        {initialFeatures.map(feature => (
                             <div key={feature.text} className="flex items-center">
                                 <CheckCircleIcon className="h-6 w-6 text-accent-cyan mr-3 flex-shrink-0" />
                                 <span className="text-gray-300">{feature.text}</span>
                             </div>
                        ))}
                    </div>
                     <motion.button
                        onClick={handleStartChat}
                        className="px-8 py-3 bg-highlight-yellow text-dark-blue font-bold rounded-lg text-lg hover:shadow-neon-yellow transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Bắt đầu trò chuyện với AI
                    </motion.button>
                </div>
            </motion.div>
        );
    }
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col h-full bg-dark-blue/60 rounded-2xl border border-cyan-400/20 overflow-hidden"
        >
            <div className="flex-1 p-6 overflow-y-auto">
                <AnimatePresence>
                    {messages.map((msg, index) => (
                        <motion.div
                            key={msg.id}
                            className={`flex items-end gap-3 my-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {msg.sender === 'ai' && (
                                <img src="https://picsum.photos/seed/ai-robot/40" alt="AI Avatar" className="w-8 h-8 rounded-full" />
                            )}
                            <div
                                className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl ${
                                    msg.sender === 'user'
                                        ? 'bg-highlight-yellow text-dark-blue rounded-br-none'
                                        : 'bg-dark-blue-gradient-end text-white rounded-bl-none'
                                }`}
                            >
                                <p>{msg.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    {/* Fix: Add loading indicator for better UX */}
                    {isLoading && (
                        <motion.div
                            className="flex items-end gap-3 my-4 justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="https://picsum.photos/seed/ai-robot/40" alt="AI Avatar" className="w-8 h-8 rounded-full" />
                            <div className="max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl bg-dark-blue-gradient-end text-white rounded-bl-none">
                                <p className="animate-pulse">Đang suy nghĩ...</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-cyan-400/20 bg-dark-blue">
                <form onSubmit={handleSend} className="flex items-center gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Nhập tin nhắn của bạn..."
                        className="flex-1 w-full bg-dark-blue-gradient-end border border-gray-600 rounded-full py-3 px-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-highlight-yellow disabled:opacity-50"
                        disabled={isLoading}
                    />
                    <button type="submit" className="bg-highlight-yellow rounded-full p-3 text-dark-blue hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                        <PaperAirplaneIcon className="h-6 w-6" />
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default AIAssistant;
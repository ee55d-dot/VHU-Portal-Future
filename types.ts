// Fix: Import React to resolve the 'React' namespace error.
import React from 'react';

export interface Student {
    name: string;
    studentId: string;
    dateOfBirth: string;
    age: number;
    class: string;
    faculty: string;
    gender: string;
    email: string;
    major: string;
    avatarUrl: string;
    studyProgress: number;
    studyYears: string;
}

export interface Course {
    id: string;
    title: string;
    instructor?: string;
    rating?: string;
    credits: string;
    schedule?: string;
    description?: string;
}

export interface FutureCourse {
    id: string;
    title: string;
}

export interface ScheduleEvent {
    day: string;
    events: {
        name: string;
        time: string;
        location: string;
        color: string;
    }[];
}

export interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    time: string;
}

export interface SemesterGrade {
    semester: string;
    gpa10: number;
    gpa4: number;
}

export interface AITip {
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
}
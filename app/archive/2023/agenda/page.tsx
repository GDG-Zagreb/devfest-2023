'use client';

import { useMemo, useState, useEffect } from 'react';
import AgendaCard from '@/components/agenda-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import enter from '@/json/archive/2023/enter.json';
import shift from '@/json/archive/2023/shift.json';
import Link from 'next/link';

export default function Agenda() {
    // Ensure hydration consistency by only rendering on client
    const [isMounted, setIsMounted] = useState(false);
    
    // Memoize the talks arrays to ensure stable references
    const enterTalks = useMemo(() => enter.talks, []);
    const shiftTalks = useMemo(() => shift.talks, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className='container flex flex-col items-center px-4 p-10'>
                <h1 className='mt-3 mb-6 text-4xl font-bold'>
                    DevFest Zagreb 2023 Agenda
                </h1>
                <h2 className='mt-3 mb-6 text-2xl font-bold'>
                    Want to know more about talks and speakers? Check &nbsp;
                    <Link href={'/archive/2023/speakers'}>
                        <span className='underline'>here</span>
                    </Link>
                </h2>
                <div className='w-full lg:w-2/3 h-96 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse' />
            </div>
        );
    }
    return (
        <div className='container flex flex-col items-center px-4 p-10'>
            <h1 className='mt-3 mb-6 text-4xl font-bold'>
                DevFest Zagreb 2023 Agenda
            </h1>
            <h2 className='mt-3 mb-6 text-2xl font-bold'>
                Want to know more about talks and speakers? Check &nbsp;
                <Link href={'/archive/2023/speakers'}>
                    <span className='underline'>here</span>
                </Link>
            </h2>
            <Tabs defaultValue='enter' className='w-full lg:w-2/3'>
                <TabsList className='grid w-full grid-cols-2'>
                    <TabsTrigger value='enter'>Stage "Enter"</TabsTrigger>
                    <TabsTrigger value='shift'>Stage "Shift"</TabsTrigger>
                </TabsList>
                <TabsContent value='enter'>
                    <div className='flex flex-col gap-3'>
                        {enterTalks.map((talk, index) => {
                            return <AgendaCard key={`enter-${index}`} talk={talk} />;
                        })}
                    </div>
                </TabsContent>
                <TabsContent value='shift'>
                    <div className='flex flex-col gap-3'>
                        {shiftTalks.map((talk, index) => {
                            return <AgendaCard key={`shift-${index}`} talk={talk} />;
                        })}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

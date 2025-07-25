'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import enter from '@/json/enter.json';
import shift from '@/json/shift.json';
import Link from 'next/link';
import AgendaItem from '@/components/AgendaItem';

export default function Agenda() {
    return (
        <div className='container flex flex-col items-center px-4 p-10'>
            <h1 className='mt-3 mb-6 text-4xl font-bold'>
                DevFest Zagreb 2024 Agenda
            </h1>
            <h2 className='mt-3 mb-6 text-2xl font-bold'>
                Want to know more about talks and speakers? Check &nbsp;
                <Link href={'/archive/2024/speakers'}>
                    <span className='underline'>here</span>
                </Link>
            </h2>
            <Tabs defaultValue='enter' className='w-full lg:w-4/5'>
                <TabsList className='grid w-full grid-cols-2'>
                    <TabsTrigger value='enter'>Stage "Enter"</TabsTrigger>
                    <TabsTrigger value='shift'>Stage "Shift"</TabsTrigger>
                </TabsList>
                <TabsContent value='enter'>
                    <div className='flex flex-col gap-3'>
                        {enter.talks.map((talk) => {
                            return <AgendaItem talk={talk} key={talk.id} />;
                        })}
                    </div>
                </TabsContent>
                <TabsContent value='shift'>
                    <div className='flex flex-col gap-3'>
                        {shift.talks.map((talk) => {
                            return <AgendaItem talk={talk} key={talk.id} />;
                        })}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

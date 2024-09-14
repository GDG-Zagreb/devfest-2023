import AgendaCard from '@/components/agenda-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import enter from '@/json/archive/2023/enter.json';
import shift from '@/json/archive/2023/shift.json';
import Link from 'next/link';

export default async function Agenda() {
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
                        {enter.talks.map((talk) => {
                            return <AgendaCard talk={talk} />;
                        })}
                    </div>
                </TabsContent>
                <TabsContent value='shift'>
                    <div className='flex flex-col gap-3'>
                        {shift.talks.map((talk) => {
                            return <AgendaCard talk={talk} />;
                        })}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

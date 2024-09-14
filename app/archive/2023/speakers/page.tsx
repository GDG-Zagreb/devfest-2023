import SpeakerCard from '@/components/speaker-card';
import speakers from '@/json/archive/2023/speakers.json';
import Link from 'next/link';

export default async function Speakers() {
    return (
        <div className='container flex flex-col items-center px-4 p-10'>
            <h1 className='mt-3 mb-6 text-4xl font-bold'>
                Meet the speakers and find out more about their talks
            </h1>
            <h2 className='mt-3 mb-6 text-2xl font-bold'>
                Want to see the agenda? Check &nbsp;
                <Link href={'/archive/2023/agenda'}>
                    <span className='underline'>here</span>
                </Link>
            </h2>
            {speakers.speakers
                .sort((a, b) =>
                    a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])
                )
                .map((session) => {
                    return <SpeakerCard session={session} />;
                })}
        </div>
    );
}

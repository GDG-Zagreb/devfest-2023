'use client';

import Link from 'next/link';

const Archive = () => {
    return (
        <div className='flex items-center justify-center px-4 mx-auto'>
            <div className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16'>
                <div className='mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16'>
                    <div className='z-10 flex flex-col items-center'>
                        <div className='bg-devfest-light dark:bg-devfest-dark max-h-[300px]'></div>
                        <h2 className='text-center w-full lg:text-4xl font-bold drop-shadow-2xl shadow-black/50 mb-10'>
                            Archive
                        </h2>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-md gap-4'>
                                <div className='text-lg font-bold text-gray-900 dark:text-white'>
                                    DevFest 2023
                                </div>
                                <div className='w-px bg-gray-300 dark:bg-gray-600 h-full'></div>
                                <div className='flex gap-4'>
                                    <Link href='archive/2023/agenda/'>
                                        <div className='text-blue-500 hover:underline'>
                                            Agenda
                                        </div>
                                    </Link>
                                    <Link href='archive/2023/speakers/'>
                                        <div className='text-blue-500 hover:underline'>
                                            Speakers
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Archive;

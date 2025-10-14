'use client';

import Image from 'next/image';
import { Zap } from 'lucide-react';

export default function PoweredBy() {
    return (
        <div className='w-full max-w-[1020px] mt-12'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700'>
                {/* Header */}
                <div className='text-center'>
                    <div className='flex items-center justify-center gap-3 mb-6'>
                        <Zap className='w-8 h-8 text-yellow-500' />
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200'>
                            Powered by
                        </h2>
                    </div>

                    {/* Google Logo */}
                    <div className='flex items-center justify-center'>
                        <div className='relative w-64 h-24' style={{ transform: 'scale(0.8)' }}>
                            <Image
                                src='/powered-by/Google_2015_logo.svg'
                                alt='Google logo'
                                fill
                                className='object-contain'
                                sizes='256px'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

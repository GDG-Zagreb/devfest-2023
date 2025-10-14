'use client';

import Image from 'next/image';
import { Zap } from 'lucide-react';

export default function PoweredBy() {
    return (
        <div className='w-full max-w-[1020px] mt-12'>
            {/* Header */}
            <div className='text-center mb-6'>
                <div className='flex items-center justify-center gap-3'>
                    <Zap className='w-8 h-8 text-yellow-500' />
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200'>
                       Powered by
                    </h2>
                </div>
            </div>

            {/* Google Logo Card */}
            <div className='flex items-center justify-center'>
                <div className='bg-white dark:bg-gray-200 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-md'>
                    <div className='relative w-full h-20'>
                        <Image
                            src='/powered-by/Google_2015_logo.svg'
                            alt='Google logo'
                            fill
                            className='object-contain'
                            sizes='448px'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

import Image from 'next/image';
import { Users } from 'lucide-react';

type Partner = {
    name: string;
    logo: string;
    website?: string;
};

export default function CommunityPartners() {
    // Card height - matches sponsors component
    const CARD_HEIGHT = 'h-[200px]';

    const partners: Partner[] = [
        {
            name: 'The Geek Gathering',
            logo: '/partners/2025/TGG_logo_black.svg',
            website: 'https://thegeekgathering.org/'
        },
        {
            name: 'Tabu',
            logo: '/partners/2025/tabu-logo.svg',
            website: 'https://tabu.hr/'
        },
    ];

    return (
        <div className='w-full max-w-[1020px] mt-12'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <Users className='w-8 h-8 text-blue-600' />
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200'>
                            Community Partners
                        </h2>
                    </div>
                    <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                        Together with our community partners, we create amazing experiences
                    </p>
                </div>

                {/* Partners Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {partners.map((partner) => {
                        // Apply 90% scale to Tabu logo
                        const logoStyle = partner.name === 'Tabu' ? { transform: 'scale(0.6)' } : {};

                        const content = (
                            <div className={`group relative bg-white dark:bg-gray-200 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center ${CARD_HEIGHT}`}>
                                <div className='relative w-full h-24 flex items-center justify-center' style={logoStyle}>
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className='object-contain transition-all duration-300 p-4'
                                        sizes='(max-width: 768px) 100vw, 50vw'
                                    />
                                </div>
                            </div>
                        );

                        // If website is provided, wrap in link
                        if (partner.website) {
                            return (
                                <a
                                    key={partner.name}
                                    href={partner.website}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='block'
                                >
                                    {content}
                                </a>
                            );
                        }

                        // Otherwise, just render the card
                        return <div key={partner.name}>{content}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}

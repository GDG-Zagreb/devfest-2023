'use client';

import Image from 'next/image';

const ImageGallery = () => {
    const images = [
        '/gallery/20231027_112452.webp',
        '/gallery/IMG_9394.webp',
        '/gallery/IMG_1962.webp',
        '/gallery/IMG_9988.webp',
        '/gallery/20241025_112816.webp',
        '/gallery/20241025_134723.webp',
        '/gallery/20241025_161414.webp',
        '/gallery/20241025_173239.webp',
        '/gallery/IMG_1921.webp',
        '/gallery/IMG_9989.webp',
        '/gallery/IMG_9992.webp',
        '/gallery/P1000127.webp',
    ];

    return (
        <div className='w-full max-w-[1020px] mx-auto'>
            <h1 className='text-center text-2xl font-bold mb-6'>
                Snaps from DevFest 2024
            </h1>
            
            {/* Mobile: 1 column */}
            <div className='grid grid-cols-1 gap-4 sm:hidden'>
                {images.map((src, index) => (
                    <div key={index} className='w-full h-[300px] relative overflow-hidden rounded-lg shadow-md'>
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-300'
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>

            {/* Desktop: 3 columns */}
            <div className='hidden sm:grid sm:grid-cols-3 gap-4'>
                {images.map((src, index) => (
                    <div key={index} className='w-full h-[250px] relative overflow-hidden rounded-lg shadow-md'>
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-300'
                            sizes="33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
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
        <div>
            <h1 className='text-center text-2xl font-bold mb-4'>
                Snaps from DevFest 2024
            </h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {images.map((src, index) => (
                    <div key={index} className='overflow-hidden rounded-lg w-full h-[300px]'>
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={500}
                            height={300}
                            className='w-full h-full object-cover'
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;

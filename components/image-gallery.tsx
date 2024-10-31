'use client';

import Image from 'next/image';

const ImageGallery = () => {
    const images = [
        '/gallery/20231027_171551.webp',
        '/gallery/20231027_103441.webp',
        '/gallery/20231027_112452.webp',
        '/gallery/20231027_121224.webp',
        '/gallery/20231027_143606.webp',
        '/gallery/20231027_143936.webp',
        '/gallery/IMG_9394.webp',
        '/gallery/IMG_9402.webp',
        '/gallery/IMG_9462.webp',
    ];

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-4'>
                Snaps from DevFest 2023
            </h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {images.map((src, index) => (
                    <div key={index} className='overflow-hidden rounded-lg'>
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={500}
                            height={300}
                            // objectFit="cover"
                            className='w-full h-auto'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Link2, LinkIcon, Mic2, Table2, Ticket, User2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Image from 'next/image';
import HeaderImageMedium from '@/public/assets/header-md@2x.png';
import HeaderImageLarge from '@/public/assets/header-lg@2x.png';
import GDGZagrebLogo from '@/public/assets/GDG-Zagreb-logo@3x.png';
import WTMLogo from '@/public/wtm-logo.png';
import ImageGallery from '@/components/image-gallery';

const MainPage = () => {
    const isAgendaAvailable = false;

    return (
        <div className='container flex items-center justify-center px-4 mx-auto'>
            <div className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16'>
                <div className='mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16'>
                    <div className='z-10 flex flex-col items-center'>
                        <div className='relative w-full h-48 sm:h-64 md:h-80 lg:h-96'>
                            <Image
                                src={HeaderImageMedium}
                                alt='Header Image'
                                layout='fit'
                                objectFit='cover'
                                className='block lg:hidden'
                            />
                            <Image
                                src={HeaderImageLarge}
                                alt='Header Image'
                                layout='fit'
                                objectFit='cover'
                                className='hidden lg:block'
                            />
                        </div>
                        <h2 className='text-center w-full text-2xl md:text-4xl font-bold drop-shadow-2xl shadow-black/50 mb-10'>
                            25th October 2024
                        </h2>
                        <div className='flex flex-col items-center gap-6'>
                            <Link
                                href='https://www.entrio.hr/event/devfest-2024-18712'
                                target='_blank'
                            >
                                <Button className='w-128 h-16 rounded-full lg:text-xl border-2 border-solid border-black shadow-xl bg-white text-foreground hover:text-background dark:border-white dark:text-black'>
                                    <Ticket className='mr-3'></Ticket>
                                    <p>Get Tickets</p>
                                </Button>
                            </Link>

                            <h2 className='text-center w-full lg:text-4xl font-bold drop-shadow-2xl shadow-black/50'>
                                20+ speakers over 2 stages
                            </h2>

                            <Link href='/speakers'>
                                <Button className='w-128 h-16 rounded-full lg:text-xl border-2 border-solid border-black shadow-xl bg-white text-foreground hover:text-background dark:border-white dark:text-black'>
                                    <User2 className='mr-3'></User2>
                                    <p>Meet the speakers</p>
                                </Button>
                            </Link>

                            {isAgendaAvailable ? (
                                <Link href='/agenda'>
                                    <Button className='w-128 h-16 rounded-full lg:text-xl border-2 border-solid border-black shadow-xl bg-white text-foreground hover:text-background dark:border-white dark:text-black'>
                                        <Table2 className='mr-3'></Table2>
                                        <p>View agenda</p>
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    className='w-128 h-16 rounded-full lg:text-xl border-2 border-solid border-black shadow-xl bg-white text-foreground hover:text-background dark:border-white dark:text-black'
                                    disabled
                                >
                                    <Table2 className='mr-3'></Table2>
                                    <p>View agenda - TBA</p>
                                </Button>
                            )}

                            <h2 className='text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50'>
                                Mobile | Web | Cloud | AI
                            </h2>

                            {/* <div className='flex flex-col items-center py-4'>
                                <h2 className='text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50 mb-4'>
                                    Have an awesome talk?
                                </h2>

                                <Link
                                    href='https://docs.google.com/forms/d/e/1FAIpQLScrrAm6aIN9C2WPPI3Ir1xQmtXz67SOE-qhE97YarNaPFiq9w/viewform'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button className='w-128 h-16 rounded-full lg:text-xl border-2 border-solid border-black shadow-xl bg-white text-foreground hover:text-background dark:border-white dark:text-black'>
                                        <Mic2 className='mr-3'></Mic2>
                                        <p>Become a speaker</p>
                                    </Button>
                                </Link>
                            </div> */}

                            <h2 className='text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50'>
                                Food, drinks, a lot of networking
                            </h2>
                            <h2 className='text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50'>
                                Medium to huge after-party
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 my-20 items-center'>
                        <ImageGallery />
                    </div>
                    <div className='p-6 rounded-2xl shadow-lg bg-background w-full'>
                        <h1 className='text-center lg:text-3xl font-bold mb-3'>
                            Location
                        </h1>
                        <Link href='https://wespa.hr/' target='_blank'>
                            <h2 className='text-center mb-8 w-full lg:text-3xl font-bold bg-gradient-to-br from-yellow-400 to-purple-700 dark:from-purple-300 dark:to-yellow-200 bg-clip-text text-transparent'>
                                WESPA Business and Lounge, Zagreb
                            </h2>
                        </Link>
                        <div className='flex flex-col lg:flex-row gap-8 justify-between w-full'>
                            <div className='w-full lg:w-auto lg:h-[300px]'>
                                <Image
                                    className='w-full h-full object-cover'
                                    src={'/wespa-lounge.jpg'}
                                    alt={'Wespa spaces lounge'}
                                    height={300}
                                    width={449}
                                ></Image>
                            </div>
                            <div className='w-full lg:h-[300px]'>
                                <iframe
                                    className='w-full h-full'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4632311407963!2d15.999859577358484!3d45.801980410836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7403d03984b%3A0x9e5d18ec57e2bd78!2sWESPA%20Business%20%26%20Lounge!5e0!3m2!1sen!2shr!4v1693745621894!5m2!1sen!2shr'
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='p-6 max-w-[1020px] rounded-2xl shadow-lg bg-white'>
                    <h2 className='text-center text-black mb-8 w-full lg:text-3xl font-bold'>
                        Sponsored by:
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12'>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/01--epam-logo.svg'}
                            alt={'Epam Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/02--A1-logo.svg'}
                            alt={'A1 Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/03--wespa-logo.svg'}
                            alt={'Wespa Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/04--teltech-logo.svg'}
                            alt={'Teltech Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/05--keeper-solutions-logo.svg'}
                            alt={'Keeper solutions Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/06--kapronca-logo.svg'}
                            alt={'Kapronca Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/SciPly_logo.png'}
                            alt={'SciPly Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/08--Arilus-logo.svg'}
                            alt={'Arilus Logo'}
                            height={150}
                            width={150}
                        ></Image>
                        <Image
                            className='rounded-2xl'
                            src={'/sponsors/09--Kodeco-logo.webp'}
                            alt={'Kodeco Logo'}
                            height={150}
                            width={150}
                        ></Image>
                    </div>
                </div> */}

                <div className='p-6 max-w-[1020px] rounded-2xl shadow-lg bg-white'>
                    <h2 className='text-center text-black mb-8 w-full lg:text-3xl font-bold'>
                        Sponsors & partners
                    </h2>
                    <p className='text-center text-black mb-8 w-full'>
                        Want to become a sponsor or partner?
                    </p>
                    <p className='text-center text-black mb-8 w-full'>
                        Let's connect! Contact us at{' '}
                        <a
                            href='mailto:zagrebgdg@gmail.com'
                            className='text-blue-500 underline'
                        >
                            zagrebgdg[at]gmail.com
                        </a>
                    </p>
                </div>

                <div className='p-6 max-w-[1020px] rounded-2xl shadow-lg bg-white'>
                    <h2 className='text-center mb-8 w-full lg:text-3xl font-bold text-black'>
                        Organized by:
                    </h2>
                    <div className='flex flex-col items-center gap-5 gap-x-5'>
                        <Link href={'https://gdg.community.dev/gdg-zagreb/'}>
                            <Image
                                src={GDGZagrebLogo}
                                alt={'GDG Zagreb Logo'}
                                height={50}
                            ></Image>
                        </Link>
                        <Link
                            href={
                                'https://developers.google.com/womentechmakers'
                            }
                            target='_blank'
                        >
                            <Image
                                src={WTMLogo}
                                alt={'WTM Logo'}
                                height={50}
                            ></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

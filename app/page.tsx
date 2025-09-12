'use client';

import ImageGallery from '@/components/image-gallery';
import FeaturedSpeakers from '@/components/featured-speakers';
import { Button } from '@/components/ui/button';
import GDGZagrebLogo from '@/public/assets/GDG-Zagreb-logo@3x.png';
import HeaderImageLarge from '@/public/assets/header-lg@2x.jpg';
import HeaderImageMedium from '@/public/assets/header-md@2x.png';
import SponzorskiPaketi from '@/public/assets/sponzorski-paketi.png';
import GDGKrapinaLogo from '@/public/gdg-krapina-logo.png';
import { Calendar, Clock, Coffee, PartyPopper, Table2, Ticket, User2, Users, X, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MainPage = () => {
    const isAgendaAvailable = false;
    const isSpeakersAvailable = false;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='container flex items-center justify-center px-4 mx-auto'>
            <div className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16'>
                <div className='mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16'>
                    <div className='z-10 flex flex-col items-center'>
                        <div className='relative w-full h-48 sm:h-64 md:h-80 lg:h-96'>
                            <Image
                                src={HeaderImageMedium}
                                alt='Header Image'
                                className='block lg:hidden'
                            />
                            <Image
                                src={HeaderImageLarge}
                                alt='Header Image'
                                className='hidden lg:block'
                            />
                        </div>
                        
                        {/* Modern Event Details Section */}
                        <div className='w-full max-w-4xl mt-12 space-y-8'>
                            {/* Date and Time */}
                            <div className='text-center space-y-4'>
                                <div className='flex items-center justify-center gap-3 text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
                                    <Calendar className='w-8 h-8 md:w-12 md:h-12' />
                                    <span>24th October 2025</span>
                                </div>
                                <div className='flex items-center justify-center gap-3 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300'>
                                    <Clock className='w-6 h-6' />
                                    <span>09:00 - 17:00</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className='flex flex-col items-center gap-6'>
                                <Link
                                    href='https://www.entrio.hr/event/devfest-2025-21473'
                                    target='_blank'
                                    className='w-full max-w-md'
                                >
                                    <Button className='w-full h-16 rounded-2xl text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl transform transition-all duration-300 hover:scale-105'>
                                        <Ticket className='mr-3 w-6 h-6' />
                                        Get Tickets
                                    </Button>
                                </Link>

                                {/* Speakers and Agenda Row */}
                                <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                    {/* Speakers Section */}
                                    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700'>
                                        <div className='text-center'>
                                            <div className='flex items-center justify-center gap-3 mb-4'>
                                                <Users className='w-8 h-8 text-purple-600' />
                                                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200'>
                                                    15 speakers & 11 pitchers over 2 stages
                                                </h2>
                                            </div>
                                            
                                            {isSpeakersAvailable ? (
                                                <Link href='/speakers' className='block'>
                                                    <Button className='w-full max-w-md h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl transform transition-all duration-300 hover:scale-105'>
                                                        <User2 className='mr-3 w-5 h-5' />
                                                        Meet the speakers
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <div className='relative'>
                                                    <Button
                                                        className='w-full max-w-md h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-xl cursor-not-allowed opacity-75'
                                                        disabled
                                                    >
                                                        <User2 className='mr-3 w-5 h-5' />
                                                        Meet the speakers
                                                    </Button>
                                                    <div className='absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg'>
                                                        Coming Soon
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Agenda Section with Topics */}
                                    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700'>
                                        <div className='text-center space-y-6'>
                                            {/* Topics */}
                                            <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 shadow-lg border border-blue-200 dark:border-blue-700'>
                                                <h3 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200'>
                                                    Mobile | Web | Cloud | AI
                                                </h3>
                                            </div>
                                            
                                            {/* Agenda Button */}
                                            {isAgendaAvailable ? (
                                                <Link href='/agenda' className='block'>
                                                    <Button className='w-full max-w-md h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl transform transition-all duration-300 hover:scale-105'>
                                                        <Table2 className='mr-3 w-5 h-5' />
                                                        View agenda
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <div className='relative'>
                                                    <Button
                                                        className='w-full max-w-md h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-xl cursor-not-allowed opacity-75'
                                                        disabled
                                                    >
                                                        <Table2 className='mr-3 w-5 h-5' />
                                                        View agenda
                                                    </Button>
                                                    <div className='absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg'>
                                                        Coming Soon
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className='w-full max-w-4xl'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 shadow-lg border border-green-200 dark:border-green-700'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <Coffee className='w-6 h-6 text-green-600' />
                                                <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                                                    Food, drinks, a lot of networking
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className='bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-6 shadow-lg border border-pink-200 dark:border-pink-700'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <PartyPopper className='w-6 h-6 text-pink-600' />
                                                <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                                                    Medium to semi-huge after-party
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pitch Your Project Section */}
                                <div className='w-full max-w-4xl mt-8'>
                                    <div className='bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 shadow-xl border border-yellow-200 dark:border-yellow-700'>
                                        <div className='text-center space-y-6'>
                                            <div className='flex items-center justify-center gap-3 mb-4'>
                                                <div className='p-3 bg-yellow-100 dark:bg-yellow-800/50 rounded-full shadow-lg'>
                                                    {/* <svg className='w-8 h-8 text-yellow-600 dark:text-yellow-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                                                    </svg> */}
                                                    <Lightbulb className='w-8 h-8' />
                                                </div>
                                                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200'>
                                                    Pitch Your Project!
                                                </h2>
                                            </div>
                                            
                                            <div className='max-w-3xl mx-auto space-y-6'>
                                                <p className='text-lg text-gray-700 dark:text-gray-300'>
                                                    Got an amazing project or startup idea? Present it to the DevFest community!
                                                </p>
                                                
                                                {/* Step by Step Process */}
                                                <div className='space-y-4'>
                                                    {/* Step 1 */}
                                                    <div className='flex items-start gap-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-yellow-200 dark:border-yellow-600'>
                                                        <div className='flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                                            1
                                                        </div>
                                                        <div className='text-left'>
                                                            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                                                                Have a cool side project, idea, or startup?
                                                            </h4>
                                                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                                                                Whether you&rsquo;re working on a side project, have an idea you haven&rsquo;t started yet, or are running a startup - we want to hear from you!
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Step 2 */}
                                                    <div className='flex items-start gap-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-yellow-200 dark:border-yellow-600'>
                                                        <div className='flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                                            2
                                                        </div>
                                                        <div className='text-left'>
                                                            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                                                                Apply to pitch form
                                                            </h4>
                                                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                                                                Fill out our application form with details about your project. Applications close September 30, 2025.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Step 3 */}
                                                    <div className='flex items-start gap-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-yellow-200 dark:border-yellow-600'>
                                                        <div className='flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                                            3
                                                        </div>
                                                        <div className='text-left'>
                                                            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                                                                Present in flexible 10-minute format
                                                            </h4>
                                                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                                                                You have 10 minutes total. Use it however you want: 5min presenting + 5min Q&A, 7min + 3min, or any combination that works for you!
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Step 4 */}
                                                    <div className='flex items-start gap-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-yellow-200 dark:border-yellow-600'>
                                                        <div className='flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                                            4
                                                        </div>
                                                        <div className='text-left'>
                                                            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                                                                Get feedback, inspire others, find collaborators, get users
                                                            </h4>
                                                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                                                                Receive valuable feedback, inspire the community, and potentially find collaborators or investors for your project!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Available Slots & Apply Button */}
                                                <div className='bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-yellow-200 dark:border-yellow-600'>
                                                    <div className='space-y-4'>
                                                        <div className='flex items-center justify-center gap-3'>
                                                            <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                                                                11 Pitch Slots Available
                                                            </span>
                                                        </div>
                                                        
                                                        <div className='pt-4 border-t border-yellow-200 dark:border-yellow-600'>
                                                            <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                                                                <strong>Applications close September 30, 2025</strong> • Selected pitchers notified by October 10, 2025
                                                            </p>
                                                            
                                                            <Link 
                                                                href='https://docs.google.com/forms/d/e/1FAIpQLSeUlJI3paMOEgSJXL1gFvVRUYFQIdN0stdrgXtNKVRzgG3Elg/viewform'
                                                                target='_blank'
                                                                className='block'
                                                            >
                                                                <Button className='w-full max-w-md h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-xl transform transition-all duration-300 hover:scale-105'>
                                                                    <svg className='mr-3 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                                                    </svg>
                                                                    Apply for Pitch Slot
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FeaturedSpeakers />
                    
                    <div className='flex flex-col gap-y-6 my-32 items-center'>
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
                                    width={300}
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

                <div id="sponsors" className='w-full max-w-[1020px] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mt-12'>
                    <div className='text-center space-y-6'>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 mb-6 relative'>
                            <div className='p-3 bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg'>
                                <svg className='w-8 h-8 text-gray-600 dark:text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                                </svg>
                            </div>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center'>
                                Become a Sponsor or Partner
                            </h2>
                            
                            {/* Subtle Link Button */}
                            <button
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        navigator.clipboard.writeText(`${window.location.origin}/#sponsors`);
                                    }
                                }}
                                className='absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 opacity-60 hover:opacity-100'
                                title='Copy link to sponsors section'
                            >
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
                                </svg>
                            </button>
                        </div>
                        
                        <div className='max-w-2xl mx-auto space-y-6'>
                            <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium'>
                                Join us for DevFest 2025! We have a variety of sponsorship packages designed to showcase your brand.
                            </p>
                            
                            {/* CTA Button */}
                            <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 shadow-lg border border-blue-200 dark:border-blue-700'>
                                <h3 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
                                    📋 View Our Sponsorship Packages
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 mb-6'>
                                    Discover the amazing opportunities available for your brand at DevFest 2025
                                </p>
                                <Button 
                                    onClick={openModal}
                                    className='w-full max-w-md h-16 rounded-2xl text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl transform transition-all duration-300 hover:scale-105'
                                >
                                    Explore Packages
                                </Button>
                            </div>
                            
                            <div className='bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600'>
                                <div className='flex items-center justify-center gap-3'>
                                    <svg className='w-6 h-6 text-gray-600 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                    <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                                        Contact us at{' '}
                                        <a
                                            href='mailto:zagrebgdg@gmail.com'
                                            className='text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-2'
                                        >
                                            zagrebgdg@gmail.com
                                        </a>
                                    </span>
                                </div>
                            </div>
                            
                            <div className='flex flex-wrap justify-center gap-3 mt-6'>
                                <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600'>
                                    🎯 Brand Visibility
                                </span>
                                <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600'>
                                    🤝 Networking
                                </span>
                                <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600'>
                                    👥 Community
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pitch Form Link Below Sponsors */}
                <div className='w-full max-w-[1020px] mt-6 text-center'>
                    <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 shadow-lg border border-blue-200 dark:border-blue-700'>
                        <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-3'>
                            Want to pitch your project at DevFest 2025?
                        </h3>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>
                            Apply for one of our 11 pitch slots and present your idea to the community! Applications close September 30, 2025.
                        </p>
                        <Link 
                            href='https://docs.google.com/forms/d/e/1FAIpQLSeUlJI3paMOEgSJXL1gFvVRUYFQIdN0stdrgXtNKVRzgG3Elg/viewform'
                            target='_blank'
                            className='inline-block'
                        >
                            <Button className='px-8 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl transform transition-all duration-300 hover:scale-105'>
                                Apply for Pitch Slot
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Full Screen Modal */}
                {isModalOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300'>
                        <div className='relative w-full h-full flex items-center justify-center p-4 animate-in zoom-in-95 duration-300'>
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className='absolute top-4 right-4 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 animate-in slide-in-from-top-4 duration-300'
                            >
                                <X className='w-8 h-8 text-white' />
                            </button>
                            
                            {/* Image Container */}
                            <div className='relative max-w-7xl max-h-full'>
                                {/* Overlay Text - Moved above image */}
                                <div className='mb-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white text-center'>
                                    <h3 className='text-xl font-bold mb-2'>📋 DevFest 2025 Sponsorship Packages</h3>
                                    <p className='text-sm opacity-90'>
                                        Ready to become a sponsor? Contact us at{' '}
                                        <a
                                            href='mailto:zagrebgdg@gmail.com'
                                            className='text-blue-300 hover:text-blue-200 font-semibold underline'
                                        >
                                            zagrebgdg@gmail.com
                                        </a>
                                    </p>
                                </div>
                                
                                <Image
                                    src={SponzorskiPaketi}
                                    alt='Sponsorship packages and opportunities for DevFest 2025'
                                    className='w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl'
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className='p-6 max-w-[1020px] rounded-2xl shadow-lg bg-white mt-12'>
                    <div></div>
                    <h2 className='text-center mb-8 w-full lg:text-3xl font-bold text-black'>
                        Organized by:
                    </h2>
                    <div className='flex flex-row items-center justify-center gap-8 flex-wrap'>
                        <Link href={'https://gdg.community.dev/gdg-zagreb/'}>
                            <Image
                                src={GDGZagrebLogo}
                                alt='GDG Zagreb'
                                height={40}
                            ></Image>
                        </Link>
                        <Link
                            href='https://gdg.community.dev/gdg-krapina/'
                            target='_blank'
                        >
                            <Image
                                src={GDGKrapinaLogo}
                                alt='GDG Krapina'
                                height={120}
                            ></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

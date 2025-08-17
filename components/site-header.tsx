import Image from 'next/image';
import { ModeToggle } from '@/components/theme-toggle';
import { MessagesSquare, Mic2, Ticket, Lightbulb, Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function SiteHeader() {
    const navigationItems = [
        {
            href: 'https://linktr.ee/zagrebgdg',
            label: 'Talk to us!',
            icon: MessagesSquare,
        },
        {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLScrrAm6aIN9C2WPPI3Ir1xQmtXz67SOE-qhE97YarNaPFiq9w/viewform',
            label: 'Become a speaker!',
            icon: Mic2,
        },
        {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeUlJI3paMOEgSJXL1gFvVRUYFQIdN0stdrgXtNKVRzgG3Elg/viewform',
            label: 'Become a pitcher!',
            icon: Lightbulb,
        },
        {
            href: 'https://www.entrio.hr/event/devfest-2025-21473',
            label: 'Get Tickets',
            icon: Ticket,
        },
    ];

    return (
        <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
            <div className='container flex h-14 items-center'>
                <Link href={'/'}>
                    <div className='flex gap-x-2'>
                        <Image
                            src={'/GDG.png'}
                            height={35}
                            width={35}
                            alt={'GDG logo'}
                        />
                        <div className='text-md mt-1 hidden lg:inline'>
                            Google Developer Groups
                        </div>
                    </div>
                </Link>
                
                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
                    <div className='w-full flex-1 md:w-auto md:flex-none'></div>
                    
                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-x-2'>
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button variant={'outline'} size="sm" className="h-9">
                                        <Icon className='h-4 w-4 lg:mr-2' />
                                        <span className='hidden lg:inline'>
                                            {item.label}
                                        </span>
                                    </Button>
                                </Link>
                            );
                        })}
                        <ModeToggle />
                    </nav>

                    {/* Mobile Navigation */}
                    <div className='flex md:hidden items-center gap-x-2'>
                        <ModeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                                    <Menu className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <DropdownMenuItem key={item.label} asChild>
                                            <Link
                                                href={item.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className="flex items-center gap-x-2 cursor-pointer"
                                            >
                                                <Icon className='h-4 w-4' />
                                                <span>{item.label}</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}
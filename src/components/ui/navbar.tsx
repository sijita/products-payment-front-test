'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { IconMenu } from '@tabler/icons-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex items-center justify-around p-5'>
        <Link href='/' className='text-xl font-bold'>
          Product Shop
        </Link>
        <div className='hidden gap-4 md:flex'>
          {navItems.map((item) => (
            <Button key={item.name} variant='ghost' asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <IconMenu className='h-5 w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[250px] sm:w-[300px]'>
            <nav className='flex flex-col gap-4'>
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className='block px-2 py-1 text-lg'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {index < navItems.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

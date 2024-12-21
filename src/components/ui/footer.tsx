import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';

const footerLinks = [
  {
    title: 'Compañia',
    links: [
      { name: 'Acerca', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Contacto', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com' },
  {
    name: 'Instagram',
    icon: IconBrandInstagram,
    href: 'https://instagram.com',
  },
  { name: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://linkedin.com' },
];

export function Footer() {
  return (
    <footer className='border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto p-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>Conectemos</h2>
            <p className='text-sm text-muted-foreground'>
              Suscribete para recibir noticias y ofertas.
            </p>
            <form className='flex space-x-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='max-w-[200px]'
              />
              <Button type='submit'>Suscribirse</Button>
            </form>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h2 className='mb-4 text-lg font-semibold'>{column.title}</h2>
              <ul className='space-y-2'>
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className='my-8' />
        <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
          <div className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Product Shop. All rights reserved.
          </div>
          <div className='flex space-x-4'>
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} aria-label={link.name}>
                <Button variant='ghost' size='icon'>
                  <link.icon className='h-5 w-5' />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

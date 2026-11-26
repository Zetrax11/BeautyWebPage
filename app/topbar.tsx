'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Strona główna' },
  { href: '/about', label: 'O mnie' },
  { href: '/procedures', label: 'Zabiegi' },
  { href: '/portfolio', label: 'Efekty' },
  { href: '/reviews', label: 'Opinie' },
];

export const TopBar = () => {
  const pathname = usePathname()
  const isPageHome = pathname === '/'

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [ isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`transition-colors duration-2000 flex justify-between items-center px-4 lg:px-12 gap-4 h-10
        ${!isPageHome || isScrolled ? 'bg-brand-cream shadow-sm' : 'bg-transparent'}`}>
        <div className="flex flex-col text-black">
          <p >Nazwa Salonu</p>
          <p >Można tu wstawić zdjęcie zamiast tekstu</p>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black text-center text-base py-3.5 hover:text-red-900 inline-block whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="border-b-2 border-l-1 border-solid border-red-900 text-black text-center text-base py-1 inline-flex px-3 rounded-xl my-1 hover:bg-gray-500 hover:text-black"
          href="/contact"
        >
          Zarezerwuj
        </Link>
        <button className="lg:hidden text-black text-2xl p-2 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-transparent">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                  href={link.href}
                  className="text-dark text-center text-base py-3.5 hover:text-red-900 block whitespace-nowrap"
                  onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};

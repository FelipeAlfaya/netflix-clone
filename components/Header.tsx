import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <header
      className={`bg-gradient-to-t from-transparent to-black ${
        isScrolled && 'bg-[#121212]'
      }`}
    >
      <div className='flex items-center space-x-2 md:space-x-10 '>
        <img
          src='https://rb.gy/ulxxee'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Início</li>
          <li className='headerLink'>Séries</li>
          <li className='headerLink'>Filmes</li>
          <li className='headerLink'>Bombando</li>
          <li className='headerLink'>Minha Lista</li>
          <li className='headerLink'>Navegar por idiomas</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className='hidden h-6 w-6 sm:inline ' />
        <p className='hidden lg:inline '>Infantil</p>
        <BellIcon className='h-6 w-6' />
        <Link href='/account'>
          <img
            src='https://rb.gy/g1pwyx'
            className='cursor-pointer rounded'
            alt=''
          />
        </Link>
      </div>
    </header>
  )
}

export default Header

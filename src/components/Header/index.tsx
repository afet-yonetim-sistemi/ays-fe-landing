import React from 'react'
import HeaderTop from '@/components/Header/HeaderTop'
import HeaderNav from '@/components/Header/HeaderNav'
import Container from '@/components/Container'
import DrawerNav from '@/components/Header/DrawerNav'
import Image from 'next/image'

export default function Header(): JSX.Element {
  return (
    <header className="w-full bg-nightBlue/90 backdrop-blur-md sticky top-0 z-40">
      <Container className="lg:space-y-4">
        <HeaderTop />
        <HeaderNav />
        <div className="text-4xl flex items-center justify-between lg:hidden">
          <Image
            src="/logo.png"
            alt="logo"
            className="p-2"
            width={60}
            height={60}
          />
          <DrawerNav />
        </div>
      </Container>
    </header>
  )
}

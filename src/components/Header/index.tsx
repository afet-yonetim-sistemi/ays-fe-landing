import HeaderTop from '@/components/Header/HeaderTop'
import HeaderNav from '@/components/Header/HeaderNav'

export default function Header() {
  return <header className="w-full py-5 px-20 bg-nightBlue text-background space-y-4">
    <HeaderTop />
    <HeaderNav />
  </header>
}
import HeaderTop from '@/components/Header/HeaderTop'
import HeaderNav from '@/components/Header/HeaderNav'

export default function Header() {
  return <header className="w-full bg-nightBlue text-background">
    <div className="container space-y-4 px-20 py-5">
      <HeaderTop />
      <HeaderNav />
    </div>
  </header>
}
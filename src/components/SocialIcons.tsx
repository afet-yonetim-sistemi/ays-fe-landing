import { FaConfluence, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function SocialIcons() {
  return <div className="flex items-center justify-center w-full gap-4 text-xl text-green">
    {/*TODO: Linkler yerleştirilecek*/}
    <Link href={''}><FaLinkedin /></Link>
    <Link href={''}><FaDiscord /></Link>
    <Link href={''}><FaConfluence /></Link>
    <Link href={''}><FaGithub /></Link>
  </div>
}


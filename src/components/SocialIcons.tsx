import { FaConfluence, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJira } from 'react-icons/si'
import Link from 'next/link'

export default function SocialIcons() {
  return <div className="flex items-center justify-center w-full gap-4 text-2xl text-green">
    <Link target="_blank" href={'https://www.linkedin.com/company/afetyonetimsistemi/'}><FaLinkedin /></Link>
    <Link target="_blank" href={'https://discord.gg/NkAkYajkKa'}><FaDiscord /></Link>
    <Link target="_blank" href={'https://afetyonetimsistemi.atlassian.net/jira'}><SiJira /></Link>
    <Link target="_blank" href={'https://afetyonetimsistemi.atlassian.net/wiki'}><FaConfluence /></Link>
    <Link target="_blank" href={'https://github.com/afet-yonetim-sistemi'}><FaGithub /></Link>
  </div>
}


import { clsx } from 'clsx'
import Link from 'next/link'
import { FaConfluence, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiJira } from 'react-icons/si'

export default function SocialIcons({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center w-full gap-4 text-2xl text-navWhite',
        className,
      )}
    >
      <Link target="_blank" href={'https://x.com/afetyonetims'}>
        <FaXTwitter />
      </Link>
      <Link
        target="_blank"
        href={'https://www.linkedin.com/company/afetyonetimsistemi/'}
      >
        <FaLinkedin />
      </Link>
      <Link target="_blank" href={'https://discord.gg/NkAkYajkKa'}>
        <FaDiscord />
      </Link>
      <Link
        target="_blank"
        href={'https://afetyonetimsistemi.atlassian.net/jira'}
      >
        <SiJira />
      </Link>
      <Link
        target="_blank"
        href={'https://afetyonetimsistemi.atlassian.net/wiki'}
      >
        <FaConfluence />
      </Link>
      <Link target="_blank" href={'https://github.com/afet-yonetim-sistemi'}>
        <FaGithub />
      </Link>
    </div>
  )
}

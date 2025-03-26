import { clsx } from 'clsx'
import Link from 'next/link'
import {
  FaConfluence,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaXTwitter,
} from 'react-icons/fa6'
import { SiJira } from 'react-icons/si'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

const socialLinks = [
  {
    href: 'https://instagram.com/afetyonetimsistemi',
    icon: FaInstagram,
    label: 'Instagram',
  },
  { href: 'https://x.com/afetyonetims', icon: FaXTwitter, label: 'Twitter/X' },
  {
    href: 'https://www.linkedin.com/company/afetyonetimsistemi/',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://join.slack.com/t/afetyonetimsistemi/shared_invite/zt-2s7h4ggpe-Cz_MLUXNyzqS2lmGLaIVBw',
    icon: FaSlack,
    label: 'Slack',
  },
  {
    href: 'https://afetyonetimsistemi.atlassian.net/jira',
    icon: SiJira,
    label: 'Jira',
  },
  {
    href: 'https://afetyonetimsistemi.atlassian.net/wiki',
    icon: FaConfluence,
    label: 'Confluence',
  },
  {
    href: 'https://github.com/afet-yonetim-sistemi',
    icon: FaGithub,
    label: 'GitHub',
  },
]

const SocialIcons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <TooltipProvider>
      <div
        className={clsx(
          'flex items-center justify-center w-full gap-4 text-2xl text-navWhite',
          className
        )}
      >
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Link target="_blank" href={href}>
                <Icon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialIcons

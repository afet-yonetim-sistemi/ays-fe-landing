import { PageLayout } from '@components/layouts/page-layout/page-layout'
import { AppProviders } from '@providers/app-providers/app-providers'

interface AppShellProps {
  children: React.ReactNode
}

export const AppShell = ({ children }: AppShellProps): React.ReactElement => {
  return (
    <AppProviders>
      <PageLayout>{children}</PageLayout>
    </AppProviders>
  )
}

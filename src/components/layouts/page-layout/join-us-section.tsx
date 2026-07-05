import { Button } from '@components/ui/button'
import { ReactElement } from 'react'

export const JoinUsSection = (): ReactElement => {
  return (
    <div className="inline-flex w-full flex-col items-center justify-center gap-2 self-stretch bg-neutral-50 px-8 py-12 transition-colors md:py-24 lg:px-40 dark:bg-sky-900">
      <div className="flex flex-col items-center justify-start gap-6 self-stretch md:gap-9">
        <div className="flex flex-col items-center justify-start gap-4 self-stretch">
          <h2 className="typography-h2 md:typography-h1 justify-start self-stretch text-center text-sky-400 dark:text-sky-300">
            Ekibimize Katılın ve Sürecin Bir Parçası Olun
          </h2>
          <p className="typography-p-regular justify-start self-stretch text-center text-black dark:text-white">
            Ekibimizin bir parçası olmak ister misin?
          </p>
          <p className="typography-p-regular justify-start self-stretch text-center text-black dark:text-white">
            Afet Yönetim Sistemini birlikte geliştirelim!
          </p>
        </div>
        <Button
          variant="default"
          className="inline-flex min-h-9 w-40 items-center justify-center gap-2 rounded-lg border-0 bg-lime-600 px-4 py-2 text-sm leading-5 font-medium text-neutral-50 shadow-none hover:bg-lime-600/90 hover:text-neutral-50 dark:bg-lime-600 dark:text-neutral-50 dark:hover:bg-lime-600/90"
        >
          Geliştirici Ol
        </Button>
      </div>
    </div>
  )
}

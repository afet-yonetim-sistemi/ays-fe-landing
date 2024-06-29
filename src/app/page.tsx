'use client'

import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { increment } from '@/modules/counter/counterSlice'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter.value)

  useEffect(() => {
    dispatch(increment())
  }, [dispatch])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-10">
      <h1 className="text-6xl font-bold text-center">
        {t('landingInProgress')}
      </h1>

      <div className="flex flex-col items-center gap-5 w-1/4">
        <h2>{counter}</h2>
        <Button
          variant="default"
          className="w-full"
          onClick={() => dispatch(increment())}
        >
          {t('increment')}
        </Button>
      </div>
    </main>
  )
}

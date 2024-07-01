'use client'

import { useTranslation } from 'react-i18next'
// import { useAppDispatch, useAppSelector } from '@/store/hooks'
// import { useEffect } from 'react'
// import { increment } from '@/modules/counter/counterSlice'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast/use-toast'

export default function Home() {
  const { t } = useTranslation()
  // const dispatch = useAppDispatch()
  // const counter = useAppSelector((state) => state.counter.value)

  // useEffect(() => {
  //   dispatch(increment())
  // }, [dispatch])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-10">
      <h1 className="text-6xl font-bold text-center">
        {t('landingInProgress')}
      </h1>

      <div className="flex flex-col items-center gap-5 w-1/4">
        {/* <h2>{counter}</h2> */}
        {/* <Button
          variant="default"
          className="w-full"
          onClick={() => dispatch(increment())}
        >
          {t('increment')}
        </Button> */}

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => toast({title: "Test Mesajı" , description : "Bu bir test bildirim mesajıdır" , variant : "default"})}
        >
          Default Notify
        </Button>

        <Button
          variant="destructive"
          className="w-full"
          onClick={() => toast({title: "Test Hata Mesajı" , description : "Bu bir test hata mesajıdır" , variant : "destructive"})}
        >
          Error Notify
        </Button>

        <Button
          className="w-full bg-green-500 hover:bg-green-400 text-white"
          onClick={() => toast({title: "Test Hata Mesajı" , description : "Bu bir test hata mesajıdır" , variant : "success"})}
        >
          Success Notify
        </Button>
        
      </div>
    </main>
  )
}

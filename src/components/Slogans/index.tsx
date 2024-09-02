import { clsx } from 'clsx'
import { montserrat } from '@/styles/fonts'
import { t } from 'i18next'

// const SlogansData: string[] = t('slogans', { returnObjects: true })
const SlogansData: string[] = [
  'Bilgi teyit edilmeye muhtaçtır',
  'Teyit edilmemiş bilgi yanlış bilgidir',
  'Emin olmadığın bilgi için talepte bulunma',
  'Doğru bilgi hayat kurtarır',
  'İsraf değil yardım et',
]

const Slogans: JSX.Element[] = SlogansData.map((slogan, index) => {
  const sloganData = slogan.split(' ')
  return (
    <div
      id="slogan"
      key={index}
      className={clsx(
        'flex flex-col w-auto items-start justify-center gap-2 h-full m-auto text-3xl sm:text-4xl md:text-6xl font-black text-background',
        montserrat.className
      )}
    >
      {sloganData.map((word, i) => (
        <span
          key={i}
          className={clsx('min-w-[70%] bg-nightBlue p-2 px-5', {
            'self-start text-end': i % 2 === 0,
            'self-end text-start': i % 2 !== 0,
            'lg:ml-5': Math.random() > 0.5,
            'lg:mr-5': Math.random() < 0.5,
          })}
        >
          {word.toLocaleUpperCase('tr-TR')}
        </span>
      ))}
    </div>
  )
})

export default Slogans

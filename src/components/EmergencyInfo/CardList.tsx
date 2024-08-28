import Card from './Card'
import i18n from 'i18next'

const CardList = () => {
  const { t } = i18n
  const cardContents: string[] = t('emergencyInfo.cards', {
    returnObjects: true,
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5">
      {cardContents.map((card, index) => (
        <Card key={index}>
          <p className="text-center">{card}</p>
        </Card>
      ))}
    </div>
  )
}

export default CardList

import Card from './Card'
import i18n from 'i18next'

const CardList = () => {
  const { t } = i18n
  const cardContents: string[] = t('emergencyInfo.cards', { returnObjects: true })

  return (
    <div className="grid grid-cols-3 gap-5">
      {cardContents.map((card, index) => (
        <Card key={index} text={card} />
      ))}
    </div>
  )
}

export default CardList

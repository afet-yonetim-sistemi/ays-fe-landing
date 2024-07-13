const Card = ({ text }: { text: string }) => {
  return (
    <div className="bg-nightBlue p-5 rounded-lg text-3xl font-medium flex-center py-20">
      <p className=" text-center">
        {text}
      </p>
    </div>
  )
}

export default Card

import '../../assets/css/Section3.css'

const Section3ImageComponent = ({ imageName, imageTitle }: { imageName: string, imageTitle: string }) => {
  return (
    <div className="img-container">
      <img
        src={require(`../../assets/images/${imageName}.svg`)}
        alt={imageName}
        width={275}
        height={280}
      />
      <div className='img-container-title'>{imageTitle}</div>
    </div>
  )
}
export default Section3ImageComponent

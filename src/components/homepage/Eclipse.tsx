import '../../assets/css/Eclipse.css'

const Eclipse = ({
  marginLeft,
  marginTop,
  border,
}: {
  marginLeft: number
  marginTop: number
  border: boolean
}) => {
  return (
    <div className="outer-eclipse">
      <div
        className="eclipse"
        style={{ marginLeft, marginTop, color: '#FFFFFF03' }}
      ></div>
    </div>
  )
}
export default Eclipse

import "../../assets/css/Eclipse.css";

const Eclipse = ({marginLeft, marginTop, border}: 
    {marginLeft: number, marginTop: number, border: boolean}) => {
    return(
        <div className="eclipse" style={{marginLeft, marginTop, color: "#FFFFFF03"}}>

        </div>
    )
}
export default Eclipse;
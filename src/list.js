import MCard from "./card"
function List(props) {
    return (
        <>
             {props.moviedata.map(el => <MCard el =  {el}></MCard>)}
        </>
    )
}
export default List

const Content = (props) => {
    
    return(
        <div>
        <Part part1 ={props.part1} exercises1={props.exercises1}></Part>
        <Part part2 ={props.part2} exercises2={props.exercises2}></Part>
        <Part part3={props.part3} exercises3={props.exercises3}></Part>
        </div>
    )

        
}

const Part = (props) => {
    console.log(props);
    return(
    <div>
    <p>
    {props.part1} {props.exercises1}
    </p>
    <p>
    {props.part2} {props.exercises2}
    </p>
    <p>
    {props.part3} {props.exercises3}
    </p>
    </div>
    )

}
export default Content
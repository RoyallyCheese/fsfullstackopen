
const Content = (props) => {
    
    return(
        <div>
        <Part part1 ={props.parts[0].name} exercises1={props.parts[0].exercises}></Part>
        <Part part2 ={props.parts[1].name} exercises2={props.parts[1].exercises}></Part>
        <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises}></Part>
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
import styled from "../App.module.scss";

export default function Stack({stack}){
    return (
        <div className={styled.Stack}>
            <h1>My Stack</h1>
            <ul>
                {stack.map((element) => <li key={element}>{element}</li>)}
            </ul>
        </div>
    )
}
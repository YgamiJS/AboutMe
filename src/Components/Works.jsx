import styled from "../App.module.scss";

export default function Works({works}){
    return (
        <div className={styled.Works}>
            <h1>Works</h1>
            {works.map((work) => <div key={work.id}><img src={work.src} alt="" /></div> )}
        </div>
    )
}

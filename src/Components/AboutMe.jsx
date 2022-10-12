import image from "../assets/o_1e9f4objp3niu4g1ietb0i1k8t0.jpeg";
import styled from "../App.module.scss";

export default function AboutMe(){
    return (
        <div className={styled.AboutMe}>
            <div className={styled.profile}>
                <img src={image} alt="" />
                <h1 className={styled.logo}>YgamiJS</h1>
                <h2 className={styled.name}>Дмитрий</h2>
            </div>
            <div className={styled.pageAbout}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus omnis modi magni fuga est facere nisi sunt dolorum, et aliquam eligendi ullam blanditiis labore beatae nostrum officiis expedita harum, 
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit quasi temporibus. Delectus obcaecati molestiae totam dignissimos suscipit iusto quo nulla tempore in. Ipsa architecto consequatur quaerat animi molestias incidunt!
                </p>
            </div>
        </div>
    )
}
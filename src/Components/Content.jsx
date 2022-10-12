import AboutMe from "./AboutMe.jsx";
import Stack from "./Stack.jsx";
import Projects from "./Projects.jsx";
import Works from "./Works.jsx";
import Github from "./Github.jsx"
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";



export default function Content(){

    return (
        <>
            <AboutMe />
            <Stack stack={["HTML" , "CSS" , "SCSS" , "CSS Modules" , "JS" , "React"]} />
            <Projects projects={[{src: image1 , name: "Project name" , page: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus omnis modi magni fuga est facere nisi sunt dolorum, et aliquam eligendi ullam blanditiis labore beatae nostrum officiis expedita harum, lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit quasi temporibus. Delectus obcaecati molestiae totam dignissimos suscipit iusto quo nulla tempore in. Ipsa architecto consequatur quaerat animi molestias incidunt!" , url: "https:://github.com"} , {src: image2 , name: "Project name" , page: "strign more info about project"} ]} />
            <Works works={[ {id: 0 , src: image1} , {id: 1 , src: image2} , {id: 2 , src: image3} ]} />
            <Github />
        </>
    )
}
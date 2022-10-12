import styled from "../App.module.scss"

function Header(){
    return (
        <header>
                <h1 className={styled.logo}>YgamiJS</h1>
                <nav>
                    <ul>
                        <li><a href={styled.AboutMe}>About me</a></li>
                        <li><a href="">Stack</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="https://github.com/YgamiJS">GitHub</a></li>
                    </ul>
                </nav>
        </header>
    )
}

function Footer(){
    return (
        <footer>
                <h1 className={styled.logo}>YgamiJS</h1>
                <nav>
                    <ul>
                        <li><a href={styled.AboutMe}>About me</a></li>
                        <li><a href={styled.Stack}>Stack</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="https://github.com/YgamiJS">GitHub</a></li>
                    </ul>
                </nav>
        </footer>
    )
}

export {Header , Footer};
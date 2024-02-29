import { Container } from "./style"

import GitHubImage from '../../assets/github.svg'
import CodeImage from '../../assets/code.svg'

export const Footer = () =>{
    return(
    <Container>

        <div className="icons">
            <a href="https://github.com/gabriellima11/rick-and-morty-api" target="_blank">
                <img src={GitHubImage} alt="GitHub" className="github-icon" />
            </a>
            <div className="by">
                <img src={CodeImage} alt="Code" />
                <span>Gabriel Lima</span>
            </div>
        </div>

    </Container>
    )
}
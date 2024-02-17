import { Character } from "../character"
import { Container, ContainerList } from "./style"

export const CharacterList = ({data}) =>{
    return(
        <Container>
            <ContainerList>
                {data?.results?.map((item) =>(
                    <Character item={item} />
                ))}
            </ContainerList>
        </Container>
    )
}
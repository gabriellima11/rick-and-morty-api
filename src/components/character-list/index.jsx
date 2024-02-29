import { Character } from "../character"
import { Pagination } from "../pagination"
import { Container, ContainerList } from "./style"

export const CharacterList = ({data, fetchNextPage, fetchPreviousPage}) =>{
    return(
        <Container>
            <ContainerList>
                {data?.results?.map((item) =>(
                    <Character item={item} />
                ))}
            </ContainerList>
            <Pagination pagination={data?.info} 
            fetchNextPage = {(url) => fetchNextPage(url)}
            fetchPreviousPage = {(url) => fetchPreviousPage(url)}
            />
        </Container>
    )
}
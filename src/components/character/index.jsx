import { Container, ContainerInfo} from "./style"

export const Character = ({item}) =>{

    function getStatusColor(status){
        if(status === "Alive") return "#55cc44";
        if(status === "Dead") return "#D63D2E";
        return "#9E9E9E";
    }
    


    return(
        <Container>
            <img src={item.image} alt={item.name} />
            <ContainerInfo backgroundColor = {getStatusColor(item.status)}>
                <div>
                    <p className="title">{item.name}</p>
                    <p className="status"><span />{item.status} - {item.species}</p>
                </div>
                <div>
                    <p className="info">Last know location:</p>
                    <p className="description">{item?.location?.name || "Unknown"}</p>
                </div>
                <div>
                    <p className="info">Origin:</p>
                    <p className="description">{item?.origin?.name || "Unknown"}</p>
                </div>
            </ContainerInfo>
        </Container>
    )
}
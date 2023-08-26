import './tableStatus.scss'
import Image from "next/image";

interface ITableStatus {
    value: string;
}

const TableStatus = (props: ITableStatus) => {

    const image: string =props.value == "completed" ? "/done.png" : props.value == "pending" ? "/clock.png" : "/cloud.png"
    const typeClass: string = props.value.split(" ").join("-");

    return (
        <div className={`table-status-container ${typeClass}`}>
            <Image src={image} alt={props.value} width={15} height={15}/>
            <p className={typeClass}>
                {props.value[0].toUpperCase() + props.value.substring(1)}
            </p>
        </div>
    )

}
export { TableStatus }
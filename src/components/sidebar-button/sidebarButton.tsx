import {useRouter} from "next/navigation";
import Image from "next/image";
import './sidebar-button.scss';

interface ISidebarButton {
    url: string;
    src: string;
    alt: string;
    text: string;
    active?: boolean;
}

const SidebarButton = (props: ISidebarButton) => {

    const { push } = useRouter();

    const handleClick = () => {
        push(props.url);
    }

    return (
        <div className={`sidebarButtonContainer ${props.active && "active"}`} onClick={handleClick}>
            <Image src={`/icons/${props.src}.png`} alt={props.alt} width={20} height={20}/>
            <p>{props.text}</p>
        </div>
    )

}

export { SidebarButton }
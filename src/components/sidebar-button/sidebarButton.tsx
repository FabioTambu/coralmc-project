import {useRouter} from "next/navigation";

import Image from "next/image";
import './sidebar-button.scss';

interface ISidebarButton {
    url: string;
    src: string;
    alt: string;
    text: string;
    external?: boolean;
}

const SidebarButton = (props: ISidebarButton) => {

    const { push } = useRouter();

    const handleClick = () => {
        props.external ? window.location.href = props.url : push(props.url);
    }

    return (
        <div className="sidebarButtonContainer" onClick={handleClick}>
            <Image src={`/${props.src}.png`} alt={props.alt} width={20} height={20}/>
            <p>{props.text}</p>
        </div>
    )

}

export { SidebarButton }
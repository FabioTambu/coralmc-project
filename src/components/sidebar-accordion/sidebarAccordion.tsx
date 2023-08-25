import {useRouter} from "next/navigation";

import Image from "next/image";
import './sidebar-accordion.scss';
import {useState} from "react";
import {SidebarButton} from "@/components/sidebar-button/sidebarButton";

interface ISidebarButton {
    url: string;
    src: string;
    alt: string;
    text: string;
    external?: boolean;
}

interface ISidebarAccordion {
    src: string;
    alt: string;
    text: string;
    buttons: ISidebarButton[];
}

const SidebarAccordion = (props: ISidebarAccordion) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="sidebarAccordionContainer" onClick={() => setOpen(!open)}>
                <div>
                    <div>
                        <Image src={`/${props.src}.png`} alt={props.alt} width={20} height={20}/>
                    </div>
                    <p>{props.text}</p>
                </div>
                <div>
                    <Image src={'/arrow-down.png'} alt={"arrow down"} width={20} height={20}/>
                </div>
            </div>
            <div className={`sidebarAccordionContent ${open ? "" : "collapsed"}`}>
                {
                    props.buttons.map((el: ISidebarButton) => {
                        return <>
                            <SidebarButton url={el.url} src={el.src} alt={el.alt} text={el.text} />
                        </>
                    })
                }
            </div>
        </>

    )

}

export { SidebarAccordion };

"use client";
import './sidebar.scss'
import {SidebarButton} from "@/components/sidebar-button/sidebarButton";
import {SidebarAccordion} from "@/components/sidebar-accordion/sidebarAccordion";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const CustomSidebar = () => {

    const [active, setActive] = useState<boolean[]>(new Array(8).fill(false));

    const { push } = useRouter();

    const pathname = usePathname();

    const accordionSettingsChildren = [
        {
            url: "https://google.com",
            src: "question-mark",
            alt: "question mark",
            text: "Unknown",
            key: "firstPagesElement",
            active: active[2]
        },
        {
            url: "https://google.com",
            src: "question-mark",
            alt: "question mark",
            text: "Unknown",
            key: "secondPagesElement",
            active: active[3]
        }
    ]

    const accordionDiscountsChildren = [
        {
            url: "https://google.com",
            src: "question-mark",
            alt: "question mark",
            text: "Unknown",
            key: "firstDiscountsElement",
            active: active[4]
        },
        {
            url: "https://google.com",
            src: "question-mark",
            alt: "question mark",
            text: "Unknown",
            key: "secondDiscountsElement",
            active: active[5]
        }
    ]

    const accordionPagesChildren = [
        {
            url: "https://google.com",
            src: "question-mark",
            alt: "question mark",
            text: "Unknown",
            key: "firstPagesElement",
            active: active[6]
        },
        {
            url: "https://google.com",
            src: "question-mark",
            alt: "question mark",
            text: "Unknown",
            key: "secondPagesElement",
            active: active[7]
        }
    ]

    useEffect(() => {
        const basePathName: string = pathname.split("/")[1];
        const newActive = [...active];

        switch (basePathName) {
            case "control-panel":
                newActive[0] = true;
                setActive(newActive);
                break;
            case "variables":
                newActive[1] = true;
                setActive(newActive);
                break;
        }
    }, []);

    return (
        <div className="sidebar-container">
            <div onClick={() => push("/")}>
                <div className="sidebar-header__image">
                    <Image className={"cursor-pointer"} src={"/coralmcLogo.png"} alt={"CoralMC Logo"} width={80} height={50}/>
                </div>

                <div className="sidebar-header__content">
                    <p className={"cursor-pointer"}>CoralMC</p>
                </div>
            </div>

            <SidebarButton url={"/control-panel"} src={"home"} alt={"home"} text={"Control Panel"} active={active[0]} />
            <SidebarButton url={"/variables"} src={"variable"} alt={"variables"} text={"Variables"} active={active[1]} />

            <SidebarAccordion src={"ampoule"} alt={"ampoule"} text={"Settings"} buttons={accordionSettingsChildren}/>
            <SidebarAccordion src={"tag"} alt={"tag"} text={"Discounts"} buttons={accordionDiscountsChildren}/>
            <SidebarAccordion src={"monitor"} alt={"monitor"} text={"Pages & CMS"} buttons={accordionPagesChildren}/>

            <hr/>

            <SidebarButton url={"https://google.com"} src={"docs"} alt={"docs"} text={"Docs"} />
            <SidebarButton url={"https://google.com"} src={"chain"} alt={"chain"} text={"Dashboard"} />
            <SidebarButton url={"https://google.com"} src={"lifesaver"} alt={"lifesaver"} text={"Help"} />

            <div className="bottomBar">
                <a href={"https://www.google.com"} target={"_blank"}>
                    <Image src={"/icons/lines-setting.png"} alt={"Lines Setting"} width={22} height={22}/>
                </a>
                <a href={"https://www.google.com"} target={"_blank"}>
                    <Image src={"/icons/world.png"} alt={"World"} width={22} height={22}/>
                </a>
                <a href={"https://www.google.com"} target={"_blank"}>
                    <Image src={"/icons/setting.png"} alt={"Setting"} width={22} height={22}/>
                </a>
            </div>
        </div>
    )
}

export { CustomSidebar }
"use client";
import './sidebar.scss'
import {SidebarButton} from "@/components/sidebar-button/sidebarButton";
import {SidebarAccordion} from "@/components/sidebar-accordion/sidebarAccordion";
import Image from "next/image";
const CustomSidebar = () => {

    const accordionsChildren = [
        {
            url: "https://google.com",
            src: "home",
            alt: "home",
            text: "HomePage"
        },
        {
            url: "https://google.com",
            src: "home",
            alt: "home",
            text: "HomePage"
        }
    ]

    return (
        <div className="sidebar-container">
            <div className="sidebar-header__image">
                <Image src={"/coralmcLogo.png"} alt={"CoralMC Logo"} width={80} height={50}/>
            </div>
            <div className="sidebar-header__content">
                <p>CoralMC</p>
            </div>
            <SidebarButton url={"https://google.com"} src={"home"} alt={"home"} text={"Control Panel"} />
            <SidebarButton url={"https://google.com"} src={"variable"} alt={"variables"} text={"Variables"} />

            <SidebarAccordion src={"tag"} alt={"tag"} text={"Discounts"} buttons={accordionsChildren} />
            <SidebarAccordion src={"monitor"} alt={"monitor"} text={"Pages & CMS"} buttons={accordionsChildren} />

            <hr/>

            <SidebarButton url={"https://google.com"} src={"docs"} alt={"docs"} text={"Docs"} />
            <SidebarButton url={"https://google.com"} src={"chain"} alt={"chain"} text={"Dashboard"} />
            <SidebarButton url={"https://google.com"} src={"lifesaver"} alt={"lifesaver"} text={"Help"} />

            <div className="bottomBar">
                <a href={"https://www.google.com"} target={"_blank"}>
                    <img src={"./lines-setting.png"} alt={"Lines Setting"} width={22}/>
                </a>
                <a href={"https://www.google.com"} target={"_blank"}>
                    <img src={"./world.png"} alt={"World"} width={22}/>
                </a>
                <a href={"https://www.google.com"} target={"_blank"}>
                    <img src={"./setting.png"} alt={"Setting"} width={22}/>
                </a>
            </div>
        </div>
    )
}

export { CustomSidebar }
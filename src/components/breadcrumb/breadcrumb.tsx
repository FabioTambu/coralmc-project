import {usePathname, useRouter} from "next/navigation";
import './breadcrumb.scss';
import Image from "next/image";
import {useEffect, useState} from "react";

const Breadcrumb = () => {

    const [image, setImage] = useState<string>("home");
    const pathname = usePathname()
    const {push} = useRouter();

    const baseElement: string = pathname.split("/")[1].split("-").join(" ")

    const handleClickBreadcrumbEl = (path: string) => {
        const pathEl = pathname.split("/").slice(2);
        let index: number = 3;
        for (let el in pathEl) {
            if (pathEl[el] === path) break;
            index++;
        }
        push(pathname.split("/").slice(0, index).join("/"));
    }

    const breadcrumbElement = (props: { title: string }) => {
        return (
            <div key={props.title} className={"breadcrumb-element"}
                 onClick={() => handleClickBreadcrumbEl(props.title)}>
                <Image src={"/icons/arrow-right.png"} alt={"arrow"} width={22} height={22}/>
                <p>
                    {
                        props.title.split("-").map((el: string) => {
                            return el[0].toUpperCase() + el.substring(1) + " ";
                        })
                    }
                </p>
            </div>
        )
    }

    useEffect(() => {
        switch (baseElement) {
            case "control panel":
                setImage("home");
                break;
            case "variables":
                setImage("variable");
                break;
            default:
                setImage("home");
                break;
        }
    }, []);

    return (
        <>
            <div className="breadcrumb-container">
                <div className={"main-item"} onClick={() => {
                    push(`/${pathname.split("/")[1]}`)
                }}>
                    <Image src={`/icons/${image}.png`} alt={image} width={20} height={20}/>
                    <p>
                        {
                            baseElement.split(" ").map((el: string) => {
                                return el ? el[0]?.toUpperCase() + el?.substring(1) + " " : "HomePage";
                            })
                        }
                    </p>
                </div>
                {
                    pathname.split("/").slice(2).map((el) => {
                        return breadcrumbElement({title: el});
                    })
                }
            </div>
        </>
    )

}


export {Breadcrumb}
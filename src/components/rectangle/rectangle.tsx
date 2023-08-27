import "./rectangle.scss"
import Image from "next/image";

interface IRectangle {
    img: string;
    altImg: string;
    titleValue: string;
    contentValue: string;
    subtitle: boolean;
    subtitleValue?: string;
}

const CustomRectangle = (props: IRectangle) => {
    return (
        <div className="rectangle-container">
            <div className="rectangle-content">
                <div className="title">
                    <Image src={`/icons/${props.img}.png`} alt={props.altImg} width={30} height={30}/>
                    <h4>{props.titleValue}</h4>
                </div>
                <div className="content-value">
                    <h2>{props.contentValue}</h2>
                </div>
                <div>
                    {props.subtitle ? <p>{props.subtitleValue}</p> : null}
                </div>
            </div>
        </div>
    )
}

export { CustomRectangle }
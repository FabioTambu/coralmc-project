import "./rectangle.scss"
import Image from "next/image";

interface IRectangle {
    img: string;
    altImg: string;
    h4: string;
    h1: string;
    p: boolean;
    pText?: string;
}

const CustomRectangle = (props: IRectangle) => {
    return (
        <div className="rectangle-container">
            <div className="rectangle-content">
                <div className="first">
                    <Image src={`/${props.img}.png`} alt={props.altImg} width={30} height={30}/>
                    <h4>{props.h4}</h4>
                </div>
                <div className="second">
                    <h2>{props.h1}</h2>
                </div>
                <div className="third">
                    {props.p ? <p>{props.pText}</p> : null}
                </div>
            </div>
        </div>
    )
}

export { CustomRectangle }
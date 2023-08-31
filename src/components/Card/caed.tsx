import { useState } from "react";
import "./card.css";
import{SelectColor} from "../Select/Select"


export interface Props{
    urlImg:string
    text:string
    backgroundColor:string

}
    

export function Card(props:Props) {
    const [backgroundColorValue, changeBackgroundColorValue] = useState<string>(props.backgroundColor)
  return (
    <div style={{ backgroundColor: backgroundColorValue }} className="Card">
      <h2>כותרת</h2>
      <img className="img" src={props.urlImg} alt="" />
      <p>{props.text}</p>
      <SelectColor/>
    </div>
  );
}

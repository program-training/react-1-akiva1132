import { useState } from "react";
import "./Text.css";


export function Text() {
  let textButton = "hide text"
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);
  {!isTextVisible? textButton = "show text" : null}
  return (
    <div className="Text">
      <h1>{isTextVisible}</h1>
      <button onClick={() => setIsTextVisible(() => !isTextVisible)}>{textButton}</button>
      {isTextVisible ? <div> 'Text' </div> : null}
    </div>
  );
}

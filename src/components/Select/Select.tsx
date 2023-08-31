import "./Select.css";
import { Card } from '../Card/caed';


export function SelectColor() {
    const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    }
    return (
      <div className="SelectDiv">
        <select onChange={handleChangeColor} id="SelectColor" placeholder="change color">
        <option value="red">red</option>
        <option value="blue">blue</option>
        </select>
      </div>
    );
  }
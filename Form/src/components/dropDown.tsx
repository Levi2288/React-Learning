import React, { useState } from "react";

type TDropDownProps = {
    ID:string
    Name:string
    Entries: string[],
    onSelect?: (selected: string) => void; 
    onChangeEvent?: (event: React.ChangeEvent<HTMLSelectElement>)=> void, // nem a legszebb megolás, fixen van rá 100x szebb is de ez gyorsan megvolt, csak meghivjuk ezt az eventet a local eventből
}


const DropDown: React.FC<TDropDownProps> = ({ ID, Entries, Name, onSelect, onChangeEvent }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChangeEvent) // nem akarunk crashelni hogyha nem passolunk event handlert
          onChangeEvent?.(event); // hivjuk meg a passolt eventet

        const value = event.target.value;
        setSelectedOption(value);
        if (onSelect) {
            onSelect(value);
        }
      };

      //{handleChange}
    return (
        <div>
        <label>{Name}</label>
        <br />
        <select id={ID} value={selectedOption} onChange={handleChange} > 
          <option value="" disabled>
            Select an option
          </option>
          {Entries.map((entry, index) => (
            <option key={index} value={entry}>
              {entry}
            </option>
          ))}
        </select>
        </div>
      );
}



export default DropDown;
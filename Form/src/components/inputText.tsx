


type TInputTextProps = {
    ID: string,
    Name: string,
    Required:boolean,
    Type:string,
    inputChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>)=> void,

};

const InputText: React.FC<TInputTextProps> = ({ ID, Name, Required, Type, inputChangeEvent}) => {        

    return(
        <div>
            <label>{Name}</label>
            <br />
            <input type={Type} id={ID} name={Name} required={Required} onChange={inputChangeEvent}></input>
        </div>
    );
}

export default InputText;
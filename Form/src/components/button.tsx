type TButtonProps = {
    Label:string
    submitFormEvent?: () => void;
}


const Button:React.FC<TButtonProps> = ({ Label, submitFormEvent }) => {


    return(
        <button onClick={submitFormEvent}>{Label}</button>
    );
  };

export default Button;
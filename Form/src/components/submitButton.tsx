type TButtonProps = {
    Label:string
    submitFormEvent?: () => void;
}


const SubmitButton:React.FC<TButtonProps> = ({ Label, submitFormEvent }) => {


    return(
        <button onClick={submitFormEvent}>{Label}</button>
    );
  };

export default SubmitButton;
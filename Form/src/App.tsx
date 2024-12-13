
import './App.css'
import React, { useState } from "react";
import DropDown from "./components/dropDown"
import InputText from "./components/inputText"
import Button from './components/button';


function App() {


    //const [user, setUser] = useState<User | undefined >()
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        address: "",
        favouriteAnimal: ""
    });

    
    const onInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {

        //event.preventDefault()
        //console.log(event.target.name + "| " + event.target.value )
        setFormValues({ ...formValues, [event.target.id]: event.target.value }) // IDT használok mivel ugy referencelem a keyt a fenti listából

    }

    const onSelectchange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        //event.preventDefault()
        //const id = event.currentTarget.id; // Access the id of the select element
        //console.log( id +" | " + event.target.name + "| " + event.target.value )

        // Valamiért a targettal nem tudta accesselni az ID-t csak a currentTargetet használva értem el, fura mivel láttam a watchba, hogy van értéke az idnek.
        setFormValues({ ...formValues, [event.currentTarget.id]: event.currentTarget.value }) 

    }

    const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {

        console.log("----Logged Data----")
        console.log("First Name: %s", formValues.firstName)
        console.log("Last Name: %s",  formValues.lastName)
        console.log("Email: %s",  formValues.email)
        console.log("Phone Number: %s",  formValues.phoneNum)
        console.log("Address: %s",  formValues.address)
        console.log("Favourite Animal: %s",  formValues.favouriteAnimal)
        console.log("--------------------")
        event.preventDefault()
        //setClicked(!clicked)

    }
    
    return (
    <div>
        <h1>Welcome to the App</h1>
        <br />
        <form onSubmit={handleSubmission}>
            <InputText ID="lastName" Name= "Last Name" Type="text" Required={true} inputChangeEvent={onInputchange}/>
            <InputText ID="firstName" Name= "First Name" Type="text" Required={true} inputChangeEvent={onInputchange}/>
            <InputText ID="email" Name= "Email" Type="text" Required={true} inputChangeEvent={onInputchange}/>
            <InputText ID="phoneNum" Name= "Phone Number" Type="phone" Required={true} inputChangeEvent={onInputchange}/>
            <InputText ID="address" Name= "Address" Type="text" Required={true} inputChangeEvent={onInputchange}/>
            <br />
            <DropDown ID="favouriteAnimal" Name="Favourite animals" Entries= {["Dog","Cat","Tiger"]} onChangeEvent={onSelectchange}/>
            <br />
            <Button Label="Submit"/>
        </form> 
    </div>
    );
}

export default App

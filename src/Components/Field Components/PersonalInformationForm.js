import React, { Component } from 'react'

class PersonalInformationForm extends Component {
    // constructor(props) {
        // super(props);
    // }

    render() {
        const { updateInputField, personalInformation } = this.props;    
        // const personalInformationObject = userData[0];   

        return (
            <div className='personalInformationForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'purple', borderWidth: 10}}>
                <h3>Personal Information</h3>
                <div className='nameFieldContainer'>
                    Name: <input className="inputField" type="text" placeholder='Ferris Bueller' onChange={e => updateInputField(e, personalInformation, 'name')} value={personalInformation.name}></input>
                </div>
                <div className='titleFieldContainer'>
                    Title: <input className="inputField" type="text" placeholder='Front-end Developer' onChange={e => updateInputField(e, personalInformation, 'title')} value={personalInformation.title}>
                    </input>
                </div>
                <div className='photoFieldContainer'>
                    Photo URL: <input className="inputField" type="url" placeholder='ttps://giphy.com/embed/BzyTuYCmvSORqs1ABM' onChange={e => updateInputField(e, personalInformation, 'photoURL')} value={personalInformation.photoURL}></input>
                    <button type="button">Get Photo (not implemented yet)</button>
                </div>
                <div className='addressFieldContainer'>
                    Address: <input className="inputField" type="text" placeholder='137 Trench Run, Death Star' onChange={e => updateInputField(e, personalInformation, 'address')} value={personalInformation.address}></input>
                </div>
                <div className='phoneFieldContainer'>
                    Phone: <input className="inputField" type="tel" placeholder='123-456-1337'  onChange={e => updateInputField(e, personalInformation, 'phone')} value={personalInformation.phone}></input>
                </div>
                <div className='emailFieldContainer'>
                    Email: <input className="inputField" type="tel" placeholder='developer_who_says_NI@email.com' onChange={e => updateInputField(e, personalInformation, 'email')} value={personalInformation.email}></input>
                </div>
                <div className='linkedInFieldContainer'>
                    LinkedIn: <input className="inputField" type="url" placeholder='linkedin.com/McClane-John'  onChange={e => updateInputField(e, personalInformation, 'linkedIn')} value={personalInformation.linkedIn}></input>
                </div>
                <div className='gitHubFieldContainer'>
                    GitHub: <input className="inputField" type="url" placeholder='github.com/github' onChange={e => updateInputField(e, personalInformation, 'gitHub')} value={personalInformation.gitHub}></input>
                </div>



                <p></p>
                {/* <button type="submit" onClick={e => e.preventDefault()}>Submit</button> */}
                <p></p>
            </div>
        )
    }
}

export default PersonalInformationForm;

/*

--- Personal Information ---
First Name: 
Last Name:
Title:
Photo?:
Address:
Phone Number:
Email:
LinkedIn:
Github:
Description/Short Bio:


*/

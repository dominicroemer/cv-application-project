import React, { Component } from 'react'

class WorkExperienceForm extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        const {workExperienceArr, updateInputField, createExperience, deleteExperience, elementType} = this.props;
        let rows =[];

        workExperienceArr.forEach(element => {
            // console.log(updateInputField);
            rows.push(
                <WorkExperienceSlot 
                    workExperience={element}
                    key={element.key}
                    updateInputField={updateInputField}
                    deleteExperience={deleteExperience}/>
            )
        });

        return (
            <div className='workExperienceForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'navy', borderWidth: 10}}>
                <h3>Work Experience</h3>
                
                {rows}
            
            <p></p>
            <button type="submit" onClick={e => createExperience(e,elementType)} id='workAddButton'>Add Work Experience</button>
            <p></p>
        </div>
        )
    }
}

class WorkExperienceSlot extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        const { workExperience, updateInputField, deleteExperience } = this.props;

        return (
            <form className='workExperienceSlot' style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'black', borderWidth: 3}}>
                <div className='positionFieldContainer'>
                    Position: <input className="inputField" type="text" placeholder='Stormtrooper, 2nd Battalion' onChange={e => updateInputField(e, workExperience, 'position')} value={workExperience.position}></input>
                </div>
                <div className='companyFieldContainer'>
                    Company: <input className="inputField" type="text" placeholder='The Empire, LLC' onChange={e => updateInputField(e, workExperience, 'company')} value={workExperience.company}>
                    </input>
                </div>
                <div className='locationFieldContainer'>
                    Location: <input className="inputField" type="text" placeholder='Star, Death, The' onChange={e => updateInputField(e, workExperience, 'location')} value={workExperience.location}></input>
                </div>
                <div className='startDateFieldContainer'>
                    Start Date: <input className="inputField" type="month" onChange={e => updateInputField(e, workExperience, 'startDate')} value={workExperience.startDate}></input>
                </div>
                <div className='endDateFieldContainer'>
                    End Date: <input className="inputField" type="month" onChange={e => updateInputField(e, workExperience, 'endDate')} value={workExperience.endDate}></input>
                </div>

                <div className='descriptionFieldContainer'>
                    Description of Duties: <textarea className='inputField' placeholder='Kept workspace free of filthy Rebel scum, organized weekly Stormtrooper Socials' onChange={e => updateInputField(e, workExperience, 'descriptionOfDuties')} value={workExperience.descriptionOfDuties}></textarea>
                </div>

                <button type="button" onClick={e => deleteExperience(e, workExperience)}> Delete this Entry </button>
                <p></p>
            </form>
        )
    }

}

export default WorkExperienceForm;

/* 
--- Work Experience(VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Position:
Company:
City:
Start Date:
End Date:? (maybe set this is a duration sort of thing?)
Short description:
*/
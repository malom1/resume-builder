import "./Information.css"


function Information ({resumeData, setResumeData, setIsEditing}) {

    const handleChanges = (e) => {

        e.preventDefault()
        setResumeData({...resumeData, [e.target.name]: e.target.value})

    }
    
    const handleSubmit = (e) => {

        e.preventDefault()
        setIsEditing(false)
    }

    return (
        <div className="input-container">

            <h1 className="title">Resume Generator</h1>

            <form onSubmit={handleSubmit}>
                <div className="info-input">

                    <h1>Personal Information</h1>

                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text" 
                        id="firstname" 
                        onChange={handleChanges}
                        // required
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        onChange={handleChanges}
                        // required
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="mail" 
                        name="email" 
                        onChange={handleChanges}
                        // required
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        name="phone" 
                        onChange={handleChanges}
                        // required
                    />

                    <label htmlFor="homeLocation">Location</label>
                    <input 
                        type="text" 
                        name="homeLocation" 
                        onChange={handleChanges}
                    />

                </div>

                <div className="education-input">

                    <h1>Education</h1>

                    <label htmlFor="school">School</label>
                    <input 
                        type="text" 
                        name="school" 
                        onChange={handleChanges}
                    />

                    <label htmlFor="major">Major</label>
                    <input 
                        type="text" 
                        name="major" 
                        onChange={handleChanges}
                    />

                    <label htmlFor="schoolStart">Start Date</label>
                    <input 
                        type="date" 
                        name="schoolStart"
                        onChange={handleChanges}
                    />

                    <label htmlFor="schoolEnd">End Date</label>
                    <input 
                        type="date" 
                        name="schoolEnd"
                        onChange={handleChanges}
                    />

                </div>

                <div className="work-input">

                    <h1>Work Experience</h1>

                    <label htmlFor="company">Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        onChange={handleChanges}
                    />

                    <label htmlFor="position">Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        onChange={handleChanges}
                    />

                    <label htmlFor="workLocation">Location</label>
                    <input 
                        type="text" 
                        name="workLocation" 
                        onChange={handleChanges}
                    />

                    <label htmlFor="workStart">Start Date</label>
                    <input 
                        type="date" 
                        name="workStart"
                        onChange={handleChanges}/>

                    <label htmlFor="workEnd">End Date</label>
                    <input 
                        type="date" 
                        name="workEnd"
                        onChange={handleChanges}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description" 
                        onChange={handleChanges}>
                    </textarea>

                </div>

                <button className="submit-btn">Submit</button>

            </form>

        </div>

    )
}

export default Information
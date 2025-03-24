import "./Information.css"


function Information ({resumeData, setResumeData, setIsEditing}) {

    

    const handleChanges = (e) => {

        e.preventDefault()

        setResumeData({...resumeData, [e.target.name]: e.target.value})

        setIsEditing(false)

    }
    
    // const handleSubmit = (e) => {

    //     e.preventDefault()
    //     setIsEditing(false)
    // }

    return (
        <div className="input-container">

            <form onSubmit={handleChanges}>
                <div className="info-input">

                    <h1>Personal Information</h1>

                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="Enter First Name"
                        onChange={handleChanges}
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Enter Last Name"
                        onChange={handleChanges}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="mail" 
                        name="email" 
                        placeholder="Enter Email"
                        onChange={handleChanges}
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Enter Phone Number"
                        onChange={handleChanges}
                    />

                    <label htmlFor="homeLocation">Location</label>
                    <input 
                        type="text" 
                        name="homeLocation" 
                        placeholder="City, State"
                        onChange={handleChanges}
                    />

                </div>

                <div className="education-input">

                    <h1>Education</h1>

                    <label htmlFor="school">School</label>
                    <input 
                        type="text" 
                        name="school" 
                        placeholder="Enter School Name"
                        onChange={handleChanges}
                    />

                    <label htmlFor="major">Major</label>
                    <input 
                        type="text" 
                        name="major" 
                        placeholder="Enter Major"
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
                        placeholder="Enter Company Name"
                        onChange={handleChanges}
                    />

                    <label htmlFor="position">Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        placeholder="Enter Position"
                        onChange={handleChanges}
                    />

                    <label htmlFor="workLocation">Location</label>
                    <input 
                        type="text" 
                        name="workLocation" 
                        placeholder="City, State"
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
                        placeholder="Responsibilities"
                        onChange={handleChanges}>
                    </textarea>

                </div>

                <button>Submit</button>

            </form>

        </div>

    )
}

export default Information
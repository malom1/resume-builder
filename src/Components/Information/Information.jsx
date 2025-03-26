import "./Information.css"


function Information ({resumeData, setResumeData, setIsEditing}) {

    const handleChanges = (e) => {
        setResumeData({...resumeData, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="input-container">

            <h1 className="title">Resume Generator</h1>

            <form onSubmit={handleSubmit}>
                <div className="info-input">

                    <h1>Personal Information</h1>

                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text" 
                        name="firstname"
                        value={resumeData.firstname} 
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        value={resumeData.lastname}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="mail" 
                        name="email" 
                        value={resumeData.email}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={resumeData.phone}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="homeLocation">Location</label>
                    <input 
                        type="text" 
                        name="homeLocation" 
                        value={resumeData.homeLocation}
                        onChange={handleChanges}
                        required
                    />

                </div>

                <div className="education-input">

                    <h1>Education</h1>

                    <label htmlFor="school">School</label>
                    <input 
                        type="text" 
                        name="school" 
                        value={resumeData.school}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="major">Major</label>
                    <input 
                        type="text" 
                        name="major" 
                        value={resumeData.major}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="schoolStart">Start Date</label>
                    <input 
                        type="date" 
                        name="schoolStart"
                        value={resumeData.schoolStart}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="schoolEnd">End Date</label>
                    <input 
                        type="date" 
                        name="schoolEnd"
                        value={resumeData.schoolEnd}
                        onChange={handleChanges}
                        required
                    />

                </div>

                <div className="work-input">

                    <h1>Work Experience</h1>

                    <label htmlFor="company">Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        value={resumeData.company}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="position">Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        value={resumeData.position}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="workLocation">Location</label>
                    <input 
                        type="text" 
                        name="workLocation" 
                        value={resumeData.workLocation}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="workStart">Start Date</label>
                    <input 
                        type="date" 
                        name="workStart"
                        value={resumeData.workStart}
                        onChange={handleChanges}
                        required
                    />


                    <label htmlFor="workEnd">End Date</label>
                    <input 
                        type="date" 
                        name="workEnd"
                        value={resumeData.workEnd}
                        onChange={handleChanges}
                        required
                    />

                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description" 
                        value={resumeData.description}
                        onChange={handleChanges}
                        required
                    >

                    </textarea>

                </div>

                <button className="submit-btn">Submit</button>

            </form>

        </div>

    )
}

export default Information
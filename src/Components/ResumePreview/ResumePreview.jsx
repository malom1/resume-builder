import "./ResumePreview.css"

export default function ResumePreview({resumeData, setIsEditing}) {


    // Function to set editing variable to true
    function handleEdit(){
        setIsEditing(true)
    }

    return(
        <div className="resume-preview">
            <div className="personal-info">
                <h1>{resumeData.firstname} {resumeData.lastname}</h1>
                <p>{resumeData.email} | {resumeData.phone} | {resumeData.homeLocation}</p>
            </div>

            <div className="education">
                <h2>Education</h2>
                <p><strong>{resumeData.school}</strong></p>
                <p>{resumeData.major}, {resumeData.schoolStart} - {resumeData.schoolEnd}</p>      
            </div>

            <div className="work">
                <h2>Professional Experience</h2>
                <p><strong>{resumeData.company}</strong>, {resumeData.workLocation}</p>
                <p>{resumeData.position}, {resumeData.workStart} - {resumeData.workEnd}</p>
                <p>{resumeData.description}</p>
            </div>

            <button onClick={handleEdit}>Edit</button>

        </div>
    )


}
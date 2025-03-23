export default function ResumePreview({resumeData}) {

    return(
        <div className="resume-preview">
            <h1>{resumeData.firstname} {resumeData.lastname}</h1>
            <p>{resumeData.email} | {resumeData.phone} | {resumeData.homeLocation}</p>

            <h2>Education</h2>
            <p><strong>{resumeData.school}</strong></p>
            <p>{resumeData.major}, {resumeData.schoolStart} - {resumeData.schoolEnd}</p>

            <h2>Professional Experience</h2>
            <p><strong>{resumeData.company}</strong>, {resumeData.workLocation}</p>
            <p>{resumeData.position}, {resumeData.workStart} - {resumeData.workEnd}</p>
            <p>{resumeData.description}</p>

        </div>
    )


}
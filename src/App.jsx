import './App.css'
import Information from './Components/Information/Information'
import ResumePreview from './Components/ResumePreview/ResumePreview'
import { useState } from 'react'

function App() {

  // State variable to determine whether the user is editing or has submitted the form
  const [isEditing, setIsEditing] = useState(true)

  // State variable to set resume data and pass as props to each component
  const [resumeData, setResumeData] = useState({
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@email.com',
    phone: 1234567890,
    homeLocation: 'Queens, NY',
    school: 'Harvard University',
    major: 'Computer Science',
    schoolStart: '',
    schoolEnd: '',
    company: 'Google',
    position: 'Software Engineer',
    workStart: '',
    workEnd: '',
    workLocation: 'San Francisco',
    description:'description'
  });


  // If editing, set window to the user input page, else set to preview page
  return(
    <div className='container'>
      {isEditing ? (
        <Information
        resumeData={resumeData}
        setResumeData={setResumeData}
        setIsEditing={setIsEditing}
        />
      ) : (
        <ResumePreview
        resumeData={resumeData}
        setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default App

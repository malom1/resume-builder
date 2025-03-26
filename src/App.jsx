import './App.css'
import Information from './Components/Information/Information'
import ResumePreview from './Components/ResumePreview/ResumePreview'
import { useState } from 'react'

function App() {

  const [isEditing, setIsEditing] = useState(true)

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

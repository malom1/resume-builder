import './App.css'
import Information from './Components/Information'
import ResumePreview from './Components/ResumePreview'
import { useState } from 'react'

function App() {

  const [isEditing, setIsEditing] = useState(true)

  const [resumeData, setResumeData] = useState({
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@email.com',
    phone: 123-456-7890,
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
  })

  if(isEditing===true){
    return(
      <Information resumeData={resumeData} setResumeData={setResumeData} isEditing={isEditing} setIsEditing={setIsEditing}/>
    )
  } else {
      return(
        <ResumePreview resumeData={resumeData} setResumeData={setResumeData} isEditing={isEditing} setIsEditing={setIsEditing}/>
      )
  }
}

export default App

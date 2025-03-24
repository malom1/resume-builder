import './App.css'
import Information from './Components/Information'
import ResumePreview from './Components/ResumePreview'
import { useState } from 'react'

function App() {

  const [isEditing, setIsEditing] = useState(true)

  const [resumeData, setResumeData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    homeLocation: '',
    school: '',
    major: '',
    schoolStart: '',
    schoolEnd: '',
    company: '',
    position: '',
    workStart: '',
    workEnd: '',
    workLocation: '',
    description: ''
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

  // return (
  //   <div className='main-container'>

  //     <Information resumeData={resumeData} setResumeData={setResumeData} isEditing={isEditing} setIsEditing={setIsEditing}/>
  //     <ResumePreview resumeData={resumeData} setResumeData={setResumeData} isEditing={isEditing} setIsEditing={setIsEditing}/>

  //   </div>
  // )
}

export default App

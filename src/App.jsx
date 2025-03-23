import './App.css'
import Information from './Components/Information'
import ResumePreview from './Components/ResumePreview'
import { useState } from 'react'

function App() {

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

  return (
    <>
    <Information resumeData={resumeData} setResumeData={setResumeData}/>
    <ResumePreview resumeData={resumeData}/>
    </>
  )
}

export default App

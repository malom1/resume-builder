import { useState } from "react"

function Information () {

    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        location: '',
        school: '',
        major: '',
        company: '',
        description: ''
    })

    const handleChanges = (e) => {

        setValue({...value, [e.target.name]:[e.target.value]})

    }
    
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(value)
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="personal-info">

                    <h1>Personal Information</h1>

                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder="Enter First Name"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" placeholder="Enter Last Name"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="email">Email</label>
                    <input type="mail" name="email" placeholder="Enter Email"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" placeholder="Enter Phone Number"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="City, State"
                    onChange={(e) => handleChanges(e)}/>

                </div>

                <div className="education">

                    <h1>Education</h1>

                    <label htmlFor="school">School</label>
                    <input type="text" name="school" placeholder="Enter School Name"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="major">Major</label>
                    <input type="text" name="major" placeholder="Enter Major"
                    onChange={(e) => handleChanges(e)}/>
{/* 
                    <label htmlFor="minor">Minor</label>
                    <input type="text" name="minor" placeholder="Enter Minor"/> */}

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date"/>

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date"/>

                </div>

                <div className="experience">

                    <h1>Work Experience</h1>

                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" placeholder="Enter Company Name"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="City, State"
                    onChange={(e) => handleChanges(e)}/>

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date"/>

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date"/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={(e) => handleChanges(e)}></textarea>

                </div>

                <button>Submit</button>

            </form>

        </div>

    )
}

export default Information
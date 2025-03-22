import { useState } from "react"

function Information () {

    return (
        <div className="container">

            <form>
                <div className="personal-info">

                    <h1>Personal Information</h1>

                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder="Enter First Name"/>

                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="firstname" placeholder="Enter Lirst Name"/>

                    <label htmlFor="email">Email</label>
                    <input type="mail" name="email" placeholder="Enter Email"/>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" placeholder="Enter Phone Number"/>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="City, State"/>

                </div>

                <div className="education">

                    <h1>Education</h1>

                    <label htmlFor="school">School</label>
                    <input type="text" name="school" placeholder="Enter School Name"/>

                    <label htmlFor="major">Major</label>
                    <input type="text" name="major" placeholder="Enter Major"/>

                    <label htmlFor="minor">Minor</label>
                    <input type="text" name="minor" placeholder="Enter Minor"/>

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date"/>

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date"/>

                </div>

                <div className="experience">

                    <h1>Work Experience</h1>

                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" placeholder="Enter Company Name"/>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="City, State"/>

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date"/>

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date"/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description"></textarea>

                </div>

                

            </form>

        </div>

    )
}

export default Information
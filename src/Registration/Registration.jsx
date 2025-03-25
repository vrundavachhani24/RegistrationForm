import React, { useState } from "react"
import Input from "../Input/Input"

const Registration = () => {

    const [formdata, setFormData] = useState({})
    const [errors, setErrors] = useState({})

    const handlechange = (event) => {
        const inputval = event.target.value
        const inputname = event.target.name

        if (inputval === '') {
            setErrors({ ...errors, [inputname]: `please enter your ${inputname}` })
        } else {
            setErrors({ ...errors, [inputname]: '' })
        }
        setFormData({ ...errors, [inputname]: [inputval] })
    }

    const handlesubmit = () => {
        let localError = {};

        if (!formdata.firstname) {
            localError = { ...localError, firstname: "please enter your firstname" }
        }
        if (!formdata.middlename) {
            localError = { ...localError, middlename: "please enter your middlename" }
        }
        if (!formdata.lastname) {
            localError = { ...localError, lastname: "please enter your lastname" }
        }

        setErrors(localError)
    }

    return (
        <div className="m-10">
            <h1 className="text-4xl">Registration Form</h1>
            <p className="text-xl">Fill out the form carefully for registration</p> <br />
            <h1 className="text-3xl">Student name</h1>
            <div className="flex gap-10">
                <div>
                    <label>First name</label>
                    <Input type="text" onChange={handlechange} value={formdata.firstname} name='firstname' errors={errors} />
                </div>
                <div>
                    <label>Middle name</label>
                    <Input type="text" onChange={handlechange} value={formdata.middlename} name='middlename' errors={errors} />
                </div>
                <div>
                    <label>Last name</label>
                    <Input type="text" onChange={handlechange} value={formdata.lastname} name='lastname' errors={errors} />
                </div>
            </div> <br />
            <h1 className="text-2xl">Gender</h1>
            <select className="border-1 p-2">
                <option value="">please select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select> <br /> <br />
            <button type="submit" onClick={handlesubmit} className="border-1 p-2">Submit</button>
        </div>
    )
}

export default Registration
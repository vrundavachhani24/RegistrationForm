import React, { useState } from "react"
import Input from "../Input/Input"
import Select from "../Select/Select"

const Registration = () => {

    const [formdata, setFormData] = useState({})
    const [errors, setErrors] = useState('')

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
        if (!formdata.gender) {
            localError = { ...localError, gender: "please choose a select gender" }
        }
        if (!formdata.month) {
            localError = { ...localError, month: "please enter your month" }
        }
        if (!formdata.date) {
            localError = { ...localError, date: "please enter your date" }
        }
        if (!formdata.check) {
            localError = { ...localError, check: "please select your check" }
        }

        setErrors(localError)
    }

    return (
        <div className="m-20 place-self-center">
            <h1 className="text-4xl">Registration Form</h1>
            <p className="text-xl">Fill out the form carefully for registration</p> <br />
            <h1 className="text-3xl">Student name :</h1>
            <div className="flex gap-10">
                <div>
                    <label>First name</label>
                    <Input type="text" onChange={handlechange} value={formdata?.firstname} name='firstname' errors={errors} />
                </div>
                <div>
                    <label>Middle name</label>
                    <Input type="text" onChange={handlechange} value={formdata?.middlename} name='middlename' errors={errors} />
                </div>
                <div>
                    <label>Last name</label>
                    <Input type="text" onChange={handlechange} value={formdata?.lastname} name='lastname' errors={errors} />
                </div>
            </div> <br />
            <div className="flex gap-10">
                <div className="gap-10">
                    <h1 className="text-2xl flex-none">Birth Date :</h1> <br />
                    <div className="flex gap-10">
                        <div>
                            <label>Month</label> <br />
                            <Input type="month" className="border-1" onchange={handlechange} value={formdata?.month} name={'month'} errors={errors} />
                        </div>
                        <div>
                            <label>Date</label> <br />
                            <Input type="date" className="border-1" onchange={handlechange} value={formdata?.date} name={'date'} errors={errors} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl">Gender :</h1>
                    <Select onChange={handlechange} value={formdata?.gender}>
                    </Select>
                    <div className="text-red-500">{errors?.gender}</div>
                </div>
            </div> <br />
            <div>
                <h1 className="text-2xl">Hobby :</h1>
                <input type="checkbox" onChange={handlechange} value={formdata?.check} errors={check} className="mt-5" /> Music <br />
                <input type="checkbox" onChange={handlechange} value={formdata?.check} errors={check}/> Dancing <br />
                <input type="checkbox" onChange={handlechange} value={formdata?.check} errors={check}/> Playing
                <div className="text-red-500">{errors.check}</div>
            </div> <br /> <br />
            <button type="submit" onClick={handlesubmit} className="border-1 p-2">Submit</button>
        </div>
    )
}

export default Registration
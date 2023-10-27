import React, { useState } from 'react'

const Register = () => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");


    const handleSubmit = () => {
        console.log("Submitted!!")
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
            </form>
        </div>
    )
}

export default Register
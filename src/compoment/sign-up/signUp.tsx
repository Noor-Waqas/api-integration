import { useState } from "react";
import axios from "axios";

const signUp = () => {
    const [userdata, setuserdata] = useState({
        name:"",
        phone:"",
        age:"",
        address:"",
        email:"",
        password:"",
    })
    const onChangeHandle = (target: HTMLInputElement) =>   setuserdata( prevState =>   ({ ...prevState, [target.name]: target.value})) 
    const SignUpHandler = async () => {
        const response = await  axios.post("google.com/api/call", userdata)
    //   const respinse = {
    //         status: true,
    //         message: "Signup Success "
    //     }
        if(response.status){
            // redirect to login
        }else {
            // error
        }
    }
    return (
        <> 
            <div>
                <h1 style={{display:"flex",justifyContent:"center"}}>SIGN UP</h1> 
            </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
                <form >
                    <label >Username:</label><br/>
                    <input type="text" name="name" value={userdata.name} onChange={(e) => onChangeHandle(e.target)} /><br/>
                    <label >Phone:</label><br/>
                    <input type="text" name="phone" value={userdata.phone} onChange={(e) => onChangeHandle(e.target)}/><br/>
                    <label >Age:</label><br/>
                    <input type="text" name="age" value={userdata.age} onChange={(e) => onChangeHandle(e.target)} /><br/>
                    <label >Address:</label><br/>
                    <input type="text" name="address" value={userdata.address} onChange={(e) => onChangeHandle(e.target)} /><br/>
                    <label >Email:</label><br/>
                    <input type="email" name="email" value={userdata.email} onChange={(e) => onChangeHandle(e.target)} /><br/>
                    <label >Password:</label><br/>
                    <input type="password" name="password" value={userdata.password} onChange={(e) => onChangeHandle(e.target)} /><br/><br/>
                    <button type="submit" onClick={ SignUpHandler }>Sign Up</button>
                </form>
            </div>

        </>
    )
}

export default signUp
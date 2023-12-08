import { useState } from "react"

const postApi = () => {
    const [userInfo,setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (target) => {
        console.log("value", target);
        setUserInfo((vals)=>{
            return {
                ...vals,
                [target.name]: target.value
            }
        })
      };
  return (
    <>
        <div style={{marginTop:"3rem",textAlign:"center"}}>Input Feild </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
            <form >
                <label >Username:</label><br/>
                <input type="text" name="name" value={userInfo.name} onChange={(e) => onChangeHandler(e.target)} /><br/>
                <label >Email:</label><br/>
                <input type="text" name="email" value={userInfo.email} onChange={(e) => onChangeHandler(e.target)}/><br/>
                <label >Password:</label><br/>
                <input type="password" name="password" value={userInfo.password} onChange={(e) => onChangeHandler(e.target)}/><br/><br/>
                <button type="submit">Crete</button>
        </form>
        </div> 
    </>
  )
}

export default postApi
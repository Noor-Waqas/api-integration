
import { Form, Input} from 'antd'
import style from './style.module.scss'
import { useState } from 'react';
const about = () => {
    const { TextArea } = Input;

const [data,setData]=useState([]);
const apidata = 'https://jsonplaceholder.typicode.com/posts';

fetch(apidata)
  .then(response => {
    if (!response.ok) {
      throw new Error(`error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(Result => {
    // console.log(Result);
    setData(Result)
  })
  console.log("------------------",data)
  

  return (
    <>
    <div className={style.mainSetionDiv}>
            <div className={style.mainSectionHeading}> 
                <h1 className={style.headingDiv}> Api Fatch Api Intigration In Js</h1>
            </div>
            {data.map((item) => (
        <div className={style.formMthodDiv} key={item.id}>

            <Form>
            <label>UserId :</label><br />
            <Input className={style.inputStye} type="text" value={item.userId}  /><br />

            <label>Id :</label><br />
            <Input type="text" value={item.id}  /><br />

            <label>Title :</label><br />
            <Input type="text" value={item.title}  /><br />

            <label>Body :</label><br />
            <TextArea showCount maxLength={100} className={style.TextAreaDiv} value={item.body} style={{ height: 120, resize: 'none',color:'black' }}/><br /><br />
     
       

            <Input type="submit" value="Update" />

            <hr />
          
            </Form>
        </div>
))}

    </div>
    </>
  )
}

export default about

import { Form, Input} from 'antd'
import style from './style.module.scss'
import { useState, useEffect } from 'react';
interface UserData {
    id: number;
    firstName: string;
    email: string;
    age: number;
    contactNumber: string;
    address: string;
    imageUrl: string;
    dob: string;
    salary: number;
    // Add other properties as needed
  }

const about = () => {

    const [data, setData] = useState <UserData[]> ([]);
    const [loading, setLoading] = useState(true);
    const apidata = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
    // const apidata = 'https://645f31759d35038e2d1e99e2.mockapi.io/crud';

    const fetchData = async () => {
        console.log(" fetchData Start ----- ")

        try {
            const response = await fetch(apidata);
            if (!response.ok) {
                throw new Error(`Error! Status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
            console.log("==== result", data);
         } catch (error) {
            console.error('API request failed:', error);
        } finally {
            console.log(" fetchData Ends  ----- ")
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log(" Use Effect Start ----- ")
        fetchData();
        console.log(" Use Effect Ends ----- ")
    }, []);
    console.log("==== result after calls ... ", data);

  
    return (
        <>
            {console.log(" Rendering Start ----- ")}
            <div className={style.mainSetionDiv}>
                    <div className={style.mainSectionHeading}> 
                        <h1 className={style.headingDiv}> Api Fatch Api Intigration In Js</h1>
                    </div>

                    {loading ? (
                    <div className={style.loadingData}>
                    <h1>Loading...</h1>
                </div>
                ) : 
                (data.map((item) => (
                <div className={style.formMthodDiv} key={item.id}>

                    <Form>
                    <label>UserId :</label><br />
                    <Input className={style.inputStye} type="text" value={item.id}  /><br />

                    <label>Name :</label><br />
                    <Input type="text" value={item.firstName}  /><br />

                    <label>Email :</label><br />
                    <Input type="text" value={item.email}  /><br />

                    <label>Age :</label><br />
                    <Input type="text" value={item.age}  /><br />

                    <label>Contect :</label><br />
                    <Input type="text" value={item.contactNumber}  /><br />

                    <label>Address :</label><br />
                    <Input type="text" value={item.address}  /><br />

                    <label>Image Url :</label><br />
                    <Input type="text" value={item.imageUrl}  /><br />

                    <label>Date :</label><br />
                    <Input type="text" value={item.dob}  /><br />

                    <label>Salary :</label><br />
                    <Input type="text" value={item.salary}  /><br /><br />           

                    <Input type="submit" value="Update" />

                    <hr />
                
                    </Form>
                </div>
        )
        )
        )
        }


            </div>
        </>
    )
}

export default about
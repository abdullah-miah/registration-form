import React, { useState } from 'react';
import { Formik,Form,Field } from 'formik';
const Registration = () => {
 
    const [dataes, setData] = useState([]);
    const [newData, setNewData]=useState([])
    console.log('hello', dataes)
    const fromdata =(values)=>{
        let newFromData =[...dataes,values]
        setData(newFromData)
    }
    return (
        <div>
            <h1 className='text-center text-2xl'>Registration</h1>
            <h1>Personal Details</h1>
            <Formik initialValues={{
                name:"", 
                phone: "", 
                date: "",
                sex:"",
                id:"",
                govtId:"",
                
            }} onSubmit={fromdata}>
    
            <Form>
                <div>
                    <div>
                    <label>Name *</label>
                <Field className="input"
                 name="name" type ="text" placeholder="Enter name"></Field>
                <br/>
                <br/>
                <label>Mobile</label>
                <Field className="input" placeholder="Enter Mobile" name="phone" type ="text"></Field>
                <br/>
                <br/>
                    </div>
                    <div>
                    <label>Date of Birth or</label>
                    <p>age</p>
                <Field className="input" placeholder="Enter Mobile" name="date" type ="date"></Field>
                <br/>
                <br/>
                <label>sex</label>
                <Field className="input"  name="sex" as ="select">
                    <option value='Enter sex'>Enter sex</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Others'>Others</option>
                </Field>
                <br/>
                <br/>
                <label>Govt Issued Id</label>
                <Field className="input"  name="id" as ="select">
                    <option value='NID'>NID</option>
                    <option value='ID1'>ID1</option>
                    <option value='ID2'>ID2</option>
                    <option value='ID3'>ID3</option>
                </Field>
                <Field className="input" placeholder="Enter Govt Id" name="govtId" type ="text"></Field>
                    </div>
                </div>
                <br/>
                <br/>
                <button type='submit'>Submit</button>
            </Form>
            </Formik> 
        </div>
    );
};

export default Registration;
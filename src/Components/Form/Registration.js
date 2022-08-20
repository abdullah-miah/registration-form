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
                gurdian:"",
                GurdianName:"",
                email:"",
                emargencyNO:"",
                address:"",
                country: "India",
                state: "",
                city:"",
                pincode:"",
                occupation:"",
                religion:"",
                marrid:"",
                blood:"",
                nationality:"India"
                
            }} onSubmit={fromdata}>
    
            <Form>
                <div>
                <div className='flex gap-4'>
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
                {/* Contact Details */}

               <div className='flex' >
                <h1>Contact Details</h1>
                <br/>
               <div>
                   <label>Gurdian Details</label> 
                   <Field className="input"  name="gurdian" as ="select">
                    <option value='Mother'>Mother</option>
                    <option value='Father'>Father</option>
                    <option value='Sister'>Sister</option>
                </Field>
                <Field className="input" placeholder="Enter Gurdain Name" name="GurdianName" type ="text"></Field>
                </div>
                <div>
                    <label>Email</label>
                    <Field className="input" placeholder="Enter Email" name="email" type ="email"></Field>
                    <label>Emergencey Contact Number</label>
                    <Field className="input" placeholder="Enter Emargency No" name="emargencyNO" type ="text"></Field>
                </div>
               </div>
               {/* Address Details */}
               <div>
                <h1>Address Details</h1>
                <div className='flex'>
                    <div>
                        <label>Address</label>
                        <Field className="input" placeholder="Enter Address" name="address" type ="text"></Field>
                        <br/>
                        <label>Country</label>
                        <Field className="input" placeholder="Enter Counter" name="country" type ="text"></Field>
                        <br/>
                    </div>
                    <div>
                        <label>State</label>
                        <Field className="input"  name="state" as="select">
                        <option value='State"'>State</option>
                    <option value='Kolkata"'>Kolkata</option>
                    <option value='Kolkata"'>Kolkata</option>
                    <option value='Kolkata"'>Kolkata</option>
                </Field>
                <label>City</label>
                <Field className="input"  name="city" as="select">
                <option value='City"'>City</option>
                    <option value='Kolkata"'>Kolkata</option>
                    <option value='Kolkata"'>Kolkata</option>
                    <option value='Kolkata"'>Kolkata</option>
                </Field>
                <br/>
                <label>Pincode</label>
                <Field className="input" placeholder="Enter Pincode" name="pincode" type ="text"></Field>
                    </div>
                </div>

               </div>
               <div>
                {/* other Details */}
                <h1>Other Details</h1>
                <label>Occupation</label>
                <Field className="input" placeholder="Enter Occupation" name="occupation" type ="text"></Field>
                <label>Religion</label>
                <Field className="input"  name="religion" as="select">
                    <option value='Islam"'>Islam</option>
                    <option value='Hindu"'>Hindu</option>
                    <option value='khristan"'>khristan</option>
                    <option value='Other"'>Ohter</option>
                </Field>
                <label>Merital Status</label>
                <Field className="input"  name="marrid" as="select">
                    <option value='Marrid"'>Marrid</option>
                    <option value='Unmarid"'>Unmarid</option>
                    <option value='Divorce"'>Divorce</option>
                    <option value='Other"'>Ohter</option>
                </Field>
                <label>Blood Group</label>
                <Field className="input"  name="blood" as="select">
                     <option value='Group"'>Group</option>
                    <option value='A+"'>A+</option>
                    <option value='O+"'>O+</option>
                    <option value='AB+"'>AB+</option>
                    <option value='B+"'>B+</option>
                </Field>
                <br/>
                <label>Nationality</label>
                <Field className="input" name="nationality" type="text"></Field>
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
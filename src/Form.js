import React,{useState} from 'react'

const Form = () => {
    const [name,setChangename] = useState('')
    const [lastName,setChangelast] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [city,setcity] = useState('')
    
    const changefirstName = (e) => {
        setChangename(e.target.value)
    }
    
    const changeLastName = (e) => {
        setChangelast(e.target.value)
    }
    const changeemail = (e) => {
        setemail(e.target.value)
    }
    const changepassword = (e) => {
        setpassword(e.target.value)
    }
    const changecity = (e) => {
        setcity(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(...name,lastName,email,password,city)
    }

  return (
      <div className="wrapper">
    <div className='container'>
        <div className="row">
            <h1>Form validation</h1>
          <div className="col-xs-12 col-md-12 " onSubmit={submitHandler}> 
    <form className="needs-validation" novalidate>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="First name"  required  onChange={changeLastName} value={lastName}/>
     
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name"  required onChange={changefirstName} value={name}/>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationCustom02">enter email</label>
      <input type="email" className="form-control" id="validationCustom03" placeholder="email"  required onChange={changeemail} value={email}/>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationCustom02">enter password</label>
      <input type="password" className="form-control" id="validationCustom04" placeholder="password"  required onChange={changepassword} value={password}/>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="City" required onChange={changecity} value={city} />
    </div>
  </div>
  <button className="btn btn-warning" type="submit">Submit form</button>
</form>
    </div> 
    </div>
    </div>
    </div> 
  )
}

export default Form
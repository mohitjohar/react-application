import React, {useState, useEffect } from 'react'
import DataList from '../components/apicrud/DateList'
import CreateForm from '../components/apicrud/CreateForm'
import UpdateForm from '../components/apicrud/UpdateForm'
import Loader from '../components/apicrud/Loader'
import Paginationl from '../components/Paginationl'

const APICrud = () =>{
  
    //This state used for toggling a CreateForm component
    const [toggle, setToggle] = useState(false)
    
    //This state used for toggling a UpdateForm component
    const [toggle1, setToggle1] = useState(false)

    //This state used for toggling a loader
    const [loadertoggle, setLoadertoggle] = useState(true)
    
    // This state used for get id from parent to child components(UpdateForm component and Datalist component),
    // this state work as global variable
    const [id, setId] = useState(null)
    
    //form fields
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")

    //form alerts
    const [agea, setAgea] = useState("")
    const [salarya, setSalarya] = useState("")
  
    //This  is used for store user data list  
    const [data, setData] = useState("")

    //filtered data
    const [tdata, setTdata] = useState("")
    const maxbtn = 5
    const maxitem = 100

    //validation
    if(age>110){
        setAgea("Please Enter valid Age")
        setAge("");
      }
    
      if(salary>10000000){
        setSalarya("Please Enter valid Salary")
        setSalary("");
      }


      //fetch all data using this function
    const apiDatashow = () =>{
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(results=>{return results.json()})
    .then(data1=>{
        setData(data1)
        setTdata(data1.slice(0,maxitem))
        console.log("Data List",tdata)
        setLoadertoggle(false)
    })
    }

    //auto reload
    useEffect(()=>{
        apiDatashow();
    },[])
    // [] is used to prevent fron infinite loop
    
    //show create form
    const addItem=()=>{
        setToggle(!toggle)
    }
      

return (
<div className="container">
<div className="row">
<div className="col-md-8"><div className="overflow-auto">
<DataList tdata={tdata} name={name} setName={setName} setLoadertoggle={setLoadertoggle} age={age} setAge={setAge} salary={salary} setSalary={setSalary} data={data} apiDatashow={apiDatashow} toggle1={toggle1} setToggle1={setToggle1} setId={setId}/></div>
<div className="position-absuform">{toggle1 && <UpdateForm salarya={salarya} agea={agea} name={name} setLoadertoggle={setLoadertoggle} setName={setName} age={age} setAge={setAge} salary={salary} setSalary={setSalary} apiDatashow={apiDatashow} toggle1={toggle1} setToggle1={setToggle1} id={id}/>}</div>
</div>
    <div className="col-md-4">
 {/* if 'toggle' variable is true then show 'create form' else null */}
 {/* {toggle ?<CreateForm/>:null} */}
 {/* if both variables(toggle,CreateForm) true then show create form */}
 {toggle && <CreateForm name={name} setName={setName} age={age} setAge={setAge} salary={salary} setSalary={setSalary} salarya={salarya} agea={agea} apiDatashow={apiDatashow} setToggle={setToggle} setLoadertoggle={setLoadertoggle} />}
    {loadertoggle && <Loader/>}
    </div>
    <div className="col-md-8">
    <Paginationl
data={data}
maxitem={maxitem}
maxbtn={maxbtn}
setFilterarr={setTdata}
/>
    </div>
    <div className="col-md-4 text-right"><button onClick={addItem} className="btn btn-primary">Add Item</button></div>
</div>
</div>

)
}

export default APICrud;
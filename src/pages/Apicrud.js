import React, {useState, useEffect } from 'react';
import DataList from '../components/apicrud/DateList'
import CreateForm from '../components/apicrud/CreateForm'
import UpdateForm from '../components/apicrud/UpdateForm'
import Loader from '../components/apicrud/Loader'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

const APICrud = () =>{
    
    //Pagination constant
    const [currentPage, setCurrentpage] = useState("")
      const changeCurrentPage = numPage => {
        // this.setState({ currentPage: numPage });
        setCurrentpage(numPage)
        //fetch a data
        //or update a query to get data
      }
    
    
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
    const [agea, setAgea] = useState("")

    //form alerts
    const [salary, setSalary] = useState("")
    const [salarya, setSalarya] = useState("")
  
    
    //This  is used for store user data list  
    const [data, setData] = useState("")

    //filtered data
    const pagenumber = 1
    //pagecount = number of items in single page
    const pagecount = 10
    const [tdata, setTdata] = useState(data.slice(pagenumber ,pagecount))


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
        console.log("Data List", data1)
        setTdata(data1.slice(0 ,pagecount))
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


      // Pagination Function
      const paginate = (array, page_size, page_number) => {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
      }


      //pagination steps filter
    const step1 =(s) =>{
        setTdata(paginate(data,pagecount,s))
     }

     //Paginate page nav
     var ia = 0
     var paginatepage = []
     data && data.map((d, i)=>{
         if(i%pagecount==0){
             ia = ia+1
             paginatepage.push(i)
             }
             else{
                 return ""
             }
         })




         const pagenav1 = paginatepage.map((d, i)=>{
             return <li className="nav-item"><button class="btn btn-success" onClick={()=>step1(i+1)}>{i+1}</button></li>
         })


    //Paginate pagination nav
     var ia = 0
     var paginatenav = []
     paginatepage && paginatepage.map((d, i)=>{
         if(i%pagecount==0){
             ia = ia+1
             paginatenav.push(i)
             }
             else{
                 return ""
             }
         })

        const Next =() =>{
            
        }

        const Prev = () =>{

        }


      

return (
<div className="container">
<div className="row">
<div className="col-md-8"><div className="overflow-auto">
<DataList tdata={tdata} name={name} setName={setName} setLoadertoggle={setLoadertoggle} age={age} setAge={setAge} salary={salary} setSalary={setSalary} data={data} apiDatashow={apiDatashow} toggle1={toggle1} setToggle1={setToggle1} setId={setId}/></div>
<div className="position-absuform">{toggle1 && <UpdateForm salarya={salarya} agea={agea} name={name} setLoadertoggle={setLoadertoggle} setName={setName} age={age} setAge={setAge} salary={salary} setSalary={setSalary} apiDatashow={apiDatashow} toggle1={toggle1} setToggle1={setToggle1} id={id}/>}</div>
<Pagination
          currentPage={currentPage}
          totalPages={10}
          changeCurrentPage={changeCurrentPage}
          theme="square-fill"
        />
<ul className="pagination">
                {pagenav1}
            </ul>
            
</div>
    <div className="col-md-4">
 {/* if 'toggle' variable is true then show 'create form' else null */}
 {/* {toggle ?<CreateForm/>:null} */}
 {/* if both variables(toggle,CreateForm) true then show create form */}
 {toggle && <CreateForm name={name} setName={setName} age={age} setAge={setAge} salary={salary} setSalary={setSalary} salarya={salarya} agea={agea} apiDatashow={apiDatashow} setToggle={setToggle} setLoadertoggle={setLoadertoggle} />}
    {loadertoggle && <Loader/>}
    </div>
    <div className="col-md-7"></div>
    <div className="col-md-5 text-right"><button onClick={addItem} className="btn btn-primary">Add Item</button></div>
</div>
</div>

)
}

export default APICrud;
/* Pagination Component 
-------------------------------------------------*/
import React,{useState, useEffect} from 'react';

const Pagination = () =>{


const dataa = [
    {   
        id: 1,
        name:"mohit",
        age: 22,
        salary: 600000
    },
    {
        id: 2,
        name:"mohifdt",
        age: 22,
        salary: 600000
    },
    {
        id: 3,
        name:"mogfghit",
        age: 22,
        salary: 600000
    },
    {
        id: 4,
        name:"mohigfgt",
        age: 22,
        salary: 600000
    },
    {
        id: 5,
        name:"mogfgfdhit",
        age: 22,
        salary: 600000
    },
    {
        id: 6,
        name:"mohdgit",
        age: 22,
        salary: 600000
    },
    {
        id: 7,
        name:"mofghit",
        age: 22,
        salary: 600000
    },
    {
        id: 8,
        name:"dddmohit",
        age: 22,
        salary: 600000
    },
    {
        id: 9,
        name:"msdohit",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    }
]

//all data
const [data, setData] = useState(dataa)

//filtered data
const singleites = 3 // number of items in single page
const [tdata, setTdata] = useState("")

       // Pagination Function
       const paginate = (array, page_size, page_number) => {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
      }




    const apiDatashow = () =>{  
        //all data
        setData(dataa)
            //filtered data
            setTdata(data.slice(0,singleites))
        }
    
        useEffect(()=>{
            apiDatashow();
        },[])
        // [] is used to prevent fron infinite loop

    
    const step1 =(s) =>{
       setTdata(paginate(data,singleites,s))
    }

 //Paginate page nav
 var ia = 0
 var paginatepage = []
 data && data.map((d, i)=>{
     if(i%singleites==0){
         ia = ia+1
         paginatepage.push(i+1)
         }
         else{
             return ""
         }
     })




     const pagenav1 = paginatepage.map((d, i)=>{
         return <li className="nav-item"><button onClick={()=>step1(i+1)}>{i+1}</button></li>
     })


//Paginate pagination nav
 var ia = 0
 var paginatenav = []
 paginatepage && paginatepage.map((d, i)=>{
     if(i%singleites==0){
         ia = ia+1
         paginatenav.push(i+1)
         }
         else{
             return ""
         }
     })


    //Filtered data    
   const tempdata = tdata && tdata.map((d, i)=>{
    return (
        <tr>
        <td>{d.id}</td>
        <td className="name">{d.name}</td>
        <td>{d.age}</td>
        <td>{d.salary}</td>
        </tr>
        )
    })


    var pagenav12
    const Next = li =>{
       pagenav12 = paginatepage.map((d, i)=>{
            if(i>=li){
            return ""
            }
            else{
                return <li className="nav-item"><button onClick={()=>step1(i+1)}>{i+1}</button></li>
            }
        })
    }

    const paginatenavdata = paginatepage.map((p)=>{
        return <div className="btn btn-primary">{p}</div>
    }) 

    return (
        <div className="container">
            <h5>Data 1</h5>
            <table className="datalist">
            <tr className="static-top">
                <th>Id</th>
                <th className="name">Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
    {tempdata}


    </table>
            <h5>Pagination</h5>
            <ul className="pagination">
                {pagenav1}
            </ul>
            <div className="paginationnavdata">
                {paginatenavdata}
                </div>
                    <div>
                <button className="btn btn-primary" onClick={Next(2)}>Next</button>
                {pagenav12}
                </div>
        </div>
    )
}

export default Pagination;
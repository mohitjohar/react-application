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
const maxitem = 3 // number of items in single page
const [tdata, setTdata] = useState("")
const [fnav, setFnav] = useState(0)
const [nxps , setNxps] = useState(0)

       // Pagination Function
       const paginate = (array, page_size, page_number) => {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
      }




    const apiDatashow = () =>{  
        //all data
        setData(dataa)
            //filtered data
            setTdata(data.slice(0,maxitem))
        }
    
        useEffect(()=>{
            apiDatashow();
        },[])
        // [] is used to prevent fron infinite loop

    
    const step1 =(s) =>{
       setTdata(paginate(data,maxitem,s))
    }

 //using this function get only integer value if reminder is not zero then incerese to 1
 const divider = (dl, max) =>{
         if(dl%max==0){
            return (dl/max)
         }
         else{
            return parseInt(dl/max)+1;
         }
     }

    var pagedvd = divider(data.length,maxitem)

     var paginatepage = []
    for(var i= 1;i<=pagedvd;i++){
        paginatepage.push(i)         
    }

    var navdvd = divider(paginatepage.length, 2)

    const Next = () =>{
        if(nxps>=navdvd){
            setNxps(1)
            setFnav(paginatepage.slice(0,2))
          }
          else{
            setNxps(nxps+1)
            setFnav(paginatepage.slice(nxps*2,(nxps*2)+2))
          }
    }

    const Prev = () =>{
        if(nxps<=0){
            setNxps(1)
            setFnav(paginatepage.slice(0,2))
          }
          else{
            setNxps(nxps-1)
            setFnav(paginatepage.slice(nxps*2,(nxps*2)+2))
          }
    }

    console.log("Next Prev Counter", nxps, " ", fnav)


     const pagenav = fnav && fnav.map((d, i)=>{
         return <li className="nav-item"><button className="btn btn-success" onClick={()=>step1(d)}>{d}</button></li>
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
                {pagenav}
            </ul>
            page divider{pagedvd}<br/>
            nav divider{navdvd}
            <button className="btn btn-primary" onClick={()=>Next()}>Next</button>
            <button className="btn btn-primary" onClick={()=>Prev()}>Prev</button>
        </div>
    )
}

export default Pagination;
/* Pagination Component 
-------------------------------------------------*/
import React,{useState, useEffect} from 'react'
import Paginationl from '../components/Paginationl'

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
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
        age: 22,
        salary: 600000
    },
    {
        id: 10,
        name:"mohifffft",
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

const [tdata, setTdata] = useState("")

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
            <Paginationl 
            data={dataa}
            setFilterarr={setTdata}
            maxitem={3} 
            maxbtn={2} 
            />
        </div>
    )
}

export default Pagination;
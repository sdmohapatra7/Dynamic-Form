import {useState,useEffect} from 'react'

export default function Form() {
    const[name,setName]=useState('');
    const[lastName,setLastName] =useState('');

    const handleChange =(e)=>{
        setName(e.target.value)
    }

    useEffect(()=>{
        document.title = name+" "+lastName;
    },[name,lastName]);

    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log('Window Width',window.innerWidth)
        },1000);
        return(clearInterval(timer));
    });
    return (
        <>
        <div className='section'>
            <div>
                <label htmlFor='name'>Name :</label><br/>
                <input className='input' name='name' id='name' value={name} onChange={handleChange} placeholder='Enter Name'/>
            </div>   
            <hr/>
            <div>
                <label htmlFor='lastName'>Last Name :</label><br/>
                <input className='input' name='lastName' id='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Last Name'/>
            </div>
        </div>
        <h2>Hello, {name+ ' ' +lastName}</h2>
        </>
    )
}

import React from 'react';
import{useState} from 'react';
import '../styles/contact.css';

function Contact(){
    const [product, setProduct] = useState("");
    function handleChange(event){
        setProduct(event.target.value)

    }
    function Submit(){
        alert('Padgai thand?');
    }
    return(
        <>
        <div classNAme="Hello">
            <h1>Contact</h1>
        </div>
        <div className="form">
            <form >
                <label className="lable">Contact US</label> <br /><br/>
                <input type="text" id='name' placeholder="Enter Name BKL" required />
                <input type="email" id='mail' placeholder='Email Dall bkl' required />
                <div className='selectPro'>
                    <h3>Select Product type to enqure about</h3>
                <select value={product} onChange={handleChange} required>
                    <option value=""></option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electic">Electric</option>
                    <option value="Buildmat">Building Material</option>
                </select> 
                </div>    
                <input type='text' id='content' placeholder='tell us about it' />   
                <button onClick={Submit}>Submit</button>
            </form>
        </div>
        </> 
    );
}

export default Contact;
import React from "react";
import './time.css'
import {useForm} from 'react-hook-form'
import icon from './../icon.svg'

const Timer=()=>{
   
    const onSubmit=(data)=>{
        console.log(data)
       
    }
    const {handleSubmit,register}=useForm();

    function checkDate(){
        const dae=document.getElementById("date").value;
        const month=document.getElementById("month").value;
        const year=document.getElementById("year").value;
        const dateactu=new Date()
        const nbj=[31,28,31,30,31,30,31,31,30,31,30,31]
        var d=dateactu.getDate()
        var m=dateactu.getMonth()+2
        let y=dateactu.getFullYear()
        if(dae===""){
            document.getElementById("Date").style.color="red"
            document.getElementById("date").style.borderColor="red"
            document.getElementById("p1").innerHTML="This field is required"
            document.getElementById('d').innerHTML="--"
            document.getElementById('y').innerHTML="--"
            document.getElementById('m').innerHTML="--"
            return false;
        }
        if(dae<1 || dae>nbj[m] || (dae>d && month===m && year===y)){
            document.getElementById("Date").style.color="red"
            document.getElementById("date").style.borderColor="red"
            document.getElementById("p1").innerHTML="Must be a valid date"
            document.getElementById('d').innerHTML="--"
            document.getElementById('y').innerHTML="--"
            document.getElementById('m').innerHTML="--"
            return false;
        }
       
        else{
            document.getElementById("Date").style.color="hsl(0, 1%, 44%)"
            document.getElementById("date").style.borderColor="hsl(0, 1%, 44%)"
            document.getElementById("p1").innerHTML=""
            return true;
    }}


    function checkYear(){
        const dae=document.getElementById("date").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;
    const dateactu=new Date()
    var d=dateactu.getDate()
    var m=dateactu.getMonth()+2
    let y=dateactu.getFullYear()
        if(year===""){
            document.getElementById("Year").style.color="red"
            document.getElementById("year").style.borderColor="red"
            document.getElementById("p2").innerHTML="This field is required"
            document.getElementById('d').innerHTML="--"
            document.getElementById('y').innerHTML="--"
            document.getElementById('m').innerHTML="--"
            return false;
        }
        else if((year>y) || (year===y && month===m && dae>d) || (year===y && month>m)){
            document.getElementById("Year").style.color="red"
            document.getElementById("year").style.borderColor="red"
            document.getElementById("p2").innerHTML="Must be a valid date"
            document.getElementById('d').innerHTML="--"
            document.getElementById('y').innerHTML="--"
            document.getElementById('m').innerHTML="--"
            return false;
        }else {
            document.getElementById("Year").style.color="hsl(0, 1%, 44%)"
            document.getElementById("year").style.borderColor="hsl(0, 1%, 44%)"
            document.getElementById("p2").innerHTML=""
            return true;
        }

    }

    function checkMonth(){
        const month=document.getElementById("month").value;

        if(month===""){

            document.getElementById("Month").style.color="red"
            document.getElementById("month").style.borderColor="red"
            document.getElementById("p3").innerHTML="This field is required"    
            document.getElementById('d').innerHTML="--"
            document.getElementById('y').innerHTML="--"
            document.getElementById('m').innerHTML="--"   
            return false;
           
        }else if(month<0  || month>12){
            document.getElementById("Month").style.color="red"
            document.getElementById("month").style.borderColor="red"
            document.getElementById("p3").innerHTML="This field is required"
            document.getElementById('d').innerHTML="--"
            document.getElementById('y').innerHTML="--"
            document.getElementById('m').innerHTML="--"
             return false;
        }else{
            document.getElementById("Month").style.color="hsl(0, 1%, 44%)"
            document.getElementById("month").style.borderColor="hsl(0, 1%, 44%)"
            document.getElementById("p3").innerHTML="" 
            return true;
        }
    }


    function AgeCalc(){
        const dae=document.getElementById("date").value;
        const month=document.getElementById("month").value;
        const year=document.getElementById("year").value;
        const dateactu=new Date()
        const nbj=[31,28,31,30,31,30,31,31,30,31,30,31]
        var d=dateactu.getDate()
        var m=dateactu.getMonth()+1
        let y=dateactu.getFullYear()
       
        

           if(d<dae){
                d = d +nbj[m-1]
                m=m-1

            }

            if(month>m){
                y=y-1
                m=m+12
            }
        
            var jj= d-dae
            var année=y-year
            var mois=m-month
            document.getElementById('d').innerHTML=jj
            document.getElementById('y').innerHTML=année
            document.getElementById('m').innerHTML=mois

            
        
           
    }  
   
   

    function display(){
        checkDate();
        checkMonth();
        checkYear();
        if(checkDate() && checkMonth() && checkYear()){
            AgeCalc()
        }

    }
    

    return(
    <div className="all">
      <form className="big"  onSubmit={handleSubmit(onSubmit)}>

        <div className="containers" style={{left: `60px`}} > 
           <label id="Date">DAY</label>
           <input id="date" className="input" type="number" autoComplete="none" required placeholder="DD" {...register("DAY",{ required : true})}></input>
           <p id="p1" style={{left: `8px`}}></p>

        </div>
        
     

        <div className="containers" style={{left: `280px`}}> 
           <label id="Month">MONTH</label>
           <input  id="month" className="input" type="number" autoComplete="none" required placeholder="MM" {...register("MONTH",{ required : true})}></input>
           <p id="p2" ></p>
        </div>
        

        <div className="containers" style={{left: `525px`}}>
           <label id="Year">YEAR</label>
           <input id="year" className="input" type="number" autoComplete="none" required placeholder="YYYY" {...register("YEAR",{ required : true})}></input>
           <p id="p3" style={{left:`-240px`}}></p>

        </div>
        
        <div className="line"></div>
        <button className="circle" type="submit"><img  className="img" src={icon} alt="icon"  onSubmit={handleSubmit(onSubmit)} onClick={display}/></button>

        <div className="results" style={{top: `190px`}}>
            <h1 id="y"></h1>
            <h2>years</h2>
        </div>
        <div className="results" style={{top: `290px`}}>
            <h1 id="m"></h1>
            <h2>months</h2>
        </div>
        <div className="results" style={{top: `390px`}}>
            <h1 id="d"></h1>
            <h2>days</h2>
        </div>
      </form>  
    </div>
    );
}

export default Timer;
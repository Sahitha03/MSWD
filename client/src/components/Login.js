import '../App.css'
import { useState } from 'react';
import axios from 'axios';
import Page1 from './Page1';



function Login(){
  const [result,setResult] =useState(null);
  const [un,setUn] = useState(null);
    function Handle(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setUn(data.get("t1"));
        const un = data.get("t1");
        const pw = data.get("pw");
        console.log(un+" --- "+pw);

        axios.get('http://localhost:8081/check',{params: {
          un: un,
          pw: pw
        }}).then((response) => {
          console.log(response.data);
          setResult(response.data);
        })

        
      }
if(result === null || result === "fail") {
return      (<div className='App-body'>   
             <div className='App-login'>  
               <form onSubmit={Handle}>
                <center><h3 style={{border:"2px solid black"}}>LOGIN HERE</h3></center>
                Username:<input type="text" name="t1"/><br/>
                Password:<input typr="password" name="pw"/><br/>
                <center><input type="submit" value="login"/></center>
              </form>
              </div>
              </div>
                
            );
      
}
else{
  return(
    <div>
      <Page1 un={un} result={result}/>
    </div>
  );
}

}

export default Login;
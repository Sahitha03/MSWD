import React from "react";
import axios from "axios";
import { useState } from "react";
function Ex4(){
const [search, setSearch] = useState(null);
const [res, setRes] = useState(null);

    function Handle(event){
        event.preventDefault();
        const data=new FormData(event.currentTarget);
        setSearch(data.get("searchbox"))
        axios.get('https://api.github.com/users/defunkt/following',{

        }).then((response)=>{
            console.log(response.data);
            setRes(response.data);
        })
    }

if(res==null){
    return (
        < div>
        <center>
            <form onSubmit={Handle}>
            <input type="text" name="searchbox"/>
            <input type="submit" value="search"/>
            </form>
            SEARCH VALUES [1,3,17,....]
            </center>    
        </div>
    );
}
else {
    return(
        <center>
        <div style={{height:"400px", width:"500px", backgroundColor:"white", margin:"30px", padding:"20px", border:"1px solid green"}}>
            <table>
            {res.map((obj)=>{
                if(obj.id == search) {
                    console.log(obj.id)
                    console.log(search)
                    return(
                        <div>
                            <table>
                            <tr><td style={{width:"180px"}}>ID:</td> <td>{obj.id}</td></tr>
                            <br/>
                            <tr><td style={{width:"180px"}}>Name:</td> <td>{obj.login}</td></tr>
                            <br/>
                            <tr><td style={{width:"180px"}}>Profile Photo:</td> <td><img src={obj.avatar_url} style={{width:"150px", height:"150px"}} /></td></tr> 
                            <br/>
                            <tr><td style={{width:"180px"}}>Web Page Link:</td> <td>{obj.html_url}</td></tr> 
                            </table>
                        </div>
                    );
                }
                return (<div></div>);
            })}
            </table>
        </div>
        </center>
    )
}


}
export default Ex4;
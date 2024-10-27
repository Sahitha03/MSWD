import logo1 from '../logo1.jpeg';
import internship from '../charan.jpg';
import '../App.css';
function App() {
  return (  
<div class="ex1">
<img src={logo1} align="left" style={{width:"55px",height:"55px"}}/>
<h5>KL Deemed to be University</h5>
<h6>Vaddeswaram,Andhrapradesh-522502</h6>
<hr color="black"/>
<img src={internship} align="center" style={{width:"120px",height:"120px"}}/>
<h5>Ch. Sai Charan</h5>
<h5>2100031680</h5>
<h5>Student</h5>
</div>    
);
}
export default App;
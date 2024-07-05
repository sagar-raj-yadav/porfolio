
import img from '../../assets/resume.png'
import './resume.css';

const Resume = () => {
  return (
   <div id="resume">
   <h1 style={{ margin:"0 0 0 45%",color:"skyblue",fontSize:"30px"}}>Resume</h1>
    <img className="resume" src={img} />
   </div>
  )
}

export default Resume
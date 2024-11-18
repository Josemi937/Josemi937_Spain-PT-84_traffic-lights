import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
    const [ color, setColor] = useState("null");
	const [showPurple, setShowPurple] = useState(false);
	

	const addPurpleLight = () => {
		setShowPurple((prev => !prev)); 
	};
 
     return (
         <div className="container">
             
             <div className = "traffic-light">
                 <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow" : "" )}></div>
                 <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow" : "" )}></div>
				 {showPurple && (
				<div onClick={() => setColor("purple")} className={"light purple" + (color === "purple" ? " glow" : "" )}></div>
				)}
			</div>
			<div className="button">
				<button onClick={addPurpleLight}>Purple Light</button>
			</div>
		</div>
	);
};

export default Home;
         
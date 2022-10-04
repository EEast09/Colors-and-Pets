
import React, {useState} from 'react';
import logo from './logo.svg';
import './ArraysEx.css';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';




function ArraysEx() {

  const [color, setColor] = useState<string[]>([])
const colors =["pink","green","gray"];
  
  
  const onClick = () =>{
    setColor(prev =>{
    const addColor = prev.slice(0);
    addColor.push("yellow");
    return addColor;   
    })
  
  }
  
  return (
    <div className="ArraysEx"> 

    <h1>Arrays Exercise</h1>
    <h2>Colors</h2>
    
    <ol>
    {colors.map(color =>
    <li key={color}>{color}</li>)}
    
    
</ol>
      <button onClick={() => setColor }>Add Yellow</button>


     
      
    </div>
  );
}

export default ArraysEx;

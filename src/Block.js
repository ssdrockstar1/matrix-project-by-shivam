import { useEffect, useState } from 'react';
import './Block.css';

function Block({blockId, notifyRow, notifyBlock}) {

const [colorChange, setColorChange] = useState(false);

const handleClick = () =>{
 setColorChange(true);
 notifyRow(blockId);
 //console.log(blockId);
}

useEffect(()=>{
    if(notifyBlock==blockId){
        setColorChange(false);
    }
}, [notifyBlock])

  return (
    <div className= {colorChange? "redBlock" : "blueBlock"} onClick={handleClick} id={blockId}>
    </div>
  );
}

export default Block;

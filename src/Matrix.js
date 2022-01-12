import './Matrix.css';
import BlockRow from './BlocksRow';
import { useEffect, useState } from 'react';

function Matrix() {

    const [count, setCount] = useState(1);
    const [firstBlock, setFirstBlock] = useState('');
    const [secondBlock, setSecondBlock] = useState('');
    const [blockId, setBlockId] = useState(0);
    const [rowId, setRowId] = useState(0);

    const handleNotifyMatrix = (blockId, rowId) =>{
        setCount(count+1);
        setBlockId(blockId);
        setRowId(rowId);
        if(count==1){
        setFirstBlock(blockId+''+rowId);
        }
        //console.log(blockId+''+rowId);
    }

    useEffect(()=>{
        if(count>=3){
            setFirstBlock(secondBlock);
            setSecondBlock(blockId+''+rowId);
        }
    }, [count])

  return (
    <div className="matrix">
        <BlockRow rowId={1} notifyMatrix = {handleNotifyMatrix} firstBlock={firstBlock}/>
        <BlockRow rowId={2} notifyMatrix = {handleNotifyMatrix} firstBlock={firstBlock}/>
        <BlockRow rowId={3} notifyMatrix = {handleNotifyMatrix} firstBlock={firstBlock}/>
        <BlockRow rowId={4} notifyMatrix = {handleNotifyMatrix} firstBlock={firstBlock}/>
    </div>
  );
}

export default Matrix;

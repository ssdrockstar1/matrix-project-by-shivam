import './BlocksRow.css';
import Block from './Block';
import { useEffect, useState } from 'react';

function BlockRow({rowId, notifyMatrix, firstBlock}) {

    const [notifyBlockNumber, setNotifyBlockNumber] = useState('');
    
    const handleNotifyRow = (blockId)=>{
        notifyMatrix(blockId, rowId);
        //console.log(rowId);
    }

    useEffect(()=>{
        const firstBlockRow = firstBlock.substring(1);
        if(firstBlockRow==rowId){
            setNotifyBlockNumber(firstBlock.substring(0,1));
        }
    }, [firstBlock])

  return (
    <div className="blocksRow" id={rowId}>
        <Block blockId={1} notifyRow={handleNotifyRow} notifyBlock={notifyBlockNumber}/>
        <Block blockId={2} notifyRow={handleNotifyRow} notifyBlock={notifyBlockNumber}/>
        <Block blockId={3} notifyRow={handleNotifyRow} notifyBlock={notifyBlockNumber}/>
        <Block blockId={4} notifyRow={handleNotifyRow} notifyBlock={notifyBlockNumber}/>
    </div>
  );
}

export default BlockRow;

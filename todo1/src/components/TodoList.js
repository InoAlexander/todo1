import React from 'react'
import TodoMap from './TodoMap';

export default function TodoList({dataList}) {
    // mapping over the todolist to display data to the client file which is todomap 
    //have to add a key or react will re render everything in the list set it to a unique element for that array that you are mapping over
    return (
            dataList.map(dataMap => {
                return <TodoMap key ={ dataMap.id} dataMap = {dataMap} />
            } )
        
    )
}
  
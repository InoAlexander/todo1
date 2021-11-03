import React from 'react'

export default function TodoMap({ dataMap }) {
    //code for showing the checkbox complete when the task ghas been completed will be between the label tags
    return (
        <div>
            <label>
                <input type="checkbox" checked={dataMap.complete} />
                  {dataMap.name}
            </label>

          
        </div>
    )
}

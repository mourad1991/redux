import React  from 'react'

const CheckBox = ({setDone,setUndone}) => {
    

    return (
        <div style={{display:'flex',alignItem:'center', justifyContent:'center'}}>
            <div style={{marginRight:'10px'}}>
            <input  type='checkbox' onChange={(e)=>setDone(e.target.checked)}/>
            <label style={{marginLeft:'5px'}}>isDone</label>
            </div>
            <div>
            <input  type='checkbox' onChange={(e)=>setUndone(e.target.checked)}/>
            <label style={{marginLeft:'5px'}}>unDone</label>
            </div>
        </div>
    )
}

export default CheckBox


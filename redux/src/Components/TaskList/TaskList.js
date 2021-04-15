import React from 'react'
import  {useSelector} from 'react-redux'
import Task from '../Task/Task'


const TaskList = ({done, undone}) => {
    const list = useSelector(state => state.reducersTask.list)

    console.log(list)
    

    return (   <div>
 { done === undone ? list.map ( (el,i) => <Task key={i} el={el}/> ) 
: done ? list.filter ( (el)=> el.isDone ).map((el,i)=> <Task key={i} el={el}/>)
: list.filter ((el)=>el.isDone === false).map((el,i)=> <Task key={i}  el={el}/>
) }


       
        </div>
    )}

export default TaskList

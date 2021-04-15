import React from 'react'
import {ListGroup,Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {deleteTask,doneTask} from '../../JS/actions/actionsTask'
import EditTask from '../TaskList/EditTask'

const Task = ({el}) => {
    
    const dispatch = useDispatch();
    return (
        <div>
            <ListGroup >
            <ListGroup.Item   style={{display: "flex", justifyContent: "space-between", margin:'20px',alignItem:'center' }}> 
                <p style={{textDecoration: el.isDone ? 'line-through':'none'}}>   {el.text}  </p>
                <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-around", width: "20%",}}>
                   <Button variant="outline-secondary"  onClick={() => dispatch(doneTask(el.id))}>{el.isDone?"unDone": "isDone"}</Button>
                   <EditTask el={el}/>
                   <Button variant="danger"  onClick={() => dispatch(deleteTask(el.id))}>Delete</Button>
                </div>
            </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Task

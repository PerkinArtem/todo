import React from 'react'
import { CloseButton, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap'

function Todo({todo, deleteTodo}) {
    return (

        <ListGroup.Item
            as="li"
            className={`d-flex justify-content-between align-items-start overlay ${todo.completed ? 'completed' : ''}`}
            role="button"
        >
            <div className="ms-2 me-auto">
                <div className="font-monospace">{todo.date}</div>
                <div className="fw-bold fs-3">{todo.title}</div>
                <div className="fs-5">{todo.descr}</div>
            </div>
            <OverlayTrigger
                placement={'top'}
                overlay={
                <Tooltip>
                    delete task
                </Tooltip>
                }
            >
                <CloseButton onClick={() => deleteTodo(todo.id)}/>
            </OverlayTrigger>
        </ListGroup.Item>
        
    )
}

export default Todo

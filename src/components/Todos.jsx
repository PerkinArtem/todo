import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Todo from './Todo'

function Todos({todos, deleteTodo, handleToggle}) {
    return (
        <div>
            <Card className="shadow-sm">
              <Card.Body>
                <ListGroup as="ol" numbered>
                {
                    todos.length ? todos.map((todo) => (
                        <Todo 
                            todo={todo} 
                            key={todo.id} 
                            deleteTodo={deleteTodo}             
                            onClick={(e) => handleToggle(e, todo.id)}
                        />
                    )) : (<div className="text-center">There are no tasks here</div>)
                }
                </ListGroup>
              </Card.Body>
            </Card>
        </div>
    )
}

export default Todos

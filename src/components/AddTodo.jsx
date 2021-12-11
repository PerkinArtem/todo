import React from "react";
import { Card, FormControl, InputGroup, Button, Alert } from "react-bootstrap";

function AddTodo({
    titleValue,
    descrValue,
    setTitleValue,
    setDescrValue,
    todos,addTodo,
    isError,
    handleKeyDown,
    deleteAllTodos}) 
    {

  return (
    <Card.Body>
      <InputGroup className="mb-2">
        <FormControl
          placeholder="Todo title"
          aria-label="Title"
          aria-describedby="Todo title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, todos, titleValue, descrValue)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Todo description"
          as="textarea"
          aria-label="Description"
          value={descrValue}
          onChange={(e) => setDescrValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, todos, titleValue, descrValue)}
        />
      </InputGroup>
        <div className="d-flex justify-content-between align-items-center">
            <Button variant="link" className={todos.length ? '' : 'disabled'}  onClick={() => deleteAllTodos()}>delete all tasks</Button>
            <Button variant="dark" size={'md'} onClick={() => addTodo(todos, titleValue, descrValue)}>Add</Button>
        </div>
      {isError && <Alert className="mt-3 text-center" variant={'danger'}>Title is required</Alert>}
    </Card.Body>
  );
}

export default AddTodo;

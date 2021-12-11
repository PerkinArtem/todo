import React, { useState } from "react";
import { Card, Col, Container, Row, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  const [titleValue, setTitleValue] = useState("");
  const [descrValue, setDescrValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false)

  const addTodo = (arr, title, descr) => {
    if (title) {
      setTodos([...arr, {
        id: Date.now(), 
        title:title, 
        descr: descr, 
        date: convertDate(new Date()),
        completed: false,
      }])
      setTitleValue('')
      setDescrValue('')
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (e, id) => {
    // e.stopImmediatePropagation();
    // setTodos([
    //   ...todos.map((todo) => 
    //     todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
    //   )
    // ])
  }

  const convertDate = (date) => {
    return date.toLocaleString("en-US", {
      timeZone: "America/New_York", 
      dateStyle: "short", 
      timeStyle: "short"}
      )
  }

  const handleKeyDown = (e, todos, titleValue, descrValue) => {
    if (e.key === 'Enter') {
      addTodo(todos, titleValue, descrValue)
    }
  }

  const deleteAllTodos = () => {
    if (todos.length) {
      setTodos([])
    }
  }

  return (
    <div className="app">
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg={6}>
            <Card className="control-card mb-3 shadow-sm position-sticky top-0 zindex-sticky">
              <Card.Header className="d-flex align-items-center justify-content-between">
                <h3>Todo List</h3>
                <Badge bg="secondary">{todos.length}</Badge>
              </Card.Header>

              <AddTodo 
                titleValue={titleValue}
                descrValue={descrValue}
                setTitleValue={setTitleValue}
                setDescrValue={setDescrValue}
                todos={todos}
                addTodo={addTodo}
                isError={isError}
                handleKeyDown={handleKeyDown}
                deleteAllTodos={deleteAllTodos}
              />

            </Card>

            <Todos todos={todos} deleteTodo={deleteTodo} handleToggle={handleToggle} />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

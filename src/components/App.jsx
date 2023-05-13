import React, { Component } from 'react';
// import { Counter } from 'components/Counter/Counter';
// import { DropDown } from 'components/DropDown/DropDown';
// import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { ToDoList } from 'components/ToDoList';
import { TodoEditor } from 'components/TodoEditor/TodoEditor';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
// import { Form } from 'components/Form/Form';
// import { LoginForm } from 'components/LoginForm/LoginForm';
import shortid from 'shortid';

// const colorPickerOptions = [
//   { label: 'red', color: 'red' },
//   { label: 'green', color: 'green' },
//   { label: 'blue', color: 'blue' },
//   { label: 'grey', color: 'grey' },
//   { label: 'yellow', color: 'yellow' },
//   { label: 'indigo', color: 'indigo' },
// ];

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', complited: false },
      { id: 'id-2', text: 'Todo 2', complited: true },
      { id: 'id-3', text: 'Todo 3', complited: false },
      { id: 'id-4', text: 'Todo 4', complited: false },
    ],
    filter: '',
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  toogleComplited = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            complited: !todo.complited,
          };
        }

        return todo;
      }),
    }));
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    console.log('After render');

    const todos = JSON.parse(localStorage.getItem('todos'));
    console.log('App  componentDidMount  todos:', todos);

    if (todos) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App  componentDidUpdate  prevState:', prevState);
    console.log('State', this.state);
    console.log('App  componentDidUpdate  prevProps:', prevProps);
    console.log('After update');

    if (this.state.todos !== prevState.todos) {
      console.log('State is updated');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    console.log('Rrender');
    const { todos, filter, showModal } = this.state;
    const todoCount = todos.length;
    const todoComplited = todos.reduce(
      (acc, todo) => (todo.complited ? acc + 1 : acc),
      0
    );

    const visibileTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Состояние компонента</h1>
        <button type="button" onClick={this.toogleModal}>
          Open modal
        </button>
        {/* <LoginForm /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <DropDown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <div>
          <span className="container">Загальна кількість: {todoCount}</span>
          <span className="container">Виконано: {todoComplited}</span>
        </div>
        <ToDoList
          todos={visibileTodos}
          onDeleteTodo={this.deleteToDo}
          onToogleComplited={this.toogleComplited}
        />
        {showModal && (
          <Modal onClose={this.toogleModal}>
            <h2>Modal</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              eligendi.
            </p>
            {/* <button type="button" onClick={this.toogleModal}>
              Close modal
            </button> */}
          </Modal>
        )}
      </>
    );
  }
}

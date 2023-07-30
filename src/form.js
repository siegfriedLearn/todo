import React from 'react'

const Form = ({addTodo}) => {
    const [value, setValue] = React.useState('');

    const handlerSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue('')
      };
  return (
    <form onSubmit={handlerSubmit}>
      <input
        className="form-control text-bg-light"
        type="text"
        placeholder="Add your task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default Form;

import React from 'react';

export default React.createClass({

  // the following needs to be inserted into a function to be added to the ul in the render function
  function template(model){
    <li className="todo">
      <span className="title ${complete ? 'complete' : ''}">
        {this.props.get('title')}
      </span>
      <button className="${action}" data-id="${model.id}">
        <i className="fa fa-${fa}"></i>
      </button>
    </li>
  },





  render() {
    return (
      <div className="container">
        <header>
          <h1>Things Todo</h1>
        </header>
        <main>
          <form className="todo-add">
            <input type="text" name="title" placeholder="Add Something">
            <button><i className="fa fa-plus"></i></button>
          </form>
          <ul className="todo-list"></ul>
        </main>
        <footer>
          <button className="clear">Clear Complete</button>
        </footer>
      </div>
    );
  }

});
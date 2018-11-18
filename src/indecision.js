console.log("In Todo JS")

const uuid = require('uuid/v4')
const moment = require('moment')
const React = require('react')
const ReactDOM = require('react-dom')


const app = {
    title:"Indecision App", 
    subTitle: "What Do I do next", 
    option: []
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.option.push(option)
        e.target.elements.option.value = ''
    }
    renderOptions()
}

const removeAll = (e) => {
    e.preventDefault()
    app.option = []
    renderOptions()
}

const renderOptions = () => {
// Adding Header 
const App = () => { 
    return  <div> <h1>{app.title.toUpperCase()}</h1>
      {app.subTitle && <h2>{app.subTitle}</h2>}
      {app.option.length > 0 ?  
          <p>Here are your options</p>:
          <p>You have no options</p>
      }
      <p>You have {app.option.length} option{app.option.length > 1 && 's'}</p>
      
        <button onClick={removeAll}>Remove All</button>
      
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
      </form>
  </div> ;
}


ReactDOM.render(<App /> , document.querySelector('#indecision-head'));
}

renderOptions();


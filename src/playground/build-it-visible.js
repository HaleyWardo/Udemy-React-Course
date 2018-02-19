class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility(prevState) {
    this.setState(() => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
      </div>
    );
  }
}


///////////////////////////////////////////////
/////////////////MY EXAMPLE////////////////////


//redo this one again - without looking. 
//my example 
let submitted = false;
let myArray = {
  options: [],
}

const onFormSubmit = (e) => {
  console.log('hello');
  e.preventDefault();

  const input = e.target.elements.message.value;
  myArray.options.push(input);
  e.target.elements.message.value = "";
 
  submitted = true;

  render();
};

const render = () => {
  const myNewApplication = (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="message"/>
        <button>
          { submitted ? "Sent" : "Submit" }
        </button>
      </form>
      {
        myArray.options.map( (option) => {
          return <p key={option}>{option}</p>
        })
      }
    </div>
  );
  ReactDOM.render(myNewApplication, document.getElementById('app'));
}

render();
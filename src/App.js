import './App.css';
import React from "react";

// Very Easy
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Employee's information</h1>
//         <p>Name:Dre</p>
//         <p>Number:9808758789</p>
//         <p>Date of Birth: 07/27/2002</p>
//       </div>
//     );
//   }
// }



// Easy/Medium
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       person: {
//         name: " Dre",
//         number: "9808758789",
//         DOB: "07/27/2002",
//       },
//     };
//   }
//   render() {
//     return <IndividualsInfo person={this.state.person} />;
//   }
// }

// class IndividualsInfo extends React.component {
//   render() {
//     const { person } = this.props;

//     return (
//       <div>
//         <h1>Employee's information</h1>
//         <p>Name:{person.name}</p>
//         <p>Number:{person.number}</p>
//         <p>Date of Birth: {person.DOB}</p>
//       </div>
//     );
//   }
// }


// Hard

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Dre',
          number: '9808758789',
          DOB: '07/27/2002'
        },
        {
          name: 'Dre',
          number: '9808758789',
          DOB: '07/27/2002'
        },
        {
          name: 'Dre',
          number: '9808758789',
          DOB: '07/27/2002'
        },
        {
          name: 'Dre',
          number: '9808758789',
          DOB: '07/27/2002'
        }
      ]
    };
  }

  render() {
    const { people } = this.state;
    const employeeData = [];

    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      employeeData.push(
        <div key={i}>
          <h2>Name: {person.name}</h2>
          <p>Number: {person.number}</p>
          <p>Date of Birth: {person.DOB}</p>
        </div>
      );
    }

    return (
      <div class="background">
        <h1>Employee's information</h1>
        {employeeData}
      </div>
    );
  }
}


export default App;

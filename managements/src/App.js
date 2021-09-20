import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'


const customers =[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길e',
  'birthday' : '99',
  'gender' : 'Male',
  'job' : 'univ'

},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길f',
  'birthday' : '999',
  'gender' : 'Male',
  'job' : 'unive'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길g',
  'birthday' : '9999',
  'gender' : 'Male',
  'job' : 'univer'
}
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            birthday={c.birthday}
            name={c.name}
            gender={c.gender}
            job={c.job}
            />
          );
        }
            )
      }
      </div>
    );
  }
}

export default App;

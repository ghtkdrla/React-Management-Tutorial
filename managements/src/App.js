
import './App.css';
import React, { Component } from 'react';
// eslint-disable-next-line
import Customer from './components/Customer'

import Table from '@material-ui/core/Table';

import TableHead from '@material-ui/core/TableHead';

import TableBody from '@material-ui/core/TableBody';

import TableRow from '@material-ui/core/TableRow';

import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';

import paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table : {
    minWidth: 1080
  }
})

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
  'name' : '홍길fff',
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
   const { classes } = this.props;
    return (
      <paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {customers.map(c => {
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
      </TableBody>
       </Table>
      </paper>
    );
  }
}

export default withStyles(styles)(App);

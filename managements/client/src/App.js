
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



class App extends Component {

  state ={
    customers: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
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
        {this.state.customers ? this.state.customers.map(c => {
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
            ) : ""
      }
      </TableBody>
       </Table>
      </paper>
    );
  }
}

export default withStyles(styles)(App);

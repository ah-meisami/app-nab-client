/*
  Test Fetch Data from ORACLE using
  Back-End created using ORDS (Oracle REST Data Service)
  Front-End created using React

  this is MY first API call to Oracle Database using React (1398-01-08 Friday)
*/
import React, { Component } from 'react';

class TestFetchDept extends Component {
  state = {}

  componentDidMount() {
    fetch('http://192.168.234.130:9502/ords/hr2/dept/')
      .then(response => response.json())
      .then(data => console.log(data.items));
  }

  render() {
    return (
      <button>Hi</button>
    );
  }
}

export default TestFetchDept;
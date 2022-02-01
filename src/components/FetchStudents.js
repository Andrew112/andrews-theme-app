import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import Student from './Student';
import { useStyles } from './styles';

const FetchData = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [students, setStudents] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const fetchStudentData = async () => {
    const url = 'https://api.hatchways.io/assessment/students';
    const response = await fetch(url);
    const data = await response.json();
    let { students } = data;
    let array = [];
    students.forEach((item) => {
      array.push({
        ...item,
        name: `${item.firstName} ${item.lastName}`,
      });
    });
    setLoading(false);
    setStudents(array);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);
  const handleSearch = (e) => {
    let searchedStudents = [...students];
    searchedStudents = searchedStudents.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    setSearchText(e.target.value);
    setSearchResult(searchedStudents);
  };

  if (loading) return <div> loading...</div>;
  if (!students) return <div>Did not get any student</div>;
  return (
    <Grid className={classes.mainGrid}>
      <Container component='main' className={classes.container}>
        <Container component='main' className={classes.searchBar}>
          <TextField
            id='standard-basic'
            variant='standard'
            placeholder='Search by name'
            fullWidth
            onChange={(e) => handleSearch(e)}
          />
        </Container>

        {(searchText ? searchResult : students).map((item) => (
          <Student key={item.id} item={item} />
        ))}
      </Container>
    </Grid>
  );
};

export default FetchData;

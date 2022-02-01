
import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useStyles } from './styles';

const Student = ({ item }) => {
  const classes = useStyles();
  const { pic, name, email, company, skill, city, grades } = item;
  const [showDetailToggle, setShowDetailToggle] = useState(false);

  const handleGradeShow = () => {
    setShowDetailToggle((preState) => !preState);
  };

  return (
    <Grid className={classes.display}>
      <Grid item sm={3} xs={3}>
        <Avatar
          aria-label='Recipe'
          src={pic}
          className={classes.avatar}></Avatar>
      </Grid>
      <Grid item sm={7} xs={7} className={classes.textAlign}>
        <Typography className={classes.nameHeading}>
          {`${name?.toUpperCase()}`}
        </Typography>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography>{`Email: ${email}`}</Typography>
            <Typography>{`Company: ${company}`}</Typography>
            <Typography>{`Skill: ${skill}`}</Typography>
            <Typography>{`City: ${city}`}</Typography>
          </div>
          {showDetailToggle && (
            <>
              {grades.map((item, index) => (
                <Typography key={index}>
                  {`Test ${index + 1}:    ${item}%`}
                </Typography>
              ))}
            </>
          )}
        </CardContent>
      </Grid>
      <Grid item sm={2} xs={2} className={classes.marginTop}>
        <Button variant='text' onClick={handleGradeShow}>
          {showDetailToggle ? <RemoveIcon /> : <AddIcon />}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Student;

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  //Fetch Students component
  mainGrid: { border: '1px #f7f3f8 solid', background: '#f7f3f8' },
  container: {
    width: '700px',
    textAlign: 'center',
    background: '#fff',
    height: '600px',
    overflow: 'auto',
    margin: '90px auto',
  },
  searchBar: { margin: '20px 0' },

  //Student component
  display: { display: 'flex' },
  avatar: {
    margin: 15,
    width: 120,
    height: 120,
    border: '1px #e6e2e7 solid',
  },
  textAlign: { textAlign: 'left' },
  cardContent: { fontSize: '13px', marginBottom: '15px' },
  nameHeading: { fontSize: '30px', fontWeight: 'bold' },
  marginTop: { marginTop: '20px' },
}));

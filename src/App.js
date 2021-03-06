import React from 'react';
import { Provider } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

import Header from './components/Header';
import BaseInformation from './components/BaseInformation';
import ParsingTable from './components/ParsingTable';
import SentencesInput from './components/SentencesInput';
import FiniteAutomaton from './components/FiniteAutomaton';
import Footer from './components/Footer';

import store from './store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    minHeight: 'auto',
  },
  divider: {
    margin: theme.spacing(5, 0),
  },
  title: {
    padding: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Alert severity="info">
              Clique no título <b>Analisador Sintático</b> para aprender mais sobre a ferramenta :)
            </Alert>
          </Grid>
          <Grid item xs={4}>
            <Alert severity="info">
              O painel <b>Informações Base</b> contém a <i>Gramática</i>, o <i>First</i> e o{' '}
              <i>Follow</i> do trabalho.
            </Alert>
          </Grid>
          <Grid item xs={4}>
            <Alert severity="info">
              Você pode <b>gerar uma sentença</b> através do botão dentro do campo de entrada.
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <BaseInformation />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="left"
                className={classes.title}
              >
                Entrada de Sentenças
              </Typography>
              <SentencesInput />
              <Divider className={classes.divider} />
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="left"
                className={classes.title}
              >
                Tabela de Parsing
              </Typography>
              <ParsingTable />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <FiniteAutomaton />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;

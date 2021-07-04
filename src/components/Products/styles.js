import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.tollbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

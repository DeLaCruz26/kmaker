import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "60%",
  },
  cardaActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContemt: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
const useStyles = makeStyles(theme => ({
  root: {
    width: "85%",
    marginLeft: theme.spacing(10)
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1.5, 0)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary
  },
  subheading: {
    marginRight: 15,
    flip: false,
    textAlign: "right"
  },
  margin: {
    margin: theme.spacing(2)
  },
  padding: {
    padding: theme.spacing(0, 2)
  }
}));
function RestaurantCard({ resto }) {
  const classes = useStyles();

  const emptyMessage = <p>No matches</p>;
  const matchList = (
    <div>
      {resto.resto.map(match => (
        <ExpansionPanel key={match._id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={match._id}
            key={match._id}
          >
            <Badge
              color="primary"
              className={classes.margin}
              badgeContent={"Price "+match.price}
              key={match._id}
            >
              <Typography className={classes.heading}>
                {match.name}
              </Typography>
            </Badge>
            <Grid
              justify="space-between" 
              container
              spacing={1}
            ></Grid>

            <Typography className={classes.secondaryHeading}>
              Roome Type : Host Name :
            </Typography>
            <Typography className={classes.secondaryHeading}>
            {match.room_type}  {match.host_name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Neighbourhood"
                  secondary={match.neighbourhood}
                />
                 <ListItemText
                  primary="Neighbourhood Group"
                  secondary={match.neighbourhood_group}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Latitude" secondary={match.latitude} />
                <ListItemText
                  primary="Longitude"
                  secondary={match.longitude}
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
  return (
    <div className={classes.root}>
      {resto.length === 0 ? emptyMessage : matchList}
    </div>
  );
}
RestaurantCard.propTypes = {
  resto: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  resto: state.resto
});
export default connect(mapStateToProps)(RestaurantCard);

import React, { Component } from "react";
import { showRestaurnats, sortRestaurant } from "../_actions/restoActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RestaurantCard from "../_components/RestaurantCard";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

const styles = theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
});
class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: true
    };
  }
  componentDidMount() {
    this.props.showRestaurnats();
  }
  onSubmit = e => {
    e.preventDefault();

    const currentState = this.state.order;
    this.setState({ order: !currentState });
    if (this.state.order) {
      this.props.sortRestaurant(1);
    } else {
      this.props.sortRestaurant(-1);
    }
  };

  render() {
    const classes = this.props;
    let sortBtn = this.state.order ? (
      <ArrowDownwardOutlinedIcon fontSize="inherit" />
    ) : (
      <ArrowUpwardOutlinedIcon fontSize="inherit" />
    );
    return (
      <div className="container">
        <div>
          <IconButton
            variant="outlined"
            color="primary"
            className={classes.margin}
            size="large"
            onClick={this.onSubmit}
          >
            {sortBtn}Sort
          </IconButton>
        </div>
        <RestaurantCard props={this.props.resto.resto} />
      </div>
    );
  }
}

Restaurants.propTypes = {
  showRestaurnats: PropTypes.func.isRequired,
  resto: PropTypes.object.isRequired,
  sortRestaurant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  resto: state.resto
});

export default connect(mapStateToProps, { showRestaurnats, sortRestaurant })(
  withStyles(styles)(Restaurants)
);

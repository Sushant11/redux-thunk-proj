import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import custom components
import Joke from "../../components/Jokes/Joke";
import * as jokeSevice from "../../service/jokesSevice";
import * as jokeAction from "../../actions/jokeAction";

export class ListContainer extends Component {
  /**
   * Fetch joke by formData.
   * @param {object} formData
   *
   */
  fetchJoke = (formData) => {
    this.props.actions.fetchJoke(formData);
  };

  /**
   * Clean joke record
   *
   */
  cleanJoke = () => {
    this.props.actions.jokeCleanRequest();
  };

  render() {
    return (
      <Joke
        fetchJoke={this.fetchJoke}
        cleanJoke={this.cleanJoke}
        {...this.props}
      />
    );
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
  jokes: state.jokes.payload.data,
  jokeErrors: state.jokes.payload.data,
  jokeLoading: state.jokes.loading
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, jokeAction, jokeSevice),
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

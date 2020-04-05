import React, { Component } from "react";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export const withData = View => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidCatch() {
      this.setState({ error: true });
    }

    update() {
      this.setState({ loading: true, error: false });
      try {
        this.props
          .getData()
          .then(data => this.setState({ data, loading: false }));
      } catch (e) {
        this.setState({ error: true });
      }
    }

    render() {
      const { data, loading, error } = this.state;

      if (error) {
        return <ErrorIndicator />;
      }

      if (!data || loading) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

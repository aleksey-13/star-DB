import React, { Component, Fragment } from "react";

import Spinner from "../spinner";
import ErrorButton from "../error-button";

import "./item-details.css";

export const Record = ({ field, label, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.itemId !== this.props.itemId ||
      prevProps.getData !== this.props.getData ||
      prevProps.getImgUrl !== this.props.getImgUrl
    ) {
      this.updateItem();

      this.setState({ loading: true });
    }
  }

  updateItem = () => {
    const { getData, itemId, getImgUrl } = this.props;

    if (!itemId) return;

    getData(itemId).then(item =>
      this.setState({ item, loading: false, image: getImgUrl(item) })
    );
  };

  render() {
    const { item, loading, image } = this.state;
    const { itemId } = this.props;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { item })
    );

    if (!itemId) {
      return (
        <span style={{ textAlign: "center", display: "block", padding: 15 }}>
          Select a person from a list
        </span>
      );
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? (
      <ItemView item={item} image={image} children={children} />
    ) : null;

    return (
      <div className="item-details card flex-row align-items-center justify-content-around">
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = ({ item, image, children }) => {
  const { name } = item;

  return (
    <Fragment>
      <img className="item-image" alt="item" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">{children}</ul>
        <ErrorButton />
      </div>
    </Fragment>
  );
};

import React from "react";

export const withChildFunction = fn => Wrapped => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

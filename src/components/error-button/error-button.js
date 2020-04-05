import React, { useState } from "react";

import "./error-button.css";

const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    this.foo.bar = 0;
  }

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => setRenderError(true)}
    >
      Danger
    </button>
  );
};

export default ErrorButton;

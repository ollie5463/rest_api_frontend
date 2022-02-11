import React from "react";
import * as ReactApi from "./ReactApi";

class DeleteClientButton extends React.Component {
  deleteClient = (id) => {
    ReactApi.deleteClient(id);
  };

  render() {
    return (
      <button
        className="btn btn-danger btn-sm"
        type="button"
        onClick={() => {
          this.deleteClient(this.props.clientId);
        }}
      >
        Delete
      </button>
    );
  }
}

export default DeleteClientButton;

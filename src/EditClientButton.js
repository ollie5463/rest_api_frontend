import React from "react";
import * as ReactApi from "./ReactApi";

class EditClientButton extends React.Component {
  state = {
    age: "",
    name: "",
    email: "",
  };

  handleClickEdit = async () => {
    // let id = this.props.clientId;
    // const response = await ReactApi.getClientById(id);
    // this.setState(response.data);
  };

  handleChangeAge = (event) => {
    const value = event.target.value;
    this.setState({
      age: value
    });
  };

  handleChangeName = (event) => {
    const value = event.target.value;
    this.setState({
      name: value,
    });
  };

  handleChangeEmail = (event) => {
    const value = event.target.value;
    this.setState({
      email: value,
    });
  };

  handleSubmit = () => {
    ReactApi.updateClient(this.props.id, this.state);
  };

  componentDidMount() {
    this.setState({
        name: this.props.name,
        age: this.props.age,
        email: this.props.email
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClickEdit}
          type="button"
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target={ "#edit" + this.props.index.toString()}
        >
          Edit
        </button>

        <div
          className="modal fade"
          id={ "edit" +  this.props.index.toString()}
          tabIndex="-1"
          aria-labelledby={ "exampleModalEdit" + this.props.index.toString()}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={ "exampleModalEdit" + this.props.index.toString() }>
                  Edit client
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor={ "exampleInputAge1" + this.props.index.toString()} className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.handleChangeAge}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={ "exampleInputName1" + this.props.index.toString()} className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleChangeName}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={ "exampleInputEmail1" + + this.props.index.toString()} className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </div>
                  <button
                    type="submit"
                    onSubmit={this.handleSubmit}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditClientButton;

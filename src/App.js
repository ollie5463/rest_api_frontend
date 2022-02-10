import React from "react";
import * as ReactApi from "./ReactApi";
import CreateClientButton from "./CreateClientButton";
import EditClientButton from "./EditClientButton";

class App extends React.Component {
  state = {
    clients: [],
  };

  componentDidMount() {
    ReactApi.getAllClients().then((response) => {
      this.setState({
        clients: response.data,
      });
    });
  }

  componentDidUpdate() {
    ReactApi.getAllClients().then((response) => {
      this.setState({
        clients: response.data,
      });
    });
  }

  deleteClient = (id) => {
    ReactApi.deleteClient(id);
  };

  render() {
    const displayClients = this.state.clients.map((client) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.age}</td>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>
            <EditClientButton clientId={client.id} />
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                this.deleteClient(client.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>client table</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>age</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>{displayClients}</tbody>
        </table>
        <CreateClientButton />
      </div>
    );
  }
}

export default App;

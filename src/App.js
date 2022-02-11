import React from "react";
import * as ReactApi from "./ReactApi";
import CreateClientButton from "./CreateClientButton";
import EditClientButton from "./EditClientButton";
import DeleteClientButton from "./DeleteClientButton";
import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    clients: [{
      id: 22,
      age: 10,
      name: 'ollie',
      email: "ollie@mail.com",
    },{
      id: 23,
      age: 20,
      name: 'ruslan',
      email: "ollie@mail.com",
    }],
  };

  // componentDidMount() {
  //   ReactApi.getAllClients().then((response) => {
  //     this.setState({
  //       clients: response.data,
  //     });
  //   });
  // }

  // componentDidUpdate() {
  //   ReactApi.getAllClients().then((response) => {
  //     this.setState({
  //       clients: response.data,
  //     });
  //   });
  // }

  render() {
    const displayClients = this.state.clients.map((client, index) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.age}</td>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <EditClientButton index={index} {...client} />
              <DeleteClientButton clientId={client.id} />
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <NavBar />
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

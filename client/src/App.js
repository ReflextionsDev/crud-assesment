import './App.css';
import React, { Component } from 'react'

const serverURL = "http://localhost:3001/users";

async function getFromServer(id, route) {
  const response = await fetch(`${serverURL}/${route}/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    }
  })
  return await response.json()
}

async function postToServer(data, route) {
  const response = await fetch(`${serverURL}/${route}`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
    body: data
  });
  return await response.json();
}

async function putToServer(data, route) {
  const response = await fetch(`${serverURL}/${route}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
    body: data
  });
  return await response.json();
}

async function deleteFromServer(id, route) {
  const response = await fetch(`${serverURL}/${route}/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    }
  })
  return await response.json()
}


export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        id: "",
        name: "",
        age: 0,
        favoriteMovies: [""]
      },
      result: ""
    }
  }


  updateUserState = (e) => {
    const newData = { ...this.state }
    newData.user[e.target.name] = e.target.value
    this.setState(newData)
  }

  updateMovieState = (e, idx) => {
    const newData = { ...this.state }
    newData.user.favoriteMovies[idx] = e.target.value
    this.setState(newData)
  }

  addMovie = (e) => {
    const newData = { ...this.state }
    newData.user.favoriteMovies.push("")
    this.setState(newData)
  }

  createUser = async (e) => {
    const data = JSON.stringify({
      id: this.state.user.id,
      name: this.state.user.name,
      age: this.state.user.age,
      favoriteMovies: this.state.user.favoriteMovies
    })

    const response = await postToServer(data, 'create-user')
    console.log(response)
    this.setState({ result: response.message })
  }

  getUser = async (e) => {
    const response = await getFromServer(this.state.user.id, 'get-user')
    console.log(response)

    const newData = { ...this.state }
    newData.result = response.message

    const {name, age, favoriteMovies} = response.payload
    newData.user.name = name
    newData.user.age = age
    newData.user.favoriteMovies = favoriteMovies

    this.setState(newData)
  }

  updateUser = async (e) => {

    const data = JSON.stringify({
      id: this.state.user.id,
      name: this.state.user.name,
      age: this.state.user.age,
      favoriteMovies: this.state.user.favoriteMovies
    })

    const response = await putToServer(data, 'update-user')
    console.log(response)
    this.setState({ result: response.message })

  }

  deleteUser = async (e) => {
    const response = await deleteFromServer(this.state.user.id, 'delete-user')
    console.log(response)
    this.setState({ result: response.message })
  }

  render() {
    return (
      <div>
        <h1>Oh CRUD</h1>

        <h2>User</h2>

        <label>Name: </label>
        <input
          name="name"
          value={this.state.user.name}
          onChange={this.updateUserState}
        ></input>
        <br />

        <label>Age: </label>
        <input
          name="age"
          type="number"
          value={this.state.user.age}
          onChange={this.updateUserState}
        ></input>
        <br />

        <div>
          <label>Favorite Movies: </label>
          <br />
          {this.state.user.favoriteMovies.map((element, idx) => {
            return (
              <div
                key={idx}>
                <input
                  name="movie"
                  value={element}
                  onChange={(e) => { this.updateMovieState(e, idx) }}
                ></input>
                <br />
              </div>
            )
          })}
        </div>

        <button
          name="addMovie"
          onClick={this.addMovie}
        >Add Movie</button>

        <br />
        <h2>API</h2>

        <label>ID: </label>
        <input
          name="id"
          value={this.state.user.id}
          onChange={this.updateUserState}
        ></input>
        <br />

        <button
          name="createUser"
          onClick={this.createUser}
        >Create User</button>

        <button
          name="getUser"
          onClick={this.getUser}
        >Get User</button>

        <button
          name="updateUser"
          onClick={this.updateUser}
        >Update User</button>

        <button
          name="deleteUser"
          onClick={this.deleteUser}
        >Delete User</button>

        <div>{this.state.result}</div>

      </div>
    )
  }
}


export default App
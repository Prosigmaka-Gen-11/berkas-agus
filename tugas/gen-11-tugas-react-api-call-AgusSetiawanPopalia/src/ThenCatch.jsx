import axios from "axios";
import { useState } from "react";

export default function ThenCatch() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [role, setRole] = useState();


  function getApiThenCatch() {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then(function (data) {
        const randomizer = Math.floor(Math.random() *21)
        console.log(data.data.data)
        setName(data.data.data[randomizer].displayName)
        setDesc(data.data.data[randomizer].description)
        setRole(data.data.data[randomizer].role.displayName)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <h2>Valorant API Call Then Catch</h2>
      <button onClick={getApiThenCatch} className="bg-slate-200 px-3 rounded-lg mt-5 ml-5 shadow-lg hover:shadow-xl" >Show Data</button>
      <br /> <br />
      <table>
        <tbody>
          <tr>
            <td>Agent Name</td>
            <td>:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Agent Role</td>
            <td>:</td>
            <td>{role}</td>
          </tr>
          <tr>
            <td>Agent Description</td>
            <td>:</td>
            <td>{desc}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
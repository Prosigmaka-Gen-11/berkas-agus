import { useState } from "react";
import axios from "axios";

export default function Async() {
    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [role, setRole] = useState();

  async function getApiAsyncAwait() {
    try {
      const data = await axios.get(
        "https://valorant-api.com/v1/agents"
      );
      const randomizer = Math.floor(Math.random() *21)
      setName(data.data.data[randomizer].displayName)
      setDesc(data.data.data[randomizer].description)
      setRole(data.data.data[randomizer].role.displayName)
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <h2>Valorant API Call Async Await</h2>
      <button onClick={getApiAsyncAwait}  className="bg-slate-200 px-3 rounded-lg mt-5 ml-5 shadow-lg hover:shadow-xl">Show Data</button>
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

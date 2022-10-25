import FormHandlingClass from "./FormHandlingClass"
import FormHandlingHook from "./FormHandlingHook"
export default function App(){
  return <div>
    <h1 className="text-xl font-bold mt-7">Functional Component</h1>
    <FormHandlingHook />
    <br />
    <br />
    <h1 className="text-xl font-bold mt-7">Class Component</h1>
    <FormHandlingClass />
  </div>
}
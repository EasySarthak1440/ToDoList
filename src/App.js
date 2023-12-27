import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";


function App() {
  let todos=[
    {
      sno:1,
      title:"Go to the Mess",
      desc:"this is dinner time"
    },
    {
      sno:2,
      title:"Go to the college",
      desc:"this is college time"
    },
    {
      sno:3,
      title:"Go to the toilet",
      desc:"this is pressure time"
    },
  ]
  return (
<>
    <Header title="my todoslist" searchBar={true}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;

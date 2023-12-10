
import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

import TomorrowLogic from "@/components/TomorrowLogic"


  const Home = () => {
    return (
      // <div className="wrapper"> remove the div
      <div className="todos">
        <Header>
          <h1>todos</h1>
          <p>Items will persist in the browser local storage</p>
        </Header>
        <TodosLogic />
        <TomorrowLogic />
      </div>
      // </div>
    );
  };
  export default Home;
  
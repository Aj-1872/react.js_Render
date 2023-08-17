import ArrayUseState from "./Component/Immutable State/ArrayUseState";
import ObjectUseState from "./Component/Immutable State/ObjectUseState";
import ChildOne from "./Component/Optimization/ChildOne";
import GrandParent from "./Component/Optimization/GrandParent";
import ParentOne from "./Component/Optimization/ParentOne";
import ParentTwo from "./Component/Optimization/ParentTwo";
import Child from "./Component/Parent Child/Child";
import Parent from "./Component/Parent Child/Parent";
import UseReducer from "./Component/UseReducer/UseReducer";
import Second from "./Component/UseState/Second";
function App() {
  return (
    //  <Second/>
    //  <UseReducer/> 
    //  <ObjectUseState/>
    //  <ArrayUseState/>
    // <Parent />
    // <ParentOne><ChildOne /></ParentOne>
    // <GrandParent />
    <div>
      <ParentTwo />
    </div>
  );
}

export default App;

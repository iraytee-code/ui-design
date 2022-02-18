import "./App.css";
import Customer from "./pages/Customer";
// import CustomerNotSaved from "./pages/CustomerNotSaved";

function App() {
  return (
    <div className="App">
      {/* <h4>{process.env.NODE_ENV}</h4> */}
      <Customer />
      {/* <CustomerNotSaved /> */}
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Root from "./routes/Root";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Root />
      </div>
    </>
  );
}

export default App;

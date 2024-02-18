import { useState, useEffect } from "react";
import Home from "./component/Home/Home";
import "./app.css";
import styled from "styled-components";
// import ScaleLoader from "react-spinners/ScaleLoader";
import HashLoader from "react-spinners/HashLoader";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);
  const color = "#4c4c4c";
  // const color = "#0d0d0d";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <InitailSpinner>
          <h1>Syncing</h1>
          <HashLoader
            color={color}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            width={8}
          />
        </InitailSpinner>
      ) : (
        <div className="App">
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        </div>
      )}
    </>
  );
}

const InitailSpinner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;

  h1 {
    // color: #e67f1a;
    // color: #68e1c9;
    background: linear-gradient(to right, #4c4c4c, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.5rem;
    margin-right: 0.6rem;
  }
`;

export default App;

import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;

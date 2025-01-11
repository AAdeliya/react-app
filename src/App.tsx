import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Organization doesn't have seats to enroll participants
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Add to Class
      </Button>
    </div>
  );
}

export default App;

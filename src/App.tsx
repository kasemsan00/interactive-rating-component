import "./App.css";
import InputRating from "./InputRating";
import ThankYou from "./ThankYou";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      {rating <= 0 ? (
        <InputRating setRating={setRating} />
      ) : (
        <ThankYou rating={rating} />
      )}
    </div>
  );
}

export default App;

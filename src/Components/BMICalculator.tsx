import { useState } from "react";

// state
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    let bmi = Number(weight) / Math.pow(Number(height), 2);
    setBMI(bmi);

    if (bmi < 18.5) {
      setMessage("You are underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage("You are in the healthy weight range");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      setMessage("You are overweight");
    } else if (bmi > 30) {
      setMessage("You are Obese");
    } else {
      setMessage("Invalid input");
    }
  };

  const resetForm = () => {
    setMessage("");
    setBMI(0);
    setHeight("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <input
        className="data-input"
        id="weight"
        type="number"
        placeholder="weight(kg)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        className="data-input"
        id="height"
        type="number"
        placeholder="height(m)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <div>
        <button className="calc-btn" onClick={calculateBMI}>
          Calculate
        </button>
        <button className="reset-btn" onClick={resetForm}>
          Reset
        </button>
      </div>
      <p>BMI: {bmi.toFixed(2)} kg/m&sup2;</p>
      <p>result : {message}</p>
    </div>
  );
};

export default BMICalculator;

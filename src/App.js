import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div `
  width: 500px;
  height: auto;
  margin: 100px auto auto auto;
  background: rgb(37,0,255);
  background: linear-gradient(173deg, rgba(37,0,255,1) 0%, rgba(252,0,0,1) 100%);
  padding: 16px;
  color: white;
`
const Title = styled.div `
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
`
const WeightInpt = styled.input `
  width: 100px;
  height: 26px;
  border-radius: 7px;
  outline: unset;
`
const HeightInpt = styled.input `
  width: 100px;
  height: 26px;
  border-radius: 7px;
  outline: unset;
`
const CalculateBMI = styled.button `
  width: fit-content;
  height: fit-content;
  padding: 7px;
  border-radius: 7px;
  margin: 16px auto 0 200px;
  outline: unset;
  background-color: #2500ff;
  color: white;
`
const LabelFor = styled.label `
  margin-right: 7px;
`
const Result = styled.div`
  width: fit-content;
  margin: auto;
  font-size: 16px;
  margin-top: 7px;
`

function App() {
  const [result, setResult] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault() ;
    const formData = new FormData(e.target);
    const weight = formData.get("weight");
    const height = formData.get("height");
    if((Number(weight) && Number(height)) && weight >= 1 && height >= 10) {
      const heightMetter = height/100;
      const BMI = Math.ceil(weight/heightMetter**2);
      setResult((BMI));
    }
    else {
      setResult("input errors!");
    }
  }

  return (
    <Container>
      <Title>BMI Tracker</Title>

      <form onSubmit={handleSubmit}>
        <div style={{display: "flex",justifyContent: 'space-between'}}>
          <div>
            <LabelFor>Weight (in Kg)</LabelFor>
            <WeightInpt name="weight"/>
          </div>
          <div>
            <LabelFor>Height (in cm)</LabelFor>
            <HeightInpt name="height"/>
          </div>
        </div>
        <CalculateBMI>Calculate BMI</CalculateBMI>
      </form>
      <Result>BMI Result: {result}</Result>
    </Container>
  );
}

export default App;
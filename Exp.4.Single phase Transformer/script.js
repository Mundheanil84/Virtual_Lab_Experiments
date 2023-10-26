document.addEventListener("DOMContentLoaded", function () {
    const simulateBtn = document.getElementById("simulateBtn");
    simulateBtn.addEventListener("click", simulateTransformer);
  });
  
  function simulateTransformer() {
    const turnsRatio = parseFloat(document.getElementById("turnsRatio").value);
    const primaryVoltage = parseFloat(document.getElementById("primaryVoltage").value);
    const load = parseFloat(document.getElementById("load").value);
  
    const secondaryVoltage = primaryVoltage / turnsRatio;
    const secondaryCurrent = load / secondaryVoltage;
    const efficiency = ((secondaryVoltage * secondaryCurrent) / (primaryVoltage * secondaryCurrent)) * 100;
  
    document.getElementById("secondaryVoltage").textContent = `Secondary Voltage: ${secondaryVoltage.toFixed(2)} V`;
    document.getElementById("secondaryCurrent").textContent = `Secondary Current: ${secondaryCurrent.toFixed(2)} A`;
    document.getElementById("efficiency").textContent = `Efficiency: ${efficiency.toFixed(2)} %`;
  }

  document.getElementById('calculateButton').addEventListener('click', function() {
    const inputVoltage = parseFloat(document.getElementById('inputVoltage').value);
    const outputVoltage = parseFloat(document.getElementById('outputVoltage').value);
    const power = parseFloat(document.getElementById('power').value);
  
    if (!isNaN(inputVoltage) && !isNaN(outputVoltage) && !isNaN(power)) {
      const turnsRatio = outputVoltage / inputVoltage;
      const current = power / outputVoltage;
      
      const result = `Turns Ratio: ${turnsRatio.toFixed(2)}<br>Current (A): ${current.toFixed(2)}`;
      document.getElementById('result').innerHTML = result;
    } else {
      document.getElementById('result').innerHTML = "Please enter valid numbers.";
    }
  });

  // //
  document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
  
    calculateBtn.addEventListener('click', () => {
      const primaryVoltage = parseFloat(document.getElementById('primary-voltage').value);
      const impedance = parseFloat(document.getElementById('impedance').value);
  
      if (!isNaN(primaryVoltage) && !isNaN(impedance)) {
        const primaryCurrent = primaryVoltage / impedance;
        resultDiv.textContent = `Primary Input Current: ${primaryCurrent.toFixed(2)} A`;
      } else {
        resultDiv.textContent = 'Please enter valid values';
      }
    });
  });
  
  

  
  
// Steps Array with Text and Images for Each Step
const steps = [
    { text: "Step 1: Preheat your oven to 350°F (175°C).", img: "/Users/SOUNDARYAA/Desktop/cake/preheat.jpeg" },
    { text: "Step 2: Mix the flour and baking powder in a bowl.", img: "/Users/SOUNDARYAA/Desktop/cake/mix.jpeg" },
    { text: "Step 3: Cream the butter and sugar together until smooth.", img: "/Users/SOUNDARYAA/Desktop/cake/but.jpg" },
    { text: "Step 4: Beat in the eggs, one at a time.", img: "/Users/SOUNDARYAA/Desktop/cake/eggs.jpeg" },
    { text: "Step 5: Alternate adding the flour mixture and milk.", img: "/Users/SOUNDARYAA/Desktop/cake/mix.jpeg" },
    { text: "Step 6: Pour the batter into a greased pan.", img: "/Users/SOUNDARYAA/Desktop/cake/po.jpeg" },
    { text: "Step 7: Bake for 30-35 minutes, until golden brown.", img: "/Users/SOUNDARYAA/Desktop/cake/bake.jpeg" }
  ];
  
  let currentStep = 0;
  
  // Display the current step
  function displayStep() {
    const stepsDiv = document.getElementById("steps");
    const step = steps[currentStep];
    stepsDiv.innerHTML = `
      <p>${step.text}</p>
      <img src="${step.img}" alt= "Step Image" style="width: 70%; border-radius: 8px; margin-top: 15px;">
    `;
  }
  
  // Next Step
  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      displayStep();
    }
  }
  
  // Previous Step
  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      displayStep();
    }
  }
  
  // Initial display of the first step
  displayStep();
  
const ballTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const ballTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  
  const ball1 = document.querySelector("#ball1");
  const ball2 = document.querySelector("#ball2");
  const ball3 = document.querySelector("#ball3");
  
  ball1.animate(ballTumbling, ballTiming);
  
  const animateWithPromises = (element) => {
    return element.animate(ballTumbling, ballTiming).finished;
  };
  
  const animateball2Afterball1 = async () => {
    await animateWithPromises(ball1);
    await animateWithPromises(ball2);
    await animateWithPromises(ball3);
  };

  const animateball3Afterball2 = async () => {
    await animateWithPromises(ball1);
    await animateWithPromises(ball2);
    await animateWithPromises(ball3);
  };
  
  animateball2Afterball1();
  animateball3Afterball2();
  

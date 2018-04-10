const myAlert = () => {
  const x = "help! I think I found a clue!";
  const alerter = () => {
    console.log(x);
  };
  setTimeout(alerter,1000)
  console.log("what happens first? this log or the alert?")
};
myAlert();

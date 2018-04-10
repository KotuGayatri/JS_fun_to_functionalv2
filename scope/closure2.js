const myAlert = () => {
  const x = "help! I think I found a clue!";
  let count =0;
  const alerter = () => {
    console.log(x+" "+ ++count);
  };
    return alerter;
  };
  const funcAlert = myAlert();
  const funcAlert2=myAlert();
funcAlert();
funcAlert();
funcAlert();
funcAlert2();
funcAlert2();

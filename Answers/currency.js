const currency = (n, to) => {
    let USD = 1;
    let CAD = 1.26;
    let CNY = 6.46;
    let GH = 6.05;
    let GBP = 0.91;
    let usd = (n / GH);

    if (to === "CAD") {
      
      const result = (CAD * usd);
      return result.toFixed(2);
    } 
    else if (to === "USD") {
      
      const result = USD * usd;
      return result.toFixed(2);
    } 
    else if (to === "CNY") {
      
      const result = CNY * usd;
      return result.toFixed(2);
    } 
    else if (to === "GBP") {
      
      const result = GBP * usd;
      return result.toFixed(2);
    } 
     else {
      return "error";
    }
  };
  ​
  module.exports = currency;
const Calculate = {
  
    factorial(input) {
      if(input === 0) {
        return 1;
      }
      for (let i = input - 1; i >= 1; i--) {
        input*= i;
      }
      return input;
    }
  }
  
  module.exports = Calculate;
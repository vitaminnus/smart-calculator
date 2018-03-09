class SmartCalculator {
  constructor(initialValue) {
    this.string = initialValue.toString();
  }

  valueOf() {
    return eval(this.string);
  }

  add(number) {
    this.string = this.string + '+' + number.toString();
    return this;
  }
  
  subtract(number) {
    this.string = this.string + '-' + number.toString();
    return this;
  }

  multiply(number) {
    this.string = this.string + '*' + number.toString();
    return this;
  }

  devide(number) {
    this.string = this.string + '/' + number.toString();
    return this;
  }

  pow(number) {
    this.string = this.string + '**' + number.toString();
    return this;
  }
}

module.exports = SmartCalculator;

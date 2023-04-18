
add(fraction) {
    const numerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
    const denominator = this.denominator * fraction.denominator;
    return new Fraction(numerator, denominator);
  }
}

function addFractions(fractions) {
  let result = new Fraction(0, 1);
  for (let i = 0; i < fractions.length; i++) {
    result = result.add(fractions[i]);
  }
  return result;
}

function output{
  

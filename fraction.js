const prompt=require('prompt-sync')();
class Fraction
{
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
  }
function gcd(a, b)
{
    let t=0;
    console.log(a,b)
    while (b != 0)
      {
        t = b
        b = a % b
        a = t
        console.log(a,b,t);
      }
    return a;
}
function input_fraction()
{
    let numerator = parseInt(prompt("enter the numerator of the fraction: "));
    let denominator = parseInt(prompt("enter the denominator of the fraction: ")); 
  return new Fraction(numerator,denominator);
}
// function main()
// {
//   let a1,a2,b1,b2;
//   [a1,b1,a2,b2]=input();
//   let fraction=add(a1,b1,a2,b2);
//   console.log("the addition of two fraction is %d/%d",fraction.numerator,fraction.denominator);

function output_result(f1,f2,result)
{
  console.log("%d/%d + %d/%d is %d/%d", f1.numerator,f1.denominator, f2.numerator, f2.denominator, result.numerator, result.denominator);
}

function main()
{
  let f1 = input_fraction();
  let f2 = input_fraction();
  let f3 = f1.add(f2)
  output_result(f1,f2,f3);
}

main();
  

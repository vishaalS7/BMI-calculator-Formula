function bmiCalculator(weight,height) {
    var bmi = bmiCalculator (65,1.8);
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

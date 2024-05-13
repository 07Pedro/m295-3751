function verdoppeln(zahl, callback) {
    var ergebnis = zahl * 2;
    callback(ergebnis);
}

verdoppeln(5, function(ergebnis) {
  console.log(ergebnis);
});

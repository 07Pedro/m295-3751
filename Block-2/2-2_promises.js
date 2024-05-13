const fs = require('node:fs');

function leseDateiInhalt(filepath) {
    return new Promise(function(resolve) {
        let inhalt = fs.readFileSync(filepath, 'utf-8');
        resolve(inhalt);
    });
};


leseDateiInhalt('beispiel.txt')
  .then(inhalt => { console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
})
  .catch(err => { console.error('Fehler beim Lesen der Datei:', err);
});

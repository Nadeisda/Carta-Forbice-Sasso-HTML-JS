let punteggioUtente = 0;
let punteggioPc = 0;

function sceltaPc() {
    const scelta = ['carta', 'forbice', 'sasso'];
    const sceltaCasuale = Math.floor(Math.random() * scelta.length);
    return scelta[sceltaCasuale];
}

function risultati(sceltaUtente, sceltaPc) {
    if (sceltaUtente === sceltaPc) {
        return "Pareggio!";
    }
    if (
        (sceltaUtente === 'carta' && sceltaPc === 'sasso') ||
        (sceltaUtente === 'forbice' && sceltaPc === 'carta') ||
        (sceltaUtente === 'sasso' && sceltaPc === 'forbice')
    ) {
        punteggioUtente++;
        return "Hai vinto!";
    } else {
        punteggioPc++;
        return "Hai perso!";
    }
}

function gioca(sceltaUtente) {
    const sceltaDelPc = sceltaPc();
    const risultato = risultati(sceltaUtente, sceltaDelPc);

    document.getElementById('risultato').innerText = `Hai scelto ${sceltaUtente}. Il computer ha scelto ${sceltaDelPc}. ${risultato}`;
    document.getElementById('punteggio-utente').innerText = punteggioUtente;
    document.getElementById('punteggio-pc').innerText = punteggioPc;
    document.getElementById('rigioca').style.display = 'block';
}

function rigioca() {
    document.getElementById('risultato').innerText = '';
    document.getElementById('rigioca').style.display = 'none';
}

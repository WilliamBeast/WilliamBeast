function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCsCpXGX_kHJk2J0_-sJ0dNB-OWDF1cgb8",
        authDomain: "medlemmer-6c5b1.firebaseapp.com",
        databaseURL: "https://medlemmer-6c5b1.firebaseio.com",
        projectId: "medlemmer-6c5b1",
        storageBucket: "medlemmer-6c5b1.appspot.com",
        messagingSenderId: "413046724761"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("bruker");

    function visBruker(snapshot) {
        let brukernr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
            <div>
              <h4> ${brukernr}</h4>
              <ul>
               <li>${info.navn}
               <li>Mobil : ${info.mobil}
               <li>Epost ${info.epost}
              </ul>
            </div>
          `;
    }
    ref.on("child_added", visBruker);
}
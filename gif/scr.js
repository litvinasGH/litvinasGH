
const firebaseConfig = {
    apiKey: "AIzaSyD06RRe5nEF5V6NhDF7dzKukUsGA0wDUZQ",

    authDomain: "githubvc-cb16d.firebaseapp.com",
  
    databaseURL: "https://githubvc-cb16d-default-rtdb.firebaseio.com",
  
    projectId: "githubvc-cb16d",
  
    storageBucket: "githubvc-cb16d.appspot.com",
  
    messagingSenderId: "796184488338",
  
    appId: "1:796184488338:web:bc8c38d97121ab4926f94b",
  
    measurementId: "G-53FWT89H8G"
  
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();


  // Ссылка на базу данных
const visitsRef = db.ref('visits');

// Обновляем счётчик
visitsRef.transaction((currentVisits) => {
  return (currentVisits || 0) + 1;
});

// Получаем и отображаем текущее количество посещений
visitsRef.on('value', (snapshot) => {
  document.getElementById('visitCount').innerText = snapshot.val();
});

  
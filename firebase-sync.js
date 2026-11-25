import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js';
import {getDatabase,ref,onValue,set} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js';
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';
const config={apiKey:'AIzaSyCjLiNrhQ127khm4d2hSLrrGpSYCu-QjWE',authDomain:'quizminero360.firebaseapp.com',databaseURL:'https://quizminero360-default-rtdb.firebaseio.com',projectId:'quizminero360',storageBucket:'quizminero360.firebasestorage.app',messagingSenderId:'953046273876',appId:'1:953046273876:web:ab3aafa7dcd947cbe8c2c1'};
const ADMIN_EMAIL='mundominero360@gmail.com';
const isLive=location.pathname.replace(/\/$/,'')==='/live';
try{
 const app=initializeApp(config),db=getDatabase(app),auth=getAuth(app),liveRef=ref(db,'vidas/live-principal');
 let allowed=false;
 onValue(liveRef,snapshot=>{if(snapshot.exists())window.mm360Apply?.(snapshot.val());else window.mm360Message?.('Sin estado publicado. Abre el panel e inicia sesión.');},error=>window.mm360Message?.('Error de lectura Firebase: '+error.message));
 if(!isLive){
  window.mm360Publish=async state=>{if(!allowed)return;try{await set(liveRef,{...state,updatedAt:Date.now()});window.mm360Message?.('Sincronización activa · Cambios enviados')}catch(error){window.mm360Message?.('Error de escritura: '+error.code+' · '+error.message)}};
  document.getElementById('signIn').onclick=async()=>{try{await signInWithPopup(auth,new GoogleAuthProvider())}catch(error){window.mm360Message?.('Error de inicio de sesión: '+error.code+' · '+error.message)}};
  document.getElementById('signOut').onclick=()=>signOut(auth);
  onAuthStateChanged(auth,user=>{allowed=!!user&&user.email?.toLowerCase()===ADMIN_EMAIL;window.mm360Auth?.(allowed,user?.email||'');if(user&&!allowed)window.mm360Message?.('Acceso denegado: esta cuenta no es la administradora.');});
 }
}catch(error){window.mm360Message?.('Error inicializando Firebase: '+error.message);console.error(error)}

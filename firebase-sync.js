import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js';
import { getDatabase, ref, onValue, set } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';

const config = {
 apiKey: 'AIzaSyCjLiNrhQ127khm4d2hSLrrGpSYCu-QjWE',
 authDomain: 'quizminero360.firebaseapp.com',
 databaseURL: 'https://quizminero360-default-rtdb.firebaseio.com',
 projectId: 'quizminero360',
 storageBucket: 'quizminero360.firebasestorage.app',
 messagingSenderId: '953046273876',
 appId: '1:953046273876:web:ab3aafa7dcd947cbe8c2c1'
};
const ADMIN_EMAIL = 'CORREO_MUNDOMINERO360@GMAIL.COM'; // Cambia por el correo autorizado en las reglas.
const app=initializeApp(config), db=getDatabase(app), auth=getAuth(app);
const isLive = location.pathname.replace(/\/$/,'').endsWith('/live') || new URLSearchParams(location.search).has('live');
const liveRef=ref(db,'lives/live-principal');
const connection=document.getElementById('connection');
const login=document.getElementById('signIn'), logout=document.getElementById('signOut');
const message=(v)=>{if(connection)connection.textContent=v;};
let authorized=false, pending=null, ready=false;
function publish(state){if(!authorized)return;pending=state;if(!ready)return;set(liveRef,pending).catch(e=>message('Error al enviar: '+e.message));}
if(isLive){
 onValue(liveRef,s=>{if(s.exists())window.mm360ApplyState?.(s.val());},e=>console.error('Firebase LIVE:',e));
}else{
 window.mm360Publish=publish;
 login.onclick=async()=>{try{await signInWithPopup(auth,new GoogleAuthProvider());}catch(e){message('No se pudo iniciar sesión: '+e.message)}};
 logout.onclick=()=>signOut(auth);
 onAuthStateChanged(auth,user=>{
  authorized=!!user && user.email?.toLowerCase()===ADMIN_EMAIL.toLowerCase();
  document.body.classList.toggle('authorized',authorized);
  login.classList.toggle('hide',!!user);logout.classList.toggle('hide',!user);
  if(!user){message('Inicia sesión para controlar el LIVE.');return;}
  if(!authorized){message('Acceso denegado para '+user.email+'. Revisa ADMIN_EMAIL.');return;}
  message('Conectado como '+user.email);
  if(ready && pending)publish(pending);
 });
 onValue(liveRef,s=>{
  ready=true;
  if(s.exists()){
   const v=s.val();
   if(window.QUESTION_BANK && window.QUESTION_BANK[v.moduleKey]){window.mm360ApplyPanelState?.(v);}
  }else if(authorized){publish({moduleKey:'loto',index:0,selected:null,revealed:false,ts:Date.now()});}
 },e=>message('Error de lectura: '+e.message));
}

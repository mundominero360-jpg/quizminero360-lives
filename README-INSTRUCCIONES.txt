QUIZMINERO360 - SINCRONIZACIÓN FIREBASE

1. En firebase-sync.js cambia ADMIN_EMAIL por el correo Google autorizado (exactamente el mismo de las reglas).
2. En Firebase > Realtime Database > Reglas, publica:
{
 "rules": {
  "lives": {
   "$liveId": {
    ".read": true,
    ".write": "auth != null && auth.token.email === 'TU_CORREO_REAL@gmail.com' && auth.token.email_verified === true",
    ".validate": "newData.hasChildren(['moduleKey','index','revealed']) && newData.child('moduleKey').isString() && newData.child('index').isNumber() && newData.child('revealed').isBoolean()"
   }
  }
 }
}
Cambia TU_CORREO_REAL@gmail.com por el mismo correo autorizado.
3. En Firebase Authentication > Configuración > Dominios autorizados, agrega quizminero360-lives.vercel.app.
4. Sube index.html, questions.js, firebase-sync.js y vercel.json a la raíz del repositorio GitHub.
5. PANEL: https://quizminero360-lives.vercel.app/panel
   LIVE: https://quizminero360-lives.vercel.app/live
6. Abre el panel, inicia sesión con Google, luego abre LIVE en Edge.

NOTA: La lectura LIVE es pública para permitir la transmisión sin login; no guardes información personal en /lives. La escritura requiere autenticación Google con el correo configurado.

QUIZMINERO360 - CINCO ARCHIVOS PARA GITHUB

1. Sube los CINCO archivos a la raíz de tu repositorio (no a una carpeta).
2. Deben llamarse EXACTAMENTE: index.html, preguntas.js, firebase-sync.js, vercel.json y README-INSTRUCCIONES.txt.
3. Elimina los duplicados antiguos: índice.html y questions.js, si existen y no se utilizan en otro proyecto.
4. Espera el despliegue de Vercel.
5. Panel: https://quizminero360-lives.vercel.app/panel
6. LIVE: https://quizminero360-lives.vercel.app/live
7. En Firebase Authentication habilita Google y autoriza quizminero360-lives.vercel.app.
8. En Firebase Realtime Database > Reglas pega estas reglas y pulsa Publicar (el correo debe coincidir con firebase-sync.js):

{
  "rules": {
    "vidas": {
      "live-principal": {
        ".read": true,
        ".write": "auth != null && auth.token.email === 'mundominero360@gmail.com' && auth.token.email_verified === true",
        ".validate": "newData.hasChildren(['moduleKey', 'index', 'revealed', 'updatedAt']) && newData.child('moduleKey').isString() && newData.child('index').isNumber() && newData.child('revealed').isBoolean() && newData.child('updatedAt').isNumber()"
      }
    }
  }
}

NOTAS:
- La lectura del LIVE es pública; no guardes datos personales en /vidas/live-principal.
- Solo el correo administrador puede escribir. La protección está en reglas Firebase, no solo en la interfaz.
- Abre el panel, inicia sesión con Google y pulsa Siguiente para publicar.
- Para OBS usa una fuente de navegador de 1080 x 1920 con la URL /live.
- El banco original incluido contiene los módulos LOTO y Riesgos eléctricos. Verifica referencias normativas antes de usarlo en capacitación formal.

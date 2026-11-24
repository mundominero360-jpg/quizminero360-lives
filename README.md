# QuizMinero360 — dos pantallas

Subir `index.html`, `questions.js` y `vercel.json` a la raíz de GitHub (reemplazar `index.html` y `questions.js` existentes). Vercel despliega automáticamente si está conectado al repositorio.

- **Panel:** https://quizminero360-lives.vercel.app/panel
- **Pantalla LIVE:** https://quizminero360-lives.vercel.app/live

En el panel selecciona preguntas y pulsa «Abrir pantalla LIVE». En TikTok LIVE Studio añade **Captura de ventana** y elige exclusivamente la ventana LIVE de Chrome, no el panel. Ambos deben abrirse en Chrome en el mismo perfil y ordenador. La sincronización usa almacenamiento local y eventos `storage`. No sincroniza entre dispositivos o navegadores aislados, ni garantiza funcionamiento en fuente navegador de OBS.

**Importante:** `/panel` es una URL separada, **no privada**: todavía no hay inicio de sesión. Para proteger el panel de terceros y sincronizar entre dispositivos se requiere autenticación y un backend en tiempo real.

**Nitidez:** La resolución final depende de los píxeles reales capturados, el zoom y la escala de Windows, y el ajuste de TikTok LIVE Studio. El modo `/live?native=1` no escala la salida 1080 × 1920, pero necesita una fuente que realmente capture esa resolución. No amplíes capturas pequeñas.

Se conserva el banco original de 50 preguntas.

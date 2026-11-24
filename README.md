# QuizMinero360 — FULL HD 1080 × 1920

## Archivos
- `index.html`: panel del presentador y salida Full HD en la misma aplicación.
- `questions.js`: banco original de 25 preguntas LOTO y 25 de riesgos eléctricos, sin cambios.

## Subir a GitHub
1. En el repositorio `quizminero360-vidas`, entra a la rama **principal**.
2. **Agregar archivo → Cargar archivos** y selecciona `index.html` y `questions.js`.
3. Confirma los cambios directamente en la rama principal. Vercel debería desplegar la actualización automáticamente.
4. Si GitHub muestra un archivo `índice.html`, NO sustituye a `index.html`: el archivo debe llamarse exactamente `index.html`.

## Uso en TikTok LIVE Studio
1. Abre `https://quizminero360-lives.vercel.app/` para controlar las preguntas.
2. Pulsa **Abrir pantalla LIVE Full HD (1080 × 1920)**. Se abre una ventana con **solo el quiz**.
3. En TikTok LIVE Studio, captura **esa ventana**, no la ventana del panel. La salida se ha maquetado a 1080 × 1920 píxeles.
4. Si usas captura de pantalla, verifica que la ventana no esté reducida por Chrome/Windows; reducir y luego ampliar produce borrosidad. Para garantizar resolución de fuente de 1080 × 1920, usa una fuente de navegador en OBS con URL `https://quizminero360-lives.vercel.app/?live=1` y dimensiones 1080 × 1920. **Importante**: la sincronización de preguntas usa almacenamiento del mismo navegador; una fuente de navegador OBS puede estar aislada y no sincronizar automáticamente con Chrome. Para control sincronizado, usa la ventana de Chrome de salida LIVE como fuente, o configura una fuente con almacenamiento compartido.
5. Cambia preguntas y revela respuestas en la ventana del presentador. La ventana LIVE se actualiza automáticamente mientras ambas estén en el mismo origen y perfil del navegador.

## Diagnóstico de nitidez
El lienzo HTML ahora tiene dimensiones nativas de 1080 × 1920 en modo LIVE, con letras más grandes. La nitidez final depende también de la resolución efectiva de captura, escalado de Windows, zoom del navegador y ajustes de transmisión. Evita ampliar una ventana capturada de 450 px hasta 1080 px.

## Banco
50 preguntas originales, dos módulos, respuestas y explicaciones sin modificar. Comprueba referencias normativas antes de usar en certificaciones.

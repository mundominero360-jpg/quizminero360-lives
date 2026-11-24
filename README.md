# QuizMinero360 — versión corregida para LIVE

## Archivos
- `index.html`: interfaz y pantalla vertical 9:16 optimizada.
- `questions.js`: banco original, **sin cambios** (25 LOTO y 25 riesgos eléctricos).

## Publicar en GitHub
1. Entra al repositorio y abre la rama `principal`.
2. Sube `index.html` y `questions.js` a la **raíz**, reemplazando los existentes. Los nombres deben ser EXACTAMENTE esos (no `índice.html`).
3. Confirma cambios. Comprueba el despliegue de Vercel.

## Captura y nitidez
- Panel del presentador: `https://quizminero360-lives.vercel.app/`
- Vista previa LIVE para Chrome: `https://quizminero360-lives.vercel.app/?live=1`
- Salida NATIVA sin escalado (para fuente de navegador): `https://quizminero360-lives.vercel.app/?live=1&native=1`
- En **OBS**, añade una fuente **Navegador** con URL nativa y tamaño **1080 × 1920**. NO uses captura de una ventana de Chrome reducida a 400–500 px y luego la amplíes: ese procedimiento desenfoca el texto.
- En **TikTok LIVE Studio**, puedes usar OBS Virtual Camera si está disponible, o una fuente compatible de navegador con resolución vertical adecuada. Comprueba el encuadre en vista previa antes de emitir.
- IMPORTANTE: la fuente Navegador de OBS puede tener almacenamiento separado de Chrome; por eso **la sincronización automática del panel no está garantizada en OBS**. La vista previa Chrome y el panel sí se sincronizan cuando están en el mismo perfil y origen. Para sincronización robusta entre aplicaciones sería necesario un backend o canal compartido.
- Si usas captura de Chrome, agranda la ventana de ORIGEN y usa zoom que permita ver todas las opciones, evitando estirarla mucho dentro de LIVE Studio.

## Cambios
- Diseño vertical 9:16, tipografía de alternativas ampliada, espaciados y márgenes ajustados.
- Modo `native=1` sin transformaciones CSS de reducción.
- Botón para copiar URL nativa desde el panel.
- Se mantienen los 50 enunciados, alternativas, respuestas, explicaciones y fundamentos tal como fueron proporcionados.

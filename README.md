# QuizMinero360 — Lives de Supervisión de Alto Riesgo

Aplicación estática (HTML, CSS y JavaScript) para GitHub + Vercel, sin base de datos ni dependencias.

## Despliegue
1. Sube `index.html` y `questions.js` a la raíz de un repositorio de GitHub.
2. En Vercel: **Add New → Project → Import Git Repository**.
3. Selecciona **Framework Preset: Other**, deja el directorio raíz `./` y despliega.
4. Abre la URL pública. Elige Live 01 (LOTO) o Live 02 (Riesgos eléctricos).

## Transmisión TikTok
- El lienzo del quiz tiene proporción **9:16**. En TikTok LIVE Studio u OBS, captura solo el rectángulo vertical, no el panel lateral de presentador.
- En OBS configura el lienzo a **1080 × 1920** y ajusta la captura del navegador a esa proporción.
- Atajos: flechas izquierda/derecha para preguntas, espacio para revelar, A-D para seleccionar, R para limpiar.
- En pantalla completa, la visualización usa la pantalla disponible; para emisión se recomienda capturar y recortar el área `.stage`.

## Contenido
25 preguntas de LOTO y 25 de riesgos eléctricos, con respuestas, explicaciones y referencias técnicas. Se han incluido como bancos de preparación para lives; las referencias normativas y los procedimientos específicos deben validarse antes de su uso en una evaluación oficial.

## Personalización
- Colores corporativos en CSS: `--gold: #ffcf15`, fondo negro y detalles dorados.
- Las preguntas están en `questions.js`, en `QUESTION_BANK.loto` y `QUESTION_BANK.electric`.
- La aplicación no almacena datos personales ni resultados.

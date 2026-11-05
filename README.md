# SaraHealth — sitio web estático

Este proyecto conserva la página HTML original y separa los estilos y el JavaScript en archivos independientes. Está preparado para publicarse como sitio estático en Cloudflare Pages mediante GitHub. No requiere Astro, Node.js, base de datos ni proceso de compilación.

## Estructura

- `index.html`: contenido de la página.
- `assets/css/styles.css`: estilos y diseño adaptable.
- `assets/js/main.js`: año automático y formulario que prepara un mensaje de WhatsApp.
- `assets/images/`: favicon y referencia visual original.

## Publicación en Cloudflare Pages

- Conectar el repositorio de GitHub.
- Framework preset: **None**.
- Build command: dejar vacío.
- Build output directory: `/` (directorio raíz del proyecto).
- Root directory: `/`.

## Datos de contacto incorporados

- WhatsApp: `+57 311 313 8893` (enlace internacional `573113138893`).
- Correo: `clientes@sarahealth.com.co`.

## Revisiones necesarias antes de publicar

1. Confirmar que el número de WhatsApp abre la cuenta correcta y que el correo recibe mensajes.
2. Confirmar que Instagram, Facebook y TikTok enlazan a perfiles oficiales. Los enlaces actuales se conservaron del HTML recibido.
3. Validar que cada servicio descrito corresponde a la oferta real de SaraHealth y a las habilitaciones, competencias y condiciones aplicables. En particular, revisar los procedimientos de enfermería mencionados.
4. Confirmar el alcance geográfico y los textos de misión y visión.
5. Revisar derechos, permisos y disponibilidad de las fotografías remotas de Unsplash; requieren conexión a internet.
6. Probar formulario, enlaces, navegación y visualización en celulares y computadores. El formulario no almacena ni envía datos a un servidor: prepara un mensaje para que el visitante lo revise y lo envíe por WhatsApp. No solicitar datos clínicos sensibles.

## Nota

La imagen `referencia-visual-sarahealth.png` se conserva como material de referencia y no se utiliza como imagen de la página.

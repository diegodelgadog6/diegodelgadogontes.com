# diegodelgadogontes.com

Portafolio personal de Diego Delgado. Presenta mi perfil, mis proyectos destacados de GitHub y un formulario de contacto que envía correos.

**Sitio en producción:** https://diegodelgadogontes.com

## Características

- Perfil con diseño inspirado en GitHub: tarjeta de identidad, README y proyectos fijados.
- Tarjetas de proyecto con enlaces al repositorio, al backend (cuando existe) y a la demo.
- Formulario de contacto que envía el mensaje por correo mediante [Resend](https://resend.com).
- Animaciones con Framer Motion que se desactivan si el sistema pide reducir el movimiento.

## Tecnologías

- React 19 y Vite
- Framer Motion y React Icons
- Función serverless de Vercel (`api/server.js`) con Resend
- Despliegue en Vercel

## Estructura

```text
src/
  App.jsx        Página completa: perfil, proyectos y contacto
  App.css        Estilos de la página
  index.css      Estilos globales
  main.jsx       Punto de entrada
api/
  server.js      Endpoint POST /api/server que envía el formulario de contacto
vercel.json      Build y reglas de enrutamiento
```

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

La página queda en http://localhost:5173.

`npm run dev` solo levanta el frontend. Para probar el formulario de contacto, ejecuta el proyecto con `vercel dev` y define la variable de entorno:

```bash
RESEND_API_KEY=tu_api_key
```

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Ejecuta ESLint |

## Autor

**Diego Alejandro Delgado Gontes** · [GitHub](https://github.com/diegodelgadog6) · [LinkedIn](https://www.linkedin.com/in/diegodelgadog6)

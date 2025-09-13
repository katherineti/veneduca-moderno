publique la rama deploy en github page: la rama deploy es el contenido de la carpeta /dist

Claro, entiendo lo que hiciste. Ese es un método válido para desplegar tu sitio en GitHub Pages, pero tiene algunos pasos que pueden ser un poco complicados.

Al crear una rama, borrar todos los archivos y luego mover el contenido de dist a la raíz, puede que te hayas encontrado con que la página no se muestra. Esto sucede porque GitHub Pages necesita que el contenido del sitio esté en la raíz de la rama que elegiste.

Por qué el sitio está en blanco
Tu sitio está en blanco porque Vite usa rutas absolutas (/) por defecto para los archivos de JavaScript y CSS. Cuando publicas en GitHub Pages, el sitio no está en la raíz del dominio (por ejemplo, tupagina.com), sino en un subdirectorio con el nombre del repositorio (por ejemplo, katherinelli.github.io/veneduca-moderno/).

El navegador busca los archivos en la raíz del dominio (en /assets/…), pero no los encuentra porque la ruta correcta debería ser en el subdirectorio del repositorio (/veneduca-moderno/assets/...).

La solución: Cambiar la ruta base en Vite
Necesitas decirle a Vite que use la ruta relativa de tu repositorio en lugar de la ruta absoluta. Para hacer esto, modifica el archivo vite.config.ts.

Abre tu archivo vite.config.ts.

En la configuración, agrega la propiedad base y establece su valor al nombre de tu repositorio.

TypeScript

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/veneduca-moderno/", // <<-- Agrega esta línea
  plugins: [react()],
})
Importante: Asegúrate de incluir las barras inclinadas (/) al principio y al final del nombre de tu repositorio.

Vuelve a compilar y desplegar.

Guarda los cambios en vite.config.ts.

Borra tu carpeta dist para asegurar una compilación limpia.

Ejecuta npm run build para generar una nueva carpeta dist con las rutas corregidas.

Sigue los pasos para subir el contenido de la nueva carpeta dist a tu rama de despliegue en GitHub (como deploy o gh-pages).

Una vez que GitHub Pages termine de desplegar la nueva versión, tu sitio debería mostrarse correctamente en la URL https://katherinelli.github.io/veneduca-moderno/.
¿Cómo funciona GitHub Pages sin la carpeta dist en el repositorio?
Ya que GitHub Pages es un servicio de hosting para archivos estáticos, necesita tener los archivos compilados en el repositorio para poder mostrarlos. Entonces, ¿cómo lo logras sin subir dist?

Hay dos enfoques principales:

La Opción del build en tu máquina y git en otra rama:

Mantienes el dist ignorado en la rama principal (main o master).

Una vez que tu código esté listo, haces un npm run build en tu máquina.

Creas una nueva rama (por ejemplo, gh-pages o deploy).

Eliminas todos los archivos en esta nueva rama, excepto el dist.

Mueves el contenido de dist a la raíz de esta rama.

Haces un commit y push de esta rama gh-pages a GitHub.

En la configuración de tu repositorio en GitHub, le indicas a GitHub Pages que use la rama gh-pages para desplegar el sitio.

La Opción de GitHub Actions (recomendado):

Esta es la forma más moderna y automática.

Tú solo subes tu código fuente a la rama principal (main).

Creas un archivo de flujo de trabajo de GitHub Actions (.yml) en tu repositorio.

Este archivo le dice a GitHub que, cada vez que hagas un push a la rama main, debe:

Descargar tu código.

Ejecutar el comando npm run build.

Tomar el contenido de la carpeta dist.

Desplegarlo en GitHub Pages automáticamente.

Con esta opción, tú solo te preocupas por tu código fuente y GitHub se encarga de todo el proceso de compilación y despliegue por ti.

La segunda opción es la más profesional y eficiente, ya que automatiza el proceso. Te permite tener un repositorio limpio, donde solo está tu código fuente, y a la vez tener un sitio web en vivo que se actualiza automáticamente con cada cambio.

Para comenzar con GitHub Actions, puedes buscar plantillas (templates) para "Vite deploy to GitHub Pages" que te darán el archivo de flujo de trabajo ya escrito.
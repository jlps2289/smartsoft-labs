<center>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 223 236" width="60"><g clip-path="url(#a)"><path fill="url(#b)" d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"></path><path fill="url(#c)" d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"></path></g><defs><linearGradient id="b" x1="49.009" x2="225.829" y1="213.75" y2="129.722" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"></stop><stop offset=".24" stop-color="#F60A48"></stop><stop offset=".352" stop-color="#F20755"></stop><stop offset=".494" stop-color="#DC087D"></stop><stop offset=".745" stop-color="#9717E7"></stop><stop offset="1" stop-color="#6C00F5"></stop></linearGradient><linearGradient id="c" x1="41.025" x2="156.741" y1="28.344" y2="160.344" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"></stop><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"></stop></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h223v236H0z"></path></clipPath></defs></svg>

# SmartSoft Labs | Prueba Técnica Frontend

Este proyecto se desarrollo de acuerdo a las especificaciones solicitadas en el documento de requerimientos teniendo en cuenta las principales tecnologías solicitadas.

[![angular](https://img.shields.io/badge/Angular-red?logo=Angular&style=for-the-badge)][angular]
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=Typescript&logoColor=white&style=for-the-badge)][typescript]

Este desarrollo se realizo con el [Angular][angular], el lenguaje de compilación es [TypeScript][typescript], [TailwindCss][tailwindcss] y [Angular Material][angular-material].

</center>


---
<br />

## ⚙️ Requisitos de Inicio

Antes de iniciar con el desarrollo, es importante tener instaladas las siguientes herramientas:

[![NodeJS](https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=node.js&logoColor=white)][node]
[![GIT](https://img.shields.io/badge/GIT-gray?style=for-the-badge&logo=git)][git]

-   [NodeJS][node] para la ejecución del proyecto. [Descargar NodeJS][node]
-   [Git][git] para la gestión del repositorio proyecto. [Instalación de Git][git]

<br>

---

<br>

## 👨🏻‍💻 Requisitos de la Prueba

Estos son los puntos a tener en cuenta en el desarrollo de la aplicación:

- [x] Implementar 3 secciones
	- [x] Login
	- [ ] Analizar un archivo csv
    	- [ ] Cargar un archivo .csv para extraer información del mismo.
    	- [ ] Estado con mayor acumulado a la fecha.
    	- [ ] Estado con menor acumulado a la fecha.
    	- [ ] ¿Cuál fue el estado más afectado (explicar por qué)?
    	- [ ] Representar en una gráfica circular (implementar alguna librería que sirva de ayuda para esto) el porcentaje del total de muertes por cada estado.

	- [ ] Implementar un crud sencillo
      - [ ] Validaciones de que los campos estén correctamente diligenciados así como su mensaje de error
      - [ ] Tabla donde se pueda ver mediante una MatTable con un paginador funcionando (angular material tiene un paginador)
      - [ ] Modal donde se pueda agregar/editar
      - [ ] Buscar (por texto)
      - [ ] Crear
      - [ ] Editar
      - [ ] Borrar

- [x] Implementar guardianes
- [x] Implementar módulos, servicios y componentes

#### Requisitos no funcionales

- [x] Protección de rutas
- [x] Página responsive
- [x] Implementación de formularios tipificados
- [x] Implementar Tailwind
- [x] Implementar Angular Material.
- [x] Lazy loading



<br>

---

<br>


# 🏁 Guía de Inicio Rápido

> [!WARNING]
> El proyecto incluye extensiones, configuraciones y tareas automáticas para ejecutar en el edito [Visual Studio Code](https://code.visualstudio.com/) y hay una tarea que al abrir el proyecto en el edito ejecuta el comando `npm start`. Por lo tanto es recomendable realizar primero las instalaciones antes de abrir el proyecto.

Antes de iniciar el desarrollo se debe instalar las dependencias del proyecto ejecutando el comando `npm install` desde la carpeta raíz del proyecto. Al realizar la instalación el proyecto ejecuta automáticamente la instalación de los hooks de git para aplicar los formatos con el hook `pre-commit`.

## Scripts validos de ejecución para el proyecto

En el directorio del proyecto se pueden ejecutar los siguientes scripts:

### `npm start` o `ng serve -o`

Corre la aplicación en modo development.\
Automáticamente se abrirá la url [http://localhost:2289/](http://localhost:2289/) para ver la aplicación corriendo en el navegador en el ambiente de desarrollo (development).

### `npm run build`

Compilar el proyecto para producción y se generan los archivos en la carpeta `dist/`.

## Otros scripts validos

| Script             | Descripción                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `npm run test`     | Correr las pruebas unitarias.                                                                                     |
| `npm run format`   | Aplicar el formato con las configuraciones del [Prettier](https://prettier.io/) a todo el proyecto.               |
| `npm run lint`     | Verificar errores del código por medio de [EsLint](https://eslint.org/) a todo el proyecto.                       |
| `npm run lint:fix` | Verificar errores y aplicar correcciones al código por medio de [EsLint](https://eslint.org/) a todo el proyecto. |

> [!TIP]
> Por medio del pre-commit se ejecutan los commandos `npm run lint:fix` y `npm run format` antes de realizar algún commit al proyecto.

<br>

---

<br>

# Tecnologías y Librerías Utilizadas

Es importante conocer como esta desarrollada esta aplicación y como es su infraestructura de desarrollo. Estas son las tecnologías y librerías implementadas.\
Para conocer más sobre ellas puede consultar su documentación en los siguientes links:

[![Angular Material](https://img.shields.io/badge/Angular_Material-yellow?logo=Angular&style=for-the-badge)][angular-material]
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-white?logo=Tailwindcss&style=for-the-badge)][tailwindcss]
[![@ngneat/query](https://img.shields.io/badge/@ngneat/query-purple?style=for-the-badge)][ngneat-query]
[![Sass](https://img.shields.io/badge/Scss-CC6699?logo=sass&style=for-the-badge&logoColor=white)][scss]

-   [Angular Material][angular-material]
-   [TailwindCss][tailwindcss]
-   [@ngneat/query][ngneat-query]
-   [Scss][scss]

<br>

---

<br>

## Arquitectura del Proyecto

El proyecto esta enfocado en un crecimiento modular y en el consumo de microservicios. El proyecto se estructura de la siguiente forma:

```
├─ .husky/                                      # Carpeta con hooks de git.
├─ .vscode/                                     # Carpeta de archivos de configuración del editor de código vscode.
├─ sources/                                     # Carpeta de archivos de diseño, documentos, etc... relevantes para la aplicación.
├─ src/                                         #
|  ├── app/                                     # Carpeta con el core de la aplicación.
|  |   └── pages/                               #  - Carpeta de rutas y paginas de la app.
|  |                                            #
|  ├── assets/                                  # Carpeta de archivos estáticos como imágenes, fuentes, javascripts, etc.
|  |                                            #
|  ├── services/                                # Carpeta y archivos de servicios.
|  |   └── guards/                              #  - Archivos guardianes de la aplicación.
|  |   └── **/*.service.ts                      #  - Carpetas y archivos de servicios.
|  |                                            #
|  ├── shared/                                  # Funciones reutilizables que se ejecutan antes de la ejecución de las rutas.
|  |   └── constants/**/*.constant.ts           #  - Carpeta y archivos de constantes personalizados.
|  |   └── helpers/**/*.helper.{ts,tsx}         #  - Carpeta y archivos de helpers personalizados.
|  |   └── ui/                                  #  - Archivos reutilizables de la interface de usuarios.
|  |       ├── atoms/**/*.tsx                   #  --- Pequeños fragmentos de código con una función especifica.
|  |       ├── components/**/*.component.tsx    #  --- Componentes personalizados.
|  |       └── views/**/*.view.tsx              #  --- Vistas generales o repetitivas del proyecto.
|  |                                            #
|  └── types/                                   # Carpeta de tipados de la aplicación.
|  |                                            #
|  └── **                                       # Archivos principales de la aplicación. main, html, style, favicon, etc.
|                                               #
└── **                                          # Otros archivos correspondientes a configuraciones del proyecto.
|                                               #
└───── 
```

<!-- Requisitos -->

[git]: https://git-scm.com/downloads
[node]: https://nodejs.org/es/download/

<!-- Tecnologías -->

[angular]: https://angular.dev/
[angular-material]: https://material.angular.io/
[ngneat-query]: https://github.com/ngneat/query/?tab=readme-ov-file
[tailwindcss]: https://tailwindcss.com/
[typescript]: https://www.typescriptlang.org/
[scss]: https://sass-lang.com/

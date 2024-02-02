<center>

<img src='https://github.com/jochelo2289/smartsoft-labs-technical-test/assets/26493030/da83235e-a90c-4a68-a5d6-2e79a734a973' alt='logo_smartsoftlabs' width='250'>

<br/>

# SmartSoft Labs | Prueba Técnica Frontend

Este proyecto se desarrollo de acuerdo a las especificaciones solicitadas en el documento de requerimientos teniendo en cuenta las principales tecnologías solicitadas.

[![angular](https://img.shields.io/badge/Angular-red?logo=Angular&style=for-the-badge)][angular]
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=Typescript&logoColor=white&style=for-the-badge)][typescript]

Este desarrollo se realizo con el [Angular][angular], el lenguaje de compilación es [TypeScript][typescript], [TailwindCss][tailwindcss] y [Angular Material][angular-material].

<br />

<img src='https://github.com/jochelo2289/smartsoft-labs-technical-test/assets/26493030/6688da34-8471-41af-8645-6d44f298c794' alt='screenshot' width='600' />
<img src='https://github.com/jochelo2289/smartsoft-labs-technical-test/assets/26493030/e1edd83b-2e6e-44ea-9e23-32ee74fe3904' alt='screenshot' width='600' />

<br />

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

# 🏁 Guía de Inicio Rápido

> [!WARNING]
> El proyecto incluye extensiones, configuraciones y tareas automáticas para ejecutar en el editor [Visual Studio Code](https://code.visualstudio.com/) y hay una tarea que; al abrir el proyecto en el editor, ejecuta el comando `npm start`. Por lo tanto se recomienda realizar las instalaciones antes de abrir el proyecto en el edito.

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


# 👨🏻‍💻 Requisitos de la Prueba

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

- [x] Implementar diseño layout
  - [x] Navbar
  - [x] Sidenav
  - [x] Footter
  - [x] Content
- [x] Implementar guardianes
- [x] Implementar módulos, servicios y componentes

#### Requisitos no funcionales

- [x] Protección de rutas
- [x] Página responsive
- [x] Implementación de formularios tipificados
- [x] Implementar Tailwind
- [x] Implementar Angular Material.
- [x] Lazy loading

#### Recomendaciones y Opcionales

- [ ] Implementar testing unitario en Karma/Jasmine
- [x] Mobile first.
- [x] Responsive mobile landscape.
- [x] Implementar atomic design o similar.
- [x] Utilizar el logro empresarial como referencia.

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

<br />
---
<br />

## Curiosidades

- El proyecto incluye 2 helpers para; uno encrypta y desencrypta información y otro para la gestión del storage del navegador usando el helper de encryptar, y se hace para encryptar desde la keys del storage como sus valores:

![Encrypt Storage](https://github.com/jochelo2289/smartsoft-labs-technical-test/assets/26493030/11737734-d767-43d5-90f8-1c709e4347dc)

- El login trae información diligenciada porque se emula un error en el login:

![Error auth](https://github.com/jochelo2289/smartsoft-labs-technical-test/assets/26493030/c1dce246-494b-435e-9049-f1f1cb902b86)

- La aplicación incluye una vista para páginas no encontradas:

![Page not found](https://github.com/jochelo2289/smartsoft-labs-technical-test/assets/26493030/05863068-3306-43bc-ab69-04ce15efae09)




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

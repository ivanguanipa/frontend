## Caracteristicas
Las características  principales de este bloque son: 

- Uso del CLI [create-react-app](https://github.com/facebook/create-react-app)
- Construido con [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- Soporte para enrutamiento con [react-router](https://reacttraining.com/react-router/web/guides/quick-start). 
- Soporte de [redux](https://react-redux.js.org/introduction/quick-start), para almacenar el estado de la aplicación.
- Uso de [Styled-components](https://styled-components.com/docs) para maquetado de estilos encapsulados de componentes.
- Uso de [Formik](https://jaredpalmer.com/formik) para la construcción de formularios reactivos.
- Soporte para peticiones Http con [axios](https://github.com/axios/axios). Existe una instancia de axios que esta configurada con información que es transversal a todas las peticiones. Cada que se necesite acceder a una Api se recomienda usar esta instancia que se encuentra en **src/core/config/AxiosConfig.ts**
- Uso de  [variables por ambiente](https://create-react-app.dev/docs/adding-custom-environment-variables/); existén dos archivos .env.development (variables en ambiente desarrollo) y .env.production (variables para producción, reemplazadas cuando se ejecuta la tarea **npm run build**). Adicionalmente puede crear más archivos de variables como está descrito en el link. 
- Soporte de pruebas unitarias con [enzyme](https://enzymejs.github.io/enzyme/).

## Estructura del proyecto

Se utiliza la guía de estilos de [Angular](https://angular.io/guide/styleguide) adaptada para [react](https://medium.com/@amcdnl/react-for-the-angular-dev-be21a39a382):

![Estructura de carpetas del bloque](https://drive.google.com/uc?id=1njpgQXzBoItWG81GjfcZE_xLVopTZYco)

## Para instalar este bloque se deben ejecutar los siguientes comandos

- `npm install` para descargar las dependencias
- `npm start` inicia la aplicación en modo desarrollo, puede abrir el navegador en la siguiente url [http://localhost:3000](http://localhost:3000)
- `npm test` para ejecutar las pruebas
- `npm run build` para generar el artefacto distribuible para producción 

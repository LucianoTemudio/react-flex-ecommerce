
# Proyecto de ecommerce - React Flex

El proyecto trata de un ecommerce de bebidas alcohólicas.

Cuenta con una vista inicial donde se puede ver el listado de productos, y vista detalle donde se puede acceder a un producto en particular. Desde ambas vistas se pueden agregar o quitar productos del carrito.

Para confirmar la compra primero hay que acceder al ícono del carrito en la Navbar. Se accederá de esta manera a la vista del carrito donde el usuario podrá ver los productos agregados al carrito, sus unidades, y subtotales. Luego, para concretar la compra el usuario debe completar el formulario (nombre + email) y hacer click en "Finalizar compra". Esta acción cargará la órden en Firestore. El usuario verá en el DOM el mensaje de confirmación de compra con el id de la misma.




## Herramientas utilizadas

| Herramienta | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| Firestore | Base de datos | Se implementó Firestore como base de datos de los productos de la tienda. Asimismo, las órdenes de compra se cargan en Firestore al confirmar las mismas. |
| React | Librería | Se desarrolló el front-end de la webapp usando React. |

## Appendix

Comandos para ejecutar la app: 
```bash
  cd react-flex-ecommerce
  npm run dev
```

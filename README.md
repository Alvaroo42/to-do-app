# ToDo App - Frontend (SPA)

*Aplicación Web tipo SPA (Single Page Application) desarrollada en Angular para la gestión de tareas (ToDo's). Este proyecto constituye el Frontend del Sistema Distribuido, comunicándose de forma asíncrona e independiente con dos microservicios de Backend: uno para la gestión de la persistencia (API-CRUD) y otro para la autenticación y registro de usuarios (API-AUTH).*

A nivel de interfaz y navegación, la aplicación está estructurada en los siguientes componentes y rutas principales:

| Ruta de Navegación | Componente Angular | Descripción |
| :--- | :--- | :--- |
| `/login` | `LoginComponent` | Formulario de acceso. Recoge credenciales (email/password) y solicita un token JWT al servicio WS Auth. |
| `/` (Raíz) | `TasksComponent` | Componente principal. Muestra el formulario de creación de tareas y la lista dinámica. **Ruta protegida** (requiere autenticación). |
| *Cualquier otra* (`**`) | `Redirección` | Redirige automáticamente a la raíz `/` para mantener el flujo de la SPA seguro. |

> **Nota de Arquitectura:** Las peticiones salientes hacia los servicios Backend son interceptadas automáticamente por `AuthInterceptor`, el cual inyecta el token de seguridad JWT en la cabecera HTTP (Bearer) de cada solicitud. El acceso a la vista principal está blindado por `authGuard`.

## Despliegue y Ejecución 📦

Al ser un Sistema Distribuido, para que este Frontend funcione correctamente en un entorno local, es **estrictamente necesario** inicializar primero los servicios de Backend y la Base de Datos.

**Orden de inicialización sugerido (en terminales independientes):**
1. **Base de Datos:** `sudo systemctl start mongod` (MongoDB en puerto 27017).
2. **Servicio CRUD:** `cd api-crud` -> `npm start` (Servidor escuchando en puerto 4000/3000).
3. **Servicio Auth:** `cd api-auth` -> `npm start` (Servidor escuchando en HTTPS puerto 4100).
4. **Frontend (Este proyecto):** `ng serve` (Angular Live Server en `http://localhost:4200`).

*Importante: Si es la primera vez que se ejecuta y se usan certificados SSL autofirmados en el Backend, es posible que el navegador bloquee la conexión inicial (CORS/Privacidad). Se debe aceptar la excepción de seguridad accediendo directamente a una ruta GET del Backend (ej. `https://localhost:4100/api/auth`) desde el navegador.*

## Construido con 🛠️

* **[Angular](https://angular.dev/)** - Framework de desarrollo frontend basado en TypeScript.
* **[RxJS](https://rxjs.dev/)** - Librería para programación reactiva usando Observables, fundamental para las peticiones HTTP asíncronas.
* **[Bootstrap 5](https://getbootstrap.com/) (@ng-bootstrap)** - Framework CSS para el diseño responsive y estructuración de la interfaz gráfica (UI).
* **[Font Awesome](https://fontawesome.com/)** - Librería de iconos vectoriales utilizada para la botonera y la barra de navegación.
* **Angular Router & Guards** - Sistema de navegación interno y protección de rutas mediante inyección de dependencias funcionales.

## Versionado 📌

| Tag / Commit | Descripción |
| :--- | :--- |
| `v1.0.0` | Proyecto base generado con CLI + Instalación de Bootstrap y Font Awesome. |
| `v1.1.0` | Estructura base del proyecto (Creación de componentes: login, tasks y navbar sin lógica). |
| *(commits)* | Implementación paulatina de `UserService`, `TaskService`, `AuthInterceptor` y `AuthGuard`. |
| `v2.0.0` | **Aplicación ToDo App completada.** Formularios operativos y conectados a los servicios Backend. |
| `v2.1.0` | **Mejora UI/UX:** Implementación de menú dinámico de Logout en la NavBar. |

## Autores ✒️

* **Paco Maciá** - *Arquitectura base y dirección del proyecto*
* **Álvaro Márquez Sirvent** - *Desarrollo, integración y documentación* ##

Este proyecto es de carácter académico, desarrollado para la asignatura de Sistemas Distribuidos (SD).

## Expresiones de Gratitud 🎁

* A la paciencia lidiando con los errores de CORS y certificados autofirmados 📢
* Invita una cerveza 🍺 o un café ☕ a quien te ayude a encontrar ese puerto mal configurado.
* Da las gracias públicamente 🤓.
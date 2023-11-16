# ¡Explora "SophIA": Tu nueva compañera en la aventura educativa!👩‍🏫

¡Dale la bienvenida a la era de la información con estilo! Con **SophIA**, te sumerges en un viaje de descubrimiento sin precedentes. Esta herramienta de vanguardia está diseñada meticulosamente para enriquecer tus métodos de enseñanza, aportándote un acceso instantáneo a un universo de datos sobre la vida escolar y comunitaria en los diversos barrios de Barcelona. Con "SophIA", no solo obtendrás contenidos educativos interactivos y atractivos, sino que también conectarás con la realidad local de manera única, accediendo a través de OpenData a información vital como la población, renta, asociaciones, servicios sociales y mucho más. ¡Prepárate para transformar la educación con "SophIA" y llevar tu experiencia docente al siguiente nivel!

Accede a la beta pública en: ```http://sophia.sixedge.es:8080/```
## Características Principales 🌟
**Frontend React:** Interfaz de usuario intuitiva y responsive.

**Backend NodeJS y ExpressJS:** Servidor eficiente y escalable.

**Base de Datos con FileSystem:** Almacenamiento seguro y accesible con el propio filesystem del servidor.

Protocolo REST API: Comunicación efectiva entre cliente y servidor.
Infraestructura y Despliegue en Producción: Alojado en un VPS en OVH para un rendimiento óptimo (```http://sophia.sixedge.es:8080/```) y accesible mediante un DNS gestionado usando Cloudflare.
---
Estructura del Repositorio: Monorepo con espacios de trabajo de Yarn.
## Instalación y Configuración ⚙️
Para comenzar a utilizar "SophIA" en un entorno local sigue estos pasos:

Instalación de Dependencias:
Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias necesarias y arrancar el proyecto en modo desarrollo.
```
yarn
yarn dev
```
La aplicacion estara ejecutandose en localhost:8080

Iniciar la Aplicación en Producción:
Para arrancar la aplicación en modo producción, usa:

### Variables de entorno
No olvides añadir tu clave de OpenAI para usar chat GPT. La clave privada de Open.ai se guarda
en la variable de entorno```OPENAI_SK``` que se encuentra declarada en el fichero ```apps/api/.env```

# Datos Abiertos de Barcelona 🏙️
"SophIA" utiliza datos directamente del OpenData Barcelona, proporcionando información actualizada y relevante sobre escuelas y asociaciones en diferentes barrios.

# Contribuciones y Soporte 🤝
Tus contribuciones son bienvenidas. Si encuentras un problema o tienes una sugerencia, no dudes en abrir un issue o enviar un pull request.

¡Gracias por apoyar a "SophIA" en su misión de ayudar a los profesores y mejorar la educación! 🎓🌍 

Made with ❤️

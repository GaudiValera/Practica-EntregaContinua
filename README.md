## 🚀 Despliegue Automático con GitHub Actions, Docker y Render

Este proyecto implementa un flujo completo de **Integración y Despliegue Continuo (CI/CD)**.  
Cada vez que se realiza un push en la rama `main`, GitHub Actions ejecuta automáticamente los siguientes pasos:

1. **Construye** la imagen Docker del proyecto.
2. **Publica** la imagen en Docker Hub.
3. **Despliega** automáticamente la aplicación en **Render** utilizando las credenciales configuradas como secretos (`DOCKER_USERNAME`, `DOCKER_PASSWORD`, `RENDER_SERVICE_ID` y `RENDER_API_KEY`).

La aplicación se ejecuta en un contenedor Docker que expone un servidor Node.js básico.  
Puedes acceder a la versión desplegada en línea aquí:  
👉 [https://hola-gaudi.onrender.com](https://hola-gaudi.onrender.com)

---

**Autor:** Gaudi Valera  
**Materia:** Electiva 2  
**Práctica:** Entrega Continua - CI/CD con GitHub Actions, Docker y Render.

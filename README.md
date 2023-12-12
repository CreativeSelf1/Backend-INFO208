# BACKEND-INFO208


`https://test-deploy-production-4480.up.railway.app/`



## Endpoints

1. GET `https://test-deploy-production-4480.up.railway.app/api/command/services`: recibe todos los servicios almacenados en la base de datos
2. GET `https://test-deploy-production-4480.up.railway.app/api/command/servicio/<tipoServicio>`: recibe los servicios con informacion dependiendo del tipo de servicio (Restaurant, Hoteleria, Salud, ...)
3. GET `https://test-deploy-production-4480.up.railway.app/api/command/comentarios/<IDservicio>`: recibe los comentarios sobre la evaluación de un servicio según la ID (101,102,103,104,....) 
4. GET `https://test-deploy-production-4480.up.railway.app/api/command/parametros/<IDservicio>`: recibe los parámetros de evaluación de un servicio
5. POST `https://test-deploy-production-4480.up.railway.app/api/command/comentario`: Agrega a la base de datos un comentario con la evaluación de un servicio

```
{
    "servicio_id": "101",
    "comentario": "Comentario para el servicio ID 101"
}

```

## Dependencias necesarias

npm install 

## Instrucciones para ejecutar en local

1. Crear un archivo .env con las variables DB_PORT para el puerto y URL para conectarse a la base de datos alojada en render


2. npm run dev

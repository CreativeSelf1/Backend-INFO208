# BACKEND-INFO208
Backend desplegado en https://render.com/

`https://info208-backend-observatorio-calidad.onrender.com/`

>[!NOTA]
Instancias gratuitas de la aplicación en Render se apagarán o entrarán en un estado de suspensión cuando no estén en uso durante un período de inactividad, la próxima vez que se acceda a la aplicación, puede haber un breve período de tiempo antes de que la instancia se vuelva a encender y la aplicación esté disponible.


## Endpoints

1. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/services`: recibe todos los servicios almacenados en la base de datos
2. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/servicio/<tipoServicio>`: recibe los servicios con informacion dependiendo del tipo de servicio (Restaurant, Hoteleria, Salud, ...)
3. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/comentarios/<IDservicio>`: recibe los comentarios sobre la evaluación de un servicio según la ID (101,102,103,104,....) 
4. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/parametros/<IDservicio>`: recibe los parámetros de evaluación de un servicio
5. POST `https://info208-backend-observatorio-calidad.onrender.com/api/command/comentario`: Agrega a la base de datos un comentario con la evaluación de un servicio

```
{
    "servicio_id": "101",
    "comentario": "Comentario para el servicio ID 101"
}

```

## Dependencias necesarias

npm install 

## Instrucciones para ejecutar en local

1. Crear un archivo .env con las variables URL y DB_PORT
2. npm run dev
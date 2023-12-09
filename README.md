# Backend-INFO208
Backend hosteado en https://render.com/

`https://info208-backend-observatorio-calidad.onrender.com/`

## Endpoints

1. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/services`: recibe todos los servicios almacenados en la base de datos
2. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/servicio/<tipoServicio>`: recibe los servicios con informacion dependiendo del tipo de servicio (Restaurant, Hoteleria, Salud, ...)
3. GET `https://info208-backend-observatorio-calidad.onrender.com/api/command/comentarios/<IDservicio>`: recibe los comentarios sobre la evaluación de un servicio según la ID (101,102,103,104,....) 
4. POST `https://info208-backend-observatorio-calidad.onrender.com/api/command/comentario`: Agrega a la base de datos un comentario con la evaluación de un servicio

```
{
    "servicio_id": "101",
    "comentario": "Comentario para el servicio ID 101"
}

```

## Dependencias necesarias

npm install express typescript ts-node nodemon @types/node @types/express --save-dev dotenv --save

npm i pg

npm i --save-dev @types/pg
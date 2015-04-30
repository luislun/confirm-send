Bienvenido a ConfirmSend!
==================

Este es un sencillo Widget de jQuery pensado en aquellos casos donde se requiere realizar una confirmación del usuario previa al submit de un Form o envío de un Link.


#Funcionamiento

El Widget funciona con links `<a href="mi_peticion.url">` y con submits de Forms `<form action="mi_peticion.url">`

**Includes:**

    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
    
    <script src="js/jquery.confirm-send-1.0.js"></script>
    

**Código HTML:**

En caso de ser un link:

    <a href="eliminar_datos.php" id="eliminar">Eliminar Registro</>

En caso de ser un form:

    <form action="guardar_datos.php" method="POST" id="guardado">
	    <input type="text" name="name" placeholder="Nombre" />
   	    <input type="text" name="second_name" placeholder="Apellido" />
	
		<input type="submit" value="Enviar"/>
    </form>

**Código JS:**

En caso de ser un link:

    $( '#eliminar' ).confirmSend({
	    message: '¿Está seguro de que desea eliminar el registro?'
    });

En caso de ser un form:

    $( '#guardado' ).confirmSend({
	    message: '¿Está seguro de que desea eliminar el registro?'
    });

#### **Soporte ConfirmSend**

[![](https://avatars2.githubusercontent.com/u/1232056?v=3&s=60)](https://monetizejs.com/authorize?client_id=ESTHdCYOi18iLhhO&summary=true)
Github:
[luislun](https://github.com/luislun)


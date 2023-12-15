


<%@page import="modelo.Orador"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Actualizar Orador</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container mt-5">
            <h2>Actualizar Orador</h2>
            <form action="GestionOradorServlet" method="post">
                <input type="hidden" name="accion" value="confirmarActualizacion">
                <input type="hidden" name="id" value="${orador.idOrador}">

                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" value="${orador.nombre}" required>
                </div>

                <div class="form-group">
                    <label for="apellido">Apellido:</label>
                    <input type="text" class="form-control" id="apellido" name="apellido" value="${orador.apellido}" required>
                </div>

                <div class="form-group">
                    <label for="tema">Tema:</label>
                    <input type="text" class="form-control" id="tema" name="tema" value="${orador.tema}" required>
                </div>

                <div class="form-group">
                    <label for="fechaAlta">Fecha Alta:</label>
                    <input type="date" class="form-control" id="fechaAlta" name="fechaAlta" value="${orador.fechaAlta}" required>
                </div>

                <button type="submit" class="btn btn-primary">Actualizar</button>
                <a href="gestionOradores.jsp" class="btn btn-success">Volver</a>

            </form>
        </div>
    </body>
</html>
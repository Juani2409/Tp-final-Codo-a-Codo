package controlador;

import dao.OradoresDAO;
import modelo.Orador;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/vistas/GestionOradorServlet")
public class GestionOradorServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String accion = request.getParameter("accion");
        OradoresDAO oradoresDAO = new OradoresDAO();

        // Inicializar idOrador antes del switch para que esté disponible en todos los casos
        int idOrador = Integer.parseInt(request.getParameter("id"));

        switch (accion) {
            case "actualizar":
                Orador orador = oradoresDAO.obtenerPorId(idOrador);
                request.setAttribute("orador", orador); //Esto permite pasar datos del servlet a una vista (como un archivo JSP) o a otro servlet al que se redirige o se reenvía la solicitud
                request.getRequestDispatcher("actualizar.jsp").forward(request, response);
                break;
            case "confirmarActualizacion":
                Orador oradorActualizado = new Orador();
                oradorActualizado.setIdOrador(idOrador);
                oradorActualizado.setNombre(request.getParameter("nombre"));
                oradorActualizado.setApellido(request.getParameter("apellido"));
                oradorActualizado.setTema(request.getParameter("tema"));
                // Asume que el método setFechaAlta acepta un java.sql.Date
                oradorActualizado.setFechaAlta(java.sql.Date.valueOf(request.getParameter("fechaAlta")));

                oradoresDAO.actualizarOrador(oradorActualizado);
                response.sendRedirect("gestionOradores.jsp");
                break;
            case "eliminar":
                oradoresDAO.eliminarOrador(idOrador);
                response.sendRedirect("gestionOradores.jsp");
                break;
            default:
                response.sendRedirect("gestionOradores.jsp");
                break;
        }
    }
}


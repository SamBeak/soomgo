<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "soomgo.UserDAO"  %>
<%@ page import = "soomgo.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 


<%
	
		
		UserDAO userDAO = new UserDAO();
		boolean result = userDAO.emailCheckMethod( request.getParameter("user_email") );
	
		out.println( result );
		
%>


								
			







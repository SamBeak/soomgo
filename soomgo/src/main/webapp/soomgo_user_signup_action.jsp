<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "soomgo.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="soomgo.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_email" />
<jsp:setProperty name="userDTO" property="user_service" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);    
%>

{"result":"<%=result%>","비밀번호":"<%=userDTO.getUser_pw()%>","이름":"<%=userDTO.getUser_name()%>","이메일":"<%=userDTO.getUser_email()%>","이용약관":"<%=userDTO.getUser_service()%>"}



<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ page language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="community.CommunityDAO"%>
<%@ page import="community.CommunityDTO"%>

<%
	request.setCharacterEncoding("UTF-8");
%>      

<jsp:useBean class="community.CommunityDTO" id="communityDTO" scope="page"/>
<jsp:setProperty name="communityDTO" property="idx"/>
<jsp:setProperty name="communityDTO" property="userId"/>
<jsp:setProperty name="communityDTO" property="subject"/>
<jsp:setProperty name="communityDTO" property="file1"/>
<jsp:setProperty name="communityDTO" property="file2"/>
<jsp:setProperty name="communityDTO" property="file3"/>
<jsp:setProperty name="communityDTO" property="title"/>
<jsp:setProperty name="communityDTO" property="service"/>
<jsp:setProperty name="communityDTO" property="location"/>
<jsp:setProperty name="communityDTO" property="content"/>

<%
    int idx = request.getParameter("idx");
    CommunityDAO communityDAO = new CommunityDAO();
    ArrayList<CommunityDTO> list = communityDAO.getList(idx);

        String jsonData = "{ \"result\": [";
        int cnt = 0;
        for(CommunityDTO communityDTO : list){
            cnt++;
            if(cnt < list.size()){
                jsonData += "{ \"idx\" : \"" + communityDAO.getIdx() + "\","
                         +   "\"userId\" : \"" + communityDAO.getUserId() + "\","
                         +   "\"subject\" : \"" + communityDAO.getSubject() + "\","
                         +   "\"file1\" : \"" + communityDAO.getFile1() + "\","
                         +   "\"file2\" : \"" + communityDAO.getFile2() + "\","
                         +   "\"file3\" : \"" + communityDAO.getFile3() + "\","
                         +   "\"title\" : \"" + communityDAO.getTitle() + "\""
                         +   "\"service\" : \"" + communityDAO.getService() + "\""
                         +   "\"location\" : \"" + communityDAO.getLocation() + "\""
                         +   "\"content\" : \"" + communityDAO.getContent() + "\""
                         + "},";
            }
            else{
                jsonData += "{ \"idx\" : \"" + communityDAO.getIdx() + "\","
                         +   "\"userId\" : \"" + communityDAO.getUserId() + "\","
                         +   "\"subject\" : \"" + communityDAO.getSubject() + "\","
                         +   "\"file1\" : \"" + communityDAO.getFile1() + "\","
                         +   "\"file2\" : \"" + communityDAO.getFile2() + "\","
                         +   "\"file3\" : \"" + communityDAO.getFile3() + "\","
                         +   "\"title\" : \"" + communityDAO.getTitle() + "\""
                         +   "\"service\" : \"" + communityDAO.getService() + "\""
                         +   "\"location\" : \"" + communityDAO.getLocation() + "\""
                         +   "\"content\" : \"" + communityDAO.getContent() + "\""
                         + "}";
            }
        }
        jsonData += "]}";
        response.getWriter().write(jsonData);

%>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="community.CommunityDAO"%>
<% 
    request.setCharacterEncoding("UTF-8");
%>


<jsp:useBean class="community.CommunityDTO" id="communityDTO" scope="page"/>
<jsp:setProperty name="communityDTO" property="userId"/>
<jsp:setProperty name="communityDTO" property="subject"/>
<jsp:setProperty name="communityDTO" property="file1"/>
<jsp:setProperty name="communityDTO" property="file2"/>
<jsp:setProperty name="communityDTO" property="file3"/>
<jsp:setProperty name="communityDTO" property="title"/>
<jsp:setProperty name="communityDTO" property="service"/>
<jsp:setProperty name="communityDTO" property="location"/>
<jsp:setProperty name="communityDTO" property="content"/>

<!-- <%
    //로그인 정보 =세션 가져오기
    String userId = null;
    if((String) session.getAttribute("userId")!=null){
        userId = (String) session.getAttribute("userId");
    }
    if(userId == null){
%>   
        <script> -->
            <!-- alert('로그인 하세요');
            history.go(-1);

        </script> -->

<%
    <!-- }
    else{ -->

        if(CommunityDTO.getSubject()==null || CommunityDTO.getTitle()==null || CommunityDTO.getContent()==null ){
 %> 
        <script>
            alert('빈 항목이 있습니다. \n다시 시도해주세요.');
            history.go(-1);
        </script>


<%
        }
        else{
            CommunityDAO communityDAO = new CommunityDAO();
            int result= communityDAO.write(userId,CommunityDTO.getSubject(),CommunityDTO.getFile1(),CommunityDTO.getFile2(),CommunityDTO.getFile3(),CommunityDTO.getTitle(),CommunityDTO.getService(),CommunityDTO.getLocation(),CommunityDTO.getContent());

            if(result == -1){
 %>       
        <script>
            alert('DB오류');
            history.go(-1);
        </script>
<%
            }
            else{ //글쓰기 정상
%>        
                
        <script>
            alert('글쓰기 성공');
            history.go(-1); //글목록 이동
        </script>



<%   
        }
    }
<!-- } -->
%>


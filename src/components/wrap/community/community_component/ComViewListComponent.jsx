import React from 'react';
import './scss/c_view.scss';
import $ from 'jquery';
import axios from 'axios';
import { json, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ConfirmContext } from '../../context/ConfirmContext';
import { GlobalContext } from '../../context/GlobalContext';

export default  function ComViewListComponent(){
<<<<<<< HEAD
    const [login,setLogin]=React.useState({
        user_email:''
    })
=======
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
    const {confirmModalOpen,confirmModalClose,confirmMsg,isConfirmModal} = React.useContext(ConfirmContext);
    const {signIn, setSignIn} = React.useContext(GlobalContext);
    const [state,setState]=React.useState({
        listData:[],
        viewList:[],
        user_email:''
      
    })
    const [data, setData] = useState({
        view:{}
       
    });
    const {view,updata}=data;
    const {id} = useParams();
    
    const {listData}=state;
      
    React.useEffect(()=>{
        if (localStorage.getItem('COMMUNITY') !== null) {
            let result = JSON.parse(localStorage.getItem('COMMUNITY'));
            setData({
                ...data,
                view: result[0]
            })
        }
    },[]);

<<<<<<< HEAD
    React.useEffect(() => {
        const storedData = localStorage.getItem('SOOMGOUSERLOGIN');
    
        if (storedData) {
          const { user_email } = JSON.parse(storedData);
    
          setLogin(prevLogin => ({
            ...prevLogin,
            user_email
          }));
        }
      }, []);
    
    


=======
    // React.useEffect(()=>{
    //     if(localStorage.getItem(signIn.user_email!=='')){
    //         let result = JSON.parse(localStorage.getItem(signIn.signinKey));
    //         setState({
    //             ...state,
    //             user_email:  
    //         })
    //         console.log(state.user_email);
    //     }
   

    // },[signIn])
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7

    const getList= async()=>{
        try {
            axios({
                url:'/JSP/listAction.jsp',
                method:'GET',  
                dataType:'json'
            })
            .then((res)=>{
                
                setState({
                    ...state,
                    listData:res.data.result
                    
                });
                console.log(res);  

            })
            .catch((err)=>{
                console.log(err);  

            })
    
 
            
        } catch (err) {
            console.log(err);   

        }
    }
    React.useEffect(()=>{
        getList();
      
        
    },[]);


    const onClickUpdate=(e)=>{
        e.preventDefault();
<<<<<<< HEAD
        if(login.user_email!==null){
            let formData = new URLSearchParams();

            formData.append("userId", login.user_email)

            axios({
                url:'/JSP/userEmailAction.jsp',
                method:'POST',  
                data:{},
                params:formData
            })
            .then((res)=>{
              
                console.log(res.data.result);

                if(res.data.result <= 0){
                confirmModalOpen('본인만 수정 가능합니다.');
                //window.location.href='/community'
                }
                else if(res.data.result > 0){
         
                window.location.href='/community/update';                
            }   
           
            })
            .catch((err)=>{
                console.log('AJAX 실패'+err);
            })  
        }
       else{
        confirmModalOpen('본인만 수정가능합니다.');
    }

        

=======
        window.location.href='/community/update';
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7



    }


    const onClickDelete=(e)=>{
        e.preventDefault();
<<<<<<< HEAD
       

        if(login.user_email!==null){
            let formData = new URLSearchParams();
            formData.append("userId", login.user_email)
=======
        console.log(view.idx);

        if(signIn.user_email!==''){
            let formData = new URLSearchParams();
            formData.append("idx", view.idx)
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
            axios({
                url:'/JSP/deleteAction.jsp',
                method:'POST',  
                data:{},
                params:formData
            })
            .then((res)=>{
                console.log('AJAX 성공');
<<<<<<< HEAD
                console.log(res.data.result);

                if(res.data.result <= 0){
                confirmModalOpen('본인만 삭제가능합니다.');
                //window.location.href='/community'
                }
                else if(res.data.result > 0){
                confirmModalOpen('삭제되었습니다');
                window.location.href='/community'
                }   
           
            })
            .catch((err)=>{
                alert('본인만 삭제가능합니다.');
=======
                console.log(res);
                alert('삭제되었습니다');
                window.location.href='/community'
            })
            .catch((err)=>{
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
                console.log('AJAX 실패'+err);
            })  
        }
       else{
        alert('본인만 삭제가능합니다.');
       }
        
    }

    React.useEffect(()=>{
        $('.img2').on({
            click(e){
                e.preventDefault();
                $('.del-upd').toggleClass('on');
            }
        })
    },[])

    return (
        <div id='view'>
            <div className="container" key={id}>
                <div className="header">
                    <div className="header-row1">
                        <span>커뮤니티</span>
                        <span><img src="http://localhost:3000/images/community/view/icon_arrow_right.svg" alt="" /></span>
                        <span>{view.subject}</span>
                    </div>
                    <div className="header-row2">
                        <ul>
                            <li>
<<<<<<< HEAD
                                {
                                view.service==="null" ? 
                                    (<></>)
                                    :
                                    (<p>{view.service}</p>)
                                }

=======
                                <p>{view.service}</p>
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
                            </li>
                            <li> 
                                <h3>{view.title}</h3>
                             </li>
                             <li>
<<<<<<< HEAD
                             {
                                view.location==="null" ? 
                                    (<></>)
                                    :
                                    (<p>{view.location}</p>)
                                }
=======
                                <h4>{view.location}</h4>
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user-info">
                    <div className="left">
                        <div className="img">
                            <img className='userimg' style={(view.file1==='undefined' ? {display:'none'}:{} )} src={view.file1} alt="" />
                        </div>
                        <div className="info" style={(view.file1==='undefined' ? {marginLeft:'-12px'}:{} )}>
<<<<<<< HEAD
                            <h5>{}</h5>
=======
                            <h5>{signIn.user_email}</h5>
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
                            <h4 >{view.writeDate}</h4>  
                        </div>
                    </div>
                    <div className="right">
                        <img className='img1' src="http://localhost:3000/images/community/view/icon-save.svg" alt="" />
                        <img className='img2' src="http://localhost:3000/images/community/view/icon-3dots.svg" alt="" />
                    </div>

                    <div className="del-upd">
                        <div>   
                            <a className='a1' href="!#" onClick={onClickUpdate}>수정하기</a>
                            <a className='a2' href="!#" onClick={onClickDelete}>삭제하기</a>
                        </div>
                    </div>
                

                </div>  
                <div className="body-content">
                    <div className="textarea">
                        <p>{view.content}</p>
                    </div>
                    <div className="imgarea">
                        <ul>
                            <li><img src={view.file1} style={(view.file1==='undefined' ? {display:'none'}:{} )}alt="" /></li>
                            <li><img src={view.file2} style={(view.file2==='undefined' ? {display:'none'}:{} )}alt="" /></li>
                            <li><img src={view.file3} style={(view.file3==='undefined' ? {display:'none'}:{} )}alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-icon">
                    <div className="icon1">
                        <img src="http://localhost:3000/images/community/view/icon-thumbs.svg" alt="" />
                        <span>좋아요 0</span>
                    </div>
                    <div className="icon2">
                        <img src="http://localhost:3000/images/community/view/icon-comment.svg" alt="" />
                        <span>댓글 1</span>
                    </div>

                </div>
            </div>
            

        </div>
    );
};


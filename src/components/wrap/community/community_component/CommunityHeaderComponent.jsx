import React from 'react';
import CommunityAllComponent from './CommunityAllComponent';
import './scss/c_header.scss';
import { Link } from 'react-router-dom';
import { ConfirmContext } from '../../context/ConfirmContext';
import { GlobalContext } from '../../context/GlobalContext';
import CommunityHeaderLeft from './CommunityHeaderLeft';

export default function CommunityHeaderComponent(){
    const [login,setLogin]=React.useState({
        user_email:''
    })
    const {confirmModalOpen,confirmModalClose,confirmMsg,isConfirmModal} = React.useContext(ConfirmContext);
    const {signIn, setSignIn} = React.useContext(GlobalContext);

    const [isNav,setIsNav]=React.useState(false);

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
    
      console.log(login.user_email);

    const onClickWrite=(e)=>{
        e.preventDefault();

        if(login.user_email===''){
            confirmModalOpen('로그인 후 작성해주세요.');
            console.log(login.user_email)
        }
        else if(login.user_email!==''){
            window.location.pathname='community/write';
        }   
        else{
            
            
        }   
    }



    return (
        <div id='c-header'>
            <div className="c-container">
                <div className="c-title">
                    <div className="c-title-wrap">
                        <h1>커뮤니티</h1>
                        
                            <button onClick={onClickWrite} type='submit'>글쓰기<img src="http://localhost:3000/images/community/header/icon-board-create.svg" alt="" /></button>
                    
                    </div>  
                    <ul className="c-nav">
                        <li><a className={`${isNav ? '' : ' on'}`} href="!#">숨고생활</a></li>
                        <li><a className={`${isNav ? ' on' : ''}`} href="!#">고수의 노하우</a></li>
                    </ul>
                </div>
                <div className="c-content">
                    <div className="left-right">
                        <div className="left">
                            <CommunityHeaderLeft/>
                        </div>
                        <div className="right">
                            <CommunityAllComponent />
                        </div>
                    </div>
                    
                       
                </div>
            </div>
        </div>
    );
};


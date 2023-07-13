import React from 'react';
import CommunityAllComponent from './CommunityAllComponent';
import './scss/c_header.scss';
import { Link } from 'react-router-dom';
import CommunityQuestionComponent from './CommunityQuestionComponent';
<<<<<<< HEAD
import CommunityHeaderLeft from './CommunityHeaderLeft';
import { ConfirmContext } from '../../context/ConfirmContext';
import { GlobalContext } from '../../context/GlobalContext';
export default function CommunityQuestionComponent1(){

    
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

    const onClickWrite=(e)=>{
        e.preventDefault();

        if(login.user_email===''){
            confirmModalOpen('회원가입 후 작성해주세요.');
            console.log(login.user_email)
        }
        else if(login.user_email!==''){
            window.location.pathname='community/write';
        }   
        else{
            
            
        }   
    }
=======
export default function CommunityQuestionComponent1(){
    const [isNav,setIsNav]=React.useState(false);


>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7


    return (
        <div id='c-header'>
            <div className="c-container">
                <div className="c-title">
                    <div className="c-title-wrap">
                        <h1>커뮤니티</h1>
<<<<<<< HEAD
                        <button type='submit' onClick={onClickWrite}>글쓰기<img src="http://localhost:3000/images/community/header/icon-board-create.svg" alt="" /></button>
=======
                        <button type='submit'>글쓰기<img src="http://localhost:3000/images/community/header/icon-board-create.svg" alt="" /></button>
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
                    </div>  
                    <ul className="c-nav">
                        <li><a className={`${isNav ? '' : ' on'}`} href="!#">숨고생활</a></li>
                        <li><a className={`${isNav ? ' on' : ''}`} href="!#">고수의 노하우</a></li>
                    </ul>
                </div>
                <div className="c-content">
<<<<<<< HEAD
                    <div className="left-right">
                        <div className="left">
                                <CommunityHeaderLeft/>
                        </div>
                        <div className="right">
                                <CommunityQuestionComponent/>
                        </div>
=======
                    <div className="left">
                        <ul className="topic">
                        <li className='nav-list on'><Link to='community'><img src="http://localhost:3000/images/community/header/634d181f-f6cc-470c-9a1a-cfed6d9c909a.png" alt="" /><span>전체</span></Link></li>
                            <li className='nav-list'><Link to='question'><img src="http://localhost:3000/images/community/header/f1e39209-9357-4412-b962-99a9d62e6cc5.png" alt="" /><span>궁금해요</span></Link></li>
                            <li className='nav-list'><Link to='howMuch'><img src="http://localhost:3000/images/community/header/a283e912-b56e-4310-8fa1-2c619bd0332d.png" alt="" /><span>얼마예요</span></Link></li>
                            <li className='nav-list'><Link to='find'><img src="http://localhost:3000/images/community/header/b3326101-bf1e-4004-8fa1-b5a0724f9e62.png" alt="" /><span>고수찾아요 </span></Link></li>
                            <li className='nav-list'><Link to ='together'><img src="http://localhost:3000/images/community/header/ea04ebe5-4787-4b56-99a7-308c6310d972.png" alt="" /><span>함께해요</span></Link></li>
                            <li className='nav-list'><a href="!#"><img src="http://localhost:3000/images/community/header/8dbafccb-92f6-4be2-b50c-a4eade43585f.png" alt="" /><span>고수소식</span></a></li>
                            <li className='nav-list'><a href="!#"><img src="http://localhost:3000/images/community/header/edf5376e-573c-4eac-8f2f-8608a004089b.png" alt="" /><span>숨고이야기</span></a></li>
                        </ul>
                    </div>
                    <div className="right">
                            <CommunityQuestionComponent/>
>>>>>>> 9376c189df93080edc33f3fccfbcd4a42f1527c7
                    </div>
                </div>
            </div>
        </div>
    );
};


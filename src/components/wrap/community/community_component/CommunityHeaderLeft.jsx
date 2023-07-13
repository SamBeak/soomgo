import React from 'react';
import { Link } from 'react-router-dom';
import './scss/c_header_left.scss';

export default function CommunityHeaderLeft(){

    const [isNav,setIsNav]=React.useState(false);

    const onClickQuestion=(e)=>{
        e.preventDefault();
        window.location.pathname='question';
        setIsNav(true);
    }
    const onClickFind=(e)=>{
        e.preventDefault();
        window.location.pathname='find';
    }
    const onClickHowmuch=(e)=>{
        e.preventDefault();
        window.location.pathname='howMuch';
    }
    const onClickTogether=(e)=>{
        e.preventDefault();
        window.location.pathname='together';
    }
    const onClickCommumity=(e)=>{
        e.preventDefault();
        window.location.pathname='community';
    }


    return (
        
        <ul className="topic">
            <li className='nav-list'><Link to='community' onClick={onClickCommumity}><img src="http://localhost:3000/images/community/header/634d181f-f6cc-470c-9a1a-cfed6d9c909a.png" alt="" /><span>전체</span></Link></li>
            <li className='nav-list'><Link to='question' onClick={onClickQuestion}><img src="http://localhost:3000/images/community/header/f1e39209-9357-4412-b962-99a9d62e6cc5.png" alt="" /><span>궁금해요</span></Link></li>
            <li className='nav-list'><Link to='howMuch' onClick={onClickHowmuch}><img src="http://localhost:3000/images/community/header/a283e912-b56e-4310-8fa1-2c619bd0332d.png" alt="" /><span>얼마예요</span></Link></li>
            <li className='nav-list'><Link to='find' onClick={onClickFind}><img src="http://localhost:3000/images/community/header/b3326101-bf1e-4004-8fa1-b5a0724f9e62.png" alt="" /><span>고수찾아요 </span></Link></li>
            <li className='nav-list'><Link to ='together' onClick={onClickTogether}><img src="http://localhost:3000/images/community/header/ea04ebe5-4787-4b56-99a7-308c6310d972.png" alt="" /><span>함께해요</span></Link></li>
            <li className='nav-list'><a href="!#"><img src="http://localhost:3000/images/community/header/8dbafccb-92f6-4be2-b50c-a4eade43585f.png" alt="" /><span>고수소식</span></a></li>
            <li className='nav-list'><a href="!#"><img src="http://localhost:3000/images/community/header/edf5376e-573c-4eac-8f2f-8608a004089b.png" alt="" /><span>숨고이야기</span></a></li>
        </ul>
       
    );
};


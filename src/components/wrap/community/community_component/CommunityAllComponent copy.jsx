import React from 'react';
import'./scss/c_all.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default  function CommunityAllComponent(){
    const [state,setState]=React.useState({
        subject:'',
        file1:'',
        file2:'',
        file3:'',
        title:'',
        service:'',
        location:'',
        content:''
    });
    const {content,subject,title}=state;

    const [img,setImg]=React.useState({
        file:[],
        ImgUrl:[]
    })

    const {file,ImgUrl}=img;
    React.useEffect(()=>{


        const $slideContainer=$('.slide-container');
        const $slideWrap=$('.slide-wrap');
        const $slide=$('.slide');
        const $arrowBtnNext = $('.arrow-btn-next');
        const $arrowBtnPrev = $('.arrow-btn-prev');

        let cnt=0;
        let n =($slide.length)/2

      
    

        function mainSlide(){
            $slideWrap.stop().animate({left:`${-100*cnt}%`},400,function(){
                if(cnt===1){
                    $arrowBtnNext.hide();
                    $arrowBtnPrev.css('display', 'block');
                }
                if(cnt===0){
                    $arrowBtnPrev.hide();
                    $arrowBtnNext.css('display', 'block');

                }
                
            })
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }
        function prevCount(){
            cnt--;
            mainSlide();
        }



        $arrowBtnNext.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        })

        $arrowBtnPrev.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })

    },[])

    React.useEffect(()=>{
        let formData = new URLSearchParams();   
        
        formData.append("userId", "")
        formData.append("subject",state.subject);
        formData.append("file1",state.file1);
        formData.append("file2",state.file2);
        formData.append("file3",state.file3);
        formData.append("title",state.title);
        formData.append("service",state.service);
        formData.append("location",state.location);
        formData.append("content",state.content);
        console.log(formData);
     
        axios({
            url:'/JSP/listAction.jsp',
            method:'POST',
            params:formData,
            dataType:'json'


        })
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])



    
    return (
        <div id='c-all'>
            <div className="content">
                    <div className="input">
                        <img src="http://localhost:3000/images/community/content/icon-search.svg" alt="" /><input type="text" name='' id='' placeholder='키워드와 #태그 모두 검색할 수 있어요.' />
                    </div>
                    <div className="slide-box">
                        <div className='pp'>
                            <strong>지금 가장 뜨거운 숨고픽🔥</strong>
                            <span>  
                                <em>1</em>
                                <i>/</i>
                                <em>2</em>
                            </span>

                        </div>
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>공지사항</h3>
                                                <p>숨고생활 가이드라인 🤝</p>
                                                <div className="p-wrap">
                                                    <p>Soomgo</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <Link to="./view">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="./view">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="!#" className='arrow-btn-next'><img src="http://localhost:3000/images/community/content/icon-arrow-right.svg" alt=""/></a>
                        <a href="!#" className='arrow-btn-prev'><img src="http://localhost:3000/images/community/content/icon-arrow-left.svg" alt=""/></a>
                    </div>
                    <div className="btn-wrap">
                        <button className='blind'><span>초기화</span></button>
                        <button className='service'><span>서비스<img src="http://localhost:3000/images/community/content/icon-arrow-down.svg" alt="" /></span></button>
                        <button className='location'><span>지역<img src="http://localhost:3000/images/community/content/icon-arrow-down.svg" alt="" /></span></button>
                        <button className='blind'><span>지역이름</span></button>
                    </div>
                    <ul className="feed-list">
                        <li className="feed">
                            <Link to="./view">
                                <div className="wrap-wrap">
                                    <div className="text-wrap">
                                        <div className="feed-content">
                                            <h4>얼마예요</h4>
                                            <h3>쇼츠 영상 편집 단가에 대해...</h3>
                                            <p className='c'> 안녕하세요. 여러분 영상 편집 단가와 관련하여 궁금한 점이 있어 글을 남겨요.. 쇼츠 영상인데 이런 쇼츠는 보통 .. 얼마를 받아야할까요,...? 편집 강의만 하다가 의뢰가 들어오니 감이 안오네요...</p>
                                            <p className='l'>경기/이천시</p>
                                        </div>
                                    </div>
                                    <div className="img-wrap">
                                        <img src="http://localhost:3000/images/community/content/456c7f5d-ed2e-469c-a1fb-62bf31f52148.webp" alt="" />
                                    </div>
                                </div>

                                <div className="feed-footer">
                                        <div className="span-wrap">
                                            <span className='span1'>0</span>
                                            <span className='span2'>2</span>
                                        </div>
                                        <span className='span3'>2분전</span>
                                    </div>
                            </Link>
                        </li>
                        <li className="feed">
                            <a href="!#">
                                <div className="wrap-wrap">
                                    <div className="text-wrap">
                                        <div className="feed-content">
                                            <h4>얼마예요</h4>
                                            <h3>쇼츠 영상 편집 단가에 대해...</h3>
                                            <p className='c'> 안녕하세요. 여러분 영상 편집 단가와 관련하여 궁금한 점이 있어 글을 남겨요.. 쇼츠 영상인데 이런 쇼츠는 보통 .. 얼마를 받아야할까요,...? 편집 강의만 하다가 의뢰가 들어오니 감이 안오네요...</p>
                                            <p className='l'>경기/이천시</p>
                                        </div>
                                    </div>
                                    <div className="img-wrap">
                                        <img src="http://localhost:3000/images/community/content/456c7f5d-ed2e-469c-a1fb-62bf31f52148.webp" alt="" />
                                    </div>
                                </div>

                                <div className="feed-footer">
                                        <div className="span-wrap">
                                            <span className='span1'>0</span>
                                            <span className='span2'>2</span>
                                        </div>
                                        <span className='span3'>2분전</span>
                                    </div>
                            </a>
                        </li>
                    </ul>
            </div>
        </div>
    );
};


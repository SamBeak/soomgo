import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Section1Component() {
    const slideWrap = React.useRef();
    
    const [cnt, setCnt] = React.useState(0);
    const [state, setState] = React.useState({
        slide: [],
        slideLength: 0
    });

    React.useEffect(() => {
        axios({
            url: './data/home/section1.json',
            method: 'GET'
        })
        .then((res) => {
            if(res.status === 200) {
                setState({
                    ...state,
                    slide: res.data.slide,
                    slideLength: res.data.slide.length
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, [state]);

    React.useEffect(() => {
        slideWrap.current.style.width = `${state.slideLength * 100}%`;
    }, [state.slideLength]);

    React.useEffect(() => {
        if(cnt < 0){
            setCnt(state.slideLength - 1);
        }
        else if(cnt > state.slideLength -1){
            setCnt(0);
        }
        else{
            slideWrap.current.style.transform = `translateX(-${cnt * 100 / state.slideLength }%)`;
        }
    }, [cnt, state.slideLength]);


    // click prev
    const onClickPrev = () => {
        setCnt(cnt - 1);
    }
    // click next
    const onClickNext = () => {
        setCnt(cnt + 1);
    }
 return (
    <section id="section1">
        <div className="container">
            <ul className="slide__wrap" ref={slideWrap}>
                {
                    state.slide.map((item, idx) => {
                        return(
                            <li className="slide__item" key={idx}>
                                <div className="slide__img">
                                    <Link to='/'>
                                        <img src={item.imgSrc} alt="slide images" />
                                    </Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="slide__text">
                <p>
                    <span>{cnt+1}/{state.slideLength}</span>
                </p>
            </div>
            <div className="slide__btn">
                <div className="btn__item--prev">
                    <button type='button' onClick={onClickPrev}><i className="fas fa-chevron-left"></i></button>
                </div>
                <div className="btn__item--next">
                    <button type='button' onClick={onClickNext}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </section>
  )
}

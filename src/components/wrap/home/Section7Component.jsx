import React from 'react';
import axios from 'axios';

export default function Section7Component() {
  
  const popularProWrap = React.useRef();
  const [cnt, setCnt] = React.useState(0);
  const [state, setState] = React.useState({
    popularPros: [],
    swimPros: [],
    movePros: [],
    wallpaperPros: [],
    
    swimLength: 0,
    moveLength: 0,
    wallpaperLength: 0,
    cargoLength: 0
  });

  React.useEffect(() => {
    axios({
      url: './data/home/section7.json',
      method: 'GET'
    })
    .then((res) => {
      if(res.status === 200){
        setState({
          ...state,
          popularPros: res.data.popularPros,
          swimPros: state.popularPros.filter((item) => item.category === 'swim'),
          movePros: state.popularPros.filter((item) => item.category === 'move'),
          wallpaperPros: state.popularPros.filter((item) => item.category === 'wallpaper'),
          cargoPros: state.popularPros.filter((item) => item.category === 'cargo'),
          swimLength: state.popularPros.filter((item) => item.category === 'swim').length,
          moveLength: state.popularPros.filter((item) => item.category === 'move').length,
          wallpaperLength: state.popularPros.filter((item) => item.category === 'wallpaper').length,
          cargoLength: state.popularPros.filter((item) => item.category === 'cargo').length
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, [state]);

  React.useEffect(() => {
    console.log(state.swimLength); 
    popularProWrap.current.style.width = `${(state.swimLength+1) / 4 * 100}%`;
    popularProWrap.current.style.gridTemplateColumns = `repeat(auto-fill, minmax(12.5rem, 1rem))`;
  }, [state.swimLength]);


  // btn prev click
  const onClickPrev = (e) => {
    e.preventDefault();
    setCnt(cnt - 1);
    console.log(cnt);
};
// btn next click
const onClickNext = (e) => {
    e.preventDefault();
    setCnt(cnt + 1);
    console.log(cnt);
};


  return (
    <section id="section7">
        <div className="container">
            <div className="title">
                <h2>지금 인기 있는 고수</h2>
                <a href="!#" className='show__all'>
                    <span>전체보기</span>
                    <img src="./images/chev-right.svg" alt="오른쪽 화살표" />
                </a>
            </div>
            <div className="content">
              <div className="popular-pro__category">
                <button className="pro-category__btn on" value="swim">
                  <span>수영 레슨</span>
                </button>
                <button className="pro-category__btn" value="move">
                  <span>원룸/소형 이사</span>
                </button>
                <button className="pro-category__btn" value="wallpaper">
                  <span>도배 시공</span>
                </button>
                <button className="pro-category__btn" value="cargo">
                  <span>용달/화물 운송</span>
                </button>
              </div>
              <div className="popular-pro__container">
                <div className="popular-pro__box">
                  <ul className="popular-pro__wrap" ref={popularProWrap}>
                    <li className="meet-pro__item">
                      <a href="!#">
                        <img src="./images/pro_icon.svg" alt="고수 만나보기 아이콘" />
                        <p className="meet-pro__num">
                          <span className="meet-pro__total">1300명</span>
                          <span className="meet-pro__text">의</span>
                        </p>
                        <div className="meet-pro__subtext">
                          <span className="meet-pro__text">고수 만나보기</span>
                          <img src="./images/chev-right.svg" alt="오른쪽 화살표" />
                        </div>
                      </a>
                    </li>
                    {
                      state.swimPros.map((item,idx) => {
                        return(
                          <li className="popular-pro__item" key={idx}>
                            <a href="!#">
                              <div className="popular-pro__header">
                                <div className="popular-pro__img">
                                  <img src={item.img} alt="" />
                                </div>
                                <div className="popular-pro__desc">
                                  <img src="./images/star_icon.svg" alt="별점" />
                                  <span className="rate">{item.rate}</span>
                                </div>
                              </div>
                              <p className="popular-pro__name">{item.name}</p>
                              <div className="chips">
                                <span className="soomgopay-chip">
                                  <img src="./images/soomgopay.svg" alt="숨고페이" />
                                  <span>숨고페이</span>
                                </span>
                              </div>
                              <div className="sub-info">
                                <span>경력 {item.exp}년</span>
                                <span>평균 {item.res_time} 내 응답</span>
                              </div>
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="popular-pro__btn">
                    <div className="btn__item--prev">
                        <button type='button' onClick={onClickPrev} className={cnt !== 0 ? null : 'hide'}><i className="fas fa-chevron-left"></i></button>
                    </div>
                    <div className="btn__item--next">
                        <button type='button' onClick={onClickNext} className={cnt !== state.portfoliosLength/4 ? null : 'hide'}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

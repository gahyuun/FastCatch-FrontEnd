import { CommonButton } from "../../components";
import "./basket.scss";

const Basket = () => {
  return (
    <div className="basket-container">
      <div className="basket-container__header">
        <h1 className="basket-container__header-title text-subtitle2">
          장바구니
        </h1>
      </div>
      <div className="basket-container__body">
        <section className="basket-container__section">
          <h2 className="text-subtitle4">강남 호텔 클릭</h2>
          <ul className="basket-container__item-box">
            <li className="basket-container__item">
              <div className="item-content">
                <div className="item-content__left-box">
                  <p className="text-subtitle4">프리미엄 룸</p>
                  <div>
                    <p className="text-body1">06.24 토 - 06.26 월 (2박)</p>
                    <div className="check-in-out">
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크인</span>
                        <span>09:00</span>
                      </div>
                      <div className="check-in-out__retangle">|</div>
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크아웃</span>
                        <span>15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-content__right-box">
                  <span className="price text-subtitle5">75,000원</span>
                  <span className="delete-button text-body2">삭제</span>
                </div>
              </div>
            </li>
            <li className="basket-container__item">
              <div className="item-content">
                <div className="item-content__left-box">
                  <p className="text-subtitle4">스위트 룸</p>
                  <div>
                    <p className="text-body1">06.24 토 - 06.26 월 (2박)</p>
                    <div className="check-in-out">
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크인</span>
                        <span>09:00</span>
                      </div>
                      <div className="check-in-out__retangle">|</div>
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크아웃</span>
                        <span>15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-content__right-box">
                  <span className="price text-subtitle5">100,000원</span>
                  <span className="delete-button text-body2">삭제</span>
                </div>
              </div>
            </li>
            <li className="basket-container__item">
              <div className="item-content">
                <div className="item-content__left-box">
                  <p className="text-subtitle4">로열 스위트룸</p>
                  <div>
                    <p className="text-body1">06.24 토 - 06.26 월 (2박)</p>
                    <div className="check-in-out">
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크인</span>
                        <span>09:00</span>
                      </div>
                      <div className="check-in-out__retangle">|</div>
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크아웃</span>
                        <span>15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-content__right-box">
                  <span className="price text-subtitle5">370,000원</span>
                  <span className="delete-button text-body2">삭제</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <hr className="basket-container__hr" />
        <section className="basket-container__section">
          <h2 className="text-subtitle4">강남 베르누이</h2>
          <ul className="basket-container__item-box">
            <li className="basket-container__item">
              <div className="item-content">
                <div className="item-content__left-box">
                  <p className="text-subtitle4">프리미엄 룸</p>
                  <div>
                    <p className="text-body1">06.24 토 - 06.26 월 (2박)</p>
                    <div className="check-in-out">
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크인</span>
                        <span>09:00</span>
                      </div>
                      <div className="check-in-out__retangle">|</div>
                      <div className="check-in-out__content">
                        <span className="check-in__span">체크아웃</span>
                        <span>15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-content__right-box">
                  <span className="price text-subtitle5">75,000원</span>
                  <span className="delete-button text-body2">삭제</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div className="basket-container__bottom">
          <div className="total-info">
            <span className="text-subtitle5 total-info__count">총 4건</span>
            <span className="text-subtitle3">1,815,000원</span>
          </div>
          <CommonButton
            text="1,815,000원 결제하기"
            buttonSize="large"
            fontSize="text-subtitle5"
          />
        </div>
      </div>
    </div>
  );
};

export default Basket;

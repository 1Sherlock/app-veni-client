/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import Header from "../../components/Header";

const Index = () => {
    return (
        <>
            <Header/>

            <div className="modal">
                <img src="/assets/img/logo-box.svg" alt="" className="modal_logo" />
                <span className="modal_reg__close" id="modal_reg__close" />
                <div className="modal__block">
                    <div className="modal__box left" style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}} />
                    <div className="modal__right">
                        <form action="">
                            <div className="modal__text">
                                <h4>Единный вход для всех сервисов.</h4>
                                <p>Войдите используя социальные сети</p>
                                <button className="f"><img src="/assets/img/f.svg" alt="" /> Войти через Facebook</button>
                                <button className="t"><img src="/assets/img/t.svg" alt="" /> Войти через Telegram</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-1">
                <img src="/assets/img/logo-box.svg" alt="" className="modal_logo" />
                <div className="modal__block">
                    <div className="modal__box left" style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover;"}} />
                    <div className="modal__box right">
                        <div className="modal__text">
                            <h4>Первые новости которые подстраиваются под интересы пользователя</h4>
                            <p>Следует лишь выбрать интересующие
                                интересы.</p>
                            <div className="modal__checkbox">
                                <div className="modal_check">
                                    <input type="checkbox" className="custom-checkbox ng-untouched ng-pristine ng-valid" id="1" />
                                    <label htmlFor="1" htmlFor="1"><img alt="" src="/uploads/interest/1.png" /> Истории</label>
                                </div>
                                <div className="modal_check">
                                    <input type="checkbox" className="custom-checkbox ng-untouched ng-pristine ng-valid" id="1" />
                                    <label htmlFor="1" htmlFor="1"><img alt="" src="/uploads/interest/1.png" /> Истории</label>
                                </div>
                                <div className="modal_check">
                                    <input type="checkbox" className="custom-checkbox ng-untouched ng-pristine ng-valid" id="1" />
                                    <label htmlFor="1" htmlFor="1"><img alt="" src="/uploads/interest/1.png" /> Истории</label>
                                </div>
                                <div className="modal_check">
                                    <input type="checkbox" className="custom-checkbox ng-untouched ng-pristine ng-valid" id="1" />
                                    <label htmlFor="1" htmlFor="1"><img alt="" src="/uploads/interest/1.png" /> Истории</label>
                                </div>
                            </div>
                        </div>
                        <a className="next" href="#">Пропустить</a>
                    </div>
                </div>
            </div>
            <div className="modal-2">
                <img src="/assets/img/logo-box.svg" alt="" className="modal_logo" />
                <div className="modal__block">
                    <div className="modal__box left" style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}} />
                    <div className="modal__box right">
                        <div className="modal__text">
                            <h4>Первые новости которые учитывают местоположение пользователя</h4>
                            <p>Пользователи имеют доступ к просмотру событий и новостей, происходящих в их местопребывании. Для
                                этого стоит
                                разрешить сервисам отслеживать геопозицию.</p>
                        </div>
                        <a className="next" href="#">Пропустить</a>
                    </div>
                </div>
            </div>
            <div className="modal-3">
                <img src="/assets/img/logo-box.svg" alt="" className="modal_logo" />
                <div className="modal__block">
                    <div className="modal__box left" style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}} />
                    <div className="modal__box right">
                        <div className="modal__text">
                            <h4>Идеальный сервис микроблогинга.</h4>
                            <p>Каждый пользователь может предложить свой материал к публикации. Новость с прикреплённым контентом
                                будет
                                отправлена редакторам, а после опубликована на странице.</p>
                        </div>
                        <a className="next" href="#">Пропустить</a>
                    </div>
                </div>
            </div>

            <div className="about-us">
                <div className="container">
                    <div className="about-us__box">
                        <img src="assets/img/about-us-icon.svg" alt="" />
                            <h3>О нас</h3>
                            <p>ИД “Ергашбаев и Компания” - Одно из крупнейших интернет-изданий и сервисов микроблогинга
                                в республике. </p>
                            <p>Размещаем публикации с актуальной информацией, оперативные новости и аналитические
                                материалы.</p>
                            <p>Ежедневно мы публикуем подлинную и объективную информацию, затрагивающую важнейшие
                                события, происходящие в мире и в стране.</p>
                    </div>
                    <div className="about-us__block">
                        <h3>Узнать больше о рекламных форматах.</h3>
                        <a href="http://ergashbaev.uz/">Медиакит на русском</a>
                        <a href="https://cutt.ly/jbgVP8Z">Прайс - лист</a>
                    </div>
                    <div className="about-us__bottom">
                        <h3>Как с нами связаться</h3>
                        <p>Наш e-mail: <a href="mailto:adv@ergashbaev.uz">adv@ergashbaev.uz</a></p>
                        <p>Telegram: <a href="#">@ergashbaevco</a></p>
                        <p>Можно обратиться напрямую к коммерческому директору: <a href="#">@tico_gb</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
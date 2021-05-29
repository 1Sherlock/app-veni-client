

import React, {useState, useEffect} from 'react';

const Modals = (props) => {
    const [step, setStep] = useState(0);
    const [interests, setInterests] = useState(props.data.map(item => item.id));
    const {data} = props;



    const getInterests = () => {
        if (typeof window !== 'undefined') {
            console.log("keldi")
            console.log(!!localStorage.getItem("interests"))
            return !!localStorage.getItem("interests");
        }
    }

    const changeInterest = (id) => {
        if (interests.includes(id)) {
            interests.splice(interests.indexOf(id), 1);
        } else {
            interests.splice(id - 1, 0, id);
        }
        console.log(interests);
    }

    const setMainInterests = () => {
        localStorage.setItem("interests", JSON.stringify(interests));
    }

    return (
        !getInterests() ?
            <div>
                {/*<div className={`modal `}>*/}
                {/*    <img src="/assets/img/logo-box.svg" alt="" className="modal_logo"/>*/}
                {/*    <span className="modal_reg__close" id="modal_reg__close"/>*/}
                {/*    <div className="modal__block">*/}
                {/*        <div className="modal__box left"*/}
                {/*             style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}}/>*/}
                {/*        <div className="modal__right">*/}
                {/*            <form action="">*/}
                {/*                <div className="modal__text">*/}
                {/*                    <h4>Единный вход для всех сервисов.</h4>*/}
                {/*                    <p>Войдите используя социальные сети</p>*/}
                {/*                    <button className="f"><img src="/assets/img/f.svg" alt=""/> Войти через Facebook*/}
                {/*                    </button>*/}
                {/*                    <button className="t"><img src="/assets/img/t.svg" alt=""/> Войти через Telegram*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </form>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                    <div className={`modal-1 ${step !== 2 ? 'modal-close' : ''}`}>
                        <img src="/assets/img/logo-box.svg" alt="" className="modal_logo"/>
                        <div className="modal__block">
                            <div className="modal__box left"
                                 style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}}/>
                            <div className="modal__box right">
                                <div className="modal__text">
                                    <h4>Первые новости которые подстраиваются под интересы пользователя</h4>
                                    <p>Следует лишь выбрать интересующие
                                        интересы.</p>
                                    <div className="modal__checkbox">
                                        {data?.map((item, index) => (
                                            <div className="modal_check" key={index}>
                                                <input type="checkbox" defaultChecked
                                                       onChange={() => changeInterest(item.id)}
                                                       className="custom-checkbox ng-untouched ng-pristine ng-valid"
                                                       id={"veni" + item.id}/>
                                                <label htmlFor={"veni" + item.id}><img alt="" src={"https://veni.uz/" + item.icon}/> {item.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <a className="next" href="#" onClick={setMainInterests}>Пропустить</a>
                            </div>
                        </div>
                    </div>
                    <div className={`modal-2 ${step !== 1 ? 'modal-close' : ''}`}>
                        <img src="/assets/img/logo-box.svg" alt="" className="modal_logo"/>
                        <div className="modal__block">
                            <div className="modal__box left"
                                 style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}}/>
                            <div className="modal__box right">
                                <div className="modal__text">
                                    <h4>Первые новости которые учитывают местоположение пользователя</h4>
                                    <p>Пользователи имеют доступ к просмотру событий и новостей, происходящих в их
                                        местопребывании. Для
                                        этого стоит
                                        разрешить сервисам отслеживать геопозицию.</p>
                                </div>
                                <a className="next" href="#" onClick={() => setStep(2)}>Пропустить</a>
                            </div>
                        </div>
                    </div>

                    <div className={`modal-3 ${step !== 0 ? 'modal-close' : ''}`}>
                        <img src="/assets/img/logo-box.svg" alt="" className="modal_logo"/>
                        <div className="modal__block">
                            <div className="modal__box left"
                                 style={{background: "url('/assets/img/hello.jpg') no-repeat center / cover"}}/>
                            <div className="modal__box right">
                                <div className="modal__text">
                                    <h4>Идеальный сервис микроблогинга.</h4>
                                    <p>Каждый пользователь может предложить свой материал к публикации. Новость с
                                        прикреплённым
                                        контентом
                                        будет
                                        отправлена редакторам, а после опубликована на странице.</p>
                                </div>
                                <a className="next" href="#" onClick={() => setStep(1)}>Пропустить</a>
                            </div>
                        </div>
                    </div>
                }
            </div> : <div />
    );
};

export default Modals;
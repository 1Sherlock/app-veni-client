import React from "react";
import Header from "../components/Header";

export default function Home() {
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

      <div className="main-container container">
        <div className="row">
          <div className="col col--normal aside-popular">
            <div className="aside_sticky">
              <div className="aside-popular__title">Главное за день</div>
              <div className="aside-popular__wrap-news">
                <a className="aside-popular__news news link-effect"
                   href="/jamol-nasyrov-naznachen-novim-hokimom-buhari">
                  <div className="news__title" title="Жамол Насыров назначен новым хокимом Бухары.">
                    <p>Жамол Насыров назначен новым хокимом Бухары.</p>
                  </div>
                  <span>10:24, 05 мая</span>
                </a>
                <a className="aside-popular__news news link-effect"
                   href="/jamol-nasyrov-naznachen-novim-hokimom-buhari">
                  <div className="news__title" title="Жамол Насыров назначен новым хокимом Бухары.">
                    <p>Жамол Насыров назначен новым хокимом Бухары.</p>
                  </div>
                  <span>10:24, 05 мая</span>
                </a>
                <a className="aside-popular__news news link-effect"
                   href="/jamol-nasyrov-naznachen-novim-hokimom-buhari">
                  <div className="news__title" title="Жамол Насыров назначен новым хокимом Бухары.">
                    <p>Жамол Насыров назначен новым хокимом Бухары.</p>
                  </div>
                  <span>10:24, 05 мая</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col col--large">
            <a className="news link-effect post-list" href="#">
              <div className="news__row">
                <div className="news__wrap">
                  <div className="news__time"><span>Бухара</span>10:24, 05 мая</div>
                </div>
                <div className="news__wrap avtor">
                  <div className="news__avatar">
                    <img alt="Жамол Насыров назначен новым хокимом Бухары." src="/uploads/users/2.png" />
                  </div>
                  <div className="avatar_name" href="/owner/2">Ш.Алина</div>
                </div>
              </div>
              <div className="news__subtitle">
                <span className="span">Жамол Насыров назначен новым хокимом Бухары.</span>
                <span>Жамол Носиров занимал должность заместителя хокима Бухарской области с 2017 по 2020 год.</span>
              </div>
            </a>
            <a className="news link-effect post-list" href="#">
              <div className="news__row">
                <div className="news__wrap">
                  <div className="news__time"><span>Бухара</span>10:24, 05 мая</div>
                </div>
                <div className="news__wrap avtor">
                  <div className="news__avatar">
                    <img alt="Жамол Насыров назначен новым хокимом Бухары." src="/uploads/users/2.png" />
                  </div>
                  <div className="avatar_name" href="/owner/2">Ш.Алина</div>
                </div>
              </div>
              <div className="news__subtitle">
                <span className="span">Жамол Насыров назначен новым хокимом Бухары.</span>
                <span>Жамол Носиров занимал должность заместителя хокима Бухарской области с 2017 по 2020 год.</span>
              </div>
            </a>
            <a className="news link-effect post-list" href="#">
              <div className="news__row">
                <div className="news__wrap">
                  <div className="news__time"><span>Бухара</span>10:24, 05 мая</div>
                </div>
                <div className="news__wrap avtor">
                  <div className="news__avatar">
                    <img alt="Жамол Насыров назначен новым хокимом Бухары." src="/uploads/users/2.png" />
                  </div>
                  <div className="avatar_name" href="/owner/2">Ш.Алина</div>
                </div>
              </div>
              <div className="news__subtitle">
                <span className="span">Жамол Насыров назначен новым хокимом Бухары.</span>
                <span>Жамол Носиров занимал должность заместителя хокима Бухарской области с 2017 по 2020 год.</span>
              </div>
            </a>
          </div>
          <div className="col col--normal aside-advice">
            <div className="advice">
              <app-adfox-banner _nghost-serverapp-c10="" id="adfox_160601177015139307">
                <div id="AdFox_banner_3313531303" style={{width: "100%"}}><a
                    href="https://ads.adfox.ru/277709/goLink?ad-session-id=7101001620382574958&amp;hash=3f54fc2eb7d84637&amp;rand=mkhgnyk&amp;rqs=AAAAAAAAAABvE5VgWiNdV40yzvO9dHR8&amp;pr=dfhwmdg&amp;p1=cndnj&amp;ytt=144585783248917&amp;p5=jlwej&amp;ybv=0.14599&amp;p2=geyb&amp;ylv=0.14599"
                    target="_blank"> <img
                    src="https://banners.adfox.ru/210503/adfox/1624810/4321105.f720368b45a7ff846b634ec0a9839e15.jpg"
                    alt="" width="100" style={{width: "100%", height: "auto", verticalAlign: "middle", border: "0px"}}/></a>
                </div>
                <iframe id="AdFox_iframe_3313531303" name="adfox_transport_3313531303" style={{display: "none"}} />
              </app-adfox-banner>
              <div className="link">
                <a href="http://ergashbaev.uz">Реклама</a>
                <a style={{cursor: "pointer"}} href="/info/about">Медиакит</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

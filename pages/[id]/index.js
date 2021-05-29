

import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Link from "next/link";

const Index = () => {
    const [location, setLocation] = useState({});
    const [news, setNews] = useState([]);
    const [content, setContent] = useState({})

    useEffect(async () => {

        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition((location) => {
                setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
                if (localStorage.getItem("interests")) {
                    const interests = JSON.parse(localStorage.getItem("interests"));
                    let rv = "";
                    for (let i = 0; i < interests.length; ++i)
                        rv += "&interests=" + interests[i];

                    axios.get(API_PATH + "post/main?limit=6&page=1" + rv + "&latitude=" + location.coords.latitude + "&longitude=" + location.coords.longitude, {
                        headers: {
                            language: "ru",
                            site: "veni"
                        }
                    })
                        .then((res) => {
                            setNews(res.data.items);
                        })
                    axios.get(API_PATH + "post/view" + window.location.pathname,{
                        headers: {
                            language: "ru",
                            site: "veni"
                        }
                    })
                        .then((res) => {
                            setContent(res.data);
                        })
                }
            });
        }
    }, [])
    return (
        <>
            <Header/>

            <div className="main-container container">
                <div className="row">
                    <div className="col col--normal aside-popular">
                        <div className="aside_sticky">
                            <div className="aside-popular__title">Главное за день</div>
                            <div className="aside-popular__wrap-news">
                                {news.map(item => (
                                    <Link href={item.route_name} key={item.id}>
                                        <a className="aside-popular__news news link-effect">
                                        <div className="news__title" title={item.title}>
                                            <p>{item.title}</p>
                                        </div>
                                        <span>{item.date}</span>
                                    </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col col--large">
                        <div className="news link-effect post-list">
                            <div className="news__row">
                                <div className="news__wrap">
                                    <div className="news__time">
                                        <span>{content.city}</span>{content.date}
                                    </div>
                                    <a href="#" className="Share-this">Поделиться
                                        <div id="sub_menu__block1" className="sub_menu__block">
                                            <div data-curtain="" data-shape="round"
                                                 data-services="vkontakte,facebook,odnoklassniki"
                                                 className="ya-share2"/>
                                        </div></a>
                                </div>
                                <a className="news__wrap avtor" href="/owner/2">
                                    <div className="news__avatar">
                                        <img alt="Жамол Насыров назначен новым хокимом Бухары."
                                             src={content.avatar}/>
                                    </div>
                                    <span className="avatar_name">{content.owner_name}</span>
                                </a>
                            </div>
                            <div className="news__subtitle post_title">
                                <span className="span">{content.title}</span>
                                <div>{content.subtitle}</div>
                            </div>
                            <div className="post-list__text">
                                {content.img &&
                                <div className="news__img-wrap">
                                    <img className="news__img"
                                         src={content.img} />
                                </div>
                                }

                                <div className="post-list__box">
                                    <p>Как&nbsp;<a
                                        href="https://t.me/buxorouz_official/19961">сообщает</a>&nbsp;пресс-служба
                                        хокимията Бухарской области,&nbsp;5 мая, на внеочередном заседании Кенгаша
                                        народных депутатов Носиров Жамол Шухратович был утвержден хокимом города Бухары.
                                    </p>
                                </div>
                                <div className="post-list__box">
                                    <p>До назначения на эту должность он был&nbsp;первым заместителем министра культуры,
                                        а в 2017-2020 годах — заместителем хокима Бухарской области по вопросам
                                        молодёжной политики, социального развития и духовно-просветительских дел.</p>
                                </div>
                                <a href="https://t.me/veniuz" className="tg_link"><img src="assets/img/logo-box.svg"
                                                                                       alt=""/><p>Больше новостей в
                                    Телеграм-канале</p><span>Подписаться</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col col--normal aside-advice">
                        <div className="advice">
                            <app-adfox-banner _nghost-serverapp-c10="" id="adfox_160601177015139307">
                                <div id="AdFox_banner_3313531303" style={{width: "100%"}}><a
                                    href="https://ads.adfox.ru/277709/goLink?ad-session-id=7101001620382574958&amp;hash=3f54fc2eb7d84637&amp;rand=mkhgnyk&amp;rqs=AAAAAAAAAABvE5VgWiNdV40yzvO9dHR8&amp;pr=dfhwmdg&amp;p1=cndnj&amp;ytt=144585783248917&amp;p5=jlwej&amp;ybv=0.14599&amp;p2=geyb&amp;ylv=0.14599"
                                    target="_blank"> <img
                                    src="https://banners.adfox.ru/210503/adfox/1624810/4321105.f720368b45a7ff846b634ec0a9839e15.jpg"
                                    alt="" width="100"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        verticalAlign: "middle",
                                        border: "0px"
                                    }}/></a></div>
                                <iframe id="AdFox_iframe_3313531303" name="adfox_transport_3313531303"
                                        style={{display: "none"}}/>
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
    );
};

export default Index;
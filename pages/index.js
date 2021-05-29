import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Modals from "../components/Modals";
import axios from 'axios';
import {API_PATH} from "../tools/constants";
import Link from "next/link";


export async function getServerSideProps() {

    const res = await axios.get(API_PATH + "interest", {
        headers: {
            language: "ru",
            site: "veni"
        }
    });

    return {
        props: {
            data: res.data,
        }
    }
}

export default function Home(props) {

    const [location, setLocation] = useState({});
    const [news, setNews] = useState([]);

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
                }
            });


        }


    }, [])

    return (
        <>


            <Header/>
            <Modals data={props.data} />

            <div className="main-container container">
                <div className="row">
                    <div className="col col--normal aside-popular">
                        <div className="aside_sticky">
                            <div className="aside-popular__title">Главное за день</div>
                            <div className="aside-popular__wrap-news">
                                {news.map(item => (
                                    <Link href={item.route_name}>
                                        <a className="aside-popular__news news link-effect"
                                           href="/jamol-nasyrov-naznachen-novim-hokimom-buhari">
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
                        {news.map((item) => (
                            <Link href={item.route_name}>
                                <a className="news link-effect post-list" key={item.id}>
                                    <div className="news__row">
                                        <div className="news__wrap">
                                            <div className="news__time"><span>{item.city}</span>{item.date}</div>
                                        </div>
                                        <div className="news__wrap avtor">
                                            <div className="news__avatar">
                                                <img alt={item.title}
                                                     src={item.avatar}/>
                                            </div>
                                            <div className="avatar_name" href="/owner/2">{item.owner_name}</div>
                                        </div>
                                    </div>
                                    <div className="news__subtitle">
                                        <span className="span">{item.title}</span>
                                        {item.subtitle &&
                                        <span>{item.subtitle}</span>
                                        }
                                    </div>
                                    {item.img &&
                                    <div className="news__img-wrap">
                                        <img className="news__img" alt={item.title}
                                             src={item.img}/>
                                    </div>
                                    }
                                </a>
                            </Link>
                        ))}

                        <a className="news link-effect post-list" href="#">
                            <div className="news__row">
                                <div className="news__wrap">
                                    <div className="news__time"><span>Бухара</span>10:24, 05 мая</div>
                                </div>
                                <div className="news__wrap avtor">
                                    <div className="news__avatar">
                                        <img alt="Жамол Насыров назначен новым хокимом Бухары."
                                             src="/uploads/users/2.png"/>
                                    </div>
                                    <div className="avatar_name" href="/owner/2">Ш.Алина</div>
                                </div>
                            </div>
                            <div className="news__subtitle">
                                <span className="span">Жамол Насыров назначен новым хокимом Бухары.</span>
                                <span>Жамол Носиров занимал должность заместителя хокима Бухарской области с 2017 по 2020 год.</span>
                            </div>
                            <div className="news__img-wrap">
                                <img className="news__img" alt="Форбс назвал десять самых богатых спортсменов мира"
                                     src="https://admin.veni.uz/uploads/publication/NINTCHDBPICT000443242637-e1573216567631.jpg"/>
                            </div>
                        </a>
                        <a className="news link-effect post-list" href="#">
                            <div className="news__row">
                                <div className="news__wrap">
                                    <div className="news__time"><span>Бухара</span>10:24, 05 мая</div>
                                </div>
                                <div className="news__wrap avtor">
                                    <div className="news__avatar">
                                        <img alt="Жамол Насыров назначен новым хокимом Бухары."
                                             src="/uploads/users/2.png"/>
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
                                    alt="" width="100" style={{
                                    width: "100%",
                                    height: "auto",
                                    verticalAlign: "middle",
                                    border: "0px"
                                }}/></a>
                                </div>
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
    )
}

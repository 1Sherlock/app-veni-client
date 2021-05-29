
import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="bg_black" />
            <div className="container header__container header-web">
                <Link href="/"><a className="header__logo" /></Link>
                <div className="header__categories">
                    <div className="header__scroll">
                        <Link href="/"><a className="header__category link-effect">Лента</a></Link>
                        <Link href="/popular"><a className="header__category link-effect">Самое популярное</a></Link>
                    </div>
                </div>
                <form className="header__search search" action="#" method="post">
                    <label className="search__label">
                        <img src="/assets/img/icons/magnyfying-glass-black.svg" className="icon search__icon"/>
                        <input name="search" placeholder="Найти" className="search__input" id="headerSearch" />
                        <button type="submit" style={{display: "none"}} />
                    </label>
                    <a style={{cursor: "pointer"}} href="https://post.vidi.uz" target="_blank" className="add-news add">Добавить
                        новость</a>
                </form>
                <div id="sub_menu2" className="all-uz">
                <span>
                    <div className="bbody">
                    <div className="orb" />
                    </div>Все интересы
                </span>
                    <div className="sub_menu__block" id="sub_menu__block2">
                        <div className="sub__check">
                            <input type="checkbox" className="custom-checkbox" id="1" />
                            <label htmlFor="1">1</label>
                        </div>
                        <div className="sub__check">
                            <input type="checkbox" className="custom-checkbox" id="1" />
                            <label htmlFor="1">1</label>
                        </div>
                        <div className="sub__check">
                            <input type="checkbox" className="custom-checkbox" id="1" />
                            <label htmlFor="1">1</label>
                        </div>
                        <button type="button">готово</button>
                    </div>
                </div>
                <a id="openModal" className="add-news login" href="#">Вход</a>
            </div>
        </header>
    );
};

export default Header;
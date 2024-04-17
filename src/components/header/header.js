import React from "react";
import './header.scss';

const Header = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container d-flex justify-content-between">
                    <nav className="navbar navbar-expand">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Główna</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">O nas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Katalogi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kontakt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="navbar navbar-expand">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-phone bi"></i> +48 459 568 017
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-envelope"></i> biuro@ewagifts.pl
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <header className="header py-2">
                <div className="container">
                    <div className="header__content d-flex align-items-center">
                        <a href="/" className="header__logo d-block me-3" aria-label="Ewa Gifts">
                            <img className="header__logo-img" src="./img/logo.svg" alt="Ewa Gifts" />
                        </a>
                        <button type="button" className="btn btn-primary btn-lg me-4 catalog-button text-nowrap" aria-label="Catalog">
                            <i className="fa-solid fa-bars"></i> Katalog
                        </button>
                        <form role="search" className="input-group input-group-lg search-form me-3">
                            <input type="search" className="form-control" placeholder="Szukaj" aria-label="Search input" />
                            <button className="btn btn-lg btn-outline-secondary" btn-lg type="button" id="button-addon1">
                                <i aria-label="Search button" className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        <nav className="navbar navbar-expand account-buttons">
                            <ul class="navbar-nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa-solid fa-user d-block mx-auto mb-1 text-center fs-4"></i>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa-solid fa-heart d-block mx-auto mb-1 text-center fs-4"></i>
                                        Wishlist
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa-solid fa-cart-shopping d-block mx-auto mb-1 text-center fs-4"></i>
                                        Cart
                                    </a>
                                </li>
                            </ul >
                        </nav>
                    </div >
                </div >
            </header >
        </>
    );
};

export default Header;
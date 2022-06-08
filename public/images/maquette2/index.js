import React from 'react'

export default function Maquette2() {
  return (
    <div>

    <nav className="navbar">
        <img src="/images/Logo.png" className="logo" alt="logo"/>
        <ul className="links">
            <li><a href="#esprit">L'esprit R'Guitar</a></li>
            <li><a href="#gratte">Nos grattes</a></li>
            <li><a href="#contact"><span><i className="fas fa-shopping-cart"></i><button>Boutique</button></span></a></li>
        </ul>
    </nav>

    <header>
        <div className="header-content">
            <h1>Votre meilleure riff mérite</h1>
            <div className="citation">
                <span className="ligne"></span>
                <span className="ligne-texte">
                    la meilleure guitare
                </span>
            </div>
        </div>
    </header>

    <section id="esprit">
        <div className="esprit">
            <div className="bandeau">
                <span className="titre-debut">L'ESPRIT R'GUITAR</span>
            </div>
            <div className="contenu-esprit">
                <div className="droite">
                    <div>
                        <span className="sous-titre">SEULE COMPTE LA MUSIQUE</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime cumque laudantium dolore perspiciatis maiores, ad neque quo, iusto debitis perferendis unde error iure dolores vel suscipit reiciendis assumenda ab?</p>                    
                    </div>
                    <div>
                        <span className="sous-titre">DES BEATLES A NIRVANA</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime cumque laudantium dolore perspiciatis maiores, ad neque quo, iusto debitis perferendis unde error iure dolores vel suscipit reiciendis assumenda ab?</p>                    
                    </div>
                    <div>
                        <span className="sous-titre">LE SON NOTRE METIER</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime cumque laudantium dolore perspiciatis maiores, ad neque quo, iusto debitis perferendis unde error iure dolores vel suscipit reiciendis assumenda ab?</p>                    
                    </div>                
                </div>
                <div className="gauche">           
                    <div className="gallerie">
                        <div className="artiste">
                            <img className="artiste-image" src="/images/image1.jpg" alt="image"/>
                        </div>
                        <div className="artiste">
                            <img className="artiste-image" src="/images/image3.jpg" alt="image"/>
                        </div>
                        <div className="artiste">
                            <img className="artiste-image" src="/images/image2.jpg" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gratte">
        <div className="bandeau">
            <span className="titre-fin">NOS GRATTES</span>
        </div>
        <div className="contenu-gratte">
            <div className="haut">
                <div className="titre-gratte">
                    <span className="sous-titre">LES GUITARES EN STOCK</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime cumque laudantium dolore perspiciatis maiores, ad neque quo, iusto debitis perferendis unde error iure dolores vel suscipit reiciendis assumenda ab?</p>                    
                </div>
            </div>
            <div className="bas">
                <div className="liste">
                    <div className="guitare">
                        <img className="affiche" src="/images/guitar1.jpg" alt="image"/>
                        <div className="infos">
                            <div>
                                <span className="libelle">GIBSON CASINO</span>
                            </div>
                            <div>
                                <span className="prix">2000,00</span>
                            </div>
                            <div>
                                <button>ACHETER</button>
                            </div>
                        </div>
                    </div>
                    <div className="guitare">
                        <img className="affiche" src="/images/guitar2.jpg" alt="image"/>
                        <div className="infos">
                            <div>
                                <span className="libelle">LES PAUL PLUS TRANS BLUE</span>
                            </div>
                            <div>
                                <span className="prix">400,00</span>
                            </div>
                            <div>
                                <button>ACHETER</button>
                            </div>
                        </div>
                    </div>
                    <div className="guitare">
                        <img className="affiche" src="/images/guitar3.jpg" alt="image"/>
                        <div className="infos">
                            <div>
                                <span className="libelle">ENDER STRATOCASTER</span>
                            </div>
                            <div>
                                <span className="prix">2500,00</span>
                            </div>
                            <div>
                                <button>ACHETER</button>
                            </div>
                        </div>
                    </div>
                    <div className="guitare">
                        <img className="affiche" src="/images/guitar4.jpg" alt="image"/>
                        <div className="infos">
                            <div>
                                <span className="libelle">BC RICH DOUBLE NECK</span>
                            </div>
                            <div>
                                <span className="prix">2000,00</span>
                            </div>
                            <div>
                                <button>ACHETER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div className="bandeau">
            <span className="titre-debut">CONTACTE NOUS</span>
        </div>
        <div className="contenu-contact">
            <div className="haut">
                <div>
                    <span className="sous-titre">LAISSE NOUS UN MOT</span>
                </div>
            </div>
            <div className="bas">
                <form action="#" className="form">
                    <div className="ligne">
                        <div className="form-input">
                            <label for="nomprenom">NOM ET PRENOM</label>
                            <input
                            type="text"
                            name="nomprenom"
                            placeholder="Paul McCartney"
                            id="nomprenom" />
                        </div>
                    </div>   
                    <div className="ligne">
                        <div className="form-input">
                            <label for="email">EMAIL</label>
                            <input
                            type="text"
                            name="email"
                            placeholder="paul@mccartney.co.uk"
                            id="email" />
                        </div>
                        <div className="form-input">
                            <label for="telephone">TELEPHONE</label>
                            <input
                            type="text"
                            name="telephone"
                            placeholder="0123456789"
                            id="telephone" />
                        </div>
                    </div>
                    <div className="ligne">
                        <div className="form-input">
                            <label for="message">MESSAGE</label>
                            <input
                            type="text"
                            name="message"
                            placeholder="Votre message"
                            id="message" />
                        </div>
                    </div>
                    <div className="ligne">
                        <div className="center"><button>VALIDER</button></div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    </div>
  )
}

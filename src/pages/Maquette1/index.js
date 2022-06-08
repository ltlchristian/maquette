import React from 'react'
import "./Maquette1.css";

export default function Maquette1() {
  return (
    <>
    
        <nav className="nav">
            <img src={`/images/maquette1/logo.png`} className="logo" alt="logo"/>
            <ul className="links">
                <li><a href="#identite">Qui suis je?</a></li>
                <li><a href="#creation">Mes créations</a></li>
                <li><a href="#tarif">Tarifs</a></li>
                <li><a href="#contact">Contactez-moi</a></li>
            </ul>
        </nav>

        <header style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/maquette1/top.jpg'})`}}>
            <div className="header-content">
                <h1>Sophie Photographies</h1>
                <p>
                    Vos photos, ma passion.
                </p>
            </div>
        </header>

        <section id="identite" className="identite">
            <div className="gauche">
                <h2 className="titre">Qui suis-je ?</h2>
                <p className="texte">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio temporibus sint officiis quis itaque laboriosam odio quam illo nisi porro amet adipisci facilis voluptatum laborum excepturi quas unde hic?
                Reprehenderit, quae? Labore culpa aspernatur, quos reiciendis iste sed corporis quaerat ipsa doloremque totam alias id magnam, pariatur provident incidunt accusantium? Dicta, asperiores. Eum ut incidunt fugit, consectetur suscipit error?
                Sapiente, omnis provident. Facere, possimus sed nulla aliquid explicabo dolorem ut harum assumenda tempore quibusdam aspernatur amet. Vel quod a nam hic, accusamus placeat voluptatem similique magnam, laudantium deserunt cupiditate.
                </p>
                <p className="signature">- Sophie</p>
            </div>
            <div className="droite" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/maquette1/sophie.jpg'})`}}>
            </div>
        </section>

        <section id="creation" className="creation">
            <h2>Mes créations</h2>
            <div className="creation-content">
                <span className="image"><img src={`/images/maquette1/picture1.jpg`} alt=""/></span>
                <span className="image"><img src={`/images/maquette1/picture2.jpg`} alt=""/></span>
                <span className="image"><img src={`/images/maquette1/picture3.jpg`} alt=""/></span>
                <span className="image"><img src={`/images/maquette1/picture5.jpg`} alt=""/></span>
                <span className="image"><img src={`/images/maquette1/picture7.jpg`} alt=""/></span>
                <span className="image"><img src={`/images/maquette1/picture8.jpg`} alt=""/></span>
            </div>
        </section>

        <section id="tarif" className="tarif">
            <h2>Tarif</h2>
            <div className="tarif-content">
                <div className="row">
                    <span>Prestation</span>
                    <span>Description</span>
                    <span>Durée</span>
                    <span>Prix</span>
                </div>            
                <div className="row">
                    <span>Portrait simple</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>X min</span>
                    <span>X &euro; TTC</span>
                </div>
                <div className="row">
                    <span>Portrait professionnel (3 prises)</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>X min</span>
                    <span>X &euro; TTC</span>
                </div>
                <div className="row">
                    <span>Photo de groupe</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>X min</span>
                    <span>X &euro; TTC</span>
                </div>
                <div className="row">
                    <span>Mariage</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>X min</span>
                    <span>X &euro; TTC</span>
                </div>
            </div>
        </section>

        <section className="contact">
            <h2>Contactez-moi</h2>
            <form className="form-contact">
                <label for="firstname">Prénom</label>
                <input type="text" name="prenom" id="firstname" required/>
                <label for="lastname">Nom</label>
                <input type="text" name="nom" id="lastname" required/>
                <label for="email">Email</label>
                <input type="text" name="email" id="email"/>
                <label for="message">Message</label>
                <input type="text" name="message" id="message"/>
                <input type="checkbox" name="consent" id="consent"/>
                <label for="consent">J'accepte que mes données ci-dessus soient traitées à des fins de prises de contact commerciales.</label>
                <button>ENVOYER</button>
            </form>
        </section>

    </>
  )
}

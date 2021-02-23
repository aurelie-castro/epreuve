import {useState} from "react";
import Modal from "./Modal";

function SectionMenu() {
      const [show, setShow] = useState(false);
      const menus = [
          {jour: "23-02-21",
            entree1: "-endive, salade croquante et vinaigrette à l'orange",
            entree2: "-potage de courge ( selon marché)",
            plat1: "-Falafel Burger: Bun's au sarrasin, galette de pois-chiche frite, coleslaw, sauce tahini , accompagné de pommes de terre sautées.",
            plat2:"-Burger Salvi: Bun's au sarrasin, épaule de cochon confite au cidre, sauce BBC maison, champignons, accompagné de pommes de terre sautées.",
            dessert1:"-cookie au chocolat",
            dessert2:"-salade de fruits frais"
            },{
                jour:"22-02-21",
                entree1:"-Toast de Labneh et salade verte",
                entree2:"-soupe de carottes aux fines herbes",
                plat1:""
            }
      ];
  return (
    <div>
      <div className="saumon">
        <div className="contenu">
          <div className="texte">
          <div id="curry"></div>
              {/* <img src="images/curry_de_legume.jpg"/> */}
            <p>
              La Maison Salvi vous offre chaque jour le choix entre un menu
              carné ou végé: 10‎€ livraison incluse (sur Rennes uniquement).
            </p>
            <p>
              Des produits sains et simples, de saison, mis en musique et en
              couleur par le Chef Pablo. Qui d'autre aurait pu réconcilier la
              famille autour d'une idée aussi simple et chaleureuse?
            </p>
            <p>Il est temps de passer commande!</p>
            <button onClick={()=> setShow(true)}>menu du jour</button>
          </div>
          <div className="image">
            <img src="images/cuistot1.jpg" id="cuistot"/>
          </div>
        </div>
      </div>
       <Modal title="Menu du jour" onClose={()=> setShow(false)} show={show}>Commander par What's app (06 66 666 666) <br/>{menus[0].entree1}<br/> {menus[0].entree2} <br/>{menus[0].entree2}<br/>{menus[0].plat1}<br/>{menus[0].plat2}<br/>{menus[0].dessert1}<br/>{menus[0].dessert2}</Modal>
    </div>
  );
}

export default SectionMenu;

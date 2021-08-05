import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: {
      key: "Flores y plantas",
      icon: "leaf",
      content: "Flores y plantas",
    },
    render: () => (
      <Tab.Pane attached={false}>
        <div class="ui centered grid link cards">
          <div class="ui cardGuia card ">
            <div class="content">
              <div class="header negra">Mio flore</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/01.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">
                5% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo que le compres un arreglo personalizado, escoge
                las flores que más le gusten, tienen muchísimas opciones que les
                van a encantar.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas gratuitas en Paraíso y entregas con costo adicional
                    en todo Cartago y demás parte de la GAM.
                  </p>
                  <p>Télefono: 7186-8246</p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/Mioflore"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>

          <div class="ui cardGuia card">
            <div class="content">
              <div class="header">Eco day</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/02.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">Una suculenta extra de regalo</div>
              <p>
                Te recomiendo la cajita especial del día de la madre, es una
                caja con una suculenta y en las paredes de la caja puedes
                ponerle frases o tarjetas para vos escribir lo que le querés
                decir.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas gratuitas en Cartago y alrededores, entregas con
                    costo adicional más lejos de Ochomogo.
                  </p>
                  <p>Teléfono: 8301-1202</p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/EcoDay12"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: "Regalos", icon: "gift", content: "Regalos" },
    render: () => (
      <Tab.Pane attached={false}>
        <div class="ui centered grid link cards">
          <div class="ui cardGuia4 card ">
            <div class="content">
              <div class="header negra">Ticocos</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/03.webp" />
            </div>
            <div class="content contentGuia4">
              <div class="ui orange header">
                5% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo estos hermosos y útiles cocos que sirven para
                comidas, tomar bebidas, para poner suculentas y hasta
                decoración. Son reutilizables y amigables con el planeta.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas gratuitas en Cartago (Ruinas, Basílica, Tribunales,
                    en el centro), San José centro lugares a convenir, entregas
                    más lejanas con costo adicional.
                  </p>
                  <p>Teléfono: 8866-6005</p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/ticoco506"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
          <div class="ui cardGuia4 card ">
            <div class="content">
              <div class="header negra">Datsi – Blusas</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/04.webp" />
            </div>
            <div class="content contentGuia4">
              <div class="ui orange header">
                10% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo comprar estas blusas de algodón que son hechas
                especialmente para cada persona, la etiqueta dirá hecha para: y
                le pondrán el nombre de la persona que se lo vas a regalar, ¡Que
                único!, Hay variedad de colores y diseños.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas a toda la GAM.</p><p>Teléfono: 8439-9627
                  </p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/datsi.costarica"
              target="_blank"
            >
              <i class="add icon"></i>
              <a>Visitar</a>
            </a>
          </div>
          <div class="ui cardGuia4 card ">
            <div class="content">
              <div class="header negra">Laura Pérez Designs</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/45.webp" />
            </div>
            <div class="content contentGuia4">
              <div class="ui orange header">
                10% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo la hermosa joyeria realizada por Laura, tiene detalles únicos que realzaran la belleza de mamá.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas a toda la GAM.</p><p>Teléfono: 6305-2927
                  </p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/Lauraperezdesigns"
              target="_blank"
            >
              <i class="add icon"></i>
              <a>Visitar</a>
            </a>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: "Bebidas", icon: "coffee", content: "Bebidas" },
    render: () => (
      <Tab.Pane attached={false}>
        <div class="ui centered grid link cards">
          <div class="ui cardGuia card ">
            <div class="content">
              <div class="header negra">Chahuite Don Francisco</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/05.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">
                5% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo que tu mamá pruebe el chahuite, todas las mamás
                que conozco les gusta, tiene un sabor dulce y es perfecto para
                tomarlo frio con hielo o pueden ser creativos y hacer otros
                cocteles, da un sabor único.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas gratuitas en Paraíso y entregas con costo adicional
                    en todo Cartago.</p><p>Teléfono: 8965-6650
                  </p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/Chahuite-Don-Francisco-107027907758630"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>

          <div class="ui cardGuia card">
            <div class="content">
              <div class="header">Mio flore</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/06.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">
                5% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo las sangrías que son famosas y a las mamás les
                encantan, complementa la sangría con una copa personalizada con
                un mensaje que salga de tu corazón.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas gratuitas en Paraíso y entregas con costo adicional
                    en todo Cartago y demás parte de la GAM.</p><p>Teléfono:
                    7186-8246
                  </p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/Mioflore"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: "Postres", icon: "utensils", content: "Postres" },
    render: () => (
      <Tab.Pane attached={false}>
        <div class="ui centered grid link cards">
          <div class="ui cardGuia card ">
            <div class="content">
              <div class="header negra">Chupaletas</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/07.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">
                Una paleta gratis por la compra del paquete de 5 paletas
              </div>
              <p>
                Te recomiendo que sorprendas con postre unas deliciosas paletas
                ya sea con sabores costarricenses o las mexicanas. Sirleny las
                hace con mucho amor.
              </p>
              <div class="meta">
                <a class="group">
                  <p>Entregas gratuitas en Paraíso centro.</p>
                  <p>Teléfono: 6075-9734</p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.instagram.com/chupaleta_artesanal/"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>

          <div class="ui cardGuia card">
            <div class="content">
              <div class="header">DulceArte Cakes Boutique</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/08.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">
                10% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo que pruebes la deliciosa repostería que hace Fanny
                para el cafesito, tiene variedad de opciones y paquetes.
              </p>
              <div class="meta">
                <a class="group">
                  <p>
                    Entregas gratuitas en la casa de Fanny (San Rafael,
                    Oreamuno, Cartago), entregas con costo adicional en todo
                    Cartago y alrededores, excepto Turrialba.</p><p>Teléfono:
                    6269-2668
                  </p>
                </a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/Dulceartecakesboutique"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: "Comida", icon: "coffee", content: "Comida" },
    render: () => (
      <Tab.Pane attached={false}>
        <div class="ui centered grid link cards">
          <div class="ui cardGuia3 card ">
            <div class="content">
              <div class="header negra">Coro Food Service</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/09.webp" />
            </div>
            <div class="content contentGuia3">
              <div class="ui orange header">
                10% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo los deliciosos almuerzos a la parrilla de Geudy,
                si les gusta la costilla, el pollo, la pierna de cerdo, T-bone,
                esta es la opción ideal.
              </p>
              <div class="meta">
                <a class="group"><p>Entregas sin costo adicional en Cartago, Ujarrás, Paraíso, Orosi y Cachí.</p><p>Teléfono: 8884-5963</p></a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://api.whatsapp.com/send?phone=50688845963&text=Hola,%20me%20interesan%20paquetes%20del%20d%C3%ADa%20de%20la%20madre,%20vi%20esta%20informaci%C3%B3n%20en%20SofiRecomienda"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>

          <div class="ui cardGuia3 card">
            <div class="content">
              <div class="header">DulceArte Cakes Boutique</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/10.webp" />
            </div>
            <div class="content contentGuia3">
              <div class="ui orange header">
                10% descuento en todas tus compras
              </div>
              <p>
                Te recomiendo los almuerzos de Fanny si te gustan más las
                pechugas de pollo rellenas, la lasaña o pastel de pollo.
              </p>
              <div class="meta">
                <a class="group"><p>Entregas gratuitas en la casa de Fanny (San Rafael, Oreamuno, Cartago), entregas con costo adicional en todo Cartago y alrededores, excepto Turrialba.</p><p>Teléfono: 6269-2668</p></a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/Dulceartecakesboutique"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
          <div class="ui cardGuia3 card ">
            <div class="content">
              <div class="header negra">Jarte Callao</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/105.webp" />
            </div>
            <div class="content contentGuia3">
              <div class="ui orange header">
                10% descuento en todas tus compras
              </div>
              <p>
              Te recomiendo las deliciosas comidas tradicionales costarricenses en un ambiente familiar, pet friendly, espacioso y con una vista muy hermosa de Cartago. Habrá conciertos gratuitos el 14 de agosto 6pm y 15 agosto 1:30pm.
Ileana y José esperan para atenderte.

              </p>
              <div class="meta">
                <a class="group"><p>Contenedores Gastro Park, Cartago.</p><p>Horario: 12md -9pm </p></a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.facebook.com/jartecallao"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: {
      key: "Cuidado personal",
      icon: "heart",
      content: "Cuidado personal",
    },
    render: () => (
      <Tab.Pane attached={false}>
        <div class="ui centered grid link cards">
          <div class="ui cardGuia card ">
            <div class="content">
              <div class="header negra">Uñas- Sir Nail Art</div>
            </div>
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src="./assets/img/eventos/01/emprendimientos/11.webp" />
            </div>
            <div class="content contentGuia">
              <div class="ui orange header">
                Segundo esmaltado a mitad de precio
              </div>
              <p>
                Compra 1 esmaltado semipermanente y el segundo te queda a mitad
                de precio. Puedes utilizarlo para vos en otra cita o para 2
                personas.Cada esmaltado cuesta 10 mil colones, si compras este
                paquete lo pagas 15mil colones y tienes 2 esmaltados
                semipermanentes.
              </p>
              <div class="meta">
                <a class="group"><p>A domicilio en Cartago y alrededores.</p><p>Teléfono: 6075-9734</p></a>
              </div>
            </div>
            <a
              class="ui bottom primary button"
              href="https://www.instagram.com/sir_nailsartist/"
              target="_blank"
            >
              <i class="add icon"></i>
              Visitar
            </a>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];

const TabExampleMenuPositionLeft = () => (
  <Tab menu={{ pointing: true, className: "wrapped" }} panes={panes} />
);

export default TabExampleMenuPositionLeft;

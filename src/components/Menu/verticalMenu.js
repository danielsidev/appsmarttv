import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Menu.scss'
import IconHome from '../Icons/IconHome'
import IconBusca from '../Icons/IconBusca';
import IconAgora from '../Icons/IconAgora';
import IconCategorias from '../Icons/IconCategorias';
import IconConta from '../Icons/IconConta'
const itensMenu = [
  {
    id: 1,
    image: <IconBusca/>,
    title: 'Busca'
  },
  {
    id: 2,
    image: <IconHome />,
    title: 'Início'
  },
  {
    id: 3,
    image: <IconAgora />,
    title: 'Agora na Globo',
  },
  {
    id: 4,
    image: <IconCategorias />,
    title: 'Categorias'
  },
  {
    id: 5,
    image: <IconConta />,
    title: 'Minha Conta'
  }
];

class VerticalMenu extends React.Component {
  render() {
    return (
        <div className="menu-vertical">
          <ul id="content-menu-vert">

          
          {itensMenu .map(iten => (
              <li key={iten.id} id={iten.title} className="menu-vert" tabIndex={iten.id}><div className="item-menu">{iten.image}  <h3 className="title-menu" id={"title-menu-"+iten.id}>{iten.title}</h3></div></li>

          
          ))}
          </ul>
          </div>
    );
  }
}

export default VerticalMenu;

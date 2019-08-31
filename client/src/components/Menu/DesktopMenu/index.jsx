import React, {Component} from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import data from '../menu-item.json';


export class DesktopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubMenu: false,
      idItem: []
    }
  }


  toggleClick = (items) => {
    console.log('___________________ ', items)
    {/*<ul>*/}
      {/*{items.map((item) =>*/}
        {/*<li key={item.id} onClick={() => this.toggleClick(item.menu)}>*/}
          {/*<a href='#'>{item.title}</a>*/}
          {/*/!*{this.state.idItem.includes(item.id) && item.menu && this.renderMenu(item.menu, this.state.showSubMenu)}*!/*/}
          {/*/!*{console.log('this.state.idItem!! ', this.state.idItem)}*!/*/}
          {/*{console.log('!!!!!!!!!!!!!!', item)}*/}
        {/*</li>*/}
      {/*)}*/}
    {/*</ul>*/}
    }


  // renderMenu = (items, showItems = true) =>
  //     <ul>
  //       {showItems && items.map((item) =>
  //         <li key={item.id} onClick={() => this.toggleClick(item.menu)}>
  //           <a href='#'>{item.title}</a>
  //           {/*{this.state.idItem.includes(item.id) && item.menu && this.renderMenu(item.menu, this.state.showSubMenu)}*/}
  //           {/*{console.log('this.state.idItem!! ', this.state.idItem)}*/}
  //           {console.log('!!!!!!!!!!!!!!', item)}
  //         </li>
  //       )}
  //     </ul>

  render() {
    return (
      <div className="desktop-menu-container">
        <div className="container">
          <ul>
            {data.menu.map((item) =>
              <li key={item.id} onClick={() => this.toggleClick(item.menu)}>
                <a href='#'>{item.title}</a>
                {/*{this.state.idItem.includes(item.id) && item.menu && this.renderMenu(item.menu, this.state.showSubMenu)}*/}
                {/*{console.log('this.state.idItem!! ', this.state.idItem)}*/}
                {console.log('!!!!!!!!!!!!!!', item)}
              </li>
            )}
          </ul>
          {console.log('+++++++++++++++')}
        </div>
      </div>
    )
  }
}

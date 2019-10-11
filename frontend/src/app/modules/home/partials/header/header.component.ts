import { Component, OnInit } from '@angular/core';
import { MenuItemLink, MenuItem } from 'src/app/shared/models/menu/header.menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  menuItemIconIsOpen: false;

  menuItemLinks: MenuItemLink[] = [
    new MenuItemLink('product', './product'),
    new MenuItemLink('signin', '/signin'),
    new MenuItemLink('signup', '/signup'),
  ];

  constructor() { }

  ngOnInit() { }
}

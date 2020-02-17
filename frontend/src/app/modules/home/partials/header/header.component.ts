import { Component, OnInit } from '@angular/core';
import { PageIcon, MenuItemLink } from 'src/app/shared/models';
import { pagesIcon } from '../../../../../assets/data/menu/page.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  menuItemIconIsOpen = false;

  pagesIcon: PageIcon[] = pagesIcon;

  menuItemLinks: MenuItemLink[] = [
    new MenuItemLink('signin', '/signin'),
    new MenuItemLink('signup', '/signup'),
  ];

  constructor() { }

  ngOnInit() { }

  toggle(drawer: any): void {
    drawer.toggle();
    this.menuItemIconIsOpen = !this.menuItemIconIsOpen;
  }
}

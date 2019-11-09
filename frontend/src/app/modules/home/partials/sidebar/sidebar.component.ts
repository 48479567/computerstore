import { Component, OnInit } from '@angular/core';
import { PageIcon } from 'src/app/shared/models';
import { pagesIcon } from 'src/assets/data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  pagesIcon: PageIcon[] = pagesIcon;
  constructor() { }

  ngOnInit() { }
}

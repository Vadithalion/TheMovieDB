import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  genres: '';

  constructor(
    public peliculasService: PeliculasService,
  ) { }

  ngOnInit(): void {

  }
}

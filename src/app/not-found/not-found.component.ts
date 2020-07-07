import { Component, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterContentInit {
  constructor() { }
  ngAfterContentInit(): void {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
  }
}

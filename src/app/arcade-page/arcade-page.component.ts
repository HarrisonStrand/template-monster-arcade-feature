import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-arcade-page',
  templateUrl: './arcade-page.component.html',
  styleUrls: ['./arcade-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArcadePageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: any) { }

  ngOnInit(): void {
    this._document.body.classList.add('arcade-page-color');
  }

  ngOnDestroy() {
    this._document.body.classList.add('arcade-page-color');
  }

}

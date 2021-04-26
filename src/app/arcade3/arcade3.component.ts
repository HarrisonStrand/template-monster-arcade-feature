import {
  Component,
  OnInit,
  Renderer2,
  RendererFactory2,
  Inject,
  Injectable,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { callGame } from './game/game';

@Component({
  selector: 'app-arcade3',
  templateUrl: './arcade3.component.html',
  styleUrls: ['./arcade3.component.css'],
})
export class Arcade3Component implements OnInit {
  private _renderer2: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this._renderer2 = rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
    this.buildScript();
  }

  public buildScript(): void {
    let script = this._renderer2.createElement('script');
    script.src = '../../assets/event-config.js';
  }
}

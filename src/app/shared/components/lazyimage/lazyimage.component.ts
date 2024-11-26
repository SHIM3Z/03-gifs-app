import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrl: './lazyimage.component.css',
})
export class LazyimageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt: string = '';

  private hasLoaded: boolean = false;
  ngOnInit(): void {
    if (!this.url) throw new Error('Url requied for lazyimage');
  }

  onload() {
    // setTimeout(() => {
    //   this.hasLoaded = true;
    // }, 1000);
    /**
     * *Esto es para darle un timeout de 1 sg para que se vea mejor la animación
     */
    this.hasLoaded = true;
  }

  get loaded(): boolean {
    return this.hasLoaded;
  }
}

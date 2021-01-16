import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent implements OnInit {
  @Input('header') header: string;
  @Input('subheader') subheader: string;
  constructor() { }

  ngOnInit(): void {
  }

}

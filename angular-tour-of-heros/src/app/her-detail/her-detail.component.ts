import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-her-detail',
  templateUrl: './her-detail.component.html',
  styleUrls: ['./her-detail.component.css']
})
export class HerDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}

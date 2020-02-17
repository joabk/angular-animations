import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './my-zippy.component.html',
  styleUrls: ['./my-zippy.component.css']
})
export class MyZippyComponent implements OnInit {
  @Input('title') title: string;
  constructor() { }

  isExpanded:boolean;

  ngOnInit() {

  }

  onClick(){
    this.isExpanded = !this.isExpanded;
  }

}
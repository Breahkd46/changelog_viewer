import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.css']
})
export class CommitItemComponent implements OnInit {

  @Input() commit: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainerComponent implements OnInit {

  githubUserName: string;
  githubRepo: string;

  constructor() { }

  ngOnInit() {
    this.githubUserName = '';
    this.githubRepo = '';
  }

  updateUserName($event) {
    this.githubUserName = $event;
  }

  updateRepo($event) {
    this.githubRepo = $event;
  }

}

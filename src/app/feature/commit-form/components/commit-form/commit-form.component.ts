import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commit-form',
  templateUrl: './commit-form.component.html',
  styleUrls: ['./commit-form.component.css']
})
export class CommitFormComponent implements OnInit {

  @Output() githubUserNameToChild = new EventEmitter<string>();
  @Output() githubRepoToChild = new EventEmitter<string>();

  githubUserName: string;
  githubRepo: string;

  constructor() { }

  ngOnInit() {
    this.githubUserName = '';
    this.githubRepo = '';
  }

  saveRepo(repo: string) {
    this.githubRepoToChild.emit(repo);
  }

  saveCommitUserName(userName: string) {
    this.githubUserNameToChild.emit(userName);
  }

  onClickSearch() {
    if (this.githubRepo !== '' && this.githubUserName !== '') {
      this.saveCommitUserName(this.githubUserName);
      this.saveRepo(this.githubRepo);
    }
  }

}

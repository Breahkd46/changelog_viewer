import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(private http: HttpClient) { }

  getCommitList(user: string, repo: string,pageNumber: number): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${user}/${repo}/commits?sha=master&page=${pageNumber}`);
  }
}

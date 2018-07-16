import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-info',
  templateUrl: './git-info.component.html',
  styleUrls: ['./git-info.component.css']
})
export class GitInfoComponent implements OnInit {
  user: any;
  username = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  fetchGitInfo() {
    this.http.get('https://api.github.com/users/' + this.username).subscribe((output: any) => {
      this.user = output;
    }
    );

  }
}

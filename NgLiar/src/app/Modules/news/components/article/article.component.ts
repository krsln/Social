import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserCardComponent} from "../../../../Shared/components/user-card/user-card.component";
import {Role, User} from '../../../../Models';

@Component({
  selector: 'app-article',
  imports: [
    UserCardComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  Editor!: User;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["Id"]);
    this.Editor = {
      Id: 2434,
      Avatar: 'https://pbs.twimg.com/profile_images/977615534517825536/gFLYeB5K_400x400.jpg',
      UniqueName: '@abdullahciftcib',
      Name: 'Abdullah Çiftçi',
      Roles: [Role.Commenter, Role.Columnist, Role.Detective]
    } as User;
  }
}

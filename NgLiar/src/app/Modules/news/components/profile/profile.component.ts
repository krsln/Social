import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

import {NewsService} from "../../Services/news.service";
import {User} from "../../../../Models";
import {UserCardComponent} from '../../../../Shared/components/user-card/user-card.component';

@Component({
  selector: 'app-profile',
  imports: [
    UserCardComponent,
    RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  User!: User;
  UniqueName: string = '';
  tab: string = '';

  constructor(private route: ActivatedRoute, private service: NewsService) {
  }

  ngOnInit(): void {
    this.GetTab(this.route.snapshot.routeConfig?.path ?? '');
    console.log(this.tab);
    // console.log(this.route.snapshot.params.UniqueName)
    this.UniqueName = this.route.snapshot.params["UniqueName"];
    this.User = this.service.GetEditorByUniqueName(this.UniqueName);
  }

  GetTab(path: string) {
    this.tab = 'Home';
    console.log(path);
    if (!!path) {
      const temp = path.split('/');
      if (temp && temp.length > 0) {
        this.tab = temp[0];
      }
    }
  }

  selectTab(event: Event, tabName: string) {
    // event.stopPropagation();
    this.tab = tabName;

    // return false;
  }
}

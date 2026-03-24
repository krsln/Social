import {Component, Input} from '@angular/core';
import {Role, User} from '../../../Models';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() User!: User;
  @Input() IsWide: boolean = false;

  constructor() {
  }

  CheckType(val: string) {
    const res = this.User.Roles.find(x => Role[x] === val);
    if (res !== undefined) {
      return !!Role[res];
    }
    return false;
  }
}

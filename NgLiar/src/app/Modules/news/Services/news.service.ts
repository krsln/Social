import {Injectable} from '@angular/core';
import {User, Role} from "../../../Models";
import {Case, ContentType, Proposition} from "../Models";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {
  }

  GetEditorByUniqueName(UniqueName: string): User {
    return this.GetMockupUser();
  }

  GetMockupUser(): User {
    return {
      Id: 2787936004,
      UniqueName: 'abdullahciftcib',
      Avatar: 'https://pbs.twimg.com/profile_images/977615534517825536/gFLYeB5K_400x400.jpg',
      Name: 'Abdullah Çiftçi',
      Roles: [Role.Commenter, Role.Columnist, Role.Detective]
    } as User;
  }

  GetMockupCase(): Case {
    return {
      User: this.GetMockupUser(),
      Id: 1341747557094068200,
      CreatedAt: new Date(),
      UserId: 2787936004,
      UserIdStr: '2787936004',
      Source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      Lang: 'tr',

      Title: 'Türkiye-Pakistan tatbikatı üzerinden alçak propaganda',
      Theses: [
        {
          Proposition: Proposition.Falsity,
          Type: ContentType.Image,
          Content: 'https://cdn.yeniakit.com.tr/images/detail/1571578736-512690.png'
        },
        {
          Proposition: Proposition.Truth,
          Type: ContentType.Image,
          Content: 'https://cdn.yeniakit.com.tr/images/detail/1571578786-f442a6.png'
        },
      ]
    } as Case;

    // {
    //   Detective: {
    //     Id: 'sdgdsgdsg',
    //       Avatar: 'https://pbs.twimg.com/profile_images/977615534517825536/gFLYeB5K_400x400.jpg',
    //       UniqueName: 'abdullahciftcib',
    //       Name: 'Abdullah Çiftçi',
    //       Roles: [Role.Commenter, Role.Columnist, Role.Detective]
    //   },
    //   Date: new Date(),
    //     Type: CaseType.Slander,
    //   Title: 'SAMPLE: Kızılay çadırı vak\'ası',
    //   Theses: [
    //   {Type: ThesisType.Text, Position: ThesisPosition.Falsity, Value: '“Bir tek Kızılay çadırı dahi görmedim”'},
    //   {
    //     Type: ThesisType.Image,
    //     Position: ThesisPosition.Truth,
    //     Value: 'https://iatkv.tmgrup.com.tr/9b3c86/0/0/0/0/0/0?u=https%3a%2f%2fitkv.tmgrup.com.tr%2f2020%2f02%2f05%2fkilicdaroglu-bir-tek-kizilay-cadiri-dahi-gormedim-demisti-bir-goruntusu-daha-ortaya-cikti-1580921095144.jpg&mw=616'
    //   }
    // ]
    // } as Case;
  }


}

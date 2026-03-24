import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

type VoteChoice = 'Yes' | 'No' | 'Neutral';

@Component({
  selector: 'app-simple-poll',
  imports: [],
  templateUrl: './simple-poll.component.html',
  styleUrl: './simple-poll.component.scss',
})
export class SimplePollComponent implements OnInit {
  @Output() Result = new EventEmitter<{ Yes: number, No: number, Neutral: number, Total: number }>();
  @Input() Initial: { Yes: number; No: number; Neutral: number; Total: number; } | undefined;


  Percentage: { Yes: number, No: number, Neutral: number } = {Yes: 0, No: 0, Neutral: 0};
  Tally = {Yes: 0, No: 0, Neutral: 0, Total: 0};

  constructor() {
  }

  ngOnInit(): void {
    if (!!this.Initial) {
      this.Tally = this.Initial;
      this.SetPercentages();
    }
  }

  onClick(choice: any): void {
    this.Vote(choice);
    this.SetPercentages();
    // console.log(this.tally, this.Result);
  }

  Vote(choice: VoteChoice) {
    this.Tally[choice]++;
    this.Tally["Total"]++;
  }

  SetPercentages() {
    const yes = this.Tally.Yes / this.Tally["Total"] * 100 || 0;
    const no = this.Tally.No / this.Tally["Total"] * 100 || 0;
    const neutral = this.Tally.Neutral / this.Tally["Total"] * 100 || 0;

    this.Percentage = {Yes: +yes.toFixed(2), No: +no.toFixed(2), Neutral: +neutral.toFixed(2)};
    this.Result.emit({...this.Tally});
  }
}

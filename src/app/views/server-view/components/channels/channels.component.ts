import { Component } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent {
  test: string[] = ["test1", "test2"]
  groups: Group[] = [{id: 1, title:"TEXT CHANNELS", channels: ["chat", "share", "cat-pics"]},{id: 2, title:"PROGRAMMING", channels: ["typescript", "csharp", "dart"]}]
}
interface Group{
  id: number;
  title: string;
  channels: string[]
}
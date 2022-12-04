import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit{
  test: string[] = ["test1", "test2"]
  // groups: Group[] = [{id: 1, title:"TEXT CHANNELS", channels: ["chat", "share", "cat-pics"]},{id: 2, title:"PROGRAMMING", channels: ["typescript", "csharp", "dart"]}]
  categories: any[] = []

  constructor(private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (route) => {
        this.getCategories(route['serverId'])
      }
    })
  }

  getCategories(serverId: number){
    this.categoryService.getAllByServerId(serverId).subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }
}
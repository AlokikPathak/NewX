import { Component, OnInit } from '@angular/core';
import { Story } from './../../../../shared/models/story.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  Stories: Story[] = [
    {
      _id: 1,
      title: "Story Title 1",
      description: "Story Title 1 Description:  It is about the stories being published in the App. Users can c",
      username: "Shailesh Kumar",
    },
    {
      _id: 2,
      title: "Story Title 2",
      description: "Story Title 2 Description:  It is about the stories being published in the App. Users can c",
      username: "Mukesh Kumar",
    },
    {
      _id: 3,
      title: "Story Title 3",
      description: "Story Title 3 Description:  It is about the stories being published in the App. Users can c",
      username: "Mukesh Kumar",
    },
    {
      _id: 4,
      title: "Story Title 4",
      description: "Story Title 4 Description:  It is about the stories being published in the App. Users can c",
      username: "Mukesh Kumar",
    },
    {
      _id: 5,
      title: "Story Title 5",
      description: "Story Title 5 Description:  It is about the stories being published in the App. Users can c",
      username: "Sam Kumar",
    },
    {
      _id: 6,
      title: "Story Title 6",
      description: "Story Title 6 Description:  It is about the stories being published in the App. Users can c",
      username: "Arnab Singh",
    },
    {
      _id: 7,
      title: "Story Title 7",
      description: "Story Title 7 Description:  It is about the stories being published in the App. Users can c",
      username: "Rakesh Yadav",
    },
    {
      _id: 8,
      title: "Story Title 8",
      description: "Story Title 8 Description:  It is about the stories being published in the App. Users can c",
      username: "Ravish Kumar",
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Purpose: Shows details of Selected Story
   * @returns void
   */
  viewStory(selectedStory: Story): void {
    console.log("View Story : ", selectedStory);
  }

}

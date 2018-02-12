import { Component, OnInit } from '@angular/core';

export class Task {
  id: number;
  name: string;
  updatedAt: Date;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  task: Task = {
    id: 1,
    name: '掃除',
    updatedAt: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

  setUpdatedAt(ev) {
    this.task.updatedAt = new Date();
  }
}
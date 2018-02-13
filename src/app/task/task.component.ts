import { Component, OnInit } from '@angular/core';
import TaskService from '../taskService';

@Component({
  selector: 'app-task',
  providers: [TaskService],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  foo: string = 'foo';

  constructor(private taskService: TaskService) {
    this.foo = taskService.say();
  }

  ngOnInit() {
  }

}

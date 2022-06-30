import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {

  tasks : Task[] = [];
  users : User[] = [];
  constructor(private taskService : TaskService, private userService : UserService) { }

  ngOnInit(): void {
    this.getTasks();
    this.getUsers();
  }

  // get task detailes
  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  // get user detailes
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  // add task detailes
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask({ name } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  // add user detailes
  add1(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  // delete task detailes
  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task.id).subscribe();
  }

  // delete user detailes
  delete1(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}

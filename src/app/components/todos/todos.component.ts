import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/Item'
import { TodoService } from '../../services/todo.service'
import { stringify } from 'querystring';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  @Input() username: string;
  @Input() cardType: string;
  @Input() projectSelected: string;
  @Output() pushItem: EventEmitter<any> = new EventEmitter;
  todos: Item[];
  addItem: string;
  listClassName: string;
  connectedLists: string[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    if (this.cardType == "Backlog") {
      this.todoService.getTodos(this.username, this.cardType).subscribe(todos => {
        this.todos = todos
        console.log(todos);
      });
      console.log(this.username);
      this.listClassName = "backLogItems";
      this.connectedLists = ["inProgItems", "inRevItems", "completeItems"];
    } else if (this.cardType == "In Progress") {
      this.todoService.getTodos(this.username, this.cardType).subscribe(todos => {
        this.todos = todos
        console.log(todos);
      });
      this.listClassName = "inProgItems";
      this.connectedLists = ["backLogItems", "inRevItems", "completeItems"];
      console.log(this.cardType);
    } else if (this.cardType == "In Review") {
      this.todoService.getTodos(this.username, this.cardType).subscribe(todos => {
        this.todos = todos
        console.log(todos);
      });
      this.listClassName = "inRevItems";
      this.connectedLists = ["backLogItems", "inProgItems", "completeItems"];
      console.log(this.cardType);
    } else if (this.cardType == "Complete") {
      this.todoService.getTodos(this.username, this.cardType).subscribe(todos => {
        this.todos = todos
        console.log(todos);
      });
      this.connectedLists = ["backLogItems", "inProgItems", "inRevItems"];
      this.listClassName = "completeItems";
      console.log(this.cardType);
    }

  }

  deleteTodo(todo: Item) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  readTodo() {
    this.todoService.getTodos;
  }

  createTodo(item: string) {
    let todo: Item = new Item;
    todo.username = this.username;
    todo.item = item;
    todo.status = this.cardType;
    console.log(`${todo.item} is an item`);
    this.todoService.createTodo(todo).subscribe(success => {
      this.todos.push(todo);
      this.pushItem.emit(todo);
    });
    setTimeout(function () { this.readTodo }, 1000);
    this.addItem = "";

  }

  updateItem(item: Item, status: string) {
    item.status = status;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.connectedLists);
    } else {
      if (event.container.data == null) {
        event.container.data = ['Test'];
        event.container.data.push("Test");
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      } else {
        let tempTodo = event.previousContainer.data[event.previousIndex];
        let tempItem: Item = new Item;
        tempItem.username = tempTodo['username'];
        tempItem.status = tempTodo['status'];
        tempItem.item = tempTodo['item'];
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        this.deleteTodo(tempItem);
        tempItem.status = this.cardType;
        this.createTodo(tempItem.item);

      }
    }
  }

  printType(cardType: string) {
    if (cardType == this.listClassName) {
      console.log(this.listClassName);
    }
  }
}

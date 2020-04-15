import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo: Item;
  @Output() deleteTodo: EventEmitter<Item> = new EventEmitter;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': false
    }
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log("COmplete");
    })
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}

import { MTodo } from './../../models/toDo.model';
import { Component, inject, signal } from '@angular/core';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { DIALOG_DATA, DialogRef }from '@angular/cdk/dialog';


interface inputData{
  todo : MTodo;
}

export interface outputData{
  todo : MTodo;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, ButtonComponent],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {


  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  private dialog = inject(DialogRef<outputData>);
  private data : inputData = inject(DIALOG_DATA);
  todo = signal<MTodo>(this.data.todo);

  todoDataOutput : outputData = {
    todo : {
      id : "1",
      title : "Task 11",
      description : "Task 1 descriptionnn"
    }
  }

  changeDescription(){
    console.log("entro");
    const todoDataOutput : MTodo = {
      id : "1",
      title : "Task 11",
      description : "Task 1 descriptionnn"
    }
    this.todo.set(todoDataOutput);
  }

  close(){
    this.dialog.close({
      todo : this.todoDataOutput.todo
    });
  }



}

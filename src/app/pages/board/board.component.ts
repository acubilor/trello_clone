import { MTodo } from './../../shared/models/toDo.model';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { DialogModule }from '@angular/cdk/dialog';
import { Dialog }from '@angular/cdk/dialog';
import { TodoDialogComponent, outputData } from '../../shared/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavBarComponent, CommonModule,DialogModule],
  templateUrl: './board.component.html',

})
export class BoardComponent {


  private dialog = inject(Dialog);

  tasksTodo : MTodo[] = [
    {
      id:'1',
      title : 'Task 1',
      description : 'descripcion task 1'
    },
    {
      id:'2',
      title : 'Task 2'
    },
    {
      id:'3',
      title : 'Task 3'
    },
  ]


  tasksDoing : MTodo[] = [
    {
      id:'4',
      title : 'tasksDoing 1'
    },
    {
      id:'5',
      title : 'tasksDoing 2'
    },
    {
      id:'6',
      title : 'tasksDoing 3'
    },
  ]

  tasksDone : MTodo[] = [
    {
      id:'7',
      title : 'tasksDone 1'
    },

  ]

  drop($event:  CdkDragDrop<MTodo[]>) {
    console.log($event)
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }

  openDialog(todo : MTodo){
    const rta = this.dialog.open(TodoDialogComponent, {
      minWidth :'300px',
      maxWidth : '50%',
      data : {
        todo:todo
      }
    });

    rta.closed.subscribe( (output : any) => {
      console.log(output.todo);
      this.tasksTodo[this.tasksTodo.findIndex(rta => rta.id == output.todo.id)] = output.todo;
    } )

  }



}

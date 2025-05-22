import { CommonModule } from '@angular/common';     //ngFor.ngIfなどの構文を使うのに必要
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';     //[(ngModel)]を使うのに必要
import { TodoComponent } from './todo/todo.component';       //TodoComponentをインポート

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: { text: string; completed: boolean }[] = [];
  newTodo: string = '';

  addTodo() {
    const trimmed = this.newTodo.trim();   // 空白を除去する
    if (trimmed) {
      this.todos.push({ text: trimmed, completed: false });     //Todoのリストをここで管理する
      this.newTodo = '';     //入力中のTodoを一時的に保持する変数
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
}

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  clearCompleted() {
    this.todos = this.todos.filter(todos => !todos.completed); //初期値はfalseだから!をつけてtrueにする->trueのものを削除するということ
  }

  hasCompletedTodos(): boolean {
    return this.todos.some(todo => todo.completed); //completedがtrueのものがあるかどうか
  }
}

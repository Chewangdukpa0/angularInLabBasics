import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  //first
  players =['chewang','dukpa'];
  message:string='di cho';
  inputValue:string="";
  inputTry:string="";
  inputTry1:string="";
  inputTry2:string="";

  //second
  todolist=[
  {task:'gym',completed:false},
  {task:'lunch',completed:false},
  {task:'swimming',venue1:'marina',venue2:'sundar'},];
  

  
}
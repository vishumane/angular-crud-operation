import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styles: [ `a{text-decoration:none;color: black;display:block;padding:15px;}ul{padding:0;}li{list-style:none;}.w-50{display:inline-block;width:45%;cursor:pointer}li:hover{background:#eee}.text-right{text-align: right;}.text-center{text-align: center;}` ]
})
export class StudentListComponent implements OnInit  {

  studentList: Student[];
  
  constructor(private studentService: StudentService){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();
    }

}

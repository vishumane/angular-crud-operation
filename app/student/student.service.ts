import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student-interface';


@Injectable()
export class StudentService {

  studentList : Student[] = [];

  constructor(private http: HttpClient) {
  }
  getStudents(){
    return this.studentList;
  }
  getStudent(id){
    let student: Student;
    this.studentList.map(val=>{
      if(val.id == id) student = val;
    });
    return student;
  }
  studentEdit(student){
    let present: Boolean = false;
    this.studentList.map((val, index)=>{
      if(val.id == student.id) {this.studentList[index] = student;present=true}
    });
    return present;

  }

}


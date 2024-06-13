import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styles: [ `` ]
})
export class StudentViewComponent implements OnInit  {

  student: Student;
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){
      this.route.params.subscribe(param => {
        console.log(param)
        if(param){
          this.student = this.studentService.getStudent(param.id);
        }
      })
      
    }
}

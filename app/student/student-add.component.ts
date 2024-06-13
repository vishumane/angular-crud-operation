import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from './student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'student-add',
  templateUrl: './student-add.component.html',
  styles: [`input{width:100%;padding: 10px 15px;margin:5px auto;}`],
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  isEdit: Boolean = false;
  msg: String = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
    });
    this.route.params.subscribe((param) => {
      console.log(param);
      if (param && param.id) {
        let student = this.studentService.getStudent(param.id);
        if (student) {
          this.studentForm.setValue(student);
          this.isEdit = true;
        } else this.router.navigate(['/students']);
      }
    });
  }

  resetForm() {
    console.log('reset', this.studentForm);
    this.studentForm.reset();
  }

  add() {
    if (this.studentForm.valid) {
      this.studentService.studentList.push(this.studentForm.value);
      this.resetForm();
      console.log(
        'this.studentService.studelost',
        this.studentService.getStudents()
      );
    } else {
      this.msg = 'Please complete form';
    }
  }

  edit() {
    this.msg = '';
    if (this.studentForm.valid) {
      if (this.studentService.studentEdit(this.studentForm.value)) {
        this.router.navigate(['/students']);
      } else {
        this.msg = 'Something went wrong';
      }
    } else {
      this.msg = 'Please complete form';
    }
  }
}

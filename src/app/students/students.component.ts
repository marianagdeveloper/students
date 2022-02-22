import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  constructor(public service: StudentService, private modalService: NgbModal) {}

  public students: any = [];
  public student: any;

  public data: any = [];


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.students = this.service.students;
  }

  addStudent(data: any) {
    this.data = this.service.addStudent({
      id:data.id,
      name:data.name,
      lastname:data.lastname,
      phone:data.phone
    });
    this.students = this.data
  }

  showData(id:any){
    this.student = this.service.getOne(id)[0]
  }

  updateStudent(data:any) {
    this.service.updateStudent(data);
  }

  deleteStudent(id:any) {
    console.log('id', id);
    this.students = this.service.deleteStudent(id);
    console.log('this.students', this.students);
  }

  // modal
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', scrollable: true })
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  public students: Students[] = [
    {
      id: 1,
      name: 'Mariana',
      lastname: 'Guanda',
      phone: '9999',
    },
    {
      id: 2,
      name: 'Mario',
      lastname: 'Guanda',
      phone: '9999',
    },
  ];

  constructor() {}

  getAll() {
    return this.students;
  }

  getOne(id: number) {
    return this.students.filter((e) => e.id == id);
  }

  getAllLength() {
    if (this.students.length == 0) {
      return 0
    } else {
      return this.students[this.students.length - 1].id;
    }
  }

  addStudent(data: Students) {
    data.id = this.getAllLength() + 1;
    this.students.push(data);
    return  this.students
  }

  updateStudent(data: Students) {
    const idUpdate = data.id;
    this.students.forEach((element) => {
      console.log('element', element);
      if (element.id == idUpdate) {
        console.log('element.id', element.id);
        element = data;
      }
    });
  }

  deleteStudent(id: number) {
    const newArray = this.students.filter((e) => e.id != id);
    this.students = newArray
    return newArray
  }
}

export interface Students {
  id: number;
  name: string;
  lastname: string;
  phone?: string;
}

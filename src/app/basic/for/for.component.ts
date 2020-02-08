import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [
        {
          name: 'Douglas  Pace'
        },
        {
          name: 'Mcleod  Mueller'
        },
      ]
    },
    {
      country: 'US',
      people: [
        {
          name: 'Day  Meyers'
        },
        {
          name: 'Aguirre  Ellis'
        },
        {
          name: 'Cook  Tyson'
        }
      ]
    },
    {
      country: 'Bangladesh',
      people: [
        { name: 'Limon' },
        { name: 'tareque' }
      ]
    }
  ];

  courses = [
    { id: 1, Course: 'course-1' },
    { id: 2, Course: 'course-2' },
    { id: 3, Course: 'course-3' }
  ];
  department;
  constructor() { }

  ngOnInit() {
  }
  addCourse() {
    this.courses.push({ id: 4, Course: 'course4' });
  }
  removeCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  loadDepartments() {
    this.department = [
      { id: 1, name: 'CSE' },
      { id: 2, name: 'BEEE' },
      { id: 3, name: 'CE' },
    ];
  }
  trackDepartment(index, department) {
    return department ? department.id : undefined;
  }

}

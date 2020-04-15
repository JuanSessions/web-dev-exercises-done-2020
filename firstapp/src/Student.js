import React, { Component } from "react";

export default class student extends Component {
  constructor(props) {
    super(props);
    //super does this:
    // this.name=name;
    // this.age=age;
    this.state = {
      name: "Student 1",
      age: 24,
      courses: ["Javascript", "Css", "React"],
      exercises: [
        { student: "name 1", status: false },
        { student: "name 2", status: true }
      ]
    };
    // this.ChangeName = this.ChangeName.bind(this); use the function and bind it
    // or use the arrow function like here below
  }

  ChangeName = () => {
    console.log(this);
    // setState method to change state
    this.setState({
      name: "Student 2"
    });
  };

  ChangeAge = userage => {
    this.setState({
      age: userage
    });
  };

  addCourse = userCourse => {
    if (!this.state.courses.includes(userCourse)) {
      this.setState({
        courses: [...this.state.courses, userCourse] //spread the first one and add userCourse
      });
    }
  };

  changeStatus = i => {
    console.log(i);
    let newstate = [...this.state.exercises];
    newstate[i].status = !newstate[i].status;

    this.setState({
      exercises: newstate
    });
  };

  render() {
    let student = this.state;

    //right here u can write any of your javascript methods, NOT before or inside the return
    let Crs = this.state.courses.map(course => {
      return <li key={course}> {course}</li>;
    });

    let exer = this.state.exercises.map((item, i) => {
      return (
        <p key={item.student} onClick={() => this.changeStatus(i)}>
          {item.student} has {item.status ? null : "not"} finished the exercises
        </p>
      );
    });

    return (
      <div>
        <h2>{student.name}</h2>
        <h3>{student.age}</h3>
        <ul>{Crs}</ul>
        <div>{exer}</div>
        <button onClick={() => this.setState({ name: "Student 2" })}>
          Change name
        </button>
        <button onClick={() => this.ChangeAge(26)}>Change age</button>
        <button onClick={() => this.addCourse("NodeJs")}>Add course</button>
      </div>
    );
  }
}

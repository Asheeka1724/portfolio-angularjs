var app = angular.module("portfolioApp", []);

app.controller("MainController", function($scope) {
    $scope.name = "Asheeka H N";
    $scope.title = "B.Tech Student | Aspiring Software Developer";
    $scope.about = "I'm currently pursuing my B.Tech at REVA University. Passionate about full-stack development, AI/ML, and building impactful solutions. I'm constantly exploring new technologies and enhancing my coding skills.";

    $scope.skills = ["C", "Java", "Python", "HTML", "CSS", "JavaScript", "AngularJS", "MongoDB", "Firebase"];

    $scope.projects = [
  {
    name: 'Doctor Availability and Appointment Allocation',
    description: 'An AI-based system for scheduling doctor appointments intelligently.',
    link: 'https://github.com/Asheeka1724/Doctor-Availability-and-Appointment-Allocation-in-Hospitals-through-AI-Integration'
  },
  {
    name: 'Task Scheduler with Email Notifications',
    description: 'A PHP-based task manager that handles scheduling with email reminders.',
    link: 'https://github.com/Asheeka1724/task-scheduler-Asheeka1724'
  },
  {
    name: 'Portfolio Website using AngularJS',
    description: 'A responsive personal portfolio built with AngularJS.',
    link: 'https://github.com/Asheeka1724/portfolio-angularjs'
  }
];


    $scope.email = "asheekahn333@gmail.com";
    $scope.phone = "8722790767";
    $scope.linkedin = "https://www.linkedin.com/in/asheekahn1724";
});

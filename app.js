var app = angular.module("portfolioApp", []);

app.controller("MainController", function($scope) {
    $scope.name = "Asheeka H N";
    $scope.title = "B.Tech Student | Aspiring Software Developer";
    $scope.about = "I'm currently pursuing my B.Tech at REVA University. Passionate about full-stack development, AI/ML, and building impactful solutions. I'm constantly exploring new technologies and enhancing my coding skills.";

    $scope.skills = ["C", "Java", "Python", "HTML", "CSS", "JavaScript", "AngularJS", "MongoDB", "Firebase"];

    $scope.projects = [
    
    {
        name: "Doctor Availability & Appointment AI System",
        description: "AI-integrated platform to manage hospital doctor availability and automate appointment scheduling.",
        link: "https://github.com/Asheeka1724/Doctor-Availability-and-Appointment-Allocation-in-Hospitals-through-AI-Integration"
    },
    {
        name: "Task Scheduler with Email Alerts",
        description: "A PHP-based task scheduling system with CRON job, email reminders, and text file storage.",
        link: "https://github.com/Asheeka1724/task-scheduler-Asheeka1724"
    }
];

    $scope.email = "asheekahn333@gmail.com";
    $scope.phone = "8722790767";
    $scope.linkedin = "https://www.linkedin.com/in/asheekahn1724";
});

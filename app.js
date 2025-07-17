var app = angular.module("portfolioApp", []);

app.controller("MainController", function($scope) {
    $scope.name = "Asheeka H N";
    $scope.title = "B.Tech Student | Aspiring Software Developer";
    $scope.about = "I'm currently pursuing my B.Tech at REVA University. Passionate about full-stack development, AI/ML, and building impactful solutions. I'm constantly exploring new technologies and enhancing my coding skills.";

    $scope.skills = ["C", "Java", "Python", "HTML", "CSS", "JavaScript", "AngularJS", "MongoDB", "Firebase"];

    $scope.projects = [
        {
            name: "Smart Fire Alarm System",
            description: "An IoT-based system that detects fire and notifies users via alerts.",
            link: "https://github.com/your-github/smart-fire-alarm"
        },
        {
            name: "EduMate: AI-Powered Learning",
            description: "A personalized learning platform using AI/ML to recommend content and track progress.",
            link: "https://github.com/your-github/edumate"
        },
        {
            name: "Network Intrusion Detection",
            description: "ML-based system to detect and classify potential network threats in real-time.",
            link: "https://github.com/your-github/nids"
        }
    ];

    $scope.email = "asheekahn3332@gmail.com";
    $scope.phone = "8722790767";
    $scope.linkedin = "https://www.linkedin.com/in/asheekahn1724";
});

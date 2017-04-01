var quizModule = angular.module('QuizApp', []);

quizModule.controller('QuizAppController',['$scope', function($scope){
    
    var qac = this;

    qac.students = 
    [
        {
            name: "Jim Smith",
            correct: 0,
            incorrect: 0
        },
        {
            name: "Casey Jones",
            correct: 0,
            incorrect: 0
        },
                {
            name: "Carlos Alvarez",
            correct: 0,
            incorrect: 0
        },
                {
            name: "Lisa Jimenez",
            correct: 0,
            incorrect: 0
        },
                {
            name: "Jennifer Lopez",
            correct: 0,
            incorrect: 0
        }
    ];
    
    qac.students_completed = [];
    
    qac.questions = 
    [
        {
            text: "AngularJS uses what programming language?", 
            answer: "JavaScript"
        },
        {
            text: "The scope is the ______ between the template and controller", 
            answer: "glue"
        },
                {
            text: "Angular uses _______ and _________ in the template", 
            answer: "directives and expressions"
        },
        {
            text: "You bootstrap your angular application with the ngApp directive", 
            answer: "true"
        },
        {
            text: "AngularJS is fun", 
            answer: "Yes"
        },
    ];
    
    qac.questions_completed = [];
    
    qac.getNextQuestion = function(){
        
        if(qac.questions.length > 0){
            var index = Math.floor(Math.random() * qac.questions.length);
            
            qac.selected_question = qac.questions[index];
            
            qac.questions_completed.push(qac.selected_question);
            
            //read about splice here: http://www.w3schools.com/jsref/jsref_obj_array.asp
            qac.questions.splice(index, 1);            
        }
        else{
            qac.questions = qac.questions_completed;
            qac.questions_completed = [];
        }

    };
    
    qac.getNextStudent = function(){
        
        if(qac.students.length > 0){
            var index = Math.floor(Math.random() * qac.students.length);
             
            qac.selected_student = qac.students[index];
             
            qac.students_completed.push(qac.selected_student);
             
            qac.students.splice(index, 1);
        }
        else{
            qac.students = qac.students_completed;
            qac.students_completed = [];
        }
    };
    
    qac.getNext = function(){
        qac.getNextQuestion();
        qac.getNextStudent();
    };
    
    qac.doCorrect = function(){
        qac.selected_student.correct++;
        qac.getNext();
    };
    
    qac.doIncorrect = function(){
        qac.selected_student.incorrect++;
        qac.getNext();        
    };
    
    qac.getNext();
    
}]);
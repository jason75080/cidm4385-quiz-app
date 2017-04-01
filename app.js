var quizModule = angular.module('QuizApp', []);

quizModule.controller('QuizAppController',['$scope', function($scope){
    
    var qac = this;

    qac.students = 
    [
        {
            name: "Jason Madison",
            correct: 0,
            incorrect: 0
        },
        {
            name: "Keona Williams",
            correct: 0,
            incorrect: 0
        },
        {
            name: "Angel Morales",
            correct: 0,
            incorrect: 0
        },
        {
            name: "James Hill",
            correct: 0,
            incorrect: 0
        },
        {
            name: "Deirdre LaNoue",
            correct: 0,
            incorrect: 0
        }
    ];
    
    qac.students_completed = [];
    
    qac.questions = 
    [
        {
            text: "Dallas Cowboy with most career rushing yards?", 
            correctAnswer: "Emmitt Smith",
            wrongAnswer1: "Tony Dorsett",
            wrongAnswer2: "Don Perkins",
            wrongAnswer3: "Calvin Hill"
        },
        {
            text: "Dallas Cowboy with most career passing yards?", 
            correctAnswer: "Tony Romo",
            wrongAnswer1: "Roger Staubach",
            wrongAnswer2: "Troy Aikman",
            wrongAnswer3: "Danny White"
        },
                {
            text: "Dallas Cowboy with most single season rushing yards?", 
            correctAnswer: "DeMarco Murray",
            wrongAnswer1: "Emmitt Smith",
            wrongAnswer2: "Tony Dorsett",
            wrongAnswer3: "Ezekiel Elliot"
        },
        {
            text: "Dallas Cowboy with most single season passing yards?", 
            correctAnswer: "Tony Romo",
            wrongAnswer1: "Roger Staubach",
            wrongAnswer2: "Troy Aikman",
            wrongAnswer3: "Danny White"
        },
        {
            text: "Dallas Cowboy with most career receiving yards?", 
            correctAnswer: "Michael Irvin",
            wrongAnswer1: "Jason Witten",
            wrongAnswer2: "Tony Hill",
            wrongAnswer3: "Drew Pearson"
        },
        {
            text: "Dallas Cowboy with most single season receiving yards?", 
            correctAnswer: "Michael Irvin",
            wrongAnswer1: "Jason Witten",
            wrongAnswer2: "Dez Bryant",
            wrongAnswer3: "Terrel Owens"
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
             
            //qac.students.splice(index, 1);
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
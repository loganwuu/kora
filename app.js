var experts = angular.module('experts', ['ui.router', 'ngAnimate']);

experts.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('questions', {
		url: "",
		templateUrl: "partials/questions.html",
		controller: "QuestionsCtrl"
	});

	$stateProvider.state('questions.answers', {
		url: "/:questionId",
		templateUrl: "partials/questions.answers.html",
		controller: 'AnswersCtrl'
	});
});

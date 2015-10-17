experts.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
	$scope.questions = QuestionsFactory.questions;
	$scope.QuestionsFactory = QuestionsFactory;
});

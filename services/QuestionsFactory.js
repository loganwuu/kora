experts.factory('QuestionsFactory', function QuestionsFactory() {
	var factory = {};
	factory.questions = [];
	factory.addQuestion = function() {
		factory.questions.push(
			{
				userName: factory.userName,
				synopsis: factory.synopsis,
				description: factory.description,
				answered: false,
				answers: [],
				id: factory.questions.length + 1,
			}
		);

		// Reset text box
		factory.userName = null;
		factory.synopsis = null;
		factory.description = null;
	};

	return factory;
});

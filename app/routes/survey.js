exports.show = function(req, res){
  res.render('survey', { title: 'CSRS Survey' });
};
exports.post = function(req, res) {
	console.log(req.body);	
	res.render('survey-review', 
		{	title: 'Survey review',
			ansName: req.body.ansName,
			ansAge: req.body.ansAge,
			ansAsst: req.body.ansAsst
		});
}

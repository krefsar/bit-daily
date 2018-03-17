export default function(){
	this.transition(
		this.hasClass('tutorial-transition'),
		this.use('toUp')
	);
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}

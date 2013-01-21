function Step(title, description, dependsOn) {
	this.title = title;
	this.description = description;
	this.dependsOn = dependsOn;
}

$(function () {
	var canvas = new fabric.Canvas('my_canvas');

	var graph = {
		one: {
			title: "One thing",
			description: "small"
		},
		two: {
			title: "Two thing",
			description: "big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big "
		},
		three: {
			title: "Three thing thing thing thing thing thing thing thing",
			dependsOn: ["two"]
		},
		four: {
			title: "Four",
			dependsOn: ["three", "two"]
		},
		five: {
			title: "",
			description: "small",
			dependsOn: ["one"]
		},
		six: {
			title: "Six",
			dependsOn: ["five"]
		},
		seven: {
			title: "Seven"
		}
	};

	
});
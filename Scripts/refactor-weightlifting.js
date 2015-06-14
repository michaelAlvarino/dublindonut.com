// JQuery
function main() {
	// Activate tab function
	$('#weightliftingTab').tab();
}
$(document).ready(main);

angular.module('weightliftingApp',[])
	.controller('weightliftingController', function() {
		var vm = this;

        // Lift constructor
        function lift(name) {
            this.name =             name;
            this.current_weight =   null;
        };

        // Ratio constructor
        function ratio(index1, index2, lift1, lift2, goal, actual, weakLift, diff) {
                this.index1 =   index1;
                this.index2 =   index2;
                this.lift1 =    lift1;
                this.lift2 =    lift2;
                this.goal =     goal;
                this.actual =   0;
                this.weakLift = null;
                this.diff =     0;
        };

        // Priority constructor
        function priority() {
            this.total =    0;
            this.count =    0;
            this.increase = 0;
        };

        vm.lifts = [
            new lift("Back Squat"),
            new lift("Front Squat"),
            new lift("Deadlift"),
            new lift("Overhead Press"),
            new lift("Push Press"),
            new lift("Jerk"),
            new lift("Clean"),
            new lift("Power Clean"),
            new lift("Clean and Jerk"),
            new lift("Snatch"),
            new lift("Power Snatch")
        ];

        vm.ratios = [
            new ratio(9,   0,   "Snatch",         "Back Squat",       0.65),
            new ratio(9,   2,   "Snatch",         "Deadlift",         0.40),
            new ratio(9,   8,   "Snatch",         "Clean and Jerk",   0.81),
            new ratio(0,   8,   "Back Squat",     "Clean and Jerk",   1.28),
            new ratio(8,   2,   "Clean and Jerk", "Deadlift",         0.55),
            new ratio(1,   0,   "Front Squat",    "Back Squat",       0.87),
            new ratio(8,   1,   "Clean and Jerk", "Front Squat",      0.85),
            new ratio(7,   6,   "Power Clean",    "Clean",            0.88),
            new ratio(10,  9,   "Power Snatch",   "Snatch",           0.88),
            new ratio(4,   8,   "Push Press",     "Clean and Jerk",   0.75),
            new ratio(2,   0,   "Deadlift",       "Back Squat",       1.23),
            new ratio(3,   0,   "Overhead Press", "Back Squat",       0.45),
            new ratio(4,   0,   "Push Press",     "Back Squat",       0.64),
            new ratio(6,   0,   "Clean",          "Back Squat",       0.82),
            new ratio(7,   0,   "Power Clean",    "Back Squat",       0.68),
            new ratio(10,  0,   "Power Snatch",   "Back Squat",       0.54),
            new ratio(5,   0,   "Jerk",           "Back Squat",       0.84),
            new ratio(6,   8,   "Clean",          "Clean and Jerk",   1.03),
            new ratio(5,   8,   "Jerk",           "Clean and Jerk",   1.05),
            new ratio(7,   8,   "Power Clean",    "Clean and Jerk",   0.85),
            new ratio(10,  8,   "Power Snatch",   "Clean and Jerk",   0.68)
        ];

        vm.priorities = {
            "Back Squat":        new priority(),
            "Front Squat":       new priority(),
            "Deadlift":          new priority(),
            "Overhead Press":    new priority(),
            "Push Press":        new priority(),
            "Jerk":              new priority(),
            "Clean":             new priority(),
            "Power Clean":       new priority(),
            "Clean and Jerk":    new priority(),
            "Snatch":            new priority(),
            "Power Snatch":      new priority()
        };

        vm.result = [];

        // Reset all values in priorities and result to zero
        var reset = function () {
            vm.priorities = {
                "Back Squat":        new priority(),
                "Front Squat":       new priority(),
                "Deadlift":          new priority(),
                "Overhead Press":    new priority(),
                "Push Press":        new priority(),
                "Jerk":              new priority(),
                "Clean":             new priority(),
                "Power Clean":       new priority(),
                "Clean and Jerk":    new priority(),
                "Snatch":            new priority(),
                "Power Snatch":      new priority()
            };
            vm.result = [];
        }

        // Update weightlifting ratios
        vm.update = function() {
            reset();
            // Update actual ratio and amount to increase each lift
            for (var idx = 0; idx < vm.ratios.length; idx++) {
                // Get ratio
                if (isNaN(vm.lifts[vm.ratios[idx].index1].current_weight / vm.lifts[vm.ratios[idx].index2].current_weight) == false) {
                    vm.ratios[idx].actual = vm.lifts[vm.ratios[idx].index1].current_weight / vm.lifts[vm.ratios[idx].index2].current_weight;
                }

                // Find which lift is weak
                if (vm.ratios[idx].actual == 0) {

                }
                else if ( vm.ratios[idx].actual < vm.ratios[idx].goal ) {
                    // First lift is weaker
                    vm.ratios[idx].weakLift = vm.ratios[idx].index1;

                    // Count how many times the lift should be targetted
                    vm.priorities[vm.ratios[idx].lift1].count += 1;

                    // Add weight that is required
                    vm.priorities[vm.ratios[idx].lift1].total += 
                        (vm.lifts[vm.ratios[idx].index2].current_weight 
                        * vm.ratios[idx].goal) 
                        - vm.lifts[vm.ratios[idx].index1].current_weight;
                }
                else {
                    // Second lift is weaker
                    vm.ratios[idx].weakLift = vm.ratios[idx].index2;

                    // Count how many times the lift should be targetted
                    vm.priorities[vm.ratios[idx].lift2].count += 1;

                    // Add weight that is required
                    vm.priorities[vm.ratios[idx].lift2].total += 
                        (vm.lifts[vm.ratios[idx].index1].current_weight / vm.ratios[idx].goal)
                        - vm.lifts[vm.ratios[idx].index2].current_weight;
                }
            }

            // Update priorities
            for (var item in vm.priorities) {
                vm.priorities[item].increase = vm.priorities[item].total / vm.priorities[item].count;
                if ( vm.priorities[item].count > 0 ) {
                    var newItem = {
                        name:       item,
                        count:      vm.priorities[item].count,
                        increase:   vm.priorities[item].increase
                    };
                    vm.result.push(newItem);
                }
            };
            vm.result.sort(function(a,b) {
                if(a.count == b.count) {
                    // return parseFloat(b.increase) - parseFloat(a.increase);
                    return (a.increase < b.increase) ? 1 : (a.increase > b.increase) ? -1 : 0;
                }
                else {
                    // return parseFloat(b.count) - parseFloat(a.count);
                    return (a.count < b.count) ? 1 : -1;
                }
            });
        };
	});
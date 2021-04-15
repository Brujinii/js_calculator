// Create the calculator object
let calculator = {
    init() {
        // Initialize variables needed
        this.previous_operation = ''
        this.current_operation = ''
        this.num_clicked = true
        this.result = 0
        this.first_number = 0
        this.second_number = 0
        this.numbers_clicked = '';
        this.num_object = {
            "zero": 0,
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
        };
        this._select_elems();
        this._add_listeners();
    },

    // Select elements used in calc
    _select_elems() {
        this.add = document.querySelector('#plus')
        this.sub = document.querySelector('#sub')
        this.mul = document.querySelector('#mult')
        this.div = document.querySelector('#div')
        this.nums = document.querySelectorAll('.nums');
        this.decimal = document.querySelector('#decimal');
        this.output = document.querySelector('.output-numbers');
        this.clear = document.querySelector('#clear');
        this.equals = document.querySelector('#equals');
        console.log("Elements selected")
    },

    // Evaluate previous operation
    _eval_previous() {
        switch(this.previous_operation) {
        case 'add':
            this.first_number = this.first_number + this.second_number;
            break;
        case 'sub':
            this.first_number = this.first_number - this.second_number;
            break;
        case 'mul':
            this.first_number = this.first_number * this.second_number;
            break;
        case 'div':
            this.first_number = this.first_number / this.second_number;
            break;
        default:
            console.log("The default operation was performed")
            this.first_number = this.second_number
        };
        this.result = this.first_number
        this.previous_operation = this.current_operation
    },

    // Take care of functions happening during operations
    _refresh() {
        if (this.numbers_clicked != '') {
            this.second_number = Number(this.numbers_clicked);
        };
        this.num_clicked = false;
        this.output.textContent = 0;
        this.numbers_clicked = '';
    },

    _add_listeners() {

        // Add listeners to each number, put it into numbers_clicked for use
        this.nums.forEach((num) => {
            num.addEventListener('click', () => {
                this.numbers_clicked = this.numbers_clicked + this.num_object[num.id];
                this.output.textContent = this.numbers_clicked;
                if (this.num_clicked === false) {
                    this._eval_previous()
                    this.num_clicked = true
                }
            });
        });
        console.log("Numbers selected");

        // Clear Values
        this.clear.addEventListener('click', () => {
            this.result = 0;
            this.first_number = 0;
            this.numbers_clicked = '';
            this.previous_operation = '';
            this.current_operation = '';
            this.output.textContent = 0;
        });
        
        // Add event listeners to the operations
        this.add.addEventListener('click', () => {
            this._refresh()
            this.current_operation = 'add'
        });
        this.sub.addEventListener('click', () => {
            this._refresh()
            this.current_operation = 'sub'
        });
        this.mul.addEventListener('click', () => {
            this._refresh()
            this.current_operation = 'mul';
        });
        this.div.addEventListener('click', () => {
            this._refresh()
            this.current_operation = 'div';
        });

        // Show result
        this.equals.addEventListener('click', () => {
            this.second_number = Number(this.numbers_clicked)
            this._eval_previous();
            this.output.textContent = this.result;
        });
    },
    
    // Todo for next time:
    // Fix it saving last operation and performing that after equals is pressed.
};
calculator.init();
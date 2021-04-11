// Create the calculator object
let calculator = {
    _select_elems() {
        console.log("Elements selected")
        this.op = document.querySelectorAll('.op')
        this.nums = document.querySelectorAll('.nums');
        this.decimal = document.querySelector('#decimal');
        this.output = document.querySelector('.output-numbers');
        this.clear = document.querySelector('#clear');
        this.equals = document.querySelector('#equals');
    },
    _add_listeners () { 
        // Use "forEach" to cycle through each button
        this.nums.forEach(num => {
            num.addEventListener('click', () => {
                this.numbers_clicked = this.numbers_clicked + this.num_object[num.id];
                this.output.textContent = this.numbers_clicked;
            })
        });
        this.clear.addEventListener('click', () => {
            this.output.textContent = '0';
            this.numbers_clicked = '';
        });
        this.op.forEach(op => {
            op.addEventListener('click', () => {
                this.first_number = Number(this.numbers_clicked)
                this.numbers_clicked = ''
                this.output.textContent = '0'
                this.operation = op.id;
                console.log(this.operation);
            });
        });
        this.equals.addEventListener('click', () => {
            let result = 0
            let second_num = Number(this.numbers_clicked)
            switch (this.operation) {
                case "plus":
                    result = this.first_number + second_num;
                    break;
                case "sub":
                    result = this.first_number - second_num;
                    break;
                case "mul":
                    result = this.first_number * second_num;
                    break;
                case "div":
                    result = this.first_number / second_num;
                    result = result.toFixed(3);
                    break;
            }
            this.first_number = result
            this.output.textContent = result
        });
    },
    init() {
        // Initialize variables needed
        this.operation = ''
        this.first_number = 0
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
    _validate_op(op) {
        let possible_operations = ["add", "sub", "mul", "div"];
        if (possible_operations.includes(op) === false) {
            alert("Input invalid");
            this._get_op();
            this._validate_op(this.op);
        }   
    },
    // Get final answer and alert the user
    calculate() {
        let ans = (this.op === "add") ? this.v1 + this.v2:
        (this.op === "sub") ? this.v1 - this.v2:
        (this.op === "mul") ? this.v1 * this.v2:
        this.v1 / this.v2
        alert(`The final answer is: ${ans}`)
    }
    // Todo for next time:
    // Make a function which checks to make sure the user is not trying to divide by 0
};
calculator.init();
console.log(calculator.output);
// Create the calculator object
let calculator = {
    _select_elems() {
        console.log("Elements selected")
        this.op = document.querySelectorAll('.op')
        this.nums = document.querySelectorAll('.nums');
        this.decimal = document.querySelector('#decimal');
        this.output = document.querySelector('.output-numbers');
        this.clear = document.querySelector('#clear');
        this.enter = document.querySelector(selectors)
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
                console.log(this.first_number)
                this.numbers_clicked = ''
                this.output.textContent = '0'
                this.operation = op.id
            });
        });
    },
    init() {
        // Get all necessary information for calculation
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
// Create the calculator object
let calculator = {
    init() {
        // Initialize variables needed
        this.operation = ''
        this.result = 0
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
            this.result = 0
            this.first_number = 0
        });
        this.op.forEach(op => {
            op.addEventListener('click', () => {
                console.log(op.id)
                console.log(this.operation)
                switch (this.operation) {
                    case "plus":
                        console.log(this.first_number)
                        console.log(this.numbers_clicked)
                        this.first_number = this.first_number + Number(this.numbers_clicked);
                        break;
                    case "sub":
                        if (this.first_number === 0) {
                            this.first_number = Number(this.numbers_clicked);
                        } else {
                            this.first_number = this.first_number - Number(this.numbers_clicked)
                        }
                        break
                    case "mult":
                        console.log(this.first_number);
                        if (this.first_number === 0) {
                            this.first_number = 1 * Number(this.numbers_clicked);
                        } else {
                            this.first_number = this.first_number * Number(this.numbers_clicked);
                        }
                        break;
                    case "div":
                        if (this.first_number === 0) {
                            console.log("Hello")
                            this.first_number = Number(this.numbers_clicked)
                        } else {
                            this.first_number = this.first_number / Number(this.numbers_clicked);
                        }
                        break;
                    default:
                        this.first_number = Number(this.numbers_clicked)
                }
                this.numbers_clicked = ''
                this.output.textContent = '0'
                this.operation = op.id;
            });
        });
        this.equals.addEventListener('click', () => {
            let second_num = Number(this.numbers_clicked)
            switch (this.operation) {
                case "plus":
                    this.result = this.first_number + second_num;
                    break;
                case "sub":
                    this.result = this.first_number - second_num;
                    break;
                case "mult":
                    this.result = this.first_number * second_num;
                    break;
                case "div":
                    console.log(second_num)
                    console.log(this.first_number)
                    this.result = this.first_number / second_num;
                    break;
            }
            this.first_number = this.result
            this.output.textContent = this.result
            this.numbers_clicked = ''
        });
    },
    // Todo for next time:
    // If there was a previous operation, compute it before moving on to inputting the next operation
};
calculator.init();
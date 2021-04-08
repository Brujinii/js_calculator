// Creat the calculator object
let calculator = {
    _get_first_value() {
        this.v1 = prompt("What should the first number be?");
        // Make sure that the input is a number
        this.v1 = parseInt(this.v1);
        if (Number.isNaN(this.v1)) {
            alert("Input invalid");
            this._get_first_value();
        };
    }, 
    _get_op() {
        // Get the operation to be performed
        this.op = prompt("Which operation should the calculator perform? (add, sub, mul, div)");
    },
    _get_second_value() {
        this.v2 = prompt("What should the second number be?")
        // Make sure that the input is a number
        this.v2 = parseInt(this.v2);
        if (Number.isNaN(this.v2)) {
            alert("Input invalid");
            this._get_second_value();
        };
    },
    init() {
        // Get all necessary information for calculation
        this._get_first_value()
        this._get_op()
        this._get_second_value()
    },
};

calculator.init()
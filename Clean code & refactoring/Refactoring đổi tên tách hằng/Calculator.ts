export class Calculator {

    static readonly ADDITION = '+';

    static readonly SUBTRACTION = '-';

    static readonly MULTIPLICATION = '*';

    static readonly DIVISION = '/';

    public static calculate(firstOperand: number, secondOperand: number, operator: string): number {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRACTION:
                return firstOperand - secondOperand;
            case this.MULTIPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    }
}
import { useState } from "react"
import CalculatorHeader from "./../components/calculator/CalculatorHeader";
import CalculatorBody from "@/components/calculator/CalculatorBody";


export function Calculator() {
    const [displayValue, setDisplayValue] = useState("");
    const [innerOperator, setInnerOperator] = useState({
        firstValue: "",
        operator: ""
    });
    /**
     * set display value state for good
     * @param {value} string 
     */
    const clickFunction = (value) => {
        console.log(value)
        if (['+', '-', 'x', '÷', '%', 'mod', '=', 'AC'].includes(value)) {
            if (innerOperator.operator == "") {
                if (value == "%") {
                    const answer = calculate(displayValue, value, 0);
                    setDisplayValue(() => answer)
                    setInnerOperator({
                        firstValue: answer,
                        operator: ""
                    })
                } else {
                    setInnerOperator({
                        firstValue: displayValue,
                        operator: value
                    });
                    setDisplayValue(() => "")
                }

            } else {
                if (value == "=" && innerOperator.operator != "=") {
                    const answer = calculate(innerOperator.firstValue, innerOperator.operator, displayValue);
                    setInnerOperator({
                        firstValue: answer,
                        operator: "="
                    });
                    setDisplayValue(answer)
                }
                else if (value == "AC") {
                    setDisplayValue("")
                    setInnerOperator({
                        firstValue: "",
                        operator: ""
                    });
                }
                else {
                    if (innerOperator != "=") {
                        console.log(value);
                        const answer = calculate(innerOperator.firstValue, innerOperator.operator, displayValue);
                        setInnerOperator({
                            firstValue: answer,
                            operator: value
                        })
                        setDisplayValue(() => answer)
                    }
                    else {
                        setDisplayValue(dValue => dValue != null ? dValue.concat(value) : "");
                        setInnerOperator({
                            firstValue: "",
                            operator: ""
                        });
                    }
                }
            }
        } else {
            if (innerOperator.operator != "" && innerOperator.firstValue == displayValue) {
                setDisplayValue("".concat(value));
            }
            else
                setDisplayValue(dValue => dValue != null ? dValue.concat(value) : "");
        }
    }
    const calculate = (num1, operator, num2) => {
        num1 = parseInt(num1);
        num2 = parseInt(num2)
        console.log(num1)
        console.log(num2);
        let ans = "";
        switch (operator) {
            case "+":
                ans = num1 + num2
                break;
            case "-":
                ans = num1 - num2
                break;
            case "x":
                ans = num1 * num2
                break;
            case "÷":
                ans = num1 / num2
                break;
            case "%":
                ans = num1 / 100
                break;
            case "mod":
                ans = num1 % num2
                break;
        }
        return ans.toString();
    }
    return (
        <div style={{ width: "25%" }}>
            <CalculatorHeader value={displayValue} style={{ width: "100%" }} />
            <CalculatorBody clickFunctoink={clickFunction} style={{ width: "100%" }} />
        </div>
    )
}
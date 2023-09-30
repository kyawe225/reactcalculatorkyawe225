import { useState } from 'react';
import PropType from 'prop-types';


const CalculatorBody = function ({ clickFunctoink }) {
    const [calculatorItems] = useState([
        ['AC',
            'mod',
            '%',
            '÷'],
        ['7',
            '8',
            '9',
            'x'],
        ['4',
            '5',
            '6',
            '-'],
        ['1',
            '2',
            '3',
            '+'],
        ['0',
            '.',
            '=']
    ]);
    const ActionClick = (event) => {
        clickFunctoink(event.target.value);
    }
    return (
        <>
            <table style={{width:'100%'}}>
                <tbody>
                        {calculatorItems.map((value, index) => {
                            return (
                                    <tr key={index}>
                                        {value.map((bodyValue, bIndex) => {
                                            if (bodyValue != '0') {
                                                return (
                                                    <td key={bIndex}>
                                                        <button key={bIndex} onClick={ActionClick} value={bodyValue} style={{width:'100%'}}>
                                                            {bodyValue}
                                                        </button>
                                                    </td>
                                                );
                                            }
                                            else {
                                                return (
                                                    <td key={bIndex} colSpan={2}>
                                                        <button key={bIndex} onClick={ActionClick} value={bodyValue} style={{width:'100%'}}>
                                                            {bodyValue}
                                                        </button>
                                                    </td>
                                                )
                                            }
                                        })}
                                    </tr>
                            )
                        })
                        }
                </tbody>
            </table>
        </>
    )
}

CalculatorBody.propTypes = {
    clickFunctoink: PropType.func.isRequired
}

export default CalculatorBody;
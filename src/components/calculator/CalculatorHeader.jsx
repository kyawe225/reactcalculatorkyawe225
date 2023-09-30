import PropsType from 'prop-types'
export default function Calculator(props){
    return (
        <div>
            <input type="text" value={props.value} readOnly={true} style={{width:'100%'}}/>
        </div>
    );
}

Calculator.propTypes={
    value:PropsType.string.isRequired
}
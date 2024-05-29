import  React from 'react';
import SelectType from "./selectType";
import Manual from "./manual";
import {OperTypeEnum}  from '../../interface.d'
type Props = {
    type:string,
    open:boolean,
    onClose:()=>void,
    onOk?:(p?:any)=>void,    
}

const RenewalModal:React.FC<Props> = (props) => {
    const {type,...restProps} = props;
    return type===OperTypeEnum.MANUAL ? <Manual {...props}/> : <SelectType {...restProps}/>
};
export default RenewalModal;
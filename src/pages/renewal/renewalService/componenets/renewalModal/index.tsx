import  React from 'react';
import SelectType from "./selectType";
import Manual from "./manual";
type Props = {
    type?:'manual'|'select',
    open:boolean,
    onClose?:()=>void,
    onOk?:()=>void,
}
export enum TypeEnum {
    MANUAL = 'manual',
    SELECT = 'select',
}
const RenewalModal:React.FC<Props> = (props) => {
    const {type} = props;
    return type===TypeEnum.MANUAL?<Manual/>:<SelectType {...props}/>
};
export default RenewalModal;
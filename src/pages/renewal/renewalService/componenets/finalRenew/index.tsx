import React ,{useState}from 'react';
import PackageModalForm from './package';
interface FinalRenewProps{
    open:boolean;
    onClose:()=>void;
}
const FinalRenew:React.FC<FinalRenewProps> = (props) => {
    return <PackageModalForm {...props}/>
};
export default FinalRenew;
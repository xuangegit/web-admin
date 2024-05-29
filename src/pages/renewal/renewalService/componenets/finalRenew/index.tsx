import React ,{Suspense,lazy}from 'react';
import PackageModalForm from './package';
import {RenewalType} from '../../interface'
interface FinalRenewProps{
    open:boolean;
    onClose:()=>void;
    type:string;
    info:any;
}
const FinalRenew:React.FC<FinalRenewProps> = (props) => {
    const {type}=props;
    const Content = lazy(() => import(`./${type}`));
    return <Suspense fallback={<div>正在加载...</div>}>
        <Content {...props} />
    </Suspense>
};
export default FinalRenew;
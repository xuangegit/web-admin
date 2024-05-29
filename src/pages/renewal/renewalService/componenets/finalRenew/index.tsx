import React ,{Suspense,lazy}from 'react';
interface FinalRenewProps{
    open:boolean;
    onClose:()=>void;
    type:string;
    info:any;
}
const FinalRenew:React.FC<FinalRenewProps> = (props) => {
    console.log('finalProps',props)
    const {type}=props;
    const Content = lazy(() => import(`./${type}`));
    return <Suspense fallback={<div>正在加载...</div>}>
        <Content {...props} />
    </Suspense>
};
export default FinalRenew;
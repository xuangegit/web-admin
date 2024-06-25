import React from 'react';
import {Button } from 'antd';
import { FormattedMessage, getLocale,setLocale } from '@umijs/max';
const SelectLang: React.FC = () => {
    const changeLange = () => {
        const locale = getLocale();
        if (!locale || locale === 'zh-CN') {
          setLocale('en-US');
        } else {
          setLocale('zh-CN');
        }
    };
    return <>
         <Button
            size="small"
            // ghost={theme === 'dark'}
            style={{
                margin: '0 8px',
                paddingBlock:0,
            }}
            onClick={() => {
                changeLange()
            }}
            >
            <FormattedMessage id="navbar.lang"  defaultMessage="English"/>
        </Button>
    </>
};
export default SelectLang;
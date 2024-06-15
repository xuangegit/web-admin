import { Modal } from 'antd';
import { FC, useEffect, useState } from 'react';

type PrivacyPolicyProps = {
  visible: boolean;
  onClose: () => void;
};
const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ visible, onClose }) => {
  // 初始状态下不允许选中复选框
  const [isAgreeEnabled, setIsAgreeEnabled] = useState(false);

  // 监听滚动事件，判断是否滚动到底部
  const handleScroll = () => {
    const dom = document.getElementById('policyContainer');
    console.log('dom', dom);
    if (dom) {
      // 假设到达底部的偏移量容差为5像素
      const isAtBottom = dom.scrollHeight - dom.scrollTop <= dom.clientHeight + 5;
      console.log('isAtBottom', isAtBottom);
      setIsAgreeEnabled(isAtBottom);
    }
  };

  // 使用useEffect添加和移除滚动事件监听器
  useEffect(() => {
    const policyContainer = document.getElementById('policyContainer');

    if (policyContainer) {
      console.log('policyContainer', policyContainer);
      policyContainer.addEventListener('scroll', handleScroll);
      // 清理函数，移除监听器
      return () => {
        policyContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const embed = document.getElementById('policyContainer') as HTMLIFrameElement;
    if (embed) {
      embed.addEventListener('load', function () {
        // 获取内嵌文档
        const pdfDocument = embed.contentDocument || embed.contentWindow;
        console.log('pdfDocument', pdfDocument);
        if (pdfDocument) {
          // 监听内嵌文档的滚动事件
          let handler = () => {
            handleScroll(pdfDocument);
          };
          pdfDocument.addEventListener('scroll', handler);
          return () => {
            pdfDocument.removeEventListener('scroll', handler);
          };
        }
      });
    }
  }, []);

  return (
    <Modal title="隐私协议" open={visible} footer={null} onCancel={onClose} width={800}>
      <div
        id="policyContainer"
        style={{
          //   maxHeight: '800px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          borderRadius: '6px',
        }}
      >
        <embed
          //   id="policyContainer"
          src="https://253-private.oss-cn-hangzhou.aliyuncs.com/cloud/20210910/e5842fb0f5f84d2783ea85c65961f0f3.pdf#toolbar=0"
          type="application/pdf"
          width="100%"
          height="500px"
        ></embed>

        <label>
          <input type="checkbox" disabled={!isAgreeEnabled} /> 我已阅读并同意隐私协议
        </label>
      </div>
    </Modal>
  );
};

export default PrivacyPolicy;

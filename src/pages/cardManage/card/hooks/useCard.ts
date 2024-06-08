import { useState } from 'react';
import { CardListItem } from '../data';
const useCard = () => {
  const [currentRow, setCurrentRow] = useState<CardListItem>();
  const [smsModalVisible, setSmsModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedRowsState, setSelectedRows] = useState<CardListItem[]>([]);
  const [autoRenewalOpen, setAutoRenewallOpen] = useState<boolean>(false);
  const [renewalstepOne, setRenewalStepOne] = useState<boolean>(false);
  const [renewalstepTwo, setRenewalStepTwo] = useState<boolean>(false);
  const [shutDownVisible, setShutDownVisible] = useState<boolean>(false); //停机保号
  return {
    currentRow,
    setCurrentRow,
    smsModalVisible,
    setSmsModalVisible,
    showDetail,
    setShowDetail,
    selectedRowsState,
    setSelectedRows,
    autoRenewalOpen,
    setAutoRenewallOpen,
    renewalstepOne,
    setRenewalStepOne,
    renewalstepTwo,
    setRenewalStepTwo,
    shutDownVisible,
    setShutDownVisible,
  };
};
export default useCard;

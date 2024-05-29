import {useState} from 'react'
import {CardListItem} from '../data'
const useCard = () => {
  const [currentRow, setCurrentRow] = useState<CardListItem>()
  const [smsModalVisible, setSmsModalVisible] = useState<boolean>(false)
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [selectedRowsState, setSelectedRows] = useState<CardListItem[]>([]);
  const [renewalModalOpen,setRenewalModalOpen] =useState<boolean>(false)
  
  return {
        currentRow,
        setCurrentRow,
        smsModalVisible,
        setSmsModalVisible,
        showDetail,
        setShowDetail,
        selectedRowsState,
        setSelectedRows,
        renewalModalOpen,
        setRenewalModalOpen
    }
}
export default useCard;
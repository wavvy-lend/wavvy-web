import { useRef,Dispatch, SetStateAction } from "react"

interface ILoanPaymentDropdown {
    setAmount: (amount:string)=>void
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const LoanPaymentDropdown = ({setAmount, setIsOpen}: ILoanPaymentDropdown) => {
  const partPaymentRef = useRef<HTMLParagraphElement>(null)
  const fullPaymentRef = useRef<HTMLParagraphElement>(null)
  const handlePartPaymentClick = ()=>{
    if (partPaymentRef.current && partPaymentRef.current.textContent ){
      const amount = partPaymentRef?.current?.textContent.split(":")[1]
      setAmount(amount.slice(0,-1))
      setIsOpen(false)
    }
  }
  const handleFullPaymentClick = ()=>{
    if (fullPaymentRef.current && fullPaymentRef.current.textContent ){
      const amount = fullPaymentRef?.current?.textContent.split(":")[1]
      setAmount(amount.slice(0,-1))
      setIsOpen(false)
    }
  }
  return (
    <div className="absolute left-[50%] top-[4rem] bottom-0 translate-x-[-50%] bg-white text-[#666] w-full h-fit  z-50 rounded-lg pt-3 pl-3 pb-3 flex flex-col items-start">
        <p className="cursor-pointer hover:bg-slate-500 p-3 border-b border-b-[#666]" onClick={handlePartPaymentClick} ref={partPaymentRef}>Part Payment: 365$</p>
        <p className="cursor-pointer hover:bg-slate-500 p-3" onClick={handleFullPaymentClick}  ref={fullPaymentRef}>Full Payment: 500$</p>
    </div>
  )
}

export default LoanPaymentDropdown
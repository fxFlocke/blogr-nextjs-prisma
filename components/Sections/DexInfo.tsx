import { useEffect, useState } from "react";
import {
    ArrowDownOutlined,
    DownOutlined,
    SettingOutlined
  } from "@ant-design/icons";
  import { Input, Popover, Radio, Modal, message } from "antd";
import axios from "axios";
import tokenList from "../../lib/tokenList.json";
import { useAccount, useSendTransaction, useWaitForTransaction } from "wagmi";
import { connected } from "process";
import { useConnect } from "wagmi";
import { mainnet } from "wagmi/chains"
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

export default function DexInfo(){

    const { address, isConnected} = useAccount();
    const [slippage, setSlippage] = useState(2.5);
    const [messageApi, contextHolder] = message.useMessage();
    const [tokenOneAmount, setTokenOneAmount] = useState(null);
    const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
    const [tokenOne, setTokenOne] = useState(tokenList[0]);
    const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
    const [isOpen, setIsOpen] = useState(false);
    const [changeToken, setChangeToken] = useState(1);
    const [prices, setPrices] = useState(null);
    const [txDetails, setTxDetails] = useState({
      to:null,
      data: null,
      value: null,
    }); 

    const { connect } = useConnect({
        connector: new MetaMaskConnector({
            chains: [mainnet]
        }),
      });


    const {data, sendTransaction} = useSendTransaction({
        request: {
          from: address,
          to: String(txDetails.to),
          data: String(txDetails.data),
          value: String(txDetails.value),
        }
      })
    
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })
    
      function changeAmount(e) {
        setTokenOneAmount(e.target.value);
        if(e.target.value && prices){
          setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2))
        }else{
          setTokenTwoAmount(null);
        }
      }
    
      function switchTokens() {
        setPrices(null);
        setTokenOneAmount(null);
        setTokenTwoAmount(null);
        const one = tokenOne;
        const two = tokenTwo;
        setTokenOne(two);
        setTokenTwo(one);
        fetchPrices(two.address, one.address);
      }
    
      function openModal(asset) {
        setChangeToken(asset);
        setIsOpen(true);
      }
    
      function modifyToken(i){
        setPrices(null);
        setTokenOneAmount(null);
        setTokenTwoAmount(null);
        if (changeToken === 1) {
          setTokenOne(tokenList[i]);
          fetchPrices(tokenList[i].address, tokenTwo.address)
        } else {
          setTokenTwo(tokenList[i]);
          fetchPrices(tokenOne.address, tokenList[i].address)
        }
        setIsOpen(false);
      }
    
      async function fetchPrices(one, two){
    
            let server = 'http://localhost:3000' 
            // 'https://your_deployment.server.com'
            const res = await axios.get(`${server}/api/tokenPrice`, {
                params: {addressOne: one, addressTwo: two}
              })
              setPrices(res.data)
      }

      function handleSlippageChange(e) {
        setSlippage(e.target.value);
      }
    
      async function fetchDexSwap(){
    
        const allowance = await axios.get(`https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`)
      
        if(allowance.data.allowance === "0"){
    
          const approve = await axios.get(`https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenOne.address}`)
    
          setTxDetails(approve.data);
          console.log("not approved")
          return
    
        }
    
        const tx = await axios.get(
          `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${tokenOne.address}&toTokenAddress=${tokenTwo.address}&amount=${tokenOneAmount.padEnd(tokenOne.decimals+tokenOneAmount.length, '0')}&fromAddress=${address}&slippage=${slippage}`
        )
    
        let decimals = Number(`1E${tokenTwo.decimals}`)
        setTokenTwoAmount((Number(tx.data.toTokenAmount)/decimals).toFixed(2));
    
        setTxDetails(tx.data.tx);
      
      }
    
    
      useEffect(()=>{
    
        fetchPrices(tokenList[0].address, tokenList[1].address)
    
      }, [])
    
      useEffect(()=>{
    
          if(txDetails.to && isConnected){
            sendTransaction();
          }
      }, [txDetails])
    
      useEffect(()=>{
    
        messageApi.destroy();
    
        if(isLoading){
          messageApi.open({
            type: 'loading',
            content: 'Transaction is Pending...',
            duration: 0,
          })
        }    
    
      },[isLoading])
    
      useEffect(()=>{
        messageApi.destroy();
        if(isSuccess){
          messageApi.open({
            type: 'success',
            content: 'Transaction Successful',
            duration: 1.5,
          })
        }else if(txDetails.to){
          messageApi.open({
            type: 'error',
            content: 'Transaction Failed',
            duration: 1.50,
          })
        }
    
    
      },[isSuccess])

    const settings = (
        <>
          <div>Slippage Tolerance</div>
          <div>
            <Radio.Group value={slippage} onChange={handleSlippageChange}>
              <Radio.Button value={0.5}>0.5%</Radio.Button>
              <Radio.Button value={2.5}>2.5%</Radio.Button>
              <Radio.Button value={5}>5.0%</Radio.Button>
            </Radio.Group>
          </div>
        </>
    )


    return(
        <div className='flex flex-col items-center'>
            <div className='h-[550px] w-[350px] md:h-[550px] md:w-[635px] grid items-center justify-center text-center bg-[#440707] p-4 rounded-lg'>
                <div className="h-[515px] w-[320px] md:w-[600px] md:h-[515px] overflow-hidden rounded-lg shadow-lg bg-[#360808] grid grid-cols-1 items-center justify-center">
                    <div className='text-center font-inner'>
                        <h2 className='text-2xl pt-1'>Token Exchange Amounts, powered by Moralis</h2>
                    </div>
                    <div className="flex justify-center">
                        {contextHolder}
                        <Modal open={isOpen} footer={null} onCancel={() => setIsOpen(false)} title="Select a token">
                        <div className="modalContent">
                            {tokenList?.map((e, i) => {
                            return (
                                <div key={i} onClick={() => modifyToken(i)} className="tokenChoice">
                                    <img src={e.img} alt={e.ticker} className="tokenLogo" />
                                    <div className="tokenChoiceNames">
                                        <div className="tokenName">{e.name}</div>
                                        <div className="tokenTicker">{e.ticker}</div>
                                    </div>
                                </div>
                            );})}
                        </div>
                        </Modal>
                        <div className="tradeBox">
                            <div className="tradeBoxHeader">
                                <Popover content={settings} title="Settings" trigger="click" placement="bottomRight" className="p-4">
                                    <SettingOutlined rev={undefined} className="cog"/>
                                </Popover>
                                {/* <button className="connectButton" onClick={() => connect}>
                                    {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
                                </button> */}
                            </div>
                            <div className="inputs pb-2">
                                <Input placeholder="0" value={tokenOneAmount} onChange={changeAmount} disabled={!prices} className="h-[96px] mb-4 text-4xl border-red-800"/>
                                <Input placeholder="0" value={tokenTwoAmount} disabled={true} className="h-[96px] p-2 text-4xl"/>
                                {/* <div onClick={switchTokens} className="switchButton">
                                    <ArrowDownOutlined rev={undefined} className="switchArrow"/>
                                </div> */}
                                <div onClick={() => openModal(1)} className="assetOne">
                                    <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo"/>
                                    {tokenOne.ticker}
                                    <DownOutlined rev={undefined} />
                                </div>
                                <div onClick={() => openModal(2)} className="assetTwo">
                                    <img src={tokenTwo.img} alt="assetOneLogo" className="assetLogo"/>
                                    {tokenTwo.ticker}
                                    <DownOutlined rev={undefined} />
                                </div>
                            </div>
                            {/* <button className="swapButton" disabled={!tokenOneAmount || !isConnected} onClick={fetchDexSwap}>Swap</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
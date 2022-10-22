import React,{ useEffect, useState } from 'react'
//import Link from 'next/link'
// state

// import {
//   VStack,
//   useDisclosure,
//   Button,
//   Text,
//   HStack,
//   Select,
//   Input,
//   Box
// } from "@chakra-ui/core";
import styles from '../styles/components/header.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import SelectWalletModal from "./walletConnect/modal";
import {  useWeb3React } from "@web3-react/core";
import { networkParams } from "./walletConnect/networks";
import { connectors } from "./walletConnect/connectors";
import { toHex, truncateAddress, userAddress } from "./walletConnect/utils";
import { BiChevronDown } from "react-icons/bi";


export default function Balance() {
  let balance = "Connect Wallet"
  const dispatch = useDispatch()
  const connected = useSelector((state) => state.users.connected)

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active
  } = useWeb3React();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(undefined);
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  useEffect(()=>{
    localStorage.setItem("userAddress",account)
    if(active){
      userAddress(account)
    }else{
      userAddress(null)
    }
  },[account, active])

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };
const [isOpen , setIsOpen] = useState(false)
  const onOpen = (e) => {
    setIsOpen(true)
  };
  const onClose = (e) => {
    setIsOpen(false)
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account]
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature]
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) {
      setNetwork(Number(4));
      if(chainId == network){
        activate(connectors[provider])
      }else{
        switchNetwork(network)
      }
    };
  }, []);

  return (
    <> 
          <div className={styles.balance}>
            <div>
              <span><img src='/assets/logo_img/btc.png'  priority="true" alt="BUSD" width="20"  /> </span>
              BUSD 
              <span><BiChevronDown /></span>
            </div>
            <div>
              {!active ?
                <p data-connected={connected} onClick={onOpen}>Connect Wallet</p>
                :
                <p data-connected={connected} onClick={disconnect}>{truncateAddress(account)}</p>
              }
            </div>
          </div>

      {/* <ConnectWallet
        connectors={WalletConnectorsByName}
        infuraUrls={INFURA_URLS}
      /> */}

      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  )
}
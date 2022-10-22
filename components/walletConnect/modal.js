// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import {VscChromeClose} from 'react-icons/vsc'
// import { Image } from "@chakra-ui/core";
import Image from 'next/image'
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
import Modal from 'react-modal';
import Web3 from 'web3';
import swal from 'sweetalert';

  export default function SelectWalletModal({ isOpen, closeModal }) {
    const { activate } = useWeb3React();
  
    const setProvider = (type) => {
      window.localStorage.setItem("provider", type);
    };

    const networkCheck = async() => {
      const chainId = 4;
      if (window.ethereum.networkVersion !== chainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(chainId) }]
          });
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
          if (err.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Rinkeby Testnet',
                  chainId: web3.utils.toHex(chainId),
                  nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
                  rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161']
                  // rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161']
                }
              ]
            });
          }
          swal({
            title: "Network Error",
            text: 'Please Switch To ETH Mainnet',
            icon: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
        }
      }
    }
    return (
        <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="popupMain"
        style={{zIndex:'99999999'}}
        >
        {/* <button onClick={closeModal}>close</button> */}
        <div className="popupcenter" style={{zIndex:'99999999'}}>
          <div className="popheader">
            <h3>Select Wallet</h3>
            <div className="close_icon"><VscChromeClose onClick={closeModal} /></div>
          </div>
          <div className="popbody">
            <div className="sn_wallet">
              <button
              variant="outline"
              onClick={() => {
                  activate(connectors.injected);
                  setProvider("injected");
                  networkCheck();
                  closeModal();
              }}
              w="100%"
              // style={btnCustom}
              className='a_box'
              >
                  <Image
                  src="/mm.png"
                  alt="Metamask Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                  />
                  <p>Metamask</p>
              </button>
            </div>
            <div className="sn_wallet">
              <button
              variant="outline"
              onClick={() => {
                  activate(connectors.walletConnect);
                  setProvider("walletConnect");
                  networkCheck();
                  closeModal();
              }}
              w="100%"
              // style={btnCustom}
              className='a_box'
              >
                  <Image
                  src="/wc.png"
                  alt="Wallet Connect Logo"
                  width={26}
                  height={26}
                  borderRadius="3px"
                  />
                  <p>Wallet Connect</p>
              </button>
            </div>
            <div className="sn_wallet">
              <button
              variant="outline"
              onClick={() => {
                  activate(connectors.coinbaseWallet);
                  setProvider("coinbaseWallet");
                  networkCheck();
                  closeModal();
              }}
              w="100%"
              // style={btnCustom}
              className='a_box'
              >
                  <Image
                  src="/cbw.png"
                  alt="Coinbase Wallet Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                  />
                  <p>Coinbase Wallet</p>
              </button>
            </div>

          </div>


            {/* <Button
            variant="outline"
            onClick={() => {
                activate(connectors.injected);
                setProvider("injected");
                closeModal();
            }}
            w="100%"
            style={btnCustom}
            >
                <Image
                src="/mm.png"
                alt="Metamask Logo"
                width={25}
                height={25}
                borderRadius="3px"
                />
                <Typography>Metamask</Typography>
            </Button> */}
        </div>
        {/* <div>
            <Button
            variant="outline"
            onClick={() => {
                activate(connectors.walletConnect);
                setProvider("walletConnect");
                closeModal();
            }}
            w="100%"
            style={btnCustom}
            >
                <Image
                src="/wc.png"
                alt="Wallet Connect Logo"
                width={26}
                height={26}
                borderRadius="3px"
                />
                <Typography>Wallet Connect</Typography>
            </Button>
        </div>
        <div>
            <Button
            variant="outline"
            onClick={() => {
                activate(connectors.coinbaseWallet);
                setProvider("coinbaseWallet");
                closeModal();
            }}
            w="100%"
            style={btnCustom}
            >
                <Image
                src="/cbw.png"
                alt="Coinbase Wallet Logo"
                width={25}
                height={25}
                borderRadius="3px"
                />
                <Typography>Coinbase Wallet</Typography>
            </Button>
        </div> */}
      </Modal >
    );
  }
  
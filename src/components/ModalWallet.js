import React, { memo, useState } from 'react';
import Modal from './UI/Modal';
import Web3 from "web3"
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import QRCode from '../img/page/qr.png'
import WalletConnectProvider from "@walletconnect/web3-provider";

const ModalWallet = ({
    setOpen, open
}) => {
    
    const [qr, setQr] = useState(true);

    const providerOptions = {
        coinbasewallet: {
            package: CoinbaseWalletSDK, // Required
            options: {
              appName: "My Awesome App", // Required
              infuraId: "7256011bf91843e580fa8ad506013c41", // Required
              rpc: "", // Optional if `infuraId` is provided; otherwise it's required
              chainId: 1, // Optional. It defaults to 1 if not provided
              darkMode: false // Optional. Use dark theme, defaults to false
            }
          },
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              infuraId: "7256011bf91843e580fa8ad506013c41" // required
            }
          }
    };

    const web3Modal = new Web3Modal({
       network: "mainnet", // optional
       cacheProvider: true, // optional
      providerOptions // required
    });
  async function connectWallets(){
    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);
  }

   

    return (
        <Modal open={open} setOpen={setOpen} classNameName='wallet' >
            <div className="wallet">
                <h2 className="wallet__title">Connect wallet</h2>
                <div className="wallet__tabs">
                    <button  
                        onClick={() => setQr(true)}
                        className={`wallet__tabs-btn btn ${qr ? 'active' : '' }`} 
                        type="button">QR Code</button>
                    <button 
                        onClick={() => {
                            console.log("click is worked")
                            connectWallets()
                            setQr(false)    
                        } }
                        className={`wallet__tabs-btn btn ${!qr ? 'active' : '' }`} 
                        type="button">Desktop</button>
                </div>
                <div className={`wallet__qr wallet__item ${qr ? 'active' : '' }`}>
                    <p className="wallet__item-info">Scan QR code with a WalletConnect-compatible wallet</p>
                    <img className="wallet__qr-img" src={QRCode} alt="qr"/>
                    <p className="wallet__qr-sign">Copy to  clipboard</p>
                </div>
                <div className={`wallet__form wallet__item ${!qr ? 'active' : '' }`}>
                    <p className="wallet__item-info">your preferred wallet</p>
                    <form>
                        <label className="wallet__label">
                            <p className="wallet__label-info">Your wallet</p>
                            <textarea className="wallet__textarea" name="wallet"></textarea>
                        </label>
                        <div className="wallet__form-btn-wrap">
                            <button className="btn btn--green" type="submit">Get NFT</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default memo(ModalWallet);
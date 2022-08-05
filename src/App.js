import { useCallback, useEffect, useMemo, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Storyline from './components/Storyline';
import Elements from './components/Elements';
import Facts from './components/Facts';
import RoudMap from './components/RoudMap';
import Table from './components/Table';
import Team from './components/Team';
import FAQ from './components/FAQ.js';
import ModalForm from './components/ModalForm';
import ModalWallet from './components/ModalWallet';
import ModalMint from './components/ModalMint';
import ModalGender from './components/ModalGender';
import NotifyModal from './components/UI/NotifyModal';

import './App.css';

function App() {

  //Стейты модалок
  const [formOpen, setFormOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [mintOpen, setMintOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [notifyModal, setNotifyModal] = useState({ text: '', status: false });



  const updateBgData = () => {
    const bgMain = document.querySelectorAll('.main-bg');
    const arrBg = [];
    bgMain.forEach(bg => {
      let rect = bg.getBoundingClientRect();
      const top = rect.top + document.body.scrollTop;
      const bottom = rect.bottom + document.body.scrollTop;
      const obj = {target: bg, top: top, bottom: bottom};
      arrBg.push(obj)
    })
      paralaxBgMain(arrBg)
  }

  const paralaxBgMain = (posBg) => {
    document.addEventListener('scroll', () => {
      posBg.forEach(item => {
        if(window.scrollY > item.top && item.bottom > window.scrollY) {
            const rect = item.target.getBoundingClientRect();
            item.target.classList.add('focus');
            item.target.style.top = `${rect.top * 0.2}px`;
        } else {
            item.target.classList.remove('focus');
            item.target.style.top = null;
        }
      })
    })
  }

  
  

  useEffect(() => {
    setTimeout(() => {
      updateBgData();
    }, 2000)
    window.addEventListener('resize', () => {
      setTimeout(() => updateBgData(), 100)
    })    
  }, [])

  return (
    <div className="App wrapper">
        <Header setGenderOpen={setGenderOpen} setWalletOpen={setWalletOpen}/>
        <main>
          <Hero 
            setFormOpen={setFormOpen} 
            setMintOpen={setMintOpen} 
            setNotifyMint={() => setNotifyModal({
              text: `Public sale hasn't started yet. Learn more in the FAQ section. Hit "get whitelisted" button to apply`,
              status: true,
            })}
          />
          <Storyline />
          <Elements />
          <RoudMap />
          <Facts />
          <Table />
          <Team />
          <FAQ />
        </main>

        <ModalForm 
          open={formOpen} 
          setOpen={setFormOpen} 
          notifyModal={() => setNotifyModal({
            text: 'Your application has been successfully submitted',
            status: true,
          })}
        />
        <ModalWallet open={walletOpen} setOpen={setWalletOpen} />
        <ModalMint open={mintOpen} setOpen={setMintOpen} />
        <ModalGender open={genderOpen} setOpen={setGenderOpen} />
        <NotifyModal notify={notifyModal} setNotify={setNotifyModal} />
        
    </div>
  );
}

export default App;

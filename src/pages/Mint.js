import react, {useState} from "react";
import Accordion from "../components/base/Accordion";
import AccordionHeader from "../components/base/AccordionHeader";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Checkbox from "../components/base/Checkbox";
import Image from "../components/base/Image";
import Select from "../components/base/Select";
import TextInput from "../components/base/TextInput";
import { Colors } from "../constants/Colors";
import {AiOutlineSearch} from 'react-icons/ai';

import Header from "../components/Header";
import CountInput from "../components/CountInput";

import { ethers } from "ethers";

import GoldStake from '../utils/GoldStake.json';
import Gold from '../utils/Gold.json';
import GoldHunter from '../utils/GoldHunter.json';

const Create = () => {

const GoldStake_CONTRACT_ADDRESS = "0xaF5c03A0965cE48273dB984190aa00b9b678952e";
const Gold_CONTRACT_ADDRESS = "0xe7d962EAAaa508369438766a8d0738423756A462";
const GoldHunter_CONTRACT_ADDRESS = "0xa0551A03Ab50c74Ac3cE9a68aF4bC0C222530069";


const [mintAmount, setMintAmount] = useState(0);

  const mint = async () => {
      const { ethereum } = window;

        if (ethereum) {
            try 
            {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                const connectedContract = new ethers.Contract(GoldHunter_CONTRACT_ADDRESS, GoldHunter.abi, signer);
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                let address = await ethereum.request({ method: 'eth_accounts' });
                

                const polygonChainId = "0x13881"; 
                if (chainId !== polygonChainId) {
                    alert("You are not connected to the polygon Test Network!");
                    return;
                }

                console.log("connectedContract");

                let mintprice = await connectedContract.mintPrice(mintAmount);
                // await mintprice.wait();
                console.log(mintprice/(10**18));
                mintprice = mintprice/(10**18);
                let stake = false; 
                const options = {value: ethers.utils.parseEther(String(mintprice))};

                    // console.log(address[0]);
                    // console.log('address');
                    // let approveState = await connectedContract.setApprovalForAll(address[0], true);   
                    // console.log("Approving...please wait.");
                    // await approveState.wait();

                let nftTxn = await connectedContract.mint(mintAmount, stake, options);
                console.log("Mining...please wait.");
                await nftTxn.wait();
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
            } catch (error) {
                console.log("kOKOK");
                console.log(error);
              }
        }
  }

  const onChange = (e) => {
    let amount = e.target.value;
    setMintAmount(amount);
  }
  
  return (
    <div id="mintContent">
      <Header />
      <CountInput onChange = {onChange} />
      <div id="list-container" style={{color:"yellow"}}>
        <button id="mint" onClick={mint}> Mint </button>
      </div>
    </div>
  );
};

export default Create;

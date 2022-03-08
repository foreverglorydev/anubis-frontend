import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";

const list = [
    {src:'https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',owner:'Yubex', name:'handsome', price:'14'},
    {src:'https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',owner:'313', name:'aiden', price:'13'},
    {src:'https://images.unsplash.com/photo-1633250587603-42e4fd67f5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',owner:'697', name:'chengba', price:'21'},
    {src:'https://images.unsplash.com/photo-1614812513172-567d2fe96a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',owner:'1000dragon', name:'nemanja', price:'43'},
    {src:'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',owner:'809', name:'millicare', price:'18'},
    {src:'https://images.unsplash.com/photo-1573221566340-81bdde00e00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',owner:'snowforest', name:'passion', price:'19'},
    {src:'https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',owner:'1020', name:'Aristo', price:'23'},
    {src:'https://images.unsplash.com/photo-1559762717-99c81ac85459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',owner:'redstar', name:'Jack', price:'23'},
    {src:'https://images.unsplash.com/photo-1608085575984-d61d8335340e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',owner:'PIC', name:'Moana', price:'26'},
    {src:'https://images.unsplash.com/photo-1592492152545-9695d3f473f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',owner:'135', name:'dawnR', price:'29'},
    {src:'https://lh3.googleusercontent.com/VK08Fp3Qwh7p3Q88SKtlq7ZwkfL0fKRKAqrx62pKOkv2HkKXAVc-LMHrqTuPlK151rIrS-BqPToKjeUQjnauKp3UsP24BsgbdSLyzA=w600',owner:'623', name:'VIP', price:'23'},
    {src:'https://lh3.googleusercontent.com/mfvsaC6yYF24_za4v1w0tumpZ0P6xqEGT1NOGs_k7P0RystLg_rMiuRU3b8e-ELjOc4u-hiziqm8uMbsJGIHeQ_rKeQ0tVkVwfTlrQ=w600',owner:'RB', name:'YJS', price:'50'}
]

const Home = () => {


  return (
    <div id="home">
      <Hero list={list} />

      <p id="card-list-header-text"> My Collections </p>
      <div id="list-container">
        <CardList list={list} />
      </div>
    </div>
  );
};

export default Home;

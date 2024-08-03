<template>
  <div class="min-h-screen bg-[#212428] text-white mt-8 md:mt-0">
    <!-- <Header /> -->
    <!-- <div class="bg-gradient-to-r from-orange-500 to-red-500 text-center py-2">
      <span>Wrong network. </span>
      <a href="#" class="font-bold underline" rel="ugc">
        Switch network to Inoai Chain.
      </a>
    </div> -->
    <main class="flex flex-col items-center justify-center py-16 space-y-8">
      <div data-aos="zoom-out-down"
        class="flex flex-col gap-[2rem] md:flex-row justify-between w-full max-w-4xl p-8 bg-[#1a1d23] rounded-lg"
      >
        <div>
          <h1 class="text-6xl font-bold text-[#FFFDFD ]">EARN</h1>
        </div>
        <div class="flex gap-10 justify-between">
          <div>
            <h1 class="text-bgfrom">Total Reward Earned</h1>
            <h1 class="mt-2 text-xl">No Earnings</h1>
            <span class="text-[#878e99] text-sm">Start Staking Today</span>
          </div>
          <div class="flex flex-col justify-start content-start">
            <h1 class="text-bgfrom">Pending Rewards</h1>
            <span class="mt-2 text-xl">No pending rewards</span>
            <!-- <button>Harvest All</button> -->
          </div>
        </div>
      </div>
      <!-- <button
        class="inline-flex items-center justify-center whitespace-nowrap border-radius text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 h-10 hover:text-white bg-[#1a1d23] text-[#e53bb8] px-8 py-4"
      >
        CONNECT WALLET
      </button> -->
      <div data-aos="zoom-out-down" class="w-full max-w-4xl p-8 bg-[#1a1d23] rounded-lg">
        <h2 class="text-4xl font-bold text-[#FFFDFD ] font-fam">
          $INOAI VAULT
        </h2>

        <div data-aos="zoom-out-down"
          class="mt-8 p-4 bg-gradient-to-r from-bgfrom to-bgto rounded-lg flex items-center justify-between"
        >
          <div class="flex items-center space-x-4">
            <img
              src="../assets/images/N png.png"
              alt=""
              class="h-10 w-10 rounded-full"
              width="40"
              height="40"
              style="aspect-ratio: 40 / 40; object-fit: cover"
            />
            <span class="text-lg font-bold">Stake $INOAI to earn</span>
          </div>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 h-10 hover:text-white bg-[#1a1d23] text-[#e53bb8] px-8 py-4"
          >
            BUY
          </button>
        </div>
        <div data-aos="zoom-out-down"
          v-for="apr in aprRate"
          :key="apr.month"
          class="mt-8 flex justify-between md:grid md:grid-cols-2 gap-4"
        >
          <div @click="openModel(apr.aprRate, apr.month)" data-aos="zoom-in" class=" cursor-pointer flex flex-col justify-center p-4 boxShadow w-[100%] rounded-lg">
            <h3 class="text-lg font-bold text-[#FFFDFD ]">
              {{ apr.month }} MONTH
            </h3>
            <p class="text-md text-[#878e99]">{{ apr.aprRate }} APR</p>
            <a
              href="#"
              class="underline text-bgfrom text-sm cursor-pointer"
              rel="ugc"
              @click="openModel(apr.aprRate, apr.month)"
            >
              Stake Now →
            </a>
          </div>

          <div data-aos="zoom-in" class="p-4 boxShadow content-center w-[100%] rounded-lg">
            <div>
              <div v-if="apr.stakeAmount !== '0'">
                <p>Staked Amount: {{ apr.stakeAmount }} kcalb</p>
                <p>Staked Date: {{ apr.stakeDate }}</p>
                <p>Reward Amount: {{ apr.reward }}</p>
              </div>
              <div v-else>
                <p class="text-[#878e99]">You havent staked for this period</p>
                <p class="text-md text-[#878e99]">Connect wallet to stake</p>
              </div>
            </div>
            <button v-if="apr.stakeAmount !== '0'"
            @click="withdraw(apr.month)"
            class="boxShadow mt-[10px] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 h-10 hover:text-white bg-[#1a1d23] text-[#e53bb8] px-8 py-4"
          >
            WITHDRAW
          </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
    <UModal v-model="isOpen">
      <div
        class="bg-[#212428] text-white rounded-lg max-w-md mx-auto p-6 md:max-w-2xl md:p-8 lg:max-w-4xl lg:p-10 ml-0 mr-0"
      >
        <div class="flex justify-between items-center mb-4 md:mb-6 lg:mb-8">
          <h1 class="text-md font-bold md:text-2xl lg:text-3xl">
            {{ month }} MONTH VAULT
          </h1>
            <img src="../assets/images/N png.png" class="h-[30px] w-[30px] rounded-full" alt="" srcset="">
        </div>
        <div class="mb-4 md:mb-6 lg:mb-8">
          <h2 class="text-bgfrom font-bold">Deposit Amount</h2>
          <p class="text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">

            <input
              @input='calculateReward(stakingAmount,month)'
              v-model="stakingAmount"
              placeholder="INPUT AMOUNT HERE"
              type="text"
             class="cursor-pointer text-sm bg-transparent border-bgfrom w-[100%] border-b-2 focus-visible:outline-none"
            />
          </p>
          <div class="flex  justify-between items-center mt-10 md:mt-10 lg:mt-10">
            <p class="text-bgfrom font-bold">In Your Wallet</p>
            <div class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
              <p class="font-bold">{{ tokenBalance }} KCALB</p>
            </div>
          </div>
        </div>
        <div
          class="bg-gradient-to-r from-bgfrom to-bgto p-4 rounded-lg mb-4 md:mb-6 lg:mb-8"
        >
          <div
            class="flex items-center justify-between space-x-2 mb-2 md:space-x-3 lg:space-x-4 md:mb-3 lg:mb-4"
          >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <path
                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
              ></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            <p class="md:text-md lg:text-md">Estimated Rewards:</p>
          </div>
            <p class="font-bold">{{ estimatedReward }} kcalb</p>
          </div>
          <div class="flex justify-between items-center md:text-lg lg:text-xl">
            <div
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#1a1d23] text-[#e53bb8] px-8 py-4"
              data-v0-t="badge"
            >
              {{ apr }} APR
            </div>
            <div
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10  bg-[#1a1d23] text-[#e53bb8] px-8 py-4"
              data-v0-t="badge"
            >
              1x Multiplier
            </div>
          </div>
        </div>
        <div class="">
          <h2 class="text-bgfrom font-bold :mb-4">Staking Details</h2>
          <div class="text-sm flex justify-between mt-2 md:mt-3 lg:mt-4">
            <p>Type of vault</p>
            <p class="font-bold text:sm  md:text-sm lg:text-sm">
              {{ month }} Month Vault
            </p>
          </div>
          <div class="flex justify-between  md:mt-3 lg:mt-1">
            <p class="text-sm">APR</p>
            <p class="font-bold text-sm md:text-sm lg:text-sm">{{ apr }} APR</p>
          </div>
          <div class="flex justify-between mt-1 md:mt-1 lg:mt-1">
            <p class="text-sm">Multiplier</p>
            <p class="font-bold text-sm md:text-sm lg:text-sm">1X</p>
          </div>
          <div class="flex justify-between mt-1 md:mt-1 lg:mt-1">
            <p class="text-sm">Unlocked date</p>
            <p class="text-sm font-bold">7/12/2024</p>
          </div>
          <button
            @click="submit"
            class="w-[100%] mt-[3rem] inline-flex text-[#c4cfde] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gradient-to-r from-bgfrom to-bgto"
          >
            CONFIRM & SUBMIT
          </button>
        </div>
      </div>
    </UModal>

    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import Web3 from "web3";
import {
  tokenAbi,
  tokenAddress,
  stakingAbi,
  stakingAddress,
} from "../constants/constant";
import { useAccount } from "../stores/account";
const account = useAccount();
const isOpen = ref(false);
const toast = useToast();
const apr = ref();
const month = ref();
const stakingAmount = ref();
const tokenBalance=ref();
const estimatedReward=ref(0);

const web3 = new Web3("https://inoai-network.com");
const stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress);
const aprRate = reactive([
  {
    aprRate: "1.53%",
    month: 1,
    stakeDate: null,
    stakeAmount: null,
    reward:null
  },
  {
    aprRate: "9.18%",
    month: 6,
    stakeDate: null,
    stakeAmount: null,
  },
  {
    aprRate: "36.73%",
    month: 12,
    stakeDate: null,
    stakeAmount: null,
  },
  {
    aprRate: "110.19%",
    month: 48,
    stakeDate: null,
    stakeAmount: null,
  },
]);

const openModel = (aprR, monthM) => {
  (isOpen.value = true), (apr.value = aprR), (month.value = monthM);
};
const submit = async () => {
  // console.log(apr.value,month.value,stakingAmount.value)
  const web3 = new Web3(window.ethereum)
  const stakingContract = new web3.eth.Contract(stakingAbi,stakingAddress)
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  try {
    const result = await stakingContract.methods
      .stake(stakingAmount.value, month.value)
      .send({
        from:'0xc9aff70877e94414cf630095e67fdfe56869a51c'
      });
    console.log(result);
    toast.add({
      title: "Successful",
      description: "Staked Successfully",
      color: "green",
    });
    isOpen.value=false
  } catch (e) {
    console.log(e);
    toast.add({
      title: "Staking Failed",
      description: "Staking failed",
      color: "red",
    });
  }
};

const getStakeDetails = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  try {
    aprRate.forEach(async (element) => {
      const result = await stakingContract.methods
        .getStakeDetails(accounts[0], element.month)
        .call();
      element.stakeAmount = BigInt(result.amount).toString();
      element.stakeDate = new Date(
        Number(result.startTime) * 1000
      ).toLocaleDateString();
    });
  } catch (e) {
    console.log(e);
  }
};

const withdraw = async(duration)=>{
  const web3= new Web3(window.ethereum)
  const stakingContract = new web3.eth.Contract(stakingAbi,stakingAddress)
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  try{
    await stakingContract.methods.withdraw(duration).send({
      from:accounts[0]
    })
    toast.add({
      title:"Withdraw Successfull",
      description:"Rewads withdrwad",
      color:'green'
    })
  }
  catch(e){
    console.log(e)
    toast.add({
      title:"Failed Withdraw",
      description:e,
      color:'red'
    })
  }
}

const getRewards=async()=>{
  const web3= new Web3(window.ethereum)
  const stakingContract = new web3.eth.Contract(stakingAbi,stakingAddress)
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  try{

    aprRate.forEach(async element=>{
      try{

        const result= await stakingContract.methods.getReward(accounts[0],element.month).call()
        element.reward=Number(result)
  
        // console.log("reward",Number(result))
      }
      catch(e){
        // console.log(e)
      }
    })
  }
  catch(e){
    console.log(e)
  }
  
}

const getUserBalance=async()=>{
  // const web3= new Web3(window.ethereum)
  const tokenContract = new web3.eth.Contract(tokenAbi,tokenAddress)
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  try{

    const balance = await tokenContract.methods.balanceOf(accounts[0]).call()
    console.log(balance)
    tokenBalance.value=Number(balance)
  }
  catch(e){
    console.log(e)
  }
}

 async function calculateReward  (amount,duration){
  const web3= new Web3(window.ethereum)
  const stakingContract = new web3.eth.Contract(stakingAbi,stakingAddress)
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
   const result= await stakingContract.methods.calculateReward(amount,duration).call();
   estimatedReward.value= Number(result);
  //  console.log("estimated reward ",result)
  }

onMounted(async () => {
  console.log(account.account, "acc");
  await getStakeDetails();
  await getRewards();
  await getUserBalance();
  // await calculateReward();
});
</script>

<style>
.gradient {
  background-image: linear-gradient(
    to right top,
    #2e1a47,
    #3d296a,
    #473a90,
    #4a4eb9,
    #4263e4
  );
}

.font-fam {
  font-family: "Poppins";
  font-size: 22px;
}

.boxShadow {
    /* box-shadow: -2px 0px 9px 0px rgba(135 ,142 ,153 ,0.75);
-webkit-box-shadow: -2px 0px 9px 0px rgba(135, 142, 153 ,0.75);
-moz-box-shadow: -2px 0px 9px 0px rgba(135 ,142 ,153 ,0.75); */
box-shadow: 0px 0px 3px 0px rgba(135 ,142 ,153 ,0.75);
-webkit-box-shadow: 0px 0px 3px 0px rgba(135 ,142 ,153 ,0.75);
-moz-box-shadow: 0px 0px 3px 0px rgba(135 ,142 ,153 ,0.75);
}

.boxShadow:hover{
  box-shadow: 0px 0px 7px 0px rgba(135 ,142 ,153 ,0.75);
-webkit-box-shadow: 0px 0px 7px 0px rgba(135 ,142 ,153 ,0.75);
-moz-box-shadow: 0px 0px 7px 0px rgba(135 ,142 ,153 ,0.75);
transition: box-shadow 0.3s ease-in-out;
}

.border-radius {
  border-radius: 6px;
}
</style>

import { defineStore } from "pinia";

export const useAccount=defineStore({
    id:'main',
    state:()=>({
    

        account:'gg'
    
    
    }),
    actions:{
        setAccount(gg){
            this.account=gg
        }
    }

})
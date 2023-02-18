import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan:[],
    addOns:[],
    info:[],
    step:1,
    monthly:true,
    totalPrice:0,
}
const planSlice = createSlice({
    name:'plan',
    initialState,
    reducers:{
        nextStep:(state)=>{
            state.step += 1
        },
        backStep:(state)=>{
            state.step -= 1
        },
        changePeriod:(state)=>{
            state.monthly = !state.monthly
            state.plan = []
            state.addOns = []
        },
        addToPlan:(state,action)=>{
            let hasThisPlan = state.plan.some(item=>item.name==action.payload.name)
            if(!hasThisPlan){
                state.plan = [action.payload]
            } else {
                state.plan = state.plan.filter(item=>item.name!=action.payload.name)
            }
        },
        addToAddOns:(state,action)=>{
            let hasThisAddOn = state.addOns.some(item=>item.title==action.payload.title)
            if(!hasThisAddOn){
                state.addOns = [...state.addOns,action.payload]
            } else {
                state.addOns = state.addOns.filter(item=>item.title!=action.payload.title)
            }
        },
        changePlan:(state)=>{
            state.step = 2
        },
        jumpToStep:(state,action)=>{
            state.step = action.payload
        },
        setInfo:(state,action)=>{
            state.info = [action.payload]
        },
        calculateTotal:(state)=>{
            const planPrice = Number(state.plan.map(item=>item.price)
            .map(item=>item.match(/\d+/)[0]).toString())

            let sumofAddOnsPrice = state.addOns.length>0 ? state.addOns.map(item=>item.price)
            .map(item=>Number(item.match(/\d+/)[0])).reduce((a,b)=>a+b) : 0
            
            state.totalPrice = planPrice+sumofAddOnsPrice
        } 
    }
})
export default planSlice.reducer
export const planActions = planSlice.actions
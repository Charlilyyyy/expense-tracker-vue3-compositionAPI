<template>
    <Header/>
    <div class="container">
        <Balance :total="+total"/>
        <IncomeExpenses :income="+income" :expenses = "+expenses"/>
        <TransactionList :transactions="mainTransactions"/>
        <AddTransaction @transactionSubmit="handleTransactionSubmit"/>
    </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'

import { useToast } from 'vue-toastification';

import { ref,computed } from 'vue';

const toast = useToast()

const mainTransactions = ref([
    { id: 1, text: 'Flower', amount: -19.99 },
    { id: 2, text: 'Salary', amount: 299.97 },
    { id: 3, text: 'Book', amount: -10.00 },
    { id: 4, text: 'Camera', amount: 150.00 }
])

const total = computed(()=>{
    return mainTransactions.value.reduce((accumulator,currTransaction)=>{
        return accumulator + currTransaction.amount
    },0)
})

const income = computed(()=>{
    return mainTransactions.value
    .filter((currTransaction)=> currTransaction.amount > 0)
    .reduce((accumulator, currTransaction)=>{
        return accumulator+currTransaction.amount
    },0)
    .toFixed(2)
})

const expenses = computed(()=>{
    return mainTransactions.value
    .filter((currTransaction)=> currTransaction.amount < 0)
    .reduce((accumulator, currTransaction)=>{
        return accumulator+currTransaction.amount
    },0)
    .toFixed(2)
})

const handleTransactionSubmit = (transactionData) => {
    mainTransactions.value.push({
        id: generateUniqueId(),
        text: transactionData.text,
        amount: transactionData.amount
    })

    toast.success('Transaction added')
}

const generateUniqueId = () => {
     return Math.floor(Math.random()*1000000)
}

</script>
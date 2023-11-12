<template>
    <h3>History</h3>
      <ul id="list" class="list">
        <!-- <li class="minus">
          Cash <span>-MYR400</span><button class="delete-btn">x</button>
        </li>
        <li class="plus">
          Paycheck <span>+MYR800</span><button class="delete-btn">x</button>
        </li> -->
        <li
            v-for="transaction in transactions"
            :key="transaction.id"
            :class="transaction.amount > 0 ? 'plus' : 'minus'"
        >
            {{ transaction.text }} <span>MYR{{ transaction.amount }}</span><button class="delete-btn">x</button>
        </li>
      </ul>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        transactions: {
            type: Array,
            required: true,
        }
    })
</script>
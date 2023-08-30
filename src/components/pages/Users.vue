<template>
  <appModal v-model="dialog">
      <div>
        <h1 v-if="!form.id">Add User</h1>
        <h1 v-else>Edit User</h1>
          <form>
              <input v-model="form.name" type="text" placeholder="Name..." class="form-control my-2">
              <input v-model="form.lastName" type="text" placeholder="Last Name..." class="form-control my-2">
              <input v-model="form.age" type="number" placeholder="Age..." class="form-control my-2">
              <input v-model="form.address" type="text" placeholder="Address..." class="form-control my-2">
              <input v-model="form.phone" type="text" placeholder="Phone..." class="form-control my-2">

              <select v-model="form.department" class="form-control">
                <option value="" selected hidden>Select your department...</option>
                <option value="IT">IT</option>
                <option value="Marketolog">Marketolog</option>
                <option value="Logist">Logist</option>
              </select>
          </form>
          <button class="btn btn-success my-2" @click="save">save</button>
      </div>
    </appModal>
  </template>
  
  
  <script setup>

import axios from 'axios';
import { ref, watch } from 'vue';
import appModal from '../../ui/app-modal.vue';

const dialog = ref(false)

const form = ref({
    name: "",
    lastName: "",
    age: null,
    address: "",
    phone: "",
    department: ""
})

const openModal =(item)=>{
  if(item){
    form.value = {...item}
  }
  dialog.value = true
}

watch(dialog, (value)=>{
  if(value == false){
    form.value = {}
  }
})
const save =(e)=>{
  e.preventDefault();
  if(!form.value.id){
    axios.post("http://localhost:3000/Users", {...form.value})
  } else{
    axios.put(`http://localhost:3000/Users/${form.value.id}`, {...form.value})
  }
  window.location.reload();
  dialog.value = false
}


defineExpose({openModal})
</script>




<style lang="scss" scoped>
h1{
  text-align: center;
}
</style>

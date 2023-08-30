<template>
  <div class="container">
    <div class="row">
      <Users ref="user_modal"/>
      <div class="col-md-4 my-3">
        <button class="btn btn-success" @click="openModal">open Modal</button>
      </div>
    </div>
   <div class="row mt-3">
    <div class="col-md-12">
      <table class="table table-striped table-hover table-border">
        <thead>
          <tr>
            <th>T/R</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Department</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in users" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.department }}</td>
            <td>
              <button class="btn btn-primary m-1" @click="editModal(item)">edit</button>
              <button class="btn btn-danger m-1" @click="deleteUser(item.id)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Users from '../components/pages/Users.vue'
const user_modal = ref("")
const users =  ref([])

const openModal =()=>{
  user_modal.value.openModal()
}

const editModal =(item)=>{
  user_modal.value.openModal(item)
}
const deleteUser =(id)=>{
  axios.delete(`http://localhost:3000/Users/${id}`)
  window.location.reload();
}



onMounted(()=>{
  axios.get("http://localhost:3000/Users").then(res=>{
    users.value = res.data 
  })
})
</script>


<style lang="scss" scoped>

</style>

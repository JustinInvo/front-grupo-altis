<template>
  <div class="list-cards">
    <div class="card" v-for="(item, key) in responseGetList" :key="key" @click="openModalDetail()">
      <div class="row g-0">
        <div class="col-6">
          <img src="@/assets/img/phoneLand.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-6">
          <div class="card-body">
            <div class="type">
              {{item.attributes.TIPO}}
            </div>
            <span>Desde</span>
            <h4 class="card-title">s/. <span>{{item.attributes.VALOR}}</span></h4>
            <h5 class="card-text">{{item.attributes.TITULO}}</h5>
            <div class="details">
              <h6>Zonificación: CM</h6>
              <p><iconLocation/>{{item.attributes.UBICACION}}</p>
              <p><iconArea/>{{item.attributes.M2}} m2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <p>Anterior</p>
    <ul>
      <li>1</li>
    </ul>
    <p>Siguiente</p>
  </div>
  <ModalDetail/>
  <ModalForm/>
</template>
<script setup>
import { Modal } from 'bootstrap';
import ModalDetail from '@/components/modalDetail.vue';
import ModalForm from '@/components/modalForm.vue';
import iconLocation from '@/assets/icons/location.vue'
import iconArea from '@/assets/icons/area.vue'
import ServiceApp from '@/services/services';
import { onMounted, ref } from 'vue';
// const openModalDetail = ()=> {
//   // const modalDetail = document.getElementById('modalDetail')
//   const modalDetail = new bootstrap.Modal(document.getElementById('modalDetail'), options)
//   modalDetail.show()
// }
const responseGetList = ref([])
const getList = async () => {
  const response = await ServiceApp.List()
  console.log(response)
  responseGetList.value = response
}
onMounted(()=>{
  getList()
})
const openModalDetail = () => {
  const modalElement = document.getElementById('modalDetail');
  const modalInstance = new Modal(modalElement);
  modalInstance.show();
};
</script>
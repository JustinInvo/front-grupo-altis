<template>
  <div class="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="idModalDetail" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="idModalDetail"></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>Edificio anta Luisa</h5>
          <div>
            <div class="big row">
              <div>
                <img src="@/assets/img/phoneLandDetail.png" alt="">
              </div>
            </div>
            <div class="smalls row">
              <div> <img src="@/assets/img/phoneLandDetail.png" alt=""></div>
              <div> <img src="@/assets/img/phoneLandDetail.png" alt=""></div>
              <div> <img src="@/assets/img/phoneLandDetail.png" alt=""></div>
            </div>
          </div>
          <aside>
            <div>
              <h6>Descripción</h6>
              <p class="text">
                simply dummy text of the printing and typesetting industry. Lorem Ipsusimply dummy text of the printing ansimply 
              </p>
            </div>
            <div class="price">
              <h6>Desde: <h4><span>s/.</span> <strong>9,596</strong></h4></h6>
            </div>
            <p class="address">Los tulipanes 685 , Urb la Primavera </p>
          </aside>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2179579091885!2d-77.0601788261428!3d-12.097226042839852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9ad5b1e69cf%3A0x4e2bdeed2301a523!2sWUNDERMAN%20THOMPSON!5e0!3m2!1ses-419!2spe!4v1702147623437!5m2!1ses-419!2spe" 
            width="100%" height="210" style="border:0; padding-left: 3rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="openModalForm()">
            <iconPhone/>Contactar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Modal } from 'bootstrap';
import iconPhone from '@/assets/icons/phone.vue'
const openModalForm = ()=> {
  const modalElement = document.getElementById('modalForm');
  const modalInstance = new Modal(modalElement);
  modalInstance.show();
}
</script>
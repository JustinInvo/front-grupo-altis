<template>
  <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="idModalForm" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="idModalForm"></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5><iconPhone/> Completa tus datos y nos pondremos <br> en contacto contigo</h5>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="emailInput" placeholder="Email">
            <label for="emailInput">Email</label>
          </div>
          <div class="form-group">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="nameInput" placeholder="Nombre">
              <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="lastNameInput" placeholder="Apellido">
              <label for="lastNameInput">Apellido</label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Acepto los <a href="#">Términos y Condiciones de Uso y las políticas de privacidad</a>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Autorizo el uso de mi información para fines adicionales
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="sendForm()">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Modal } from 'bootstrap';
import iconPhone from '@/assets/icons/phone.vue'
const sendForm = ()=> {
  console.log('sen envio correo')
}
</script>
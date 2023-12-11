<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><AltisLogo/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        Filtros
      </button>
      <div class="filters">
        <select class="form-select">
          <option selected>Ingresa Ubicación</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select">
          <option selected>Tipo de Propiedad</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select">
          <option selected>Precio</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select">
          <option selected>Tamaño de m2</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Altis</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
         <h6>Resultados de busqueda</h6>
         <div class="form-floating">
          <label for="floatingSelect">Ubicación</label>
          <select class="form-select">
            <option selected>Ingresa Distrito</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="types-property">
          <h6>Tipo de propiedad</h6>
          <div class="row">
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkOffice">
                <label class="form-check-label" for="checkOffice">
                  Oficina
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkLand">
                <label class="form-check-label" for="checkLand">
                  Terreno
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkBuilding">
                <label class="form-check-label" for="checkBuilding">
                  Edificio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkIndustrial">
                <label class="form-check-label" for="checkIndustrial">
                  Industrial
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkLocal">
                <label class="form-check-label" for="checkLocal">
                  Local
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkLiving">
                <label class="form-check-label" for="checkLiving">
                  Viviendo
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkConfluxes" checked>
                <label class="form-check-label" for="checkConfluxes">
                  Conflujos
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-floating">
          <label for="floatingSelect">Precio</label>
          <select class="form-select">
            <option selected>Precio</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="form-floating">
          <label for="floatingSelect">Tamño por m2</label>
          <select class="form-select">
            <option selected>m2</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="content-buttons">
          <button class="btn btn-primary">
            Ver resultados
          </button>
          <button class="btn btn-outline-primary">
            Limpiar
          </button>
        </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import AltisLogo from '@/assets/icons/altisLogo.vue'
</script>
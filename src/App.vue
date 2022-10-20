<template>
  <p>Sem a diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p>
  <p v-texto="configuracaoTexto">Teste</p>
  <div v-posicao:absolute="75" v-texto="{cor:'green', totalCaracteres: 100}">Olá sou um binding de argumento e valor
  </div>
  <span>Codigo A: </span> <input type="text"> <span
    v-informacao:simples.umCliqueMouse="'Você encontrará o codigo A na parte frontal do equipamento'">i</span>
  <br>
  <br>
  <span>Codigo B: </span> <input type="text"> <span
    v-informacao:destacado.doisCliqueMouse.sairAutomaticamente="'Você encontrará o codigo B na parte traseira do equipamento'">i</span>
  <hr>
  <h1 v-colorir="'green'">diretiva customizada registrada localmente</h1>
</template>

<script>
import colorirFundoTexto from '@/directives/colorirFundoTexto'
export default {
  name: 'App',
  directives: {
    colorir: colorirFundoTexto
  },
  data: () => ({
    configuracaoTexto: { cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 4 }
  })
}
</script>

<style>

</style>

<template>
    <vue-typer :text="typingText" class="typing-section--container"></vue-typer>
</template>

<script>
export default {
    data(){
        return {
            typingText: ["This is great"]
        }
    }
}
</script>
<style lang="scss" scoped>
.typing-section--container{
    margin: 0 auto;
    text-align: center;
    padding: 25px;
  }
</style>


<template>
<div class="typing-section--container">
    <vue-typer :text="typingText" class="typing-section--container"></vue-typer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            typingText: ["Great companies are built", "Do something great today", "Impossible doesn't exist here", "Customers deserve great experiences"]
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


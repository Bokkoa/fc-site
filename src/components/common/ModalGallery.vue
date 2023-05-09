<template>
  <div class="modal-container">
    <div class="modal">
      <h1>Hi</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum iste voluptate maiores ipsum, quam placeat, vitae alias labore expedita illo dolorem facere exercitationem deserunt iure, incidunt dignissimos doloribus quas?</p>
      <button>Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>


  .modal-container {
  position: fixed;
  top: 30vh;
  left: 25vw;
  width: 50%;
  overflow:auto; 
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.313);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1em);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  .modal {
    text-align: center;
    padding: 2em;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.5;
      margin-bottom: 2rem;
    }

    button {
      background-color: #0077ff;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
      }
    }
  }
}

</style>
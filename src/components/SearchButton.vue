<template>
    <div class="search-container" @click="toggleSearch">
      <div v-if="!isExpanded" class="search-icon">
        <img class="search" src="../assets/icons/search.svg"/>
      </div>
      <div v-else class="expanded">
      <input
        type="text"
        class="search-input"
        placeholder="Search..."
        ref="searchInput"
        @blur="toggleSearch"
      />
      <button id="submit-search-btn"><img class="search" src="../assets/icons/search.svg"/></button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "SearchButton",
        isExpanded: false,
      };
    },
    methods: {
      toggleSearch() {
        this.isExpanded = !this.isExpanded;
        this.$nextTick(() => {
          if (this.isExpanded) {
            this.$refs.searchInput.focus();
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>

  #submit-search-btn{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .expanded{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #20fc8f;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search{
    width: 16px;
    height: 16px;
  }
  
  .search-input {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 5px;
  width: 0;
  color: white;
  transition: width 0.3s ease;
}

  .search-container:focus-within {
    width: 400px;
    border-radius: 20px;
  }
  
  .search-container:focus-within .search-input {
    width: 100%;
  }

  @media only screen and (max-width: 762px) {
    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #20fc8f;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .search{
      width: 12px;
      height: 12px;
    }
  }
  </style>
  
<script>
import League from "../models/LeagueModel.js";
export default {
  name: "LeaguePill",
  props: {
    league : {
      type: League,
      required: true,
    },
  },
};
</script>
<template>
  <div class="leaguePill">
    <p>{{ league.title }}</p>
  </div>
</template>

<style>
.leaguePill {
  padding: 10px;
  width: 30%;
  background-color: #20fc8f;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

@media only screen and (max-width: 950px) {
  .leaguePill {
  width: 100%;
  margin-bottom: 16px;
}
}
</style>

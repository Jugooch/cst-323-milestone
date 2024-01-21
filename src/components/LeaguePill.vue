<script>
import League from "../models/LeagueModel.js";
export default {
  name: "LeaguePill",
  props: {
    league : League(),
  },
};
</script>
<template>
  <div class="leaguePill">
    <p>league.title</p>
  </div>
</template>

<style>
.leaguePill {
  padding: 10px;
  width: 435px;
  background-color: #20fc8f;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

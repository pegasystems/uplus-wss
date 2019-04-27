<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="todo-action">Action</label>
        <select id="todo-action" v-model="settings.todo.action">
          <option>createNewWork</option>
          <option>display</option>
          <option>getNextWork</option>
          <option>openAssignment</option>
          <option>openWorkItem</option>
          <option>openWorkByHandle</option>
          <option>createNewWork</option>
        </select>
      </div>
      <div class="field-item">
        <label for="todo-actionparam">Action parameter</label>
        <input id="todo-actionparam" type="text" v-model="settings.todo.actionparam">
      </div>
      <div class="field-item">
        <label for="todo-url">URL</label>
        <input id="todo-url" type="text" v-model="settings.todo.url">
      </div>
      <div class="field-item">
        <label for="todo-objclass">Classname</label>
        <input id="todo-objclass" type="text" v-model="settings.todo.objclass">
      </div>
      <div class="field-item">
        <label for="todo-startcase">Start case</label>
        <input id="todo-startcase" type="text" v-model="settings.todo.startcase">
      </div>
      <div class="field-item">
        <label for="todo-application">Application name</label>
        <input id="todo-application" type="text" v-model="settings.todo.application">
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>

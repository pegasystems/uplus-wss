<template>
  <div class="container-transparent">
    <h2>To Do Widget</h2>
    <p>Configuration of the Pega Mashup displayed as the To Do list inside the account page.</p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item field-checkbox">
            <label class="width-auto" for="todo-hideactivity">Hide recent activity</label>
            <input id="todo-hideactivity" type="checkbox" v-model="settings.todo.hideactivity" />
          </div>
          <div class="field-item field-checkbox">
            <label class="width-auto" for="todo-hideaccount">Hide account details</label>
            <input id="todo-hideaccount" type="checkbox" v-model="settings.todo.hideaccount" />
          </div>
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
            <input id="todo-actionparam" type="text" v-model="settings.todo.actionparam" />
          </div>
          <div class="field-item">
            <label for="todo-url">URL</label>
            <input id="todo-url" type="text" v-model="settings.todo.url" />
          </div>
          <div class="field-item">
            <label for="todo-objclass">Classname</label>
            <input id="todo-objclass" type="text" v-model="settings.todo.objclass" />
          </div>
          <div class="field-item">
            <label for="todo-startcase">Start case</label>
            <input id="todo-startcase" type="text" v-model="settings.todo.startcase" />
          </div>
          <div class="field-item">
            <label for="todo-application">Application name</label>
            <input id="todo-application" type="text" v-model="settings.todo.application" />
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="todo-extraparam">Extra parameters (separated with comma)</label>
            <textarea id="todo-extraparam" v-model="settings.todo.extraparam" />
          </div>
        </div>
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

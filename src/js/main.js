import '../css/style.css';
import Vue from 'vue';

Vue.component('todo-template', {
  template: '#todo-template',
  props: ['t'],
  data: function(){
    return {
      doing: false
    };
  },
  methods: {
    toggleDoing: function() {
      this.doing = !this.doing;
      this.$dispatch('count', this.doing);
    }
  }
});

const app = new Vue({
  el: '#todoApp',
  data: {
    todo: '',
    todos: [],
    doings: 0
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        name: this.todo,
        doing: false
      });
      this.todo = '';
    },
  },
  events: {
    count: function(doing) {
      this.doings += doing ? 1 : -1;
    }
  }
});

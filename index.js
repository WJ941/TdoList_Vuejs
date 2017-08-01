Vue.component('todo-item',{
	props:['todo'],
	template: `
	<transition name="fade">
	<div class="todoItem">
		<label class="switch">
		  <input type="checkbox" v-model="todo.isFinished">
		  <div class="flipper">
		    <div class="front">
		    	<div class="checkbox"></div>
		    	<p v-bind:class="{ finished: todo.isFinished }">{{todo.text}}</p>
		    </div>
		    <div class="back">
			    <img src="images/finish_icon.png" width='40px' height='40px'>
			    <p v-bind:class="{ finished: todo.isFinished }">{{todo.text}}</p>
		    </div>
		  </div>
		</label>

		<div class = "xButton" v-show="todo.isShowXBtn" v-on:click="deleteItem">
			<div class="backslash"></div>
		    <div class="frontslash"></div>
		 </div>
	</div>
	</transition>`,
	methods: {
		deleteItem: function() {
			this.$emit("delete-this-item");
		}
	}
})

var app = new Vue({
	el: '#todolist',
	data: {
		newItemtext:'',
		todolist: [
			{
				id: 0,
				text: '7点起床',
				isFinished: false,
				isShowXBtn: false,
				isRender: true,
				showXBtn: function() {
					this.isShowXBtn = true;
				},
				hideXBtn: function() {
					this.isShowXBtn = false;
				},
			},{
				id: 1,
				text: '看一小时书',
				isFinished: false,
				isShowXBtn: false,
				isRender: true,
				showXBtn: function() {
					this.isShowXBtn = true;
				},
				hideXBtn: function() {
					this.isShowXBtn = false;
				}
			}
		],
		
	},
	methods: {
		addNewItem: function(){
			if(this.newItemtext.length > 0){
				this.todolist.push(this.createNewItem(this.newItemtext));
			}
		},
		createNewItem: function(str) {
			return {
				id: this.todolist.length,
				text: str,
				isFinished: false,
				isShowXBtn: false,
				showXBtn: function() {
					this.isShowXBtn = true;
				},
				hideXBtn: function(el) {
					this.isShowXBtn = false;
				}
			}
		},
		deleteItem: function(index){
			this.todolist.splice(index,1);console.log("index",index);
		}
	}
})
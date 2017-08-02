Vue.component('todo-item',{
	props:['todo'],
	template: `
	<transition name="fade">
	<div class="todoItem hover-shadow">
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
			<svg width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<polyline points="15 0, 15 30, 15 15, 0 15, 30 15" stroke="red" fill="transparent" stroke-width="5" transform="rotate(45 15 15)"/>
			</svg>
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
		isInputFocused: false
	},
	methods: {
		addNewItem: function(){
			if(this.newItemtext.length > 0){
				this.todolist.push(this.createNewItem(this.newItemtext));
				this.newItemtext='';
			}
		},
		enterNewItem: function(event){
			if(event.keyCode === 13) {
		  		this.addNewItem();
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
		},
		inputFocused: function() {
			this.isInputFocused = true;console.log('focused');
		}
	}
})
<template>
  	<view class="container">

	    <text-input
	      class="text-input-container"
	      placeholder="Type here to translate!"
	      v-model="textContent"
	    />
	    <text class="text-container">{{textContent}}</text>
	</view>
</template>

<script>
import React from 'react';
import {Text} from 'react-native';
    export default {
    	data: function() {
            return {
                textContent: ''
            }
        },
        methods: {
            renderList: function(item) {
                return (<Text>{item.item.key}</Text>)
            }
        }
    }
</script>

<style>
body {
	background-color: black;
}
.container {
	margin-top: 50px;
  background-color: white;
  flex: 1;
}
.text-container {
  color: blue;
  padding: 2;
  font-size: 22;
}
.text-input-container {
  width: 300;
  height: 40;
  font-size: 22;
  border-color: gray;
}
</style>
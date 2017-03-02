<template>
	<div class="phone-viewport">
  <md-toolbar>
	    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
	      <md-icon>menu</md-icon>
	    </md-button>
	  
	    <h2 class="md-title">My App</h2>
  </md-toolbar>

  <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <p>
    	Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    	Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. 
    	Nemo, assumenda possimus, impedit inventore perferendis iusto!
    </p>
  </md-sidenav>

  <md-sidenav class="md-right" ref="rightSidenav">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
  </md-sidenav>
</div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style scoped>

</style>

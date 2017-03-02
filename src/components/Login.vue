<template>
	<md-layout md-gutter>
		<md-layout style="text-align:center" md-flex="60"  md-flex-offset="20" >
			<md-whiteframe style="margin-top: 100px; width:100%" md-elevation="14">
				<div style="width:100%; text-align:center;">
						<i class="fa fa-align-center fa-user-circle md-primary" aria-hidden="true"></i>
						<form novalidate @submit.stop.prevent="submit">

					  <md-input-container style="width:60%" md-has-password>
					    <label>Password Reveal</label>
					    <md-input type="password"></md-input>
					  </md-input-container>
				</div>
			</md-whiteframe>
		</md-layout>
	</md-layout>
</template>

<script>

</script>

<style scoped>
	.panelLogin{
			text-align: center;
	}

	i{
		font-size: 12em;
		color: #2196f3;
	}
</style>

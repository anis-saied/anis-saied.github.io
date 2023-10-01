<script>
export default {
	props: ['contacts'],
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
				Contact details
			</h2>
			<ul class="font-general-regular">
				<li class="flex">
					<i :data-feather="contacts[0].icon" class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i>
					<span class="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
						{{ contacts[0].name }}
					</span>
				</li>
				<li class="flex">
					<i :data-feather="contacts[1].icon" class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i>
					<a :href="'mailto:' + contacts[1].name" class="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
						{{ contacts[1].name }}
					</a>
				</li>
				<li class="flex">
					<i :data-feather="contacts[2].icon" class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i>
					<a :href="'tel:' + contacts[2].name" class="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
						{{ contacts[2].name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

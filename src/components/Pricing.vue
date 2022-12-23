<template>
    <!-- Container for demo purpose -->
    <div class="container mt-12 mb-24 px-6 mx-auto">
        <!-- Section: Design Block -->
        <section class="mb-32 text-gray-800">
            <div id="pricing-block-5" class="background-radial-gradient text-center text-white">
                <h2 class="text-3xl font-bold text-center mb-12">Pricing</h2>
            </div>

            <div class="grid lg:grid-cols-3 px-6 md:px-12 xl:px-32" style="margin-top: -200px">
                <div class="p-0 py-12">
                    <div class="block rounded-lg shadow-lg bg-white h-full lg:rounded-tr-none lg:rounded-br-none">
                        <div class="p-6 border-b border-gray-300 text-center">
                            <p class="uppercase mb-4 text-sm">
                                <strong>Basic</strong>
                            </p>
                            <h3 class="text-2xl mb-6">
                                <strong>FREE</strong>
                                <small class="text-gray-500 text-sm"></small>
                            </h3>

                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                                style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true"
                                data-ripple-color="primary">
                                Buy
                            </button>
                        </div>
                        <div class="p-6">
                            <ol class="list-inside">
                                <li class="mb-4 flex items-center">
                                    <CHECK />5 active projects
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />5 collaborators per project
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />5 MB file uploads
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="p-0">
                    <div class="block rounded-lg shadow-lg bg-white h-full z-10">
                        <div class="p-6 border-b border-gray-300 text-center">
                            <p class="uppercase mb-4 text-sm">
                                <strong>Business</strong>
                            </p>
                            <h3 class="text-2xl mb-6">
                                <strong>€ 79</strong>
                                <small class="text-gray-500 text-sm">/year</small>
                            </h3>

                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                                Buy
                            </button>
                        </div>
                        <div class="p-6">
                            <ol class="list-inside">
                                <li class="mb-4 flex items-center">
                                    <CHECK />Everything in Advance
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />500 active projects per member
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />50 people per project
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />Team inbox
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />Team billing
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />Admin & member roles
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="p-0 py-12">
                    <div class="block rounded-lg shadow-lg bg-white h-full lg:rounded-tl-none lg:rounded-bl-none">
                        <div class="p-6 border-b border-gray-300 text-center">
                            <p class="uppercase mb-4 text-sm">
                                <strong>Advanced</strong>
                            </p>
                            <h3 class="text-2xl mb-6">
                                <strong>€ 49</strong>
                                <small class="text-gray-500 text-sm">/year</small>
                            </h3>

                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                                style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true"
                                data-ripple-color="primary">
                                Buy
                            </button>
                        </div>
                        <div class="p-6">
                            <ol class="list-inside">
                                <li class="mb-4 flex items-center">
                                    <CHECK />300 active projects
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />25 collaborators per project
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />npm installation
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />150 filters
                                </li>
                                <li class="mb-4 flex items-center">
                                    <CHECK />Reminders
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
</template>

<script>
import CHECK from "../components/icons/check.vue"

export default {
    components: {
        CHECK,
    }
}
</script>
  
<style scoped>
#pricing-block-5 {
    height: 300px;
    padding-top: 55px;
}

@media (min-width: 992px) {
    #pricing-block-5 {
        height: 400px;
        padding-top: 80px;
    }
}

.background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
}
</style>
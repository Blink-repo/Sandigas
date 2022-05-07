<template>
    <div class="bg-white m-4 rounded-lg shadow shadow-slate-500">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2  tracking-tight text-gray-900">{{title}}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{nameChild}}</p>
    </div>

    </div>
</template>

<script>
    export default{
        props:['title','nameChild']

    }
</script>
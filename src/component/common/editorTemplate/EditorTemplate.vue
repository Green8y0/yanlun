<template>
    <div ref='editor'></div>
    <button @click='syncHTML'>提交</button>
</template>

<script>
    import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';
    import WangEditor from 'wangeditor';

    export default {
        name: 'Editor',
        setup() {
            const editor = ref();
            const content = reactive({
                html: '',
                text: '',
            });

            let instance;
            onMounted(() => {
                instance = new WangEditor(editor.value);
                Object.assign(instance.config, {
                    onchange() {
                        console.log('change');
                    },
                });
                instance.create();
            });

            onBeforeUnmount(() => {
                instance.destroy();
                instance = null;
            });

            const syncHTML = () => {
                content.html = instance.txt.html();
                console.log(content.html)
            };

            return {
                syncHTML,
                editor,
                content,
            };
        },
    };
</script>

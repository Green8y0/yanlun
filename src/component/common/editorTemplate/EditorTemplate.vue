<template>
    <div class="all">
        <div class="container">
            <input type="text" name="title" class="title-input" placeholder="  请输入标题...">

            <div ref='editor' class="text-div"></div>
            <button @click='syncHTML' class="submit-button">提交</button>
        </div>
    </div>
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
                console.log(content.html);
                alert("内容已提交");
            };

            return {
                syncHTML,
                editor,
                content,
            };
        },
    };
</script>

<style scoped>
    .all{
        min-height: 100%;
        min-width: 100%;
        position: absolute;
    }
    .container{
        width: 1100px;
        margin: 0px auto;
        display: flex;                  /*弹性盒子布局*/
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .title-input{
        width: 100%;
        height: 40px;
        margin: 10px 0px;
        border: 1px solid #c9d8db;
    }
    .text-div{
        width: 100%;
    }
    .submit-button{
        width: 210px;
        height: 30px;
        text-align: center;
        background: #50B1DB;
        border: 1px solid #50B1DB;
        border-radius: 2px;
        font-size: 14px;
        color: #FFFFFF;
        margin-top: 10px;
    }
</style>
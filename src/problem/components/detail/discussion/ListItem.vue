<template>
    <div class="list-item">
        <div class="list-item__vote">
            <ListItemVote />
        </div>
        <div class="list-item__right">
            <div class="list-item__right__content">
                <h4 class="list-item__right__content__title">{{post.getTitle()}}</h4>
                <p class="list-item__right__content__text">
                    <MarkdownRender :description="post.getContent()" />
                </p>
            </div>
            <div class="list-item__right__info">
                <div class="avatar">
                    <img :src="coder.avatar" alt="avatar">
                </div>
                <div class="list-item__right__info__name">{{coder.name}}</div>
                <div class="list-item__right__info__time">{{post.getUpdatedAt().timeSince()}}</div>
                <div class="list-item__right__info__comment">
                    <i class="fa-regular fa-message"></i>
                    {{Math.round(Math.random()*100)}}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Post from '@/problem/model/post';
import Problem from '@/problem/model/problem';
import { computed } from '@vue/reactivity';
import { onMounted, PropType, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import ListItemVote from './ListItemVote.vue';
import MarkdownRender from '@/shared/components/general/MarkdownRender.vue';
import errorHandler from '@/shared/helpers/errorHandler';
import { AxiosError } from 'axios';
import { getCoder } from '@/shared/models/coder/coder';

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const coder = ref({
    name: 'Coder',
    avatar: ''
})

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true
    }
})

onMounted(async () => {
    try {
        coder.value = await getCoder(props.post.getAuthor())
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

</script>

<style lang="scss" scoped>
.list-item {
    // border: 1px solid #9288c1;
    box-shadow: 2px 2px 10px rgb(193, 193, 193);
    border-radius: 5px;
    display: flex;
    padding: 20px;
    padding-left: 10px;
    margin-bottom: 20px;

    &__vote {
        flex: 1;
    }

    &__right {
        flex: 9;
        padding-left: 10px;
        &__content {
            &__title {
                font-weight: bold;
                margin-bottom: 10px;
            }
        }

        &__info {
            display: flex;
            align-items: center;

            &__name {
                margin-left: 5px;
            }

            &__time {
                margin-left: 20px;
                font-size: small;
                color: gray;
            }

            &__comment {
                margin-left: auto;
            }
        }
    }
}

.avatar {
    background-color: rgb(128, 213, 153);
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    font-size: 20px;
}
</style>
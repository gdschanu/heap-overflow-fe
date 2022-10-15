<template>
    <div class="new-post">
        <InputText placeholder="Enter your title here" class="new-post__title"
            @dataUpdated="(title: string) => {newPost.setTitle(title)}" />
        <MarkdownEditor @data-updated="(content: string) => {newPost.setContent(content)}" />
        <Button
            @clicked="handleCreatePost"
            class="new-post__button"
            text="Post"
            :loading="isPosting"
        />
        <hr class="new-post__hr" />
    </div>
</template>

<script lang="ts" setup>
import { createPost } from '@/problem/model/domainLogic/post';
import Post from '@/problem/model/post';
import Problem from '@/problem/model/problem';
import MarkdownEditor from '@/shared/components/general/MarkdownEditor.vue';
import errorHandler from '@/shared/helpers/errorHandler';
import DateTime from '@/shared/models/dateTime';
import { computed } from '@vue/reactivity';
import { AxiosError } from 'axios';
import { onMounted, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import InputText from '../../../../shared/components/general/InputText.vue';
import Button from '../../common/Button.vue';

const store = useStore()
const emit = defineEmits<(event: 'postCreated') => void>()

const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const isPosting = ref(false)

const newPost = ref(new Post({
    id: '',
    title: '',
    author: '',
    createdAt: new DateTime(''),
    updatedAt: new DateTime(''),
    content: '',
    problemId: problem.value.getId()
})) as Ref<Post>

async function handleCreatePost() {
    try {
        isPosting.value = true
        if (newPost.value.getTitle() === '') {
            throw new Error('Title cannot be empty')
        }
        if (newPost.value.getContent() === '') {
            throw new Error('Content cannot be empty')
        }
        await createPost(newPost.value)
        emit('postCreated')
    } catch (error) {
        errorHandler(error as AxiosError)
    }
    isPosting.value = false
}

</script>

<style lang="scss" scoped>
.new-post {
    margin-bottom: 20px;

    &__title {
        display: block;
        width: 100%;
        margin-bottom: 20px;
    }

    &__button {}

    &__hr {
        margin: 20px 0;
    }

}
</style>
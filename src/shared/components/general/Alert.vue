<template>
    <div class="content-alert-box" :class="type + (isShow ? ' show' : ' hide')">
        <p class="alert">
            <span class="type">
                <i
                    class="fa-solid fa-circle-exclamation"
                    v-if="type === 'error' || type === 'warning'"
                ></i>
                <i
                    class="fa-solid fa-circle-check"
                    v-if="type === 'success'"
                ></i>
                <i class="fa-solid fa-circle-info" v-if="type === 'info'"></i>
                {{ type.charAt(0).toUpperCase() + type.slice(1) }}:
            </span>
            {{ text }}
        </p>
        <button class="close" @click="close">
            <i class="fas fa-times"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "AlertBox",

    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "error",
        },
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped>
.content-alert-box {
    bottom: 20px;
    left: 20px;
    max-width: 50%;
    position: fixed;
    padding: 10px 45px 10px 25px;
    z-index: 1;
    border-radius: 5px;
    transition: all 0.3s;
}
.content-alert-box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.close {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
}

.show {
	transform: translateY(0);
}
.hide {
	// display: none;
	transform: translateY(200%);
}

// color:
.error {
    background: #fadada;
    .alert {
        i {
            color: #ff4456;
        }
        color: #ea8b9d;
    }
    .close {
        background: #ff99a6;
        color: #ff4456;
    }
    .close:hover {
        background: #fadada;
    }
}
.error:before {
    background: #ff4456;
}

.info {
    background: #d7f0fe;
    i {
        color: #37b6ff;
    }
    .alert {
        color: #86cbed;
    }
    .close {
        background: #99daff;
        color: #37b6ff;
    }
    .close:hover {
        background: #d7f0fe;
    }
}
.info:before {
    background: #37b6ff;
}

.success {
    background: #c4f3d8;
    i {
        color: #22aa5c;
    }
    .alert {
        color: #82c59c;
    }
    .close {
        background: #95ebba;
        color: #22aa5c;
    }
    .close:hover {
        background: #c4f3d8;
    }
}
.success:before {
    background: #22aa5c;
}

.warning {
    background: #fedb9c;
    i {
        color: #ffa900;
    }
    .alert {
        color: #d2a84b;
    }
    .close {
        background: #ffd080;
        color: #ffa900;
    }
    .close:hover {
        background: #fedb9c;
    }
}
.warning:before {
    background: #ffa900;
}
</style>

<template>
    <div class="skill-container">

        <slot name="icon"></slot>
        <div class="skills-item">
            <span>
                <slot name="name"></slot>
            </span>
            <div class="skills-bar">
                <div style="background:aqua; width: 70%;"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 767px) {
    .skill-container {
        width: 90%;
    }

    .tl-icon {
        left: -4px;
    }
}
</style>
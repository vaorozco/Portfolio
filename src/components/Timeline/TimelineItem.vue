<template>
    <div class="timeline-item">
        <div class="tl-icon">
            <i>
                <slot name="icon"></slot>
            </i>
        </div>
        <p class="tl-duration">
            <slot name="date"></slot>
        </p>
        <h4>
            <slot name="job"></slot>
        </h4>
        <h5>
            <slot name="place"></slot>
        </h5>
    </div>
</template>

<style scoped>
@media screen and (max-width: 375px) and (orientation: portrait) {
    .tl-duration {
        font-size: 0.719rem;
    }
}
</style>

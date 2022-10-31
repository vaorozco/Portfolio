<script setup>
import TimelineItem from './TimelineItem.vue'
</script>

<template>
    <h1>Timeline</h1>
    <TimelineItem>
        <template #icon>
            <font-awesome-icon icon="fa-solid fa-briefcase" />
        </template>

        <template #date>12/2021 - Present</template>
        <template #job>Software Developer</template>
        <template #place>Accenture</template>
    </TimelineItem>
    <TimelineItem>
        <template #icon>
            <font-awesome-icon icon="fa-solid fa-graduation-cap" />
        </template>
        <template #date>2016 - 2022</template>
        <template #job>Bachelor Degree in Software Engineering</template>
        <template #place>Tecnologico de Costa Rica</template>
    </TimelineItem>
    <TimelineItem>
        <template #icon>
            <font-awesome-icon icon="fa-solid fa-laptop-code" />
        </template>
        <template #date>07/2021 - 11/2021</template>
        <template #job>Software Engineering Intern</template>
        <template #place>Accenture</template>
    </TimelineItem>
</template>
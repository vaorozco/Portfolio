<script setup>
import Skill_Item from './Skill_Item.vue';
</script>

<template>
    <div class="skills-box">
        <div class="side-container">
            <h3>Backend</h3>
            <Skill_Item>
                <template #icon><i class="devicon-java-plain colored"></i></template>
                <template #name>Java</template>
            </Skill_Item>
            <Skill_Item>
                <template #icon><i class="devicon-spring-plain colored"></i></template>
                <template #name>Springboot</template>
            </Skill_Item>
            <Skill_Item>
                <template #icon><i class="devicon-cplusplus-plain colored"></i></template>
                <template #name>C++</template>
            </Skill_Item>
            <Skill_Item>
                <template #icon><i class="devicon-microsoftsqlserver-plain colored"></i></template>
                <template #name>Sql</template>
            </Skill_Item>

        </div>
        <div class="side-container">
            <h3>Frontend</h3>
            <Skill_Item>
                <template #icon><i class="devicon-html5-plain colored"></i></template>
                <template #name>HTML</template>
            </Skill_Item>
            <Skill_Item>
                <template #icon><i class="devicon-css3-plain colored"></i>

                </template>
                <template #name>Css</template>
            </Skill_Item>
            <Skill_Item>
                <template #icon><i class="devicon-javascript-plain colored"></i>
                </template>
                <template #name>Javascript</template>
            </Skill_Item>
            <Skill_Item>
                <template #icon><i class="devicon-vuejs-plain colored"></i></template>
                <template #name>Vue</template>
            </Skill_Item>
        </div>
    </div>
</template>


<style scoped>
i {
    font-size: xxx-large;
    margin-right: 1rem;
}

@media screen and (max-width: 767px) {
    i {
        font-size: x-large;
        margin-right: 0.8rem;

    }

}
</style>
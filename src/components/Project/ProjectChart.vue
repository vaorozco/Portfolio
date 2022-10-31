<script>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'

//https://api.jsonserve.com/4T6JYT

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            userData: {
                "name": "Victor",
                "projects": [
                    {
                        "name": "Fonet",
                        "type": "Mobile",
                        "url": "https://github.com/vaorozco/App-Web-Ingles-Fonet/tree/App",
                        "skills": [
                            {
                                "name": "Android Studio"
                            },
                            {
                                "name": "Android UI"
                            },
                            {
                                "name": "Java"
                            },
                            {
                                "name": "SQL"
                            }
                        ]
                    },
                    {
                        "name": "Employee Manager",
                        "type": "Backend",
                        "url": "https://github.com/vaorozco/Employee-Manager",
                        "skills": [
                            {
                                "name": "Spring Boot"
                            },
                            {
                                "name": "Angular"
                            },
                            {
                                "name": "MySql"
                            },
                            {
                                "name": "API"
                            }
                        ]
                    },
                    {
                        "name": "Rick & Morty",
                        "type": "Frontend",
                        "url": "https://github.com/vaorozco/Rick-Morty-CardsAPI",
                        "skills": [
                            {
                                "name": "HTML"
                            },
                            {
                                "name": "CSS"
                            },
                            {
                                "name": "Javascript"
                            },
                            {
                                "name": "API"
                            }
                        ]
                    },
                    {
                        "name": "Todo App",
                        "type": "Frontend",
                        "url": "https://github.com/vaorozco/todo-app-vuejs",
                        "skills": [
                            {
                                "name": "HTML"
                            },
                            {
                                "name": "CSS"
                            },
                            {
                                "name": "Vue Js"
                            }
                        ]
                    }
                ]
            },
            // info: null,
            // loading: true,
            // errored: false,

        }
    },
    // mounted() {
    //     axios
    //         .get('https://api.jsonstorage.net/v1/json/bb91ac4c-62ea-450f-88d2-66e20328e629/012e9a0e-3a70-4eed-89a4-8b6ce8198de0')
    //         .then(response => {
    //             this.userData = response.data;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.errored = true
    //         })
    //         .finally(() => this.loading = false)
    // }
}
</script>

<template>
    <div class="cards-container">
        <ProjectCard v-for="item in userData.projects" :key="name" v-bind:userData="item.skills">
            <template #heading>SKILL SET</template>
            <template #list>
                <li v-for="item in item.skills" class="special">{{ item.name }}</li>
            </template>
            <template #iconLink class="iconLink">
                <a v-bind:href="item.url" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i>

                </a>
            </template>
            <template #subject>{{ item.type }}</template>
            <template #title>{{ item.name }}</template>
        </ProjectCard>
    </div>


</template>


<style scoped>
.cards-container {
    display: flex;
    justify-content: space-between;
}

li {
    font-size: 12px;
    padding: 1rem;
    border-bottom: 1px solid #eee;
}

i {
    color: black;
    font-size: xx-large;
    margin-top: 20px;
    cursor: pointer;
}


@media screen and (max-width: 992px) and (orientation: portrait) {
    .cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        justify-items: center;
    }

}

@media screen and (max-width: 767px) {

    .cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        justify-items: center;
    }

    li {
        padding: 0.6rem;
    }

}

@media screen and (max-width: 540px) and (orientation: portrait) {


    li {
        padding: 0.4rem;
    }

    i {
        font-size: x-large;
    }
}

@media screen and (max-width: 480px) and (orientation: portrait) {

    li {
        padding: 0.5rem;
    }

}


@media screen and (max-width: 375px) and (orientation: portrait) {

    li {
        font-size: 0.688rem;
        padding: 0.3rem;

    }

    i {
        font-size: x-large;
    }

}

@media screen and (max-width: 992px) and (orientation: landscape) {
    .cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        justify-items: center;
    }

    li {
        padding: 0.5rem;
    }

}

@media screen and (max-width: 992px) and (orientation: landscape) {

    .cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        justify-items: center;
    }
}

@media screen and (max-width: 767px) and (orientation: landscape) {
    li {
        padding: 0.4rem;

    }

    i {
        font-size: x-large;
    }

}

@media screen and (max-width: 992px) and (orientation: landscape) {

    li {
        padding: 0.5rem;
    }
}

@media screen and (max-width: 767px) and (orientation: landscape) {


    li {
        padding: 0.4rem;

    }

    i {
        font-size: x-large;
    }

}
</style>
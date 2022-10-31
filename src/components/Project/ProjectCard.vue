<template>

    <div class="card">
        <div class="card-side card-side-back">
            <div class="card-cover">
                <h4 class="card-heading">
                    <slot name="heading"></slot>
                </h4>
            </div>
            <div class="card-details">
                <ul>
                    <slot name="list"></slot>
                </ul>
                <div class="iconLink">
                    <slot name="iconLink"></slot>
                </div>

            </div>
        </div>

        <div class="card-side card-side-front">
            <div class="card-theme">
                <div class="card-theme-box">
                    <p class="card-subject">
                        <slot name="subject">

                        </slot>
                    </p>
                    <p class="card-title">
                        <slot name="title">

                        </slot>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.card {
    flex: initial;
    position: relative;
    height: 24rem;
    width: 16rem;
    -moz-perspective: 200rem;
    perspective: 200rem;
}

.card-side {
    border-radius: 20px;
    height: 100%;
    transition: all 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}

.card-side-front {
    background-image: linear-gradient(to right bottom, rgba(55, 53, 56, 0.65), rgba(2, 2, 2, 0.7)), url(https://wallpaperbat.com/img/767072-black-abstract-desktop-wallpaper.jpg);
    background-size: cover;
}

.card-side-back {
    background-color: #fff;
    transform: rotateY(180deg);
}

.card:hover .card-side-back {
    transform: rotateY(0);
}

.card:hover .card-side-front {
    transform: rotateY(-180deg);
}

.card-theme {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    text-align: center;
}

.card-theme-box {
    color: #fff;
}

.card-subject {
    text-indent: 0.8rem;
    letter-spacing: 0.8rem;
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 6rem;
}

.card-title {
    text-transform: uppercase;
    font-weight: 300;
}

.card-cover {

    position: relative;
    background-size: cover;
    height: 6rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-image: linear-gradient(to right bottom, rgba(55, 53, 56, 0.65), rgba(2, 2, 2, 0.7)), url(https://wallpaperbat.com/img/767072-black-abstract-desktop-wallpaper.jpg);

}

.card-heading {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

.card-details {
    font-weight: bold;
    text-align: center;
}

.card-details ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;
    color: #000000;
}

.card-details i {
    color: black;
    font-size: xx-large;
    margin-top: 20px;
    cursor: pointer;
}

@media screen and (max-width: 1024px) {
    .card {
        flex: initial;
        position: relative;
        height: 22rem;
        width: 12rem;
        -moz-perspective: 200rem;
        perspective: 200rem;
    }

}

@media screen and (max-width: 992px) and (orientation: portrait) {
    .card {
        width: 14rem;
    }

}

@media screen and (max-width: 767px) {

    .card {
        height: 20rem;
        width: 11rem;
    }

    .card-subject {
        letter-spacing: 7px;
        font-size: 0.6rem;
        text-indent: 7px;
    }
}

@media screen and (max-width: 540px) and (orientation: portrait) {

    .card {
        height: 15rem;
        width: 10rem;
    }

    .card-cover {
        height: 4rem;
    }

    .card-subject {
        margin-bottom: 4rem;
    }

}

@media screen and (max-width: 480px) and (orientation: portrait) {

    .card {
        height: 18rem;
        width: 9rem;
    }

    .card-cover {
        height: 5rem;
    }

    .card-details ul li {
        padding: 0.5rem;
    }

}

@media screen and (max-width: 375px) and (orientation: portrait) {

    .card {
        height: 14rem;
        width: 9rem;
    }

    .card-subject {
        margin-top: 1rem;
        margin-bottom: 5rem;
    }

    .card-cover {
        height: 3.5rem;
    }

    .card-details ul li {
        font-size: 0.688rem;
        padding: 0.3rem;

    }

    .card-details i {
        font-size: x-large;
    }



    .card-subject {
        letter-spacing: 8px;
        text-indent: 8px;
    }

    .card-title {
        font-weight: 200;
    }

}


@media screen and (max-width: 992px) and (orientation: landscape) {

    .card {
        height: 17.5rem;
        width: 13rem;
    }

    .card-details ul li {
        padding: 0.5rem;
    }

    .card-subject {
        letter-spacing: 0.75rem;
        font-size: 0.8rem;
        text-indent: 0.75rem;
        margin-bottom: 5rem;
    }

}

@media screen and (max-width: 767px) and (orientation: landscape) {
    .card {
        height: 15rem;
        width: 13rem;
    }

    .card-cover {
        height: 4rem;
    }

    .card-details ul li {
        padding: 0.4rem;

    }

    .card-details i {
        font-size: x-large;
    }

}

@media screen and (max-width: 992px) and (orientation: landscape) {

    .card {
        height: 17.5rem;
        width: 13rem;
    }

    .card-details ul li {
        padding: 0.5rem;
    }

    .card-subject {
        letter-spacing: 0.75rem;
        font-size: 0.8rem;
        text-indent: 0.75rem;
        margin-bottom: 5rem;
    }
}

@media screen and (max-width: 767px) and (orientation: landscape) {

    .card {
        height: 15rem;
        width: 13rem;
    }

    .card-cover {
        height: 4rem;
    }

    .card-details ul li {
        padding: 0.4rem;

    }

    .card-details i {
        font-size: x-large;
    }

}
</style>

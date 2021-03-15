<template>

    <transition
        enter-active-class="animate__animated animate__fadeInBottomLeft"
        leave-active-class="animate__animated animate__fadeOutBottomRight">

        <slot></slot>

    </transition>

</template>

<script type="text/javascript" src="./../scripts/fade.js"></script>
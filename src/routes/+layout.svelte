<script>
    import { base } from '$app/paths';
</script>

<nav>
    <a class="navlink" href="{base}/">Home</a><p class="colored">&nbsp;|</p>
    <a class="navlink" href="{base}/about-me">About me</a><p class="colored">&nbsp;|</p>
    <a class="navlink" href="{base}/project">Projects</a>
    <!-- <a class="navlink" href="{base}/"></a> -->
</nav>

<slot />
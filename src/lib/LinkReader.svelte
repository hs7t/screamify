<script>
    import { unlengthenLink } from "../links";

    let { currentLocation } = $props()
    let unlengthenedLink = $derived(unlengthenLink(currentLocation.slice(1)))

    window.location.href = unlengthenedLink;
</script>

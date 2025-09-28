<script>
    import { unlengthenLink } from "../links";

    let { currentLocation } = $props()
    let unlengthenedLink = $derived(unlengthenLink(currentLocation))
</script>

<div>
    
</div>
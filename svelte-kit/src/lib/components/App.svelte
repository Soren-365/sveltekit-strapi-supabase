<script>
    import {user} from "./sessionStore"
    import {supabase} from "./supabaseClient"
    import Auth from "../../components/Auth.svelte"
    import Profile from "./Profile.svelte"

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
    })

	console.log("user", $user)
</script>


<div style="position: relative; padding-top: 56.25%;">
    <iframe title="streaming video" src="https://iframe.videodelivery.net/48472218d0c1a4906da9e1080ea51647" 
    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;" 
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div>

<div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}

        <Profile />
    {:else}
        <Auth />
    {/if}
</div>
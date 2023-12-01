<script lang="ts">
  import type { LayoutData } from './$types'
  import { onMount } from 'svelte'
  import { browser, dev } from '$app/environment'
  import { genTags } from '$lib/utils/posts'
  import { posts, tags } from '$lib/stores/posts'
  import { registerSW } from 'virtual:pwa-register'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import Transition from '$lib/components/transition.svelte'
  import 'uno.css'
  import '../app.pcss'
  export let data: LayoutData

  let { res, path } = data

  $: if (data) path = data.path

  posts.set(res)
  tags.set(genTags(res))
  onMount(
    () =>
      !dev &&
      browser &&
      registerSW({
        immediate: true,
        onRegistered: r => r && setInterval(async () => await r.update(), 198964),
        onRegisterError: error => console.error(error)
      })
  )

  let audio

  onMount(() => {
    startTimer()
  })

  function startTimer() {
    setTimeout(() => {
      if (audio) {
        audio.play()
      }
    }, 500)
  }
</script>

<audio src="https://upload.wikimedia.org/wikipedia/commons/7/77/Desteapta-te%2C_romane%21.ogg" bind:this={audio}></audio>

<Head />

<Header {path} />

<Transition {path}>
  <slot />
</Transition>

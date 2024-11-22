<template>
  <div>
    <iframe
        :src="tallyUrl"
        loading="lazy"
        width="100%"
        height="276"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Contact form"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    tallyUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const tallyScriptSrc = "https://tally.so/widgets/embed.js";
    const scriptExists = document.querySelector(`script[src="${tallyScriptSrc}"]`);

    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = tallyScriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else {
      this.loadTally();
    }
  },
  methods: {
    loadTally() {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      }
    },
  },
};
</script>

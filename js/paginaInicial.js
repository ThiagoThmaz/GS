window.watsonAssistantChatOptions = {
    integrationID: "147fd448-08b5-4a66-81ba-5e84aa4808b0", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "e013af81-03d1-4d11-9def-01fc70cd41b4", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
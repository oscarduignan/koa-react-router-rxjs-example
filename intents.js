const changeRecipient  = Symbol("changeRecipient");

export default {
    intents: {
        changeRecipient(...args) { return [changeRecipient, ...args]; }
    },
    filters: {
        changeRecipient([intent]) { return intent === changeRecipient;}
    }
};
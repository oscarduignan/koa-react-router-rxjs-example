const changeRecipient  = Symbol("changeRecipient");

export default {
    updates: {
        changeRecipient(...args) { return [changeRecipient, ...args]; }
    },
    filters: {
        changeRecipient([update]) { return update === changeRecipient;}
    }
};
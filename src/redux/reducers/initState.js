export const initState = {
    items: [
        {
            id: 0,
            status: true,
            name: "pong",
            isCopied: false,
            isShowMenu: false,
            query: `{"action": "pong"}`,
        },
        {
            id: 1,
            status: false,
            name: "pong 1",
            isCopied: false,
            isShowMenu: false,
            query: `{"action": "pong 1"}`,
        },
    ],
    console: {
        request: {
            isStatus: false,
            text: "",
        },
    },
};

export default initState;

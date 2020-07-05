export const initState = {
    items: [
        {
            id: 0,
            status: true,
            name: "pong",
            isCopied: false,
            isShowMenu: false,
            request: `{"action": "pong"}`,
            response: "",
        },
        {
            id: 1,
            status: false,
            name: "pong 1",
            isCopied: false,
            isShowMenu: false,
            query: `{"action": "pong 1"}`,
            response: "",
        },
    ],
};

export default initState;

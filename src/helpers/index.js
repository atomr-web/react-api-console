export const updateHistoryStorage = (items) => {
    localStorage.setItem("history", JSON.stringify(items));
};

// todo: find a legit uuid generator that works with RN
export const uuid = () => Math.round(Math.random() * 1000000000000).toString();
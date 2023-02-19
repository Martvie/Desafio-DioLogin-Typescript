const conta: object = {
    email: "marcus@dio.bank",
    password: '1234',
    name : "Marcus",
    balance: 1500.00,
    id: "1"
}

export const api = new Promise((resolve) => {
    setTimeout (() => {
        resolve(conta)
    }, 2000)
})
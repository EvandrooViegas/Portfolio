export default async function wait(time:number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
    await promise
}
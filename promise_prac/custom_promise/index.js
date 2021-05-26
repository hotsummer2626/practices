function Promise(executor) {

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callback = [];

    const self = this;

    function resolve(date) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled';
        self.PromiseResult = date;
        setTimeout(() => {
            self.callback.forEach(item => {
                item.onResolve(date);
            });
        })


    }

    function reject(date) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = date;
        setTimeout(() => {
            self.callback.forEach(item => {
                item.onReject(date);
            });
        })
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }

}

Promise.prototype.then = function (onResolve, onReject) {
    const self = this;

    if (typeof onResolve !== 'function') {
        onResolve = value => value;
    }

    if (typeof onReject !== 'function') {
        onReject = reason => {
            throw reason;
        }
    }

    return new Promise((resolve, reject) => {
        function callback(type) {
            try {
                let result = type(self.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    })
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }
        if (this.PromiseState === 'fulfilled') {
            setTimeout(() => {
                callback(onResolve);
            })
        }
        if (this.PromiseState === 'rejected') {
            setTimeout(() => {
                callback(onReject);
            })
        }
        if (this.PromiseState === 'pending') {
            this.callback.push({
                onResolve: function () {
                    callback(onResolve);
                },
                onReject: function () {
                    callback(onReject);
                }
            });
        }
    })
}

Promise.prototype.catch = function (onReject) {
    return this.then(undefined, onReject);
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        } else {
            resolve(value);
        }
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}

Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let arr = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                count++;
                arr[i] = v;
                if (count === promises.length) {
                    resolve(arr);
                }
            }, r => {
                reject(r);
            });
        }
    })
}

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        }
    })
}
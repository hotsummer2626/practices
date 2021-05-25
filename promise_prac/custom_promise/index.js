function Promise(executor) {

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callback = [];

    const self = this;

    function resolve(date) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled';
        self.PromiseResult = date;
        self.callback.forEach(item => {
            item.onResolve(date);
        });

    }

    function reject(date) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = date;
        self.callback.forEach(item => {
            item.onReject(date);
        });
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }

}

Promise.prototype.then = function (onResolve, onReject) {
    const self = this;
    return new Promise((resolve, reject) => {
        function callback(type){
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
            callback(onResolve);
        }
        if (this.PromiseState === 'rejected') {
            callback(onReject);
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
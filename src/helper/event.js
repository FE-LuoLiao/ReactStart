const event = {
    events: {},
    on(name, handler) {
        if (this.events[name] === undefined) {
            this.events[name] = [];
        }
        this.events[name].push(handler);
    },
    emmit(name, data) {
        if (Array.isArray(this.events[name])) {
            for (var i = 0; i < this.events[name].length; i++) {
                if (typeof this.events[name][i] === 'function') {
                    this.events[name][i](data);
                }
            }
        }
    }
}

export default event;
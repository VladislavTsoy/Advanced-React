class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: '',
            timestamp: new Date(),
        };

        this.subscriptions = {};
        this.lastSubscriptionId = 0;

        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.mergeWithState = this.mergeWithState.bind(this);
        this.notifySubscribers = this.notifySubscribers.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.getState = this.getState.bind(this);
        this.mapIntoObject = this.mapIntoObject.bind(this);
        this.lookupAuthor = this.lookupAuthor.bind(this);
        this.startClock = this.startClock.bind(this);
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    lookupAuthor(authorId) {
        return this.data.authors[authorId];
    }

    getState() {
        return this.data;
    }

    subscribe(cb) {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    }

    unsubscribe(subscriptionId) {
        delete this.subscriptions[subscriptionId];
    }

    notifySubscribers() {
        let arr = Object.values(this.subscriptions);
        for(let i = 0; i < arr.length;i++) {
            arr[i]();
        }
    }

    setSearchTerm(searchTerm) {
        this.mergeWithState({searchTerm});
    }

    startClock(){
        setInterval(() => {
            this.mergeWithState({
                timestamp: new Date()
            });
        }, 1000);
    }

    mergeWithState(stateChange) {
        this.data = {
            ...this.data,
            ...stateChange
        };
        this.notifySubscribers();
    }
}

module.exports = StateApi;
/**
 * A lightweight event bus for managing custom events and their listeners.
 * Provides a mechanism for decoupled communication between different components.
 */
class EventBus {
    /**
     * Initializes the EventBus with an empty collection of events.
     */
    constructor() {
        /**
         * @private
         * @type {Object.<string, Function[]>}
         * @description A mapping of event names to arrays of callback functions.
         */
        this.events = {};
    }

    /**
     * Registers a callback function for a specific event.
     * If the event does not exist, it creates a new array for the event.
     *
     * @param { String } eventName  - The name of the event to listen for.
     * @param { Function } callback - The callback function to invoke when the event is emitted.
     */
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    /**
     * Emits an event, invoking all registered callback functions for that event.
     * If no listeners are registered for the event, it does nothing.
     * Supports asynchronous event handlers and returns the result.
     *
     * @param { String } eventName - The name of the event to emit.
     * @param {*} [data]           - Optional data to pass to the event listeners.
     * @returns {Promise}          - A Promise that resolves to the results of the event handlers.
     */
    async asyncEmit(eventName, data) {
        let results = [];
        if (this.events[eventName]) {
            // Iterate over all listeners for the event
            for (let callback of this.events[eventName]) {
                const result = await callback(data);
                results.push(result);
            }
        }

        // If there is only one result, return it directly, otherwise return an array of results
        return results.length === 1 ? results[0] : results;
    }


    /**
     *
     * @param eventName
     * @param data
     * @returns {*|*[]}
     */
    emit(eventName, data = {}) {
        let results = [];
        if (this.events[eventName]) {
            // Iterate over all listeners for the event
            for (let callback of this.events[eventName]) {
                const result = callback(data);
                results.push(result);
            }
        }

        // If there is only one result, return it directly, otherwise return an array of results
        return results.length === 1 ? results[0] : results;
    }


    /**
     * This method will register all custom events
     *
     * @param eventMap - A map containing all the events with their callbacks
     */
    listenFor(eventMap) {
        for (const [event, handler] of Object.entries(eventMap)) {
            this.on(event, handler);
        }
    }

}

export const eventBus = new EventBus();

export const ScriptBucketEvents = {

    ROUTE_EVENT: "route-event"

}

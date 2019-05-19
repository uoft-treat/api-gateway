import {DiscoveryService}                from "../DiscoveryService";
import axios                             from 'axios';
import {DiscoveryServiceValidationError} from "../error/DiscoveryServiceValidationError";
import {DiscoveryServiceError}           from "../error/DiscoveryServiceError";

type CacheEntry = {
    endpoint: string,
    cachedAt: Date,
};

const TTL = 300000;

export class DiscoveryServiceImpl implements DiscoveryService {

    endpoint: string;
    cache: { [key: string]: CacheEntry } = {};

    constructor(endpoint?: string) {
        this.endpoint = endpoint || 'http://localhost:3030';
    }

    /**
     * Check if discovery service is accessible.
     */
    async validate(): Promise<void> {

        try {
            await axios.get(this.endpoint + "/ping");
        } catch (e) {
            throw new DiscoveryServiceValidationError("Cannot ping discovery service, validation failure.");
        }

        console.log("Discovery service validated.");

    }

    /**
     * Resolve a service name to actual service endpoint.
     * @param serviceName
     */
    async resolve(serviceName: string): Promise<string> {

        if (this.cache[serviceName]) {
            // Check if cache is still valid
            if ((new Date().getTime() - this.cache[serviceName].cachedAt.getTime()) > TTL) {
                this.cache[serviceName] = null;
            } else {
                // Cache is still valid
                return this.cache[serviceName].endpoint;
            }
        }

        // Hit the actual service
        let result;
        try {
            result = await axios.get(this.endpoint + "/apis/" + serviceName);
        } catch (e) {
            throw new DiscoveryServiceError("Failed to resolve service " + serviceName);
        }

        // Randomly select an endpoint
        if (result.data.endpoints.length == 0) {
            throw new DiscoveryServiceError("Failed to resolve service " + serviceName + ", no endpoints available.");
        } else {
            let endpoint = result.data.endpoints[Math.floor(Math.random() * Math.floor(result.data.endpoints.length))];
            this.cache[serviceName] = {
                endpoint: endpoint,
                cachedAt: new Date(),
            };
            return endpoint;
        }
    }
}
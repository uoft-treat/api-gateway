export interface DiscoveryService {

    validate(): Promise<void>;

    resolve(serviceName: string): Promise<string>;

}
